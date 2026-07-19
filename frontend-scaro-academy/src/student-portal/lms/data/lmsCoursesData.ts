export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'quiz';
  duration: string;
  videoUrl?: string; // YouTube video ID or full URL
  readingContent?: string; // Markdown or rich HTML text
  quiz?: {
    questions: QuizQuestion[];
  };
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface LmsCourse {
  id: number;
  slug: string;
  title: string;
  modules: Module[];
}

export const lmsCourses: LmsCourse[] = [
  {
    id: 1,
    slug: 'python-programming-mastery',
    title: 'Python Programming Mastery',
    modules: [
      {
        id: 'py-m1',
        title: 'Module 1: Introduction & Environment Setup',
        lessons: [
          {
            id: 'py-m1-l1',
            title: '1.1 What is Python? Features & Real-world Uses',
            type: 'video',
            duration: '10:15',
            videoUrl: 'Y8Tko2yc5hA', // Web dev Python intro example
            readingContent: `
# Welcome to Python Programming!

Python is a high-level, interpreted, general-purpose programming language. It was created by **Guido van Rossum** and first released in 1991.

### Key Features of Python:
1. **Easy to Learn and Read**: Python has a clean, English-like syntax that emphasizes readability.
2. **Interpreted Language**: Python code is executed line-by-line, which makes debugging extremely easy.
3. **Dynamically Typed**: You don't need to declare variable types explicitly; Python infers them at runtime.
4. **Extensive Standard Library**: Python has packages for everything from web development to data science and machine learning.

### Real-World Applications:
* **Web Development**: Django, Flask, FastAPI
* **Data Science & AI**: NumPy, Pandas, Scikit-Learn, TensorFlow, PyTorch
* **Automation & Scripting**: Writing scripts to automate repetitive tasks
* **Game Development**: PyGame
            `
          },
          {
            id: 'py-m1-l2',
            title: '1.2 Installing Python & Setting up VS Code',
            type: 'reading',
            duration: '8 mins',
            readingContent: `
# Setting up Your Development Environment

To start writing Python code, you need to install Python and a code editor.

### Step 1: Install Python
1. Go to the official website: [python.org/downloads](https://www.python.org/downloads/)
2. Download the installer for your OS (Windows, macOS, or Linux).
3. **CRITICAL**: During Windows installation, check the box that says **"Add Python to PATH"** before clicking Install.

### Step 2: Install Visual Studio Code (VS Code)
1. Go to [code.visualstudio.com](https://code.visualstudio.com/) and download the editor.
2. Install it on your machine.
3. Open VS Code, navigate to the Extensions tab (\`Ctrl+Shift+X\` or \`Cmd+Shift+X\`), search for **"Python"** (by Microsoft), and install it.

### Step 3: Run Your First Python Code
Create a new file named \`hello.py\` and write the following code:
\`\`\`python
print("Hello, Scaro Academy Student!")
\`\`\`
Open the terminal inside VS Code and run:
\`\`\`bash
python hello.py
\`\`\`
You should see \`Hello, Scaro Academy Student!\` printed in the terminal.
            `
          },
          {
            id: 'py-m1-l3',
            title: '1.3 Quiz: Introduction & Setup Basics',
            type: 'quiz',
            duration: '5 mins',
            quiz: {
              questions: [
                {
                  id: 'py-m1-q1',
                  question: 'Who created the Python programming language?',
                  options: ['Dennis Ritchie', 'Guido van Rossum', 'Bjarne Stroustrup', 'James Gosling'],
                  correctOption: 1,
                  explanation: 'Python was designed by Guido van Rossum in the late 1980s and released in 1991.'
                },
                {
                  id: 'py-m1-q2',
                  question: 'Which checkbox must be ticked during Windows installation of Python to run python from the command line?',
                  options: ['Add Python to PATH', 'Install launcher for all users', 'Disable path length limit', 'Precompile standard library'],
                  correctOption: 0,
                  explanation: 'Adding Python to PATH register variables globally so that the terminal recognizes the "python" command.'
                },
                {
                  id: 'py-m1-q3',
                  question: 'What type of language is Python?',
                  options: ['Compiled', 'Interpreted', 'Assembly', 'Low-level'],
                  correctOption: 1,
                  explanation: 'Python is an interpreted language, meaning the code is executed line-by-line by the interpreter.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'py-m2',
        title: 'Module 2: Variables, Data Types & Operators',
        lessons: [
          {
            id: 'py-m2-l1',
            title: '2.1 Variable Declaration & Dynamic Typing',
            type: 'video',
            duration: '12:40',
            videoUrl: 'kqtD5era15c', // Python variable intro
            readingContent: `
# Variables and Dynamic Typing

In Python, a variable is created the moment you first assign a value to it. You do not need to specify a data type.

### Examples:
\`\`\`python
x = 5          # Integer
y = "Hello"    # String
z = 3.14       # Float
is_active = True # Boolean
\`\`\`

### Dynamic Typing:
You can reassign variables to different types at any time:
\`\`\`python
data = 10
print(type(data)) # Output: <class 'int'>

data = "Python is cool"
print(type(data)) # Output: <class 'str'>
\`\`\`
            `
          },
          {
            id: 'py-m2-l2',
            title: '2.2 Dynamic Operators & Type Casting',
            type: 'reading',
            duration: '10 mins',
            readingContent: `
# Operators and Type Casting

### Basic Arithmetic Operators:
* Addition: \`+\`
* Subtraction: \`-\`
* Multiplication: \`*\`
* Division: \`/\` (returns float, e.g., \`5 / 2 = 2.5\`)
* Floor Division: \`//\` (returns integer, e.g., \`5 // 2 = 2\`)
* Modulo (Remainder): \`%\` (e.g., \`5 % 2 = 1\`)
* Exponentiation (Power): \`**\` (e.g., \`2 ** 3 = 8\`)

### Type Casting:
You can convert variables from one type to another using casting functions:
* \`int()\`: Converts to integer
* \`float()\`: Converts to float
* \`str()\`: Converts to string

\`\`\`python
num_str = "123"
num = int(num_str) # Now it is an integer 123
print(num + 10)    # Output: 133
\`\`\`
            `
          },
          {
            id: 'py-m2-l3',
            title: '2.3 Quiz: Variables & Operators',
            type: 'quiz',
            duration: '6 mins',
            quiz: {
              questions: [
                {
                  id: 'py-m2-q1',
                  question: 'What is the output of print(9 // 2) in Python?',
                  options: ['4.5', '4', '5', '4.0'],
                  correctOption: 1,
                  explanation: '// is the floor division operator which divides and rounds down to the nearest integer.'
                },
                {
                  id: 'py-m2-q2',
                  question: 'How do you check the data type of a variable in Python?',
                  options: ['typeof(x)', 'datatype(x)', 'type(x)', 'class(x)'],
                  correctOption: 2,
                  explanation: 'The built-in type() function is used to return the data type of an object in Python.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'java-full-stack-development',
    title: 'Java Full Stack Development',
    modules: [
      {
        id: 'java-m1',
        title: 'Module 1: Java Basics & OOP Concepts',
        lessons: [
          {
            id: 'java-m1-l1',
            title: '1.1 Introduction to Java Virtual Machine (JVM)',
            type: 'video',
            duration: '15:20',
            videoUrl: 'A74TOX803D0',
            readingContent: `
# Introduction to Java and JVM Architecture

Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible ("Write Once, Run Anywhere").

### JVM, JRE, and JDK:
1. **JVM (Java Virtual Machine)**: Executes the compiled Java bytecode.
2. **JRE (Java Runtime Environment)**: JVM + Libraries required to run Java applications.
3. **JDK (Java Development Kit)**: JRE + Development Tools (compiler \`javac\`, debugger, etc.).
            `
          },
          {
            id: 'java-m1-l2',
            title: '1.2 Quiz: Java Core Environment',
            type: 'quiz',
            duration: '5 mins',
            quiz: {
              questions: [
                {
                  id: 'java-m1-q1',
                  question: 'Which component is responsible for executing Java bytecode?',
                  options: ['JDK', 'JRE', 'JVM', 'Javac compiler'],
                  correctOption: 2,
                  explanation: 'The JVM (Java Virtual Machine) directly loads, verifies, and executes the compiled bytecode (.class files).'
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

// Dynamically generate curriculum modules for other courses to ensure they also have high-fidelity content
export function getLmsCourseBySlug(slug: string, title: string): LmsCourse {
  const found = lmsCourses.find(c => c.slug === slug);
  if (found) return found;

  // Generate generic premium mockup syllabus
  return {
    id: Math.floor(Math.random() * 1000) + 10,
    slug,
    title,
    modules: [
      {
        id: `${slug}-m1`,
        title: 'Module 1: Foundations & Architecture',
        lessons: [
          {
            id: `${slug}-m1-l1`,
            title: '1.1 Industry Overview & Introduction to the Field',
            type: 'video',
            duration: '12:30',
            videoUrl: 'dQw4w9WgXcQ', // Rickroll placeholder for premium video vibe
            readingContent: `
# Welcome to ${title}

This course provides a comprehensive roadmap to mastering the core technologies in **${title}**. 

### Course Roadmap:
1. **Module 1**: Fundamentals, Core Architecture, and Development Environment.
2. **Module 2**: Hands-On Projects, Syntax, and Hardware/Software Integration.
3. **Module 3**: Capstone Projects and Placement readiness.

### Key Objectives:
* Master the fundamental principles of the field.
* Develop projects based on industry specifications.
* Build skills needed for technical interviews and certifications.
            `
          },
          {
            id: `${slug}-m1-l2`,
            title: '1.2 Environment Setup & Resource Setup Guide',
            type: 'reading',
            duration: '6 mins',
            readingContent: `
# Environment Setup and Prerequisites

Before diving in, make sure you configure your tools:
1. **Download necessary IDEs / Compilers** matching the standard tools of the trade.
2. **Initialize Git repository** to version control your academic exercises and portfolio projects.
3. **Access Online Documentation** to keep as a cheat sheet.

We will write our first module codes in the upcoming lesson. Stay tuned!
            `
          },
          {
            id: `${slug}-m1-l3`,
            title: '1.3 Quiz: Module 1 Comprehension Check',
            type: 'quiz',
            duration: '5 mins',
            quiz: {
              questions: [
                {
                  id: `${slug}-m1-q1`,
                  question: `What is the primary learning objective of ${title}?`,
                  options: ['Academic degrees only', 'Hands-on practical skills and industry readiness', 'Memorizing code syntax without testing', 'Completing worksheets'],
                  correctOption: 1,
                  explanation: 'This academy focuses on practical, project-based engineering development to make you industry-ready.'
                }
              ]
            }
          }
        ]
      },
      {
        id: `${slug}-m2`,
        title: 'Module 2: Advanced Topics & Case Studies',
        lessons: [
          {
            id: `${slug}-m2-l1`,
            title: '2.1 Deep Dive: Architecture and Best Practices',
            type: 'reading',
            duration: '15 mins',
            readingContent: `
# Advanced Architectures

In this module, we review professional architectures, performance patterns, and security best practices.

### Core concepts:
* Memory management and speed optimizations.
* Design patterns for decoupling and reusability.
* Testing methods for reliability.
            `
          }
        ]
      }
    ]
  };
}
