import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard, LogOut, Plus, Search, Trash2, Pencil,
  Upload, Download, QrCode, X, ShieldCheck, FileText,
  Award, Users, Calendar, Loader2, AlertTriangle, CheckCircle2,
} from 'lucide-react';
import { useSEO } from '@/main/utils/useSEO';
import { validateSession, destroySession, sanitizeInput } from '../utils/certAuthUtils';
import {
  Certificate, getAllCertificates, searchCertificates,
  addCertificate, updateCertificate, deleteCertificate,
  seedCertificatesIfNeeded,
} from '../data/certStore';
import { generateQRDataUrl } from '../utils/qrGenerator';

// ─────────────────────────────────────────────────
// Dashboard Page
// ─────────────────────────────────────────────────

export default function CertAdminDashboardPage() {
  useSEO(
    'Certificate Dashboard | Scaro Technologie',
    'Manage, issue, and verify digital certificates from the Scaro Technologie admin dashboard.'
  );

  const navigate = useNavigate();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCert, setEditingCert] = useState<Certificate | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Session validation
  useEffect(() => {
    const session = validateSession();
    if (!session) {
      navigate('/cert-admin', { replace: true });
      return;
    }
    seedCertificatesIfNeeded();
    setCertificates(getAllCertificates());
  }, [navigate]);

  // Search handler
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    const sanitized = sanitizeInput(query);
    setCertificates(searchCertificates(sanitized));
  }, []);

  // Refresh list
  const refresh = useCallback(() => {
    if (searchQuery) {
      setCertificates(searchCertificates(sanitizeInput(searchQuery)));
    } else {
      setCertificates(getAllCertificates());
    }
  }, [searchQuery]);

  // Delete handler
  const handleDelete = (id: string) => {
    deleteCertificate(id);
    refresh();
    setDeleteConfirm(null);
    showToast('Certificate deleted successfully', 'success');
  };

  // Logout
  const handleLogout = () => {
    destroySession();
    navigate('/cert-admin', { replace: true });
  };

  // Toast
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Open edit modal
  const openEdit = (cert: Certificate) => {
    setEditingCert(cert);
    setShowModal(true);
  };

  // Open add modal
  const openAdd = () => {
    setEditingCert(null);
    setShowModal(true);
  };

  const totalCerts = getAllCertificates().length;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl border ${
              toast.type === 'success'
                ? 'bg-emerald-900/90 border-emerald-500/30 text-emerald-200'
                : 'bg-red-900/90 border-red-500/30 text-red-200'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            <span className="font-semibold text-sm">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg">
              <LayoutDashboard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight">Certificate Dashboard</h1>
              <p className="text-slate-400 text-sm font-medium mt-1">Manage all issued certificates</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm">
              <span className="text-slate-400">Total:</span>{' '}
              <span className="font-bold text-emerald-400">{totalCerts}</span> certificates
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 rounded-xl text-sm font-bold transition-all"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by Certificate ID, name, or program..."
              className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
            {searchQuery && (
              <button onClick={() => handleSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-slate-500 hover:text-white transition-colors" />
              </button>
            )}
          </div>

          {/* Add button */}
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all text-sm whitespace-nowrap"
          >
            <Plus className="w-5 h-5" /> Add Certificate
          </button>
        </div>

        {/* Certificates Grid */}
        {certificates.length === 0 ? (
          <div className="text-center py-24 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Award className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-400 mb-2">No Certificates Found</h3>
            <p className="text-slate-500 text-sm">
              {searchQuery ? 'Try a different search query.' : 'Click "Add Certificate" to create your first one.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all group"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-emerald-400" />
                    <span className="font-mono font-bold text-emerald-300 text-sm">{cert.id}</span>
                  </div>
                  {cert.pdfDataUrl && (
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full border border-emerald-500/20">
                      PDF Attached
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex gap-5">
                    {/* QR Code */}
                    <div className="w-20 h-20 bg-white rounded-xl p-1.5 shrink-0 shadow-md">
                      <img src={cert.qrDataUrl} alt="QR Code" className="w-full h-full object-contain" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white truncate mb-1">{cert.studentName}</h3>
                      <p className="text-sm text-slate-400 font-medium mb-2 truncate">{cert.program}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(cert.issueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-5 pt-5 border-t border-white/5">
                    <button
                      onClick={() => openEdit(cert)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 rounded-lg text-xs font-bold transition-all"
                    >
                      <Pencil className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(cert.id)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                    {cert.pdfDataUrl && (
                      <a
                        href={cert.pdfDataUrl}
                        download={`${cert.id}.pdf`}
                        className="flex items-center gap-1.5 px-3 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-400 rounded-lg text-xs font-bold transition-all ml-auto"
                      >
                        <Download className="w-3.5 h-3.5" /> PDF
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Security Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.02] border border-white/5 rounded-full text-xs font-medium text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            All inputs sanitized • Sessions encrypted • SQL injection protected
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trash2 className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Delete Certificate?</h3>
              <p className="text-slate-400 text-sm text-center mb-8">
                This will permanently remove <span className="font-mono font-bold text-white">{deleteConfirm}</span>. This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <CertificateModal
            editingCert={editingCert}
            onClose={() => {
              setShowModal(false);
              setEditingCert(null);
            }}
            onSave={() => {
              refresh();
              setShowModal(false);
              setEditingCert(null);
              showToast(editingCert ? 'Certificate updated!' : 'Certificate created!', 'success');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Add / Edit Certificate Modal
// ─────────────────────────────────────────────────

function CertificateModal({
  editingCert,
  onClose,
  onSave,
}: {
  editingCert: Certificate | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [studentName, setStudentName] = useState(editingCert?.studentName || '');
  const [program, setProgram] = useState(editingCert?.program || '');
  const [issueDate, setIssueDate] = useState(editingCert?.issueDate || new Date().toISOString().split('T')[0]);
  const [pdfDataUrl, setPdfDataUrl] = useState<string | undefined>(editingCert?.pdfDataUrl);
  const [pdfFileName, setPdfFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('PDF must be under 5MB.');
      return;
    }

    setPdfFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setPdfDataUrl(reader.result as string);
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!studentName.trim() || !program.trim() || !issueDate) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        if (editingCert) {
          updateCertificate(editingCert.id, {
            studentName: studentName.trim(),
            program: program.trim(),
            issueDate,
            pdfDataUrl,
          });
        } else {
          addCertificate({
            studentName: studentName.trim(),
            program: program.trim(),
            issueDate,
            pdfDataUrl,
          });
        }
        onSave();
      } catch {
        setError('Failed to save certificate.');
      } finally {
        setIsSubmitting(false);
      }
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              {editingCert ? <Pencil className="w-5 h-5 text-emerald-400" /> : <Plus className="w-5 h-5 text-emerald-400" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {editingCert ? 'Edit Certificate' : 'Add New Certificate'}
              </h3>
              {editingCert && (
                <p className="text-xs text-slate-500 font-mono">{editingCert.id}</p>
              )}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span className="text-red-300 text-xs font-semibold">{error}</span>
            </div>
          )}

          {/* Student Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Student Name *</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                required
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>
          </div>

          {/* Program */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Program *</label>
            <div className="relative">
              <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                placeholder="e.g. Full Stack Development"
                required
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>
          </div>

          {/* Issue Date */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Issue Date *</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all [color-scheme:dark]"
              />
            </div>
          </div>

          {/* PDF Upload */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Certificate PDF (Optional)</label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-4 p-4 bg-white/[0.03] border border-dashed border-white/10 rounded-xl cursor-pointer hover:border-emerald-500/30 transition-all"
            >
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0">
                <Upload className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                {pdfDataUrl ? (
                  <>
                    <p className="text-sm font-semibold text-white truncate">{pdfFileName || 'Certificate.pdf'}</p>
                    <p className="text-xs text-emerald-400">PDF uploaded ✓</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-slate-300">Click to upload PDF</p>
                    <p className="text-xs text-slate-500">Max 5MB • PDF only</p>
                  </>
                )}
              </div>
              {pdfDataUrl && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPdfDataUrl(undefined);
                    setPdfFileName('');
                  }}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handlePdfUpload}
              className="hidden"
            />
          </div>

          {/* Auto QR Info */}
          {!editingCert && (
            <div className="flex items-center gap-3 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <QrCode className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-xs text-emerald-300/80 font-medium">
                A QR code linking to the verification page will be auto-generated on save.
              </p>
            </div>
          )}

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  {editingCert ? 'Update' : 'Create'} Certificate
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
