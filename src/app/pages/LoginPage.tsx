import { useState } from 'react';
import { ShieldCheck, Search, XCircle, User, BookOpen, Calendar, Award } from 'lucide-react';
import { useSEO } from '../utils/useSEO';

// Mock Database for Verification
const MOCK_DATA = [
  {
    id: 'SC-2026-001',
    name: 'Rahul Sharma',
    course: 'Full Stack Development',
    status: 'Verified & Active',
    issueDate: 'Jan 15, 2026',
    grade: 'A+'
  },
  {
    id: 'SC-2026-002',
    name: 'Priya Patel',
    course: 'AI & Machine Learning',
    status: 'Verified & Active',
    issueDate: 'Feb 10, 2026',
    grade: 'A'
  },
  {
    id: '12345',
    name: 'Test Student',
    course: 'Web Development Basics',
    status: 'Verified & Active',
    issueDate: 'Mar 01, 2026',
    grade: 'B+'
  }
];

export function LoginPage() {
  useSEO('Login & Verification | Scaro Technologies', 'Verify your Scaro Technologies credentials and certificates.');

  const [searchNumber, setSearchNumber] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState<typeof MOCK_DATA[0] | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchNumber.trim()) return;
    
    const found = MOCK_DATA.find(
      (data) => data.id.toLowerCase() === searchNumber.toLowerCase().trim()
    );
    
    setResult(found || null);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pt-16 md:pt-24 pb-32 selection:bg-blue-500/30">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 shadow-sm">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-heading mb-4 tracking-tight">Credential Verification</h1>
          <p className="text-lg text-text-secondary">Enter your Registration or Certificate Number to verify the records securely.</p>
        </div>

        {/* Search Box */}
        <div className="bg-surface border border-border p-6 md:p-8 rounded-3xl shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
          
          <form onSubmit={handleVerify} className="relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-text-muted" />
                <input 
                  type="text" 
                  value={searchNumber}
                  onChange={(e) => {
                    setSearchNumber(e.target.value);
                    if (hasSearched) setHasSearched(false);
                  }}
                  placeholder="e.g. SC-2026-001 or 12345"
                  className="w-full pl-14 pr-6 py-4 bg-page-bg border-2 border-border rounded-2xl text-lg font-medium text-heading focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-md active:scale-95 whitespace-nowrap text-lg"
              >
                Verify Now
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {result ? (
              <div className="bg-green-50 dark:bg-green-900/10 border-2 border-green-500 rounded-3xl p-8 shadow-xl shadow-green-500/5 relative overflow-hidden">
                {/* Verified Badge */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-green-500/10 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-3 text-green-600 dark:text-green-400 mb-8">
                  <ShieldCheck className="w-8 h-8" />
                  <h2 className="text-2xl font-black uppercase tracking-wider">Data is Verified</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 bg-surface p-6 rounded-2xl border border-border shadow-sm">
                  <div className="flex items-start gap-4">
                    <User className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Student Name</p>
                      <p className="text-xl font-bold text-heading">{result.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Enrolled Course</p>
                      <p className="text-xl font-bold text-heading">{result.course}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Issue Date</p>
                      <p className="text-lg font-medium text-heading">{result.issueDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Credential ID</p>
                      <p className="text-lg font-medium text-heading font-mono">{result.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-500 rounded-3xl p-8 text-center shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 mb-4">
                  <XCircle className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-red-600 mb-2">Record Not Found</h2>
                <p className="text-text-secondary text-lg">
                  We couldn't find any data matching the number <strong className="text-heading">"{searchNumber}"</strong>. Please check the number and try again.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>
    </div>
  );
}
