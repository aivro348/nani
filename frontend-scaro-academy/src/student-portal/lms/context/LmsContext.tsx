import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  name: string;
  email: string;
  collegeName: string;
  crNumber: string;
  phoneNumber?: string;
}

export interface Enrollment {
  name: string;
  gmail: string;
  phoneNumber: string;
  collegeName: string;
  crNumber: string;
  course: string;
  coursePrice: string;
  timestamp: string;
}

interface LmsContextType {
  user: UserProfile | null;
  enrollments: string[]; // List of enrolled course titles (or IDs)
  progress: Record<string, string[]>; // { [courseSlug]: [completed_lesson_ids] }
  quizScores: Record<string, number>; // { [lessonId]: score }
  isLoading: boolean;
  login: (profile: UserProfile) => void;
  logout: () => void;
  enrollInCourse: (courseTitle: string) => Promise<boolean>;
  markLessonCompleted: (courseSlug: string, lessonId: string) => void;
  submitQuizScore: (lessonId: string, score: number) => void;
  refreshEnrollments: () => Promise<void>;
}

const LmsContext = createContext<LmsContextType | undefined>(undefined);

export function LmsProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [enrollments, setEnrollments] = useState<string[]>([]);
  const [progress, setProgress] = useState<Record<string, string[]>>({});
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load initial state from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('scaro_lms_user');
      const storedProgress = localStorage.getItem('scaro_lms_progress');
      const storedQuizScores = localStorage.getItem('scaro_lms_quiz_scores');

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      }
      if (storedQuizScores) {
        setQuizScores(JSON.parse(storedQuizScores));
      }
    } catch (e) {
      console.error('Failed to load LMS state from localStorage:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch enrollments from backend API when user logs in or changes
  const refreshEnrollments = async () => {
    if (!user?.email) {
      setEnrollments([]);
      return;
    }

    try {
      // 1. Fetch from cPanel PHP API
      const response = await fetch('/api.php?action=get-enrollments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          // Filter enrollments matching the user's Gmail
          const userEnrollments = result.data
            .filter((enrollment: Enrollment) => enrollment.gmail.toLowerCase() === user.email.toLowerCase())
            .map((enrollment: Enrollment) => enrollment.course);
          
          // Merge with any locally pending enrollments
          const localEnrollments = JSON.parse(localStorage.getItem('scaro_enrollments') || '[]');
          const localUserEnrollments = localEnrollments
            .filter((e: any) => e.gmail.toLowerCase() === user.email.toLowerCase())
            .map((e: any) => e.course);

          const combined = Array.from(new Set([...userEnrollments, ...localUserEnrollments]));
          setEnrollments(combined);
          localStorage.setItem('scaro_lms_enrollments', JSON.stringify(combined));
          return;
        }
      }
    } catch (error) {
      console.warn('Failed to fetch enrollments from server, falling back to local storage:', error);
    }

    // Fallback: Check local storage
    try {
      const localEnrollments = JSON.parse(localStorage.getItem('scaro_enrollments') || '[]');
      const localUserEnrollments = localEnrollments
        .filter((e: any) => e.gmail.toLowerCase() === user.email.toLowerCase())
        .map((e: any) => e.course);
      
      const storedLmsEnrollments = JSON.parse(localStorage.getItem('scaro_lms_enrollments') || '[]');
      const combined = Array.from(new Set([...localUserEnrollments, ...storedLmsEnrollments]));
      setEnrollments(combined);
    } catch (e) {
      console.error('Failed to load fallback enrollments:', e);
    }
  };

  useEffect(() => {
    if (user) {
      refreshEnrollments();
    } else {
      setEnrollments([]);
    }
  }, [user]);

  const login = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('scaro_lms_user', JSON.stringify(profile));
  };

  const logout = () => {
    setUser(null);
    setEnrollments([]);
    setProgress({});
    setQuizScores({});
    localStorage.removeItem('scaro_lms_user');
    localStorage.removeItem('scaro_lms_enrollments');
    localStorage.removeItem('scaro_lms_progress');
    localStorage.removeItem('scaro_lms_quiz_scores');
  };

  const enrollInCourse = async (courseTitle: string): Promise<boolean> => {
    if (!user) return false;

    // Call the /enroll endpoint to register enrollment
    try {
      const enrollmentData = {
        name: user.name,
        gmail: user.email,
        phoneNumber: user.phoneNumber || '9999999999',
        collegeName: user.collegeName,
        crNumber: user.crNumber,
        course: courseTitle,
        coursePrice: 'Free (Academy Trial)',
        enrollmentDate: new Date().toISOString(),
      };

      // 1. Save in local scaro_enrollments list for fallback/sync
      const localEnrollments = JSON.parse(localStorage.getItem('scaro_enrollments') || '[]');
      localEnrollments.push({
        ...enrollmentData,
        id: `local_${Date.now()}`,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('scaro_enrollments', JSON.stringify(localEnrollments));

      // 2. Post to cPanel PHP API
      const response = await fetch('/api.php?action=enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollmentData),
      });

      if (response.ok) {
        console.log(`Successfully enrolled in ${courseTitle} via server API.`);
      }
    } catch (error) {
      console.warn('Enrollment API error, using local fallback:', error);
    }

    // Instantly add to state for smooth user experience
    setEnrollments(prev => {
      const updated = Array.from(new Set([...prev, courseTitle]));
      localStorage.setItem('scaro_lms_enrollments', JSON.stringify(updated));
      return updated;
    });

    return true;
  };

  const markLessonCompleted = (courseSlug: string, lessonId: string) => {
    setProgress(prev => {
      const courseProgress = prev[courseSlug] || [];
      if (courseProgress.includes(lessonId)) return prev;

      const updated = {
        ...prev,
        [courseSlug]: [...courseProgress, lessonId]
      };
      localStorage.setItem('scaro_lms_progress', JSON.stringify(updated));
      return updated;
    });
  };

  const submitQuizScore = (lessonId: string, score: number) => {
    setQuizScores(prev => {
      const updated = {
        ...prev,
        [lessonId]: score
      };
      localStorage.setItem('scaro_lms_quiz_scores', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <LmsContext.Provider
      value={{
        user,
        enrollments,
        progress,
        quizScores,
        isLoading,
        login,
        logout,
        enrollInCourse,
        markLessonCompleted,
        submitQuizScore,
        refreshEnrollments,
      }}
    >
      {children}
    </LmsContext.Provider>
  );
}

export function useLms() {
  const context = useContext(LmsContext);
  if (context === undefined) {
    throw new Error('useLms must be used within an LmsProvider');
  }
  return context;
}
