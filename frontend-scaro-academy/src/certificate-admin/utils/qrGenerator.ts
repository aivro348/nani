// ─────────────────────────────────────────────────────────────
// Lightweight QR Code Generator — No external dependencies
// Uses Canvas API to render QR codes as data URLs
// Based on a minimal QR encoding implementation
// ─────────────────────────────────────────────────────────────

// QR Code generation using a simple alphanumeric-capable encoder
// This generates valid QR codes for short text strings (URLs, IDs)

const EC_LEVEL = 1; // Error correction level (0=L, 1=M, 2=Q, 3=H)

// Reed-Solomon GF(256) math utilities
const GF_EXP = new Uint8Array(512);
const GF_LOG = new Uint8Array(256);

(function initGaloisField() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    x = x * 2;
    if (x >= 256) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) {
    GF_EXP[i] = GF_EXP[i - 255];
  }
})();

function gfMul(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return GF_EXP[GF_LOG[a] + GF_LOG[b]];
}

function polyMul(p1: number[], p2: number[]): number[] {
  const result = new Array(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] ^= gfMul(p1[i], p2[j]);
    }
  }
  return result;
}

function polyRemainder(dividend: number[], divisor: number[]): number[] {
  const result = [...dividend];
  for (let i = 0; i < dividend.length - divisor.length + 1; i++) {
    if (result[i] === 0) continue;
    for (let j = 0; j < divisor.length; j++) {
      result[i + j] ^= gfMul(divisor[j], result[i]);
    }
  }
  return result.slice(dividend.length - divisor.length + 1);
}

function generatorPoly(ecLen: number): number[] {
  let g = [1];
  for (let i = 0; i < ecLen; i++) {
    g = polyMul(g, [1, GF_EXP[i]]);
  }
  return g;
}

// QR version/capacity tables for byte mode, EC level M
const VERSION_CAPS = [0, 14, 26, 42, 62, 84, 106, 122, 152, 180, 213, 251, 287, 331, 362, 412, 450, 504, 560, 624, 666];
const EC_CODEWORDS = [0, 10, 16, 26, 18, 24, 28, 26, 26, 30, 28, 30, 28, 28, 30, 26, 28, 30, 28, 28, 28];

function getVersion(dataLen: number): number {
  for (let v = 1; v <= 20; v++) {
    if (VERSION_CAPS[v] >= dataLen) return v;
  }
  return 20; // Cap at version 20
}

function getSize(version: number): number {
  return version * 4 + 17;
}

// Alignment pattern positions
function getAlignmentPositions(version: number): number[] {
  if (version === 1) return [];
  const positions: number[] = [];
  const size = getSize(version);
  const last = size - 7;
  const step = version === 2 ? 0 : Math.ceil((last - 6) / (Math.floor(version / 7) + 1));
  const coords = [6];
  if (step > 0) {
    for (let p = last; p > 6; p -= step) {
      coords.unshift(p);
    }
  }
  if (coords[coords.length - 1] !== last) coords.push(last);
  
  for (const r of coords) {
    for (const c of coords) {
      // Skip if overlapping with finder patterns
      if ((r === 6 && c === 6) || (r === 6 && c === last) || (r === last && c === 6)) continue;
      positions.push(r, c);
    }
  }
  return positions;
}

// Encode data into QR bit stream (byte mode)
function encodeData(text: string, version: number): number[] {
  const totalCodewords = VERSION_CAPS[version] + EC_CODEWORDS[version];
  const ecCodewords = EC_CODEWORDS[version];
  const dataCodewords = totalCodewords - ecCodewords;
  
  const bits: number[] = [];
  
  // Mode indicator: byte mode = 0100
  bits.push(0, 1, 0, 0);
  
  // Character count (8 bits for versions 1-9, 16 for 10+)
  const countBits = version <= 9 ? 8 : 16;
  for (let i = countBits - 1; i >= 0; i--) {
    bits.push((text.length >> i) & 1);
  }
  
  // Data
  for (let i = 0; i < text.length; i++) {
    const byte = text.charCodeAt(i);
    for (let b = 7; b >= 0; b--) {
      bits.push((byte >> b) & 1);
    }
  }
  
  // Terminator
  const maxBits = dataCodewords * 8;
  for (let i = 0; i < 4 && bits.length < maxBits; i++) {
    bits.push(0);
  }
  
  // Pad to byte boundary
  while (bits.length % 8 !== 0 && bits.length < maxBits) {
    bits.push(0);
  }
  
  // Pad bytes
  const padBytes = [0xec, 0x11];
  let padIdx = 0;
  while (bits.length < maxBits) {
    for (let b = 7; b >= 0; b--) {
      bits.push((padBytes[padIdx % 2] >> b) & 1);
    }
    padIdx++;
  }
  
  // Convert to codewords
  const codewords: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let val = 0;
    for (let b = 0; b < 8; b++) {
      val = (val << 1) | (bits[i + b] || 0);
    }
    codewords.push(val);
  }
  
  // Generate EC codewords
  const gen = generatorPoly(ecCodewords);
  const padded = [...codewords, ...new Array(ecCodewords).fill(0)];
  const ec = polyRemainder(padded, gen);
  
  return [...codewords, ...ec];
}

// Place modules on QR matrix
function createMatrix(version: number, codewords: number[]): boolean[][] {
  const size = getSize(version);
  const matrix: (boolean | null)[][] = Array.from({ length: size }, () => Array(size).fill(null));
  
  // Place finder patterns
  function placeFinder(row: number, col: number) {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const mr = row + r, mc = col + c;
        if (mr < 0 || mr >= size || mc < 0 || mc >= size) continue;
        if (r === -1 || r === 7 || c === -1 || c === 7) {
          matrix[mr][mc] = false; // White separator
        } else if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix[mr][mc] = true; // Black
        } else {
          matrix[mr][mc] = false;
        }
      }
    }
  }
  
  placeFinder(0, 0);
  placeFinder(0, size - 7);
  placeFinder(size - 7, 0);
  
  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    if (matrix[6][i] === null) matrix[6][i] = i % 2 === 0;
    if (matrix[i][6] === null) matrix[i][6] = i % 2 === 0;
  }
  
  // Alignment patterns
  const alignPos = getAlignmentPositions(version);
  for (let i = 0; i < alignPos.length; i += 2) {
    const r = alignPos[i], c = alignPos[i + 1];
    for (let dr = -2; dr <= 2; dr++) {
      for (let dc = -2; dc <= 2; dc++) {
        if (matrix[r + dr][c + dc] !== null) continue;
        matrix[r + dr][c + dc] = Math.abs(dr) === 2 || Math.abs(dc) === 2 || (dr === 0 && dc === 0);
      }
    }
  }
  
  // Dark module
  matrix[size - 8][8] = true;
  
  // Reserve format info areas
  for (let i = 0; i < 8; i++) {
    if (matrix[8][i] === null) matrix[8][i] = false;
    if (matrix[i][8] === null) matrix[i][8] = false;
    if (matrix[8][size - 1 - i] === null) matrix[8][size - 1 - i] = false;
    if (matrix[size - 1 - i][8] === null) matrix[size - 1 - i][8] = false;
  }
  if (matrix[8][8] === null) matrix[8][8] = false;
  
  // Version info (version >= 7)
  // Skip for simplicity in small versions
  
  // Place data bits
  const bits: number[] = [];
  for (const cw of codewords) {
    for (let b = 7; b >= 0; b--) {
      bits.push((cw >> b) & 1);
    }
  }
  
  let bitIdx = 0;
  let upward = true;
  
  for (let col = size - 1; col >= 0; col -= 2) {
    if (col === 6) col = 5; // Skip timing column
    
    const rows = upward
      ? Array.from({ length: size }, (_, i) => size - 1 - i)
      : Array.from({ length: size }, (_, i) => i);
    
    for (const row of rows) {
      for (const dc of [0, -1]) {
        const c = col + dc;
        if (c < 0 || c >= size) continue;
        if (matrix[row][c] !== null) continue;
        
        matrix[row][c] = bitIdx < bits.length ? bits[bitIdx++] === 1 : false;
      }
    }
    
    upward = !upward;
  }
  
  // Apply mask pattern 0 (checkerboard) and format info
  const FORMAT_BITS_M0 = 0x5412; // Format info for mask 0, EC level M
  
  // Apply mask
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      // Check if this is a data module (not a function pattern)
      // Simple approach: only mask data regions
      if (isDataModule(r, c, size, version)) {
        if ((r + c) % 2 === 0) {
          matrix[r][c] = !matrix[r][c];
        }
      }
    }
  }
  
  // Write format info
  writeFormatInfo(matrix, size, FORMAT_BITS_M0);
  
  return matrix as boolean[][];
}

function isDataModule(row: number, col: number, size: number, version: number): boolean {
  // Finder patterns + separators
  if (row <= 8 && col <= 8) return false;
  if (row <= 8 && col >= size - 8) return false;
  if (row >= size - 8 && col <= 8) return false;
  
  // Timing patterns
  if (row === 6 || col === 6) return false;
  
  // Dark module
  if (row === size - 8 && col === 8) return false;
  
  // Alignment patterns
  const alignPos = getAlignmentPositions(version);
  for (let i = 0; i < alignPos.length; i += 2) {
    const ar = alignPos[i], ac = alignPos[i + 1];
    if (Math.abs(row - ar) <= 2 && Math.abs(col - ac) <= 2) return false;
  }
  
  return true;
}

function writeFormatInfo(matrix: (boolean | null)[][], size: number, formatBits: number) {
  const bits: boolean[] = [];
  for (let i = 14; i >= 0; i--) {
    bits.push(((formatBits >> i) & 1) === 1);
  }
  
  // Around top-left finder
  const positions1 = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8],
    [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]
  ];
  
  // Around other finders
  const positions2 = [
    [size - 1, 8], [size - 2, 8], [size - 3, 8], [size - 4, 8],
    [size - 5, 8], [size - 6, 8], [size - 7, 8],
    [8, size - 8], [8, size - 7], [8, size - 6], [8, size - 5],
    [8, size - 4], [8, size - 3], [8, size - 2], [8, size - 1]
  ];
  
  for (let i = 0; i < 15; i++) {
    matrix[positions1[i][0]][positions1[i][1]] = bits[i];
    matrix[positions2[i][0]][positions2[i][1]] = bits[i];
  }
}

// ── Public API ──

export function generateQRDataUrl(text: string, pixelSize = 8, margin = 4): string {
  const version = getVersion(text.length);
  const codewords = encodeData(text, version);
  const matrix = createMatrix(version, codewords);
  
  const size = matrix.length;
  const canvasSize = (size + margin * 2) * pixelSize;
  
  const canvas = document.createElement('canvas');
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  const ctx = canvas.getContext('2d')!;
  
  // White background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  
  // Draw modules
  ctx.fillStyle = '#000000';
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (matrix[r][c]) {
        ctx.fillRect(
          (c + margin) * pixelSize,
          (r + margin) * pixelSize,
          pixelSize,
          pixelSize
        );
      }
    }
  }
  
  return canvas.toDataURL('image/png');
}
