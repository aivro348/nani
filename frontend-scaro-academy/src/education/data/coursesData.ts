export const CATEGORIES = [
  { id: 'all',        label: 'All Courses',    count: 12 },
  { id: 'cse',        label: 'CSE / Programming', count: 4 },
  { id: 'web',        label: 'Web Development', count: 2 },
  { id: 'ece',        label: 'ECE / VLSI',     count: 2 },
  { id: 'eee',        label: 'EEE / Power',    count: 1 },
  { id: 'embedded',   label: 'IoT / Embedded', count: 2 },
  { id: 'civil',      label: 'Civil / Mech',   count: 1 },
];

export const courses = [
  {
    id: 1,
    slug: 'python-programming-mastery',
    title: 'Python Programming Mastery',
    category: 'cse',
    skills: ['Python Fundamentals', 'Data Structures & Algorithms', 'Web Development with Django', 'API Development'],
    heroImage: '/python-hero.webp',
    tagline: 'Learn Python programming from basics to advanced concepts and gain hands-on experience with real-time projects and practical applications.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'The Python Programming Course by Scaro Technologie covers Python fundamentals, advanced programming concepts, object-oriented programming, file handling, SQL integration, modules, decorators, generators, and hands-on projects. Gain real-world experience by building applications in analytics, business intelligence, machine learning, and automation.',
    outcomes: [
      'Comprehensive Python programming skills from basics to advanced topics',
      'Hands-on experience with real-time projects and automation',
      'Master SQL integration, data handling, and Python libraries',
      'Industry-recognized Scaro Technologie certification & career support'
    ],
    curriculum: [
      {
        module: 'Introduction & Setup',
        topics: [
          'What is Python? Features & Uses',
          'Installing Python (Windows/Linux/Mac)',
          'IDEs: IDLE, Jupyter, VS Code, Google Colab',
          'Running scripts: Terminal vs Notebook',
          'Python Syntax & Indentation Rules',
          'Basic Input/Output',
          'Comments: Single-line, Multi-line'
        ]
      },
      {
        module: 'Variables, Data Types & Operators',
        topics: [
          'Variable Declaration & Naming Rules',
          'Dynamic Typing',
          'Data Types: int, float, str, bool, None',
          'Type Conversion & Casting',
          'Operators: Arithmetic, Assignment, Comparison, Logical, Bitwise, Identity & Membership'
        ]
      },
      {
        module: 'Control Structures',
        topics: [
          'if, elif, else, nested conditions',
          'for loop, while loop, nested loops',
          'Loop control: break, continue, pass',
          'Pattern printing exercises',
          'Range-based iteration'
        ]
      },
      {
        module: 'Functions & Scope',
        topics: [
          'Defining and calling functions',
          'Parameters, return values',
          '*args and **kwargs',
          'Lambda functions',
          'Variable scope: Global vs Local',
          'Recursion basics'
        ]
      },
      {
        module: 'Python Data Structures',
        topics: [
          'Lists: Indexing, slicing, mutability, methods (append, remove, sort, etc.)',
          'Tuples: immutable sequences',
          'Sets: unique elements',
          'Dictionaries: key-value pairs, CRUD operations, iteration',
          'Comprehensions: List, Dict, Set',
          'Nested structures'
        ]
      },
      {
        module: 'Strings & String Operations',
        topics: [
          'String creation, indexing, slicing',
          'Built-in methods: upper(), lower(), find(), replace(), etc.',
          'Formatting: format(), f-strings',
          'String validation: isdigit(), isalpha()',
          'Regular expressions'
        ]
      },
      {
        module: 'File Handling & Exception Management',
        topics: [
          'Reading/writing text files (.txt, .csv)',
          'Try, except, finally, else',
          'Raise keyword & custom exceptions'
        ]
      },
      {
        module: 'Object-Oriented Programming',
        topics: [
          'Class & Object, __init__ constructor',
          'Instance vs Class Variables',
          'Methods, self keyword',
          'Inheritance, Polymorphism, Encapsulation & Private Attributes',
          'super() keyword'
        ]
      },
      {
        module: 'SQL For Python',
        topics: [
          'Introduction to Databases & SQL',
          'SQLite and MySQL integration with Python',
          'Advanced SQL handling'
        ]
      },
      {
        module: 'Modules, Packages, Iterators & Decorators',
        topics: [
          'Modules & Packages: import, from ... import, custom modules, pip installation',
          'Iterators & Generators: basics, custom iterators, yield, expressions',
          'Decorators: nested functions, writing and using decorators, @decorator syntax'
        ]
      },
      {
        module: 'Hands-On Real-Time Projects',
        topics: [
          'Student Performance Tracking & Predictive Analytics',
          'Interactive Sales Data Analysis Dashboard',
          'Employee Management & Payroll Automation',
          'Real-Time Weather Monitoring Dashboard',
          'SQL-Driven Library Management System',
          'Loan Approval Prediction using ML',
          'Email Spam Detection System',
          'Financial Data Preprocessing & Sentiment Labeling',
          'Behavioral Data Analysis through Sentiment & Emotion Detection',
          'Cyberbullying Detection on Social Media'
        ]
      }
    ],
    projects: [
      {
        title: 'Student Performance Tracking & Predictive Analytics',
        description: 'Monitor academic progress, analyze trends, and provide personalized learning insights using Python and analytics libraries.'
      },
      {
        title: 'Interactive Sales Data Analysis Dashboard',
        description: 'Create a dynamic dashboard for real-time sales tracking, visualization, and business intelligence insights.'
      },
      {
        title: 'Employee Management & Payroll Automation',
        description: 'Automate workforce management, attendance tracking, and payroll processing using Python.'
      }
    ],
    testimonials: [
      {
        quote: "This Python course gave me a strong foundation and practical exposure to real-time projects.",
        author: "Student"
      }
    ]
  },
  {
    id: 2,
    slug: 'java-full-stack-development',
    title: 'Java Full Stack Development',
    category: 'cse',
    skills: ['HTML5, CSS3 & JavaScript', 'React.js & Node.js', 'Database Integration', 'Cloud Deployment'],
    heroImage: '/unsplash/img_0751239d67.webp',
    tagline: 'Master enterprise Java, Spring Boot, and modern front-end frameworks to build scalable full-stack applications.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Learn end-to-end full-stack development using Java and Spring Boot for the backend, combined with React for the frontend. Deploy applications to the cloud and master database integration.',
    outcomes: [
      'Build robust REST APIs using Spring Boot',
      'Develop responsive user interfaces with React',
      'Integrate databases securely',
      'Deploy applications using Docker and Cloud platforms'
    ],
    curriculum: [
      {
        module: 'Coming Soon',
        topics: ['Detailed curriculum syllabus will be uploaded shortly.']
      }
    ],
    projects: [],
    testimonials: []
  },
  {
    id: 3,
    slug: 'c-programming-fundamentals',
    title: 'C Programming Fundamentals',
    category: 'cse',
    skills: ['C Language Syntax', 'Pointers & Memory', 'Data Structures in C', 'System Programming'],
    heroImage: '/unsplash/img_7cc5b5c7a0.webp',
    tagline: 'Build a strong foundation in computer science with C language syntax, pointers, memory management, and data structures.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'C is the mother of all modern languages. This course teaches the core principles of system-level programming, dynamic memory allocation, and data structures implementation.',
    outcomes: [
      'Master pointer arithmetic and dynamic memory allocation',
      'Implement core Data Structures (Linked Lists, Trees)',
      'Understand low-level system programming basics'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 4,
    slug: 'data-science-machine-learning',
    title: 'Data Science & Machine Learning',
    category: 'cse',
    skills: ['Python for Data Science', 'Pandas & NumPy', 'Data Visualization', 'Statistical Analysis'],
    heroImage: '/unsplash/img_bb3411c922.webp',
    tagline: 'Dive deep into data analytics, statistical modeling, and machine learning using Python.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Unlock the power of data. Learn how to clean data, visualize trends, and build predictive machine learning models using industry-standard libraries like Scikit-Learn.',
    outcomes: [
      'Perform Exploratory Data Analysis (EDA)',
      'Build and train predictive models',
      'Evaluate machine learning model performance'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 5,
    slug: 'frontend-web-development',
    title: 'Frontend Web Development',
    category: 'web',
    skills: ['HTML, CSS & JavaScript Fundamentals', 'React, Angular & Vue.js', 'Responsive UI Design', 'Projects, Deployment & SEO'],
    heroImage: '/unsplash/img_d424ff7160.webp',
    tagline: 'Craft beautiful, responsive, and interactive user interfaces.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Focus entirely on the user-facing side of the web. Master HTML semantics, CSS architectures (Tailwind, SCSS), and deep JavaScript manipulation for modern web apps.',
    outcomes: [
      'Build mobile-first responsive websites',
      'Master DOM manipulation and event handling',
      'Create dynamic interfaces with modern JS'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 6,
    slug: 'react-advanced-javascript',
    title: 'React & Advanced JavaScript',
    category: 'web',
    skills: ['Modern ES6+ JavaScript', 'React Hooks & Patterns', 'Redux State Management', 'Performance Optimization'],
    heroImage: '/unsplash/img_fe842954c0.webp',
    tagline: 'Elevate your frontend skills with complex state management and React architecture.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Take your React skills to the next level. Learn custom hooks, complex state architectures with Redux Toolkit, performance optimization techniques, and Next.js foundations.',
    outcomes: [
      'Architect large-scale React applications',
      'Manage global state seamlessly',
      'Optimize React renders and loading performance'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 7,
    slug: 'iot-embedded-systems',
    title: 'IoT & Embedded Systems',
    category: 'embedded',
    skills: ['Arduino & ESP32 Programming', 'Sensor Integration', 'MQTT & IoT Protocols', 'Cloud Dashboards'],
    heroImage: '/unsplash/img_1f9f3c2129.webp',
    tagline: 'Connect the physical world to the digital realm with smart IoT devices.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Learn how to program microcontrollers like ESP32 and Arduino, read sensor data, and transmit it over Wi-Fi using MQTT to cloud dashboards.',
    outcomes: [
      'Interface hardware sensors with microcontrollers',
      'Implement MQTT telemetry',
      'Build remote monitoring dashboards'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 8,
    slug: 'embedded-c-microcontrollers',
    title: 'Embedded C & Microcontrollers',
    category: 'embedded',
    skills: ['Embedded C Basics', 'STM32 Microcontrollers', 'Hardware Interfaces (I2C/SPI)', 'RTOS Concepts'],
    heroImage: 'https://images.unsplash.com/photo-1518972554746-928fb87010a3?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Master the firmware development for modern industrial microcontrollers.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Dive into register-level programming on STM32 microcontrollers. Learn RTOS principles and master I2C, SPI, and UART communication protocols.',
    outcomes: [
      'Write bare-metal Embedded C code',
      'Configure microcontroller peripherals',
      'Understand and implement FreeRTOS'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 9,
    slug: 'vlsi-design-verification',
    title: 'VLSI Design & Verification',
    category: 'ece',
    skills: ['Digital Logic Design', 'Verilog HDL', 'RTL Simulation', 'FPGA Implementation'],
    heroImage: '/unsplash/img_260f49f4d9.webp',
    tagline: 'Design complex silicon chips using hardware description languages.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Learn the principles of VLSI design. Write Verilog HDL code, simulate digital circuits, synthesize RTL, and implement your designs on FPGA boards.',
    outcomes: [
      'Code complex state machines in Verilog',
      'Write robust testbenches for verification',
      'Synthesize and flash FPGAs'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 10,
    slug: 'digital-electronics-communication',
    title: 'Digital Electronics & Communication',
    category: 'ece',
    skills: ['Boolean Algebra & K-Maps', 'Sequential Circuits', 'Analog Modulation', 'Digital Comm Systems'],
    heroImage: '/unsplash/img_88d49977aa.webp',
    tagline: 'Master the core of modern electronics and communication protocols.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Explore fundamental logic design, sequential and combinational circuits, and the essential modulation techniques that power modern wireless communication.',
    outcomes: [
      'Design complex digital logic circuits',
      'Analyze communication signals',
      'Understand modulation encoding techniques'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 11,
    slug: 'power-systems-electrical-machines',
    title: 'Power Systems & Electrical Machines',
    category: 'eee',
    skills: ['Power Generation Basics', 'Transformers & Motors', 'Protection Relays', 'Grid Analysis'],
    heroImage: '/unsplash/img_5f544913cd.webp',
    tagline: 'Understand the macro-level engineering of energy generation and distribution.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Delve into the mechanics of heavy electrical systems. From generation to transmission, learn how transformers, heavy motors, and protection relays operate at scale.',
    outcomes: [
      'Analyze electrical grids and faults',
      'Understand heavy motor design and mechanics',
      'Implement power protection systems'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  },
  {
    id: 12,
    slug: 'autocad-2d-engineering-drawing',
    title: 'AutoCAD 2D & Engineering Drawing',
    category: 'civil',
    skills: ['AutoCAD 2024 Fundamentals', 'Drafting & Dimensioning', 'Civil Floor Plans', 'Mechanical Parts Drawing'],
    heroImage: '/unsplash/img_2806d1b3ea.webp',
    tagline: 'Draft professional engineering and architectural designs with precision.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On Practical Learning',
      mentorshipDesc: 'Guidance from Industry Experts',
      careerDesc: 'Placement Assistance & Certification'
    },
    about: 'Master industry-standard 2D drafting. Learn to create precise floor plans, mechanical schematics, and structural layouts using the latest AutoCAD tools.',
    outcomes: [
      'Navigate and use AutoCAD efficiently',
      'Draw and dimension professional floor plans',
      'Create detailed mechanical part designs'
    ],
    curriculum: [{ module: 'Coming Soon', topics: ['Syllabus to be uploaded.'] }],
    projects: [],
    testimonials: []
  }
];
