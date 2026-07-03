import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    # Replacements
    content = content.replace('Tectonix', 'Scaro Technologies')
    content = content.replace('tectonix', 'scaro')
    content = content.replace('Edupulse', 'Scaro Technologies')
    content = content.replace('edupulse', 'scaro')
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    src_dir = '/Users/hrishi/Desktop/Sathishbro1-main/src'
    for root, _, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.html', '.css', '.json')):
                replace_in_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
