import {
  Code, Database, Layout, TestTube, Cpu, Zap, Layers, PenTool,
  ChevronDown, ChevronUp, CheckCircle2, Clock, Target, Award, BookOpen,
  Briefcase, Star, Download, TrendingUp, Search, Users,
  Rocket, ArrowRight, Play, Flame, Trophy,
  Lightbulb, Wrench, GitBranch, Map, CheckCircle,
  ChevronRight, X, Info, PlayCircle, FileText, Package, CalendarDays,
  GraduationCap, Building2, MessageSquare,
} from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

type CourseTab = 'curriculum' | 'projects' | 'career' | 'tools';

const PHASES = ['Foundation', 'Core', 'Advanced', 'Capstone'] as const;

const PHASE_CONFIG: Record<string, { bg: string; border: string; text: string; dot: string; gradient: string }> = {
  Foundation: { bg: 'bg-blue-50 dark:bg-blue-900/40',  border: 'border-blue-200 dark:border-blue-700/50',  text: 'text-blue-600 dark:text-blue-300',  dot: 'bg-blue-500 dark:bg-blue-400',  gradient: 'from-blue-600 to-blue-500' },
  Core:       { bg: 'bg-blue-50 dark:bg-blue-800/30',  border: 'border-blue-200 dark:border-blue-600/40',  text: 'text-blue-600 dark:text-blue-300',  dot: 'bg-blue-500 dark:bg-blue-400',  gradient: 'from-blue-600 to-cyan-500' },
  Advanced:   { bg: 'bg-cyan-50 dark:bg-cyan-900/30',  border: 'border-cyan-200 dark:border-cyan-700/40',  text: 'text-cyan-600 dark:text-cyan-300',  dot: 'bg-cyan-500 dark:bg-cyan-400',  gradient: 'from-cyan-600 to-blue-500' },
  Capstone:   { bg: 'bg-blue-50 dark:bg-cyan-800/20',  border: 'border-blue-200 dark:border-cyan-600/30',  text: 'text-blue-600 dark:text-cyan-300',  dot: 'bg-blue-500 dark:bg-cyan-400',  gradient: 'from-blue-500 to-cyan-400' },
};

export const courses = [
  {
    id: 'java',
    title: 'Java Programming',
    shortTitle: 'JAVA',
    icon: Code,
    tagline: 'Build robust backend applications using the world\'s most widely used language',
    difficulty: 'beginner' as const,
    duration: '12 Weeks',
    hoursPerWeek: '8–10 hrs/wk',
    rating: 4.8,
    students: '520+',
    jobSalary: '₹4–10 LPA',
    hotBadge: '🔥 Most Popular',
    mentor: { name: 'Kiran Sharma', role: 'Sr. Java Developer', company: 'TCS', exp: '8 yrs exp' },
    prerequisites: ['Basic programming knowledge', 'Understanding of variables & loops'],
    learningOutcomes: [
      'Master Java fundamentals and all OOP concepts',
      'Build database-driven applications with JDBC',
      'Implement multithreading & exception handling',
      'Create production-ready CRUD applications',
      'Write clean, maintainable enterprise-level code',
    ],
    skillsGained: ['Java SE', 'OOP Concepts', 'JDBC', 'Collections', 'Multithreading', 'Exception Handling'],
    tools: ['IntelliJ IDEA', 'Eclipse', 'Maven', 'MySQL', 'Git', 'Postman'],
    careerPaths: ['Java Developer', 'Backend Developer', 'Software Engineer', 'Android Developer'],
    topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL'],
    interviewTopics: ['OOP Concepts', 'Collections Framework', 'Exception Handling', 'Multithreading', 'JDBC & SQL'],
    projectExamples: [
      { name: 'Student Management System', desc: 'Full CRUD application using JDBC and MySQL', level: 'Mid' },
      { name: 'E-commerce Backend', desc: 'REST API design with database integration', level: 'Advanced' },
      { name: 'Library Management System', desc: 'OOP design with file handling', level: 'Beginner' },
      { name: 'Banking Console App', desc: 'Collections and Threads for real-time simulation', level: 'Mid' },
    ],
    certification: 'Scaro Technologies Java Developer Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'Java Basics',               subtitle: 'JDK, JVM, variables and data types',                 topics: ['JDK Setup', 'JVM Architecture', 'Data Types', 'Type Casting'] },
      { week: 2,  phase: 'Foundation', title: 'Control Flow',               subtitle: 'Operators, control statements and loops',            topics: ['Arithmetic Ops', 'if / else / switch', 'for / while loops', 'break & continue'] },
      { week: 3,  phase: 'Foundation', title: 'Arrays, Strings & Methods',  subtitle: 'Arrays, String class and method overloading',        topics: ['1D & 2D Arrays', 'String methods', 'StringBuilder', 'Method overloading'] },
      { week: 4,  phase: 'Core',       title: 'OOP Fundamentals',           subtitle: 'Classes, objects, constructors and inheritance',     topics: ['Classes & Objects', 'this keyword', 'Constructors', 'Inheritance types'] },
      { week: 5,  phase: 'Core',       title: 'OOP Advanced Concepts',      subtitle: 'Polymorphism, abstraction and interfaces',           topics: ['Method overriding', 'Abstract class', 'Interfaces', 'Encapsulation'] },
      { week: 6,  phase: 'Core',       title: 'Exception Handling',         subtitle: 'Exceptions, packages and access modifiers',          topics: ['try / catch / finally', 'Custom exceptions', 'Packages', 'Access modifiers'] },
      { week: 7,  phase: 'Core',       title: 'Collections Framework',      subtitle: 'List, Set, Map and Iterator deep dive',              topics: ['ArrayList', 'LinkedList', 'HashMap', 'TreeSet & Iterator'] },
      { week: 8,  phase: 'Advanced',   title: 'Multithreading',             subtitle: 'Concurrency basics and thread lifecycle',            topics: ['Thread class', 'Runnable', 'Synchronization', 'Thread lifecycle'] },
      { week: 9,  phase: 'Advanced',   title: 'File Handling',              subtitle: 'File I/O and object serialization',                  topics: ['File I/O', 'BufferedReader', 'Serialization', 'Object streams'] },
      { week: 10, phase: 'Advanced',   title: 'JDBC & Databases',           subtitle: 'Database connection and CRUD queries',               topics: ['JDBC setup', 'PreparedStatement', 'ResultSet', 'Connection pooling'] },
      { week: 11, phase: 'Capstone',   title: 'Mini Project',               subtitle: 'Full CRUD application built from scratch',           topics: ['Project planning', 'DB design', 'Implementation', 'Testing'] },
      { week: 12, phase: 'Capstone',   title: 'Interview Preparation',      subtitle: 'Top questions, mock tests and revision',             topics: ['Top 50 Q&A', 'Coding challenges', 'Mock interview', 'Certificate'] },
    ],
  },
  {
    id: 'python',
    title: 'Python Programming',
    shortTitle: 'PYTHON',
    icon: Database,
    tagline: 'From scripting to data science — master the most versatile language in the world',
    difficulty: 'beginner' as const,
    duration: '12 Weeks',
    hoursPerWeek: '8–10 hrs/wk',
    rating: 4.9,
    students: '650+',
    jobSalary: '₹4–12 LPA',
    hotBadge: '⭐ Top Rated',
    mentor: { name: 'Priya Nair', role: 'Data Engineer', company: 'Infosys', exp: '6 yrs exp' },
    prerequisites: ['No prior programming needed', 'Basic computer skills'],
    learningOutcomes: [
      'Master Python syntax, data structures and OOP',
      'Perform data analysis with Pandas and NumPy',
      'Create visualizations with Matplotlib and Seaborn',
      'Automate repetitive tasks and build CLI tools',
      'Build real-world data analysis projects end-to-end',
    ],
    skillsGained: ['Python 3', 'NumPy', 'Pandas', 'Matplotlib', 'OOP', 'Automation'],
    tools: ['PyCharm', 'Jupyter Notebook', 'VS Code', 'Anaconda', 'Git'],
    careerPaths: ['Python Developer', 'Data Analyst', 'Automation Engineer', 'ML Engineer'],
    topRecruiters: ['Amazon', 'Flipkart', 'Infosys', 'Mu Sigma', 'Accenture'],
    interviewTopics: ['Data Structures', 'OOP in Python', 'Pandas & NumPy', 'File Handling', 'OOPS Design'],
    projectExamples: [
      { name: 'Data Analysis Dashboard', desc: 'Pandas and Matplotlib on a real dataset', level: 'Mid' },
      { name: 'Web Scraper', desc: 'BeautifulSoup and requests for data extraction', level: 'Mid' },
      { name: 'Task Automation Scripts', desc: 'Automating file and system operations', level: 'Beginner' },
      { name: 'EDA on Real Dataset', desc: 'Full exploratory data analysis pipeline', level: 'Advanced' },
    ],
    certification: 'Scaro Technologies Python Developer Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'Python Fundamentals',        subtitle: 'Syntax, variables, data types and I/O',              topics: ['Python setup', 'Variables', 'Data types', 'Input / Output'] },
      { week: 2,  phase: 'Foundation', title: 'Data Collections',           subtitle: 'Lists, tuples, sets and dictionaries',               topics: ['List operations', 'Tuple immutability', 'Set operations', 'Dict methods'] },
      { week: 3,  phase: 'Foundation', title: 'Control Structures',         subtitle: 'Conditionals, loops and comprehensions',             topics: ['if / elif / else', 'for loop', 'while loop', 'List comprehensions'] },
      { week: 4,  phase: 'Core',       title: 'Functions & Lambdas',        subtitle: 'def, lambda, recursion and special args',            topics: ['def & return', 'lambda functions', 'Recursion', '*args / **kwargs'] },
      { week: 5,  phase: 'Core',       title: 'Object-Oriented Python',     subtitle: 'Classes, inheritance and polymorphism',              topics: ['Classes & objects', 'Inheritance', 'Polymorphism', 'Dunder methods'] },
      { week: 6,  phase: 'Core',       title: 'File Handling & Exceptions', subtitle: 'File I/O, CSV handling and error management',        topics: ['open / read / write', 'CSV handling', 'try / except', 'Custom exceptions'] },
      { week: 7,  phase: 'Core',       title: 'Modules & Packages',         subtitle: 'import system, pip and virtual environments',        topics: ['import system', 'Standard library', 'pip install', 'Virtual env'] },
      { week: 8,  phase: 'Advanced',   title: 'NumPy',                      subtitle: 'Arrays, vectorization and linear algebra',           topics: ['ndarray', 'Vectorization', 'Slicing', 'Linear algebra'] },
      { week: 9,  phase: 'Advanced',   title: 'Pandas',                     subtitle: 'DataFrames, groupby and data merging',               topics: ['DataFrame ops', 'groupby', 'merge / join', 'Missing data'] },
      { week: 10, phase: 'Advanced',   title: 'Data Visualization',         subtitle: 'Matplotlib, Seaborn and advanced charting',          topics: ['Line / bar charts', 'Heatmaps', 'Subplots', 'Seaborn'] },
      { week: 11, phase: 'Capstone',   title: 'Capstone Project',           subtitle: 'Data analysis or automation project',                topics: ['Dataset selection', 'EDA', 'Visualization', 'Final report'] },
      { week: 12, phase: 'Capstone',   title: 'Interview Preparation',      subtitle: 'HackerRank challenges and mock Q&A',                 topics: ['HackerRank', 'Mock tests', 'Top 50 Q&A', 'Certificate'] },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Web Dev',
    shortTitle: 'FRONTEND',
    icon: Layout,
    tagline: 'Build stunning, responsive websites using modern HTML, CSS and JavaScript',
    difficulty: 'beginner' as const,
    duration: '12 Weeks',
    hoursPerWeek: '10–12 hrs/wk',
    rating: 4.7,
    students: '780+',
    jobSalary: '₹3–9 LPA',
    hotBadge: '🚀 High Demand',
    mentor: { name: 'Arun Verma', role: 'Frontend Lead', company: 'Wipro', exp: '7 yrs exp' },
    prerequisites: ['Basic computer literacy', 'Interest in web development'],
    learningOutcomes: [
      'Build fully responsive websites from scratch',
      'Master modern CSS — Flexbox, Grid and animations',
      'Create interactive web apps with JavaScript',
      'Deploy professional portfolio websites online',
      'Understand Chrome DevTools and performance basics',
    ],
    skillsGained: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design', 'DOM API', 'Fetch API'],
    tools: ['VS Code', 'Chrome DevTools', 'Git', 'Figma', 'Netlify', 'GitHub'],
    careerPaths: ['Frontend Developer', 'Web Developer', 'UI Developer', 'React Developer (next step)'],
    topRecruiters: ['TCS', 'Capgemini', 'Publicis Sapient', 'Nagarro', 'Mphasis'],
    interviewTopics: ['Box Model & Specificity', 'JavaScript Closures', 'Event Loop', 'DOM Manipulation', 'ES6+ Features'],
    projectExamples: [
      { name: 'Personal Portfolio Website', desc: 'Responsive site with HTML, CSS and JS', level: 'Beginner' },
      { name: 'E-commerce Landing Page', desc: 'Fully responsive with smooth animations', level: 'Mid' },
      { name: 'Interactive Dashboard', desc: 'DOM manipulation with Fetch API data', level: 'Mid' },
      { name: 'Weather App', desc: 'Real API integration with a dynamic UI', level: 'Advanced' },
    ],
    certification: 'Scaro Technologies Frontend Developer Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'HTML Fundamentals',          subtitle: 'Tags, attributes and document structure',            topics: ['Semantic tags', 'Headings & paragraphs', 'Links & images', 'Lists'] },
      { week: 2,  phase: 'Foundation', title: 'HTML Forms & Tables',        subtitle: 'Forms, tables and semantic HTML5 elements',          topics: ['Form elements', 'Table layout', 'HTML5 semantics', 'Accessibility'] },
      { week: 3,  phase: 'Foundation', title: 'CSS Basics',                 subtitle: 'Selectors, box model and core properties',           topics: ['Selectors', 'Box model', 'Colors & fonts', 'Specificity'] },
      { week: 4,  phase: 'Core',       title: 'CSS Layout Systems',         subtitle: 'Flexbox and CSS Grid layout mastery',                topics: ['flex-container', 'flex-item', 'grid-template', 'Grid areas'] },
      { week: 5,  phase: 'Core',       title: 'Responsive Design',          subtitle: 'Mobile-first approach and media queries',            topics: ['Mobile-first', 'Breakpoints', 'Fluid layouts', 'Viewport units'] },
      { week: 6,  phase: 'Core',       title: 'JavaScript Basics',          subtitle: 'Variables, data types, operators and loops',         topics: ['var / let / const', 'Data types', 'Operators', 'Conditionals & loops'] },
      { week: 7,  phase: 'Core',       title: 'Functions & DOM',            subtitle: 'Functions, scope, closures and the DOM API',         topics: ['Functions', 'Scope & closure', 'document API', 'querySelector'] },
      { week: 8,  phase: 'Advanced',   title: 'Events & Form Validation',   subtitle: 'Event listeners, delegation and validation',         topics: ['Event types', 'Event delegation', 'preventDefault', 'Form validation'] },
      { week: 9,  phase: 'Advanced',   title: 'Modern JavaScript (ES6+)',   subtitle: 'Arrow functions, destructuring and more',            topics: ['Arrow functions', 'Destructuring', 'Spread / rest', 'Template literals'] },
      { week: 10, phase: 'Advanced',   title: 'Fetch API & Async JS',       subtitle: 'Promises, async/await and JSON handling',            topics: ['fetch()', 'Promises', 'async / await', 'JSON handling'] },
      { week: 11, phase: 'Capstone',   title: 'Portfolio Project',          subtitle: 'Build, style and deploy your portfolio site',        topics: ['Design mockup', 'Full build', 'Responsive', 'Animations'] },
      { week: 12, phase: 'Capstone',   title: 'Deployment & Interview Prep', subtitle: 'Deploy to Netlify and crack the interview',         topics: ['Page speed', 'Netlify deploy', 'GitHub Pages', 'Mock interviews'] },
    ],
  },
  {
    id: 'testing',
    title: 'Software Testing',
    shortTitle: 'TESTING',
    icon: TestTube,
    tagline: 'Ensure software quality with manual and automated testing using industry tools',
    difficulty: 'intermediate' as const,
    duration: '12 Weeks',
    hoursPerWeek: '8–10 hrs/wk',
    rating: 4.6,
    students: '340+',
    jobSalary: '₹4–9 LPA',
    hotBadge: '📋 High Hiring',
    mentor: { name: 'Deepa Raj', role: 'QA Lead', company: 'Cognizant', exp: '9 yrs exp' },
    prerequisites: ['Basic software understanding', 'SDLC knowledge is helpful'],
    learningOutcomes: [
      'Master manual and automated testing techniques',
      'Write effective test cases and professional bug reports',
      'Use Selenium WebDriver for end-to-end automation',
      'Work efficiently in Agile and Scrum environments',
      'Build and maintain reusable automation frameworks',
    ],
    skillsGained: ['Manual Testing', 'Selenium WebDriver', 'TestNG', 'Agile / Scrum', 'JIRA', 'API Testing'],
    tools: ['Selenium', 'JIRA', 'TestNG', 'JUnit', 'Postman', 'Eclipse'],
    careerPaths: ['QA Engineer', 'Test Automation Engineer', 'SDET', 'QA Analyst'],
    topRecruiters: ['Cognizant', 'Capgemini', 'IBM', 'HCL', 'Wipro'],
    interviewTopics: ['Test Case Design', 'Bug Lifecycle', 'Selenium Locators', 'TestNG Annotations', 'API Testing'],
    projectExamples: [
      { name: 'E-commerce Test Suite', desc: 'Complete manual test cases for an online store', level: 'Mid' },
      { name: 'Selenium Automation Framework', desc: 'Page Object Model with TestNG', level: 'Advanced' },
      { name: 'API Testing Suite', desc: 'Postman collections with assertions', level: 'Mid' },
      { name: 'Regression Test Pack', desc: 'End-to-end automated regression suite', level: 'Advanced' },
    ],
    certification: 'Scaro Technologies Software Testing Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'SDLC & STLC',                subtitle: 'Software development and testing life cycles',        topics: ['SDLC phases', 'STLC phases', 'Testing types', 'QA vs QC'] },
      { week: 2,  phase: 'Foundation', title: 'Test Case Design',            subtitle: 'Test scenarios, cases and design techniques',         topics: ['Test scenarios', 'Test cases', 'Boundary value', 'Equivalence partitioning'] },
      { week: 3,  phase: 'Foundation', title: 'Defect Life Cycle',           subtitle: 'Bug attributes, severity, priority and JIRA',         topics: ['Bug attributes', 'Severity vs Priority', 'JIRA basics', 'Bug reporting'] },
      { week: 4,  phase: 'Core',       title: 'Functional Testing',          subtitle: 'Functional, smoke, sanity and regression testing',     topics: ['Smoke testing', 'Sanity testing', 'Regression cycles', 'Test execution'] },
      { week: 5,  phase: 'Core',       title: 'Non-Functional Testing',      subtitle: 'Performance, security and compatibility testing',      topics: ['Performance basics', 'Security testing', 'Usability', 'Compatibility'] },
      { week: 6,  phase: 'Core',       title: 'Agile & Scrum for QA',        subtitle: 'Sprint testing, ceremonies and user stories',          topics: ['Scrum ceremonies', 'Sprint testing', 'User stories', 'Definition of Done'] },
      { week: 7,  phase: 'Advanced',   title: 'Selenium Basics',             subtitle: 'Setup, browser drivers and element locators',          topics: ['Selenium setup', 'Browser drivers', 'Locators', 'First test script'] },
      { week: 8,  phase: 'Advanced',   title: 'Selenium Advanced',           subtitle: 'WebElement actions, waits and alerts handling',        topics: ['WebElement actions', 'Explicit waits', 'Dropdowns & Alerts', 'iFrames'] },
      { week: 9,  phase: 'Advanced',   title: 'TestNG Framework',            subtitle: 'Annotations, groups and DataProvider usage',           topics: ['@Test annotation', 'Groups', 'DataProvider', 'TestNG XML'] },
      { week: 10, phase: 'Advanced',   title: 'Automation Framework Design', subtitle: 'POM pattern, reporting and CI integration',           topics: ['POM design', 'Reusable methods', 'Reporting', 'CI integration'] },
      { week: 11, phase: 'Capstone',   title: 'Automation Project',          subtitle: 'Build a complete test automation suite',               topics: ['Test planning', 'Framework build', 'Test execution', 'Report generation'] },
      { week: 12, phase: 'Capstone',   title: 'Interview Preparation',       subtitle: 'Scenario-based questions and mock sessions',           topics: ['Top 50 Q&A', 'Scenario-based', 'Resume tips', 'Certificate'] },
    ],
  },
  {
    id: 'iot',
    title: 'Internet of Things',
    shortTitle: 'IoT',
    icon: Zap,
    tagline: 'Connect the physical world to the cloud — build smart systems with Arduino and ESP32',
    difficulty: 'intermediate' as const,
    duration: '12 Weeks',
    hoursPerWeek: '10–12 hrs/wk',
    rating: 4.8,
    students: '290+',
    jobSalary: '₹5–11 LPA',
    hotBadge: '📡 Industry Boom',
    mentor: { name: 'Sandeep Reddy', role: 'IoT Architect', company: 'Bosch', exp: '10 yrs exp' },
    prerequisites: ['Basic electronics knowledge', 'C programming basics'],
    learningOutcomes: [
      'Design and build complete IoT systems from scratch',
      'Program Arduino and ESP32 microcontrollers',
      'Implement cloud-connected IoT with real dashboards',
      'Use IoT protocols: MQTT, HTTP and CoAP',
      'Apply IoT security fundamentals in real projects',
    ],
    skillsGained: ['Arduino', 'ESP32', 'MQTT Protocol', 'Sensor Integration', 'Cloud IoT', 'Node-RED'],
    tools: ['Arduino IDE', 'ThingSpeak', 'Blynk', 'MQTT Broker', 'Node-RED', 'Fritzing'],
    careerPaths: ['IoT Developer', 'Embedded IoT Engineer', 'IoT Solutions Architect', 'Smart Systems Engineer'],
    topRecruiters: ['Bosch', 'Siemens', 'Honeywell', 'L&T', 'Tata Technologies'],
    interviewTopics: ['IoT Architecture', 'MQTT Protocol', 'Sensor Interfacing', 'ESP32 Programming', 'Cloud Platforms'],
    projectExamples: [
      { name: 'Smart Home System', desc: 'ESP32 and Blynk app for home automation', level: 'Mid' },
      { name: 'Weather Monitoring Station', desc: 'Sensors with ThingSpeak cloud dashboard', level: 'Beginner' },
      { name: 'Industrial IoT Dashboard', desc: 'MQTT and Node-RED real-time monitoring', level: 'Advanced' },
      { name: 'Smart Agriculture System', desc: 'Soil moisture with cloud alert system', level: 'Advanced' },
    ],
    certification: 'Scaro Technologies IoT Developer Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'IoT Fundamentals',            subtitle: 'Architecture, layers and real-world use cases',       topics: ['IoT layers', 'Use cases', 'Edge vs Cloud', 'IoT ecosystem'] },
      { week: 2,  phase: 'Foundation', title: 'Arduino Basics',              subtitle: 'GPIO programming and the Arduino IDE',                topics: ['Arduino IDE', 'Digital I/O', 'PWM', 'Serial monitor'] },
      { week: 3,  phase: 'Foundation', title: 'Sensors & Actuators',         subtitle: 'Interfacing real sensors and output devices',         topics: ['DHT11 / DHT22', 'Ultrasonic', 'Servo motor', 'Relay module'] },
      { week: 4,  phase: 'Core',       title: 'ESP32 / ESP8266',             subtitle: 'Wi-Fi enabled microcontroller programming',           topics: ['ESP32 pinout', 'Wi-Fi setup', 'HTTP requests', 'JSON parsing'] },
      { week: 5,  phase: 'Core',       title: 'Communication Protocols',     subtitle: 'UART, I2C, SPI and Bluetooth BLE',                    topics: ['UART', 'I2C', 'SPI', 'Bluetooth BLE'] },
      { week: 6,  phase: 'Core',       title: 'IoT Messaging Protocols',     subtitle: 'MQTT, HTTP and CoAP in depth',                        topics: ['MQTT broker', 'Pub / Sub model', 'REST APIs', 'QoS levels'] },
      { week: 7,  phase: 'Advanced',   title: 'Cloud Platforms',             subtitle: 'ThingSpeak, Blynk and data logging setup',            topics: ['ThingSpeak fields', 'Blynk app', 'Data logging', 'Alerts'] },
      { week: 8,  phase: 'Advanced',   title: 'Node-RED',                    subtitle: 'Visual flow programming and dashboards',              topics: ['Flow editor', 'MQTT node', 'Dashboard UI', 'Function nodes'] },
      { week: 9,  phase: 'Advanced',   title: 'IoT Security',                subtitle: 'Authentication, encryption and secure OTA',           topics: ['Auth & encryption', 'TLS / SSL', 'Secure OTA', 'Vulnerability basics'] },
      { week: 10, phase: 'Advanced',   title: 'Smart System Design',         subtitle: 'Edge computing and low-power architecture',           topics: ['System architecture', 'Offline processing', 'Low power', 'Scalability'] },
      { week: 11, phase: 'Capstone',   title: 'Capstone Project',            subtitle: 'Build and deploy a complete IoT system',              topics: ['Problem statement', 'Circuit design', 'Cloud integration', 'Demo'] },
      { week: 12, phase: 'Capstone',   title: 'Interview Preparation',       subtitle: 'Optimization, documentation and mock Q&A',            topics: ['Power optimization', 'Documentation', 'Top Q&A', 'Certificate'] },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    shortTitle: 'EMBEDDED',
    icon: Cpu,
    tagline: 'Master microcontrollers, RTOS and hardware-software integration for real systems',
    difficulty: 'advanced' as const,
    duration: '12 Weeks',
    hoursPerWeek: '12–15 hrs/wk',
    rating: 4.7,
    students: '180+',
    jobSalary: '₹6–14 LPA',
    hotBadge: '🏆 Premium Track',
    mentor: { name: 'Rahul Mishra', role: 'Firmware Engineer', company: 'Qualcomm', exp: '11 yrs exp' },
    prerequisites: ['C programming', 'Digital electronics', 'Microcontroller basics'],
    learningOutcomes: [
      'Design embedded systems with microcontrollers',
      'Master Embedded C and real-time programming',
      'Implement communication protocols (UART, SPI, I2C)',
      'Work with RTOS for complex multi-task systems',
      'Debug hardware and firmware using professional tools',
    ],
    skillsGained: ['Embedded C', 'Microcontrollers', 'RTOS', 'UART / SPI / I2C', 'Debugging', 'Low-level Programming'],
    tools: ['Keil uVision', 'STM32CubeIDE', 'MPLAB X', 'Proteus', 'Logic Analyzer', 'Oscilloscope'],
    careerPaths: ['Embedded Engineer', 'Firmware Developer', 'Hardware Engineer', 'BSP Developer'],
    topRecruiters: ['Qualcomm', 'Texas Instruments', 'NXP', 'STMicroelectronics', 'Intel'],
    interviewTopics: ['Memory Mapped I/O', 'Interrupt Handling', 'RTOS Concepts', 'Communication Protocols', 'Bit Manipulation'],
    projectExamples: [
      { name: 'RTOS-based System', desc: 'FreeRTOS with multi-task scheduling', level: 'Advanced' },
      { name: 'Industrial Controller', desc: 'PLC-like logic with a microcontroller', level: 'Advanced' },
      { name: 'Serial Communication Module', desc: 'UART and SPI protocol integration', level: 'Mid' },
      { name: 'Motor Speed Controller', desc: 'PWM and feedback loop control', level: 'Mid' },
    ],
    certification: 'Scaro Technologies Embedded Systems Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'Embedded Systems Overview',   subtitle: 'Architecture, MCU vs MPU and peripherals',           topics: ['MCU vs MPU', 'Harvard / Von Neumann', 'Peripherals', 'Memory types'] },
      { week: 2,  phase: 'Foundation', title: 'Microcontroller Registers',   subtitle: 'Registers, memory map and toolchain setup',          topics: ['Register architecture', 'Flash vs SRAM', 'Datasheet reading', 'Toolchain setup'] },
      { week: 3,  phase: 'Foundation', title: 'Embedded C Fundamentals',     subtitle: 'Volatile, pointers and bit manipulation',            topics: ['volatile keyword', 'Bit manipulation', 'Pointers', 'Memory model'] },
      { week: 4,  phase: 'Core',       title: 'GPIO Programming',            subtitle: 'Digital input / output and port manipulation',       topics: ['GPIO configuration', 'LED / Button', 'Pull-up / Pull-down', 'Port manipulation'] },
      { week: 5,  phase: 'Core',       title: 'Timers & PWM',                subtitle: 'Timer modes, input capture and PWM generation',      topics: ['Timer modes', 'Input capture', 'PWM generation', 'Frequency measurement'] },
      { week: 6,  phase: 'Core',       title: 'Interrupt Handling',          subtitle: 'ISR writing, NVIC configuration and debouncing',     topics: ['ISR writing', 'Priority levels', 'NVIC config', 'Debouncing'] },
      { week: 7,  phase: 'Advanced',   title: 'UART, SPI & I2C',             subtitle: 'Serial communication protocol deep dive',            topics: ['UART config', 'SPI master / slave', 'I2C addressing', 'Protocol debugging'] },
      { week: 8,  phase: 'Advanced',   title: 'ADC, DAC & Sensors',          subtitle: 'Analog-to-digital conversion and sensor calibration', topics: ['ADC sampling', 'DAC output', 'Sensor calibration', 'Signal conditioning'] },
      { week: 9,  phase: 'Advanced',   title: 'RTOS Fundamentals',           subtitle: 'FreeRTOS tasks, queues and semaphores',              topics: ['FreeRTOS basics', 'Task creation', 'Queues', 'Mutexes'] },
      { week: 10, phase: 'Advanced',   title: 'Embedded Debugging',          subtitle: 'JTAG / SWD, breakpoints and logic analyzer',         topics: ['JTAG / SWD', 'Breakpoints', 'Logic analyzer', 'Common bugs'] },
      { week: 11, phase: 'Capstone',   title: 'Capstone Project',            subtitle: 'Hardware design and firmware implementation',         topics: ['Spec definition', 'Hardware design', 'Firmware', 'Testing'] },
      { week: 12, phase: 'Capstone',   title: 'Interview Preparation',       subtitle: 'Code optimization, power profiling and mock Q&A',    topics: ['Code optimization', 'Power profiling', 'Top Q&A', 'Certificate'] },
    ],
  },
  {
    id: 'vlsi',
    title: 'VLSI Design',
    shortTitle: 'VLSI',
    icon: Layers,
    tagline: 'Design digital chips with Verilog HDL — from logic gates to complex processors',
    difficulty: 'advanced' as const,
    duration: '12 Weeks',
    hoursPerWeek: '12–15 hrs/wk',
    rating: 4.9,
    students: '120+',
    jobSalary: '₹8–20 LPA',
    hotBadge: '💎 Highest CTC',
    mentor: { name: 'Arjun Kumar', role: 'VLSI Engineer', company: 'Intel', exp: '12 yrs exp' },
    prerequisites: ['Digital electronics', 'Logic design', 'Basic HDL knowledge'],
    learningOutcomes: [
      'Design digital circuits using Verilog HDL',
      'Perform RTL simulation and synthesis',
      'Understand CMOS technology and VLSI design flow',
      'Create complex sequential and combinational circuits',
      'Implement designs on FPGA and analyze timing reports',
    ],
    skillsGained: ['Verilog HDL', 'CMOS Design', 'RTL Synthesis', 'Timing Analysis', 'FPGA', 'Simulation'],
    tools: ['ModelSim', 'Xilinx Vivado', 'Quartus Prime', 'Cadence Virtuoso', 'Synopsys DC'],
    careerPaths: ['VLSI Engineer', 'ASIC Design Engineer', 'RTL Designer', 'Verification Engineer'],
    topRecruiters: ['Intel', 'Qualcomm', 'MediaTek', 'Samsung Semiconductor', 'Broadcom'],
    interviewTopics: ['RTL Coding', 'FSM Design', 'Setup / Hold Timing', 'CMOS Inverter', 'Synthesis Constraints'],
    projectExamples: [
      { name: '4-bit ALU Design', desc: 'Arithmetic Logic Unit coded in Verilog', level: 'Mid' },
      { name: '8-bit RISC Processor', desc: 'Custom RISC core design and simulation', level: 'Advanced' },
      { name: 'SRAM Memory Controller', desc: 'Full memory controller design', level: 'Advanced' },
      { name: 'UART Controller IP', desc: 'Serial communication IP block', level: 'Mid' },
    ],
    certification: 'Scaro Technologies VLSI Design Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'VLSI & Design Flow',           subtitle: 'Abstraction levels, ASIC vs FPGA and CAD tools',     topics: ['VLSI history', 'Design abstraction', 'ASIC vs FPGA', 'CAD tools intro'] },
      { week: 2,  phase: 'Foundation', title: 'CMOS Basics',                  subtitle: 'CMOS inverter, NAND / NOR and propagation delay',    topics: ['CMOS inverter', 'NAND / NOR gates', 'Static CMOS', 'Propagation delay'] },
      { week: 3,  phase: 'Foundation', title: 'Logic Gates & Boolean Algebra', subtitle: 'SOP, Karnaugh maps and logic minimization',          topics: ['Sum of products', 'Karnaugh maps', 'Logic minimization', 'Gate equivalence'] },
      { week: 4,  phase: 'Core',       title: 'Combinational Circuits',       subtitle: 'MUX, encoders, adders and comparators',              topics: ['Multiplexers', 'Encoders / Decoders', 'Adder circuits', 'Comparators'] },
      { week: 5,  phase: 'Core',       title: 'Sequential Circuits',          subtitle: 'Flip-flops, registers and counters',                 topics: ['SR / D / JK FF', 'Registers', 'Counters', 'Shift registers'] },
      { week: 6,  phase: 'Core',       title: 'Verilog HDL Basics',           subtitle: 'Modules, data types, assign and always blocks',      topics: ['Modules', 'Data types', 'assign', 'always block'] },
      { week: 7,  phase: 'Core',       title: 'Verilog Modeling Styles',      subtitle: 'Gate-level, dataflow, behavioral and structural',    topics: ['Gate-level', 'Dataflow', 'Behavioral', 'Structural'] },
      { week: 8,  phase: 'Advanced',   title: 'Simulation & Testbenches',     subtitle: 'ModelSim, waveforms and test vectors',               topics: ['Testbench writing', 'Waveform analysis', 'Test vectors', 'Verification basics'] },
      { week: 9,  phase: 'Advanced',   title: 'RTL Synthesis',                subtitle: 'Synthesis flow, SDC constraints and netlist',        topics: ['Synthesis flow', 'Area / Power / Timing', 'SDC constraints', 'Netlist analysis'] },
      { week: 10, phase: 'Advanced',   title: 'FPGA Implementation',          subtitle: 'Vivado flow, bitstream generation and timing reports', topics: ['Vivado flow', 'Bitstream gen', 'Timing reports', 'Optimization'] },
      { week: 11, phase: 'Capstone',   title: 'Capstone Project',             subtitle: 'Design, simulate and synthesize an ALU or Processor', topics: ['Specification', 'RTL design', 'Simulation', 'Synthesis'] },
      { week: 12, phase: 'Capstone',   title: 'Interview Preparation',        subtitle: 'RTL coding tests, conceptual Q&A and resume',        topics: ['RTL coding tests', 'Conceptual Q&A', 'Resume guidance', 'Certificate'] },
    ],
  },
  {
    id: 'autocad',
    title: 'AutoCAD 2D Design',
    shortTitle: 'AUTOCAD',
    icon: PenTool,
    tagline: 'Create professional 2D drawings for civil, electrical and mechanical engineering',
    difficulty: 'beginner' as const,
    duration: '12 Weeks',
    hoursPerWeek: '8–10 hrs/wk',
    rating: 4.5,
    students: '410+',
    jobSalary: '₹3–7 LPA',
    hotBadge: '📐 Core Skill',
    mentor: { name: 'Meera Pillai', role: 'CAD Manager', company: 'L&T', exp: '8 yrs exp' },
    prerequisites: ['Basic computer skills', 'Understanding of technical drawings'],
    learningOutcomes: [
      'Create professional 2D technical drawings confidently',
      'Master the AutoCAD interface and all drawing tools',
      'Design electrical layouts and mechanical assemblies',
      'Apply proper dimensioning, annotations and standards',
      'Export and plot drawings for professional use',
    ],
    skillsGained: ['AutoCAD 2D', 'Technical Drawing', 'Dimensioning', 'Layer Management', 'Blocks & Attributes'],
    tools: ['AutoCAD 2024', 'AutoCAD LT', 'DWG TrueView', 'PDF Plotter'],
    careerPaths: ['CAD Designer', 'Draftsman', 'Design Engineer', 'CAD Operator'],
    topRecruiters: ['L&T', 'Tata Projects', 'Shapoorji Pallonji', 'NTPC', 'ONGC'],
    interviewTopics: ['AutoCAD Commands', 'Layer Management', 'Dimensioning Standards', 'Block Usage', 'Plotting Setup'],
    projectExamples: [
      { name: 'Building Floor Plan', desc: 'Complete architectural 2D drawing set', level: 'Mid' },
      { name: 'Electrical Single-Line Diagram', desc: 'Panel layout with symbol library', level: 'Beginner' },
      { name: 'Mechanical Assembly Drawing', desc: 'Part drawings with bill of materials', level: 'Mid' },
      { name: 'Civil Site Plan', desc: 'Full site drawing with dimensions', level: 'Advanced' },
    ],
    certification: 'Scaro Technologies AutoCAD Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'AutoCAD Interface',           subtitle: 'Workspace, ribbons and coordinate system',           topics: ['Ribbons & menus', 'Workspace setup', 'Coordinate system', 'Navigation'] },
      { week: 2,  phase: 'Foundation', title: 'Drawing Tools',               subtitle: 'Line, circle, arc, polygon and ellipse',             topics: ['Line command', 'Circle / Arc', 'Polygon', 'Ellipse'] },
      { week: 3,  phase: 'Foundation', title: 'Modify Tools',                subtitle: 'Move, copy, trim, extend, mirror and array',         topics: ['Move & copy', 'Trim / Extend', 'Mirror', 'Array'] },
      { week: 4,  phase: 'Core',       title: 'Layers & Properties',         subtitle: 'Layer management, line types and colors',            topics: ['Layer creation', 'Line types', 'Freeze / Lock', 'Layer states'] },
      { week: 5,  phase: 'Core',       title: 'Blocks & Attributes',         subtitle: 'Creating, inserting and managing blocks',            topics: ['Block creation', 'Insert block', 'Dynamic blocks', 'Attributes'] },
      { week: 6,  phase: 'Core',       title: 'Dimensioning',                subtitle: 'Linear, angular dimensions and tolerances',          topics: ['Linear dim', 'Angular dim', 'Tolerances', 'Dim styles'] },
      { week: 7,  phase: 'Advanced',   title: 'Text & Annotations',          subtitle: 'Text styles, multiline text and leaders',            topics: ['Text styles', 'Multiline text', 'Leaders', 'Tables'] },
      { week: 8,  phase: 'Advanced',   title: 'Electrical Layout Drawing',   subtitle: 'Single-line diagrams and panel layouts',             topics: ['Single-line diagrams', 'Symbol library', 'Panel layout', 'Conduit routing'] },
      { week: 9,  phase: 'Advanced',   title: 'Mechanical Drawing Standards', subtitle: 'ISO standards, section views and assembly',         topics: ['ISO standards', 'Title blocks', 'Section views', 'Assembly drawings'] },
      { week: 10, phase: 'Advanced',   title: 'Plotting & Paper Space',      subtitle: 'Layouts, viewports, plot styles and PDF export',     topics: ['Layouts', 'Viewports', 'Plot styles', 'PDF export'] },
      { week: 11, phase: 'Capstone',   title: 'Capstone Drawing Project',    subtitle: 'Full drawing set with annotations and layers',       topics: ['Drawing set', 'Full annotations', 'Layer setup', 'Plotting'] },
      { week: 12, phase: 'Capstone',   title: 'Standards & Certification Prep', subtitle: 'Industry best practices and final exam prep',     topics: ['Drawing standards', 'Common mistakes', 'Industry tips', 'Certificate'] },
    ],
    imageGradient: 'from-orange-500 to-red-600',
    pattern: 'circuit'
  },
];

export const COURSE_VISUALS: Record<string, { gradient: string; pattern: string; imageUrl: string }> = {
  java: { gradient: 'from-red-600 to-orange-600', pattern: 'dots', imageUrl: '/java.webp' },
  python: { gradient: 'from-blue-600 to-indigo-600', pattern: 'grid', imageUrl: '/python.webp' },
  frontend: { gradient: 'from-cyan-500 to-blue-500', pattern: 'waves', imageUrl: '/front.webp' },
  testing: { gradient: 'from-emerald-500 to-teal-600', pattern: 'plus', imageUrl: '/software testing.webp' },
  iot: { gradient: 'from-amber-500 to-orange-500', pattern: 'circuit', imageUrl: '/iot.webp' },
  embedded: { gradient: 'from-slate-700 to-slate-900', pattern: 'hex', imageUrl: '/embedded.webp' },
  vlsi: { gradient: 'from-purple-600 to-fuchsia-600', pattern: 'lines', imageUrl: '/vlsi.webp' },
  autocad: { gradient: 'from-indigo-500 to-purple-500', pattern: 'blueprint', imageUrl: '/autocad.webp' },
};

function CoursePattern({ imageUrl }: { imageUrl?: string }) {
  if (imageUrl) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <img loading="lazy" decoding="async" src={imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
    );
  }
  return null;
}

/* ─────────────────────── component ─────────────────────── */
export function RoadmapSection() {
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navigateToCourse = (id: string) => {
    navigate(`/roadmap/${id}`);
  };

  const filtered = courses.filter(c => {
    const q = searchQuery.toLowerCase();
    return (
      (filterDifficulty === 'all' || c.difficulty === filterDifficulty) &&
      (!q || 
       c.title.toLowerCase().includes(q) ||
       c.shortTitle.toLowerCase().includes(q) ||
       c.tagline.toLowerCase().includes(q) ||
       c.mentor.company.toLowerCase().includes(q) ||
       c.skillsGained.some(s => s.toLowerCase().includes(q)) ||
       c.prerequisites.some(p => p.toLowerCase().includes(q)))
    );
  });

  const getDiff = (d: string) => {
    if (d === 'beginner')     return { cls: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', dot: 'bg-emerald-400', label: 'Beginner' };
    if (d === 'intermediate') return { cls: 'text-amber-400 bg-amber-500/10 border-amber-500/30',       dot: 'bg-amber-400',  label: 'Intermediate' };
    return                           { cls: 'text-red-400 bg-red-500/10 border-red-500/30',             dot: 'bg-red-400',    label: 'Advanced' };
  };

  const TABS: { id: CourseTab; label: string; icon: React.ElementType }[] = [
    { id: 'curriculum', label: 'Curriculum',    icon: CalendarDays },
    { id: 'projects',   label: 'Projects',      icon: Package },
    { id: 'career',     label: 'Career',        icon: Briefcase },
  ];

  /* ────────── render ────────── */
  return (
    <section className="py-20 bg-page-bg theme-transition relative overflow-hidden">

      {/* ── background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f06_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f06_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">





        {/* ════════ SEARCH + FILTER ════════ */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted shrink-0" />
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by course name or skill  (e.g. Python, VLSI, Selenium)…"
              className="w-full pl-11 pr-4 py-3 bg-surface border border-surface-border rounded-xl text-text-secondary placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-surface text-sm transition-all" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {[
              { id: 'all',          label: 'All Levels',   on: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-heading shadow-lg' },
              { id: 'beginner',     label: 'Beginner',     on: 'bg-emerald-600 text-heading shadow-lg' },
              { id: 'intermediate', label: 'Intermediate', on: 'bg-amber-600 text-heading shadow-lg' },
              { id: 'advanced',     label: 'Advanced',     on: 'bg-red-600 text-heading shadow-lg' },
            ].map(f => (
              <button key={f.id} onClick={() => setFilterDifficulty(f.id)}
                className={`px-4 py-3 rounded-xl text-sm transition-all whitespace-nowrap ${
                  filterDifficulty === f.id ? f.on : 'bg-surface text-text-secondary border border-surface-border hover:border-blue-500/50 hover:text-heading'
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ════════ COURSE CARDS ════════ */}
        <AnimatePresence mode="wait">
          <motion.div key={filterDifficulty + searchQuery} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {filtered.length === 0 ? (
              <div className="col-span-3 py-20 text-center">
                <Search className="w-12 h-12 mx-auto mb-4 text-slate-700" />
                <p className="text-base text-text-muted">No courses match your search.</p>
                <button onClick={() => { setSearchQuery(''); setFilterDifficulty('all'); }}
                  className="mt-3 text-sm text-blue-400 hover:underline">Clear filters</button>
              </div>
            ) : filtered.map((course, idx) => {
              const diff = getDiff(course.difficulty);

              return (
                <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }} viewport={{ once: true }}
                  id={`course-card-${course.id}`}>
                  <div onClick={() => navigateToCourse(course.id)}
                    className="h-full flex flex-col bg-card-bg border border-card-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-500/40">

                    {/* ── CARD HEADER (Clear Image) ── */}
                    <div className="relative h-56 overflow-hidden shrink-0 group border-b border-card-border">
                      <CoursePattern imageUrl={COURSE_VISUALS[course.id]?.imageUrl} />
                    </div>

                    {/* ── CARD BODY ── */}
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${diff.cls}`}>
                          {diff.label}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-amber-400">{course.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 mb-4">
                        <div className={`p-2.5 bg-gradient-to-br ${COURSE_VISUALS[course.id]?.gradient} rounded-xl shrink-0 shadow-lg`}>
                          <course.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-heading leading-tight mb-1">{course.title}</h3>
                          <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{course.duration} • {course.hoursPerWeek}</p>
                        </div>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-2">{course.tagline}</p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {course.skillsGained.slice(0, 3).map((s, si) => (
                          <span key={si} className="text-[10px] px-2 py-1 bg-blue-600/10 text-blue-400 rounded-md border border-blue-500/20 font-bold uppercase tracking-tighter">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-auto border-t border-card-border">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-[10px] font-black shrink-0">
                            {course.mentor.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-heading font-bold truncate">{course.mentor.name}</div>
                            <div className="text-[10px] text-text-muted truncate">{course.mentor.company}</div>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); navigateToCourse(course.id); }}
                          className="p-2 rounded-lg bg-surface border border-surface-border hover:border-blue-500/40 hover:text-blue-400 transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ════════ BOTTOM CTA ════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900/25 to-cyan-900/15 rounded-2xl border border-blue-500/30 p-10 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600/10 border border-blue-500/25 text-blue-400 rounded-full text-xs mb-6">
            <Rocket className="w-3.5 h-3.5 shrink-0" />
            Most students start with Python
          </div>
          <h3 className="text-4xl font-bold text-heading mb-6">Not Sure Where to Start?</h3>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Python is our highest-rated course with 650+ enrolled students. Perfect for absolute
            beginners — covers data analysis, automation and real-world project work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/courses/python')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-heading rounded-xl text-sm hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:scale-105 flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> Start Python Course
            </button>
            <button className="px-8 py-4 bg-surface border border-surface-border text-text-secondary rounded-xl text-sm hover:border-blue-500/50 hover:text-heading transition-all flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Explore All Courses
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
