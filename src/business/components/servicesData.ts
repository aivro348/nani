import { 
  Globe, Paintbrush, TrendingUp, FileText, Settings, Newspaper, Cpu, Atom, Layout, 
  ShoppingCart, ShoppingBag, Smartphone, Bot, MessageSquare, PhoneCall, Zap, 
  GitBranch, Shield, MapPin, Database, Award, Code, CheckCircle, Search, Mail, Play, Network
} from 'lucide-react';

export interface SubService {
  title: string;
  description: string;
  icon: any;
}

export interface ServiceHub {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  icon: any;
  subServicesTitle: string;
  subServices: SubService[];
  inclusionsTitle: string;
  inclusions: string[];
  processTitle: string;
  process: { step: string; title: string; description: string }[];
}

export const servicesData: ServiceHub[] = [
  {
    id: 'web-design',
    title: 'Website Design & Development',
    subtitle: 'Website Design & Development Services',
    description: 'Static HTML, dynamic PHP, WordPress, Next.js or React — we pick the right stack for your business goals, audience and budget. 3000+ websites delivered since 2003.',
    phone: '9032517427',
    icon: Globe,
    subServicesTitle: 'Our Services',
    subServices: [
      {
        title: 'Website Design Company',
        description: 'Custom UI/UX, unique branding, conversion-focused.',
        icon: Paintbrush
      },
      {
        title: 'Landing Page Design',
        description: 'High-converting landing pages for ads & campaigns.',
        icon: TrendingUp
      },
      {
        title: 'Static HTML Websites',
        description: 'Lightning-fast, SEO-friendly static brochure sites.',
        icon: FileText
      },
      {
        title: 'Dynamic Website Development',
        description: 'Database-driven PHP business portals & web apps.',
        icon: Settings
      },
      {
        title: 'WordPress Website Design',
        description: 'Custom themes, plugins, secure hosting setup.',
        icon: Newspaper
      },
      {
        title: 'PHP Website Development',
        description: 'Core PHP & Laravel custom application development.',
        icon: Cpu
      },
      {
        title: 'React Website Development',
        description: 'Modern, app-like React sites with great performance.',
        icon: Atom
      },
      {
        title: 'Next.js Website Development',
        description: 'SEO + speed combined — perfect for SaaS & content.',
        icon: Layout
      },
      {
        title: 'Custom Web Applications',
        description: 'Admin dashboards, portals & SaaS-grade platforms.',
        icon: Database
      }
    ],
    inclusionsTitle: 'What You Get With Scaro Technologies',
    inclusions: [
      'Sales Optimization',
      'Core Web Vitals Tuned',
      'SEO Friendly Architecture',
      'Mobile Responsive',
      'Secure Hosting Setup',
      'Custom UI/UX',
      'Scalable Code',
      'CMS-Powered Editing'
    ],
    processTitle: 'Our 4-Step Process',
    process: [
      {
        step: '1️⃣',
        title: 'Discovery',
        description: 'Free consultation to understand your goals, audience and requirements.'
      },
      {
        step: '2️⃣',
        title: 'Proposal',
        description: 'Detailed scope, timeline and transparent pricing within 24 hours.'
      },
      {
        step: '3️⃣',
        title: 'Design & Build',
        description: 'Iterative design and development with weekly progress updates.'
      },
      {
        step: '4️⃣',
        title: 'Launch & Support',
        description: 'Go-live, training and ongoing maintenance & optimization.'
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Website & Online Store Development',
    subtitle: 'E-Commerce Website & Online Store Development Services',
    description: 'Shopify, WooCommerce and custom checkout flows — engineered to turn browsers into buyers. Payment gateways, GST, shipping & inventory included.',
    phone: '9032517427',
    icon: ShoppingCart,
    subServicesTitle: 'Our Development Services',
    subServices: [
      {
        title: 'E-Commerce Website Development',
        description: 'End-to-end online store design & development.',
        icon: ShoppingCart
      },
      {
        title: 'Shopify Store Development',
        description: 'Modern Shopify storefronts, themes & apps.',
        icon: ShoppingBag
      },
      {
        title: 'WooCommerce Development',
        description: 'WordPress-integrated stores with full control.',
        icon: Globe
      }
    ],
    inclusionsTitle: 'What You Get With Scaro Technologies',
    inclusions: [
      'Payment Gateway Integration',
      'GST & Invoicing',
      'Inventory Management',
      'Multi-Vendor Ready',
      'Conversion Optimized Checkout',
      'Mobile-First UX',
      'SEO Friendly',
      'Analytics & Reports'
    ],
    processTitle: 'Our 4-Step Process',
    process: [
      {
        step: '1️⃣',
        title: 'Discovery',
        description: 'Free consultation to understand your goals, audience and requirements.'
      },
      {
        step: '2️⃣',
        title: 'Proposal',
        description: 'Detailed scope, timeline and transparent pricing within 24 hours.'
      },
      {
        step: '3️⃣',
        title: 'Design & Build',
        description: 'Iterative design and development with weekly progress updates.'
      },
      {
        step: '4️⃣',
        title: 'Launch & Support',
        description: 'Go-live, training and ongoing maintenance & optimization.'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Android, iOS & Cross-Platform Mobile App Development',
    subtitle: 'Android, iOS & Cross-Platform Mobile App Development',
    description: 'Native and cross-platform mobile apps for startups, retail, healthcare, education, fintech and more — designed to scale and delight.',
    phone: '9032517427',
    icon: Smartphone,
    subServicesTitle: 'Our Mobile App Development',
    subServices: [
      {
        title: 'Mobile App Development',
        description: 'End-to-end iOS & Android app design and development.',
        icon: Smartphone
      },
      {
        title: 'Android App Development',
        description: 'Native Kotlin/Java apps for the Indian market.',
        icon: Bot
      },
      {
        title: 'Flutter App Development',
        description: 'Single codebase for premium Android + iOS apps.',
        icon: Code
      },
      {
        title: 'FlutterFlow Development',
        description: 'Low-code Flutter builds with custom logic.',
        icon: Zap
      }
    ],
    inclusionsTitle: 'What You Get With Scaro Technologies',
    inclusions: [
      'Native Performance',
      'Push Notifications',
      'Offline Mode',
      'Payment Gateways',
      'Play Store / App Store Launch',
      'Crash & Analytics',
      'Modular Architecture',
      'Long-Term Support'
    ],
    processTitle: 'Our 4-Step Process',
    process: [
      {
        step: '1️⃣',
        title: 'Discovery',
        description: 'Free consultation to understand your goals, audience and requirements.'
      },
      {
        step: '2️⃣',
        title: 'Proposal',
        description: 'Detailed scope, timeline and transparent pricing within 24 hours.'
      },
      {
        step: '3️⃣',
        title: 'Design & Build',
        description: 'Iterative design and development with weekly progress updates.'
      },
      {
        step: '4️⃣',
        title: 'Launch & Support',
        description: 'Go-live, training and ongoing maintenance & optimization.'
      }
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI Chatbots, Agents & Agentic Business Automation',
    subtitle: 'AI Chatbots, Agents & Agentic Business Automation',
    description: 'From web chatbots to autonomous AI agents that run entire workflows — future-proof your business with practical AI built on your own data.',
    phone: '9032517427',
    icon: Bot,
    subServicesTitle: 'Our Business Automation',
    subServices: [
      {
        title: 'AI Solutions for Business',
        description: 'Strategy + implementation of AI across your business.',
        icon: Cpu
      },
      {
        title: 'AI Chatbot Development',
        description: 'Web & app chatbots with RAG on your own data.',
        icon: MessageSquare
      },
      {
        title: 'AI WhatsApp Chatbot',
        description: '24×7 WhatsApp automation, lead nurture & booking.',
        icon: PhoneCall
      },
      {
        title: 'AI Voice Chatbots',
        description: 'Phone-call automation & voice assistants for support.',
        icon: Play
      },
      {
        title: 'AI Agents Development',
        description: 'Custom sales, support & operations AI agents.',
        icon: Bot
      },
      {
        title: 'AI Workflow Automation',
        description: 'n8n, Make, Zapier & custom workflow design.',
        icon: Network
      },
      {
        title: 'CRM & Lead Automation',
        description: 'Automate lead capture, qualification & nurture.',
        icon: TrendingUp
      },
      {
        title: 'Marketing Automation',
        description: 'Email, SMS, WhatsApp & retargeting on autopilot.',
        icon: Mail
      },
      {
        title: 'Agentic AI Solutions',
        description: 'Autonomous AI that plans, decides and executes.',
        icon: GitBranch
      }
    ],
    inclusionsTitle: 'What You Get With Scaro Technologies',
    inclusions: [
      'RAG on Your Own Data',
      'Multi-LLM (OpenAI, Claude, Gemini)',
      'WhatsApp Cloud API',
      'Voice (Twilio, ElevenLabs)',
      'n8n / Make / Zapier',
      'CRM Integrations',
      'Analytics Dashboards',
      'Security & Privacy'
    ],
    processTitle: 'Our 4-Step Process',
    process: [
      {
        step: '1️⃣',
        title: 'Discovery',
        description: 'Free consultation to understand your goals, audience and requirements.'
      },
      {
        step: '2️⃣',
        title: 'Proposal',
        description: 'Detailed scope, timeline and transparent pricing within 24 hours.'
      },
      {
        step: '3️⃣',
        title: 'Design & Build',
        description: 'Iterative design and development with weekly progress updates.'
      },
      {
        step: '4️⃣',
        title: 'Launch & Support',
        description: 'Go-live, training and ongoing maintenance & optimization.'
      }
    ]
  },
  {
    id: 'ai-builder',
    title: 'Build With Lovable, Cursor, Bolt, Replit & Emergent',
    subtitle: 'Build With Lovable, Cursor, Bolt, Replit & Emergent',
    description: 'Need a rapid MVP, internal tool or AI app? Our engineers specialize in the new generation of AI-assisted build platforms — production-ready, not just prototypes.',
    phone: '9032517427',
    icon: Code,
    subServicesTitle: 'Our Replit & Emergent Services',
    subServices: [
      {
        title: 'Lovable Development',
        description: 'Production-ready full-stack apps built on Lovable.',
        icon: CheckCircle
      },
      {
        title: 'Cursor Development',
        description: 'AI-assisted custom development at engineer speed.',
        icon: Code
      },
      {
        title: 'Bolt.new Development',
        description: 'Quick AI-built MVPs & client demos.',
        icon: Zap
      },
      {
        title: 'Replit Development',
        description: 'Rapid prototypes & internal tools on Replit.',
        icon: Settings
      },
      {
        title: 'Emergent Development',
        description: 'AI agent-driven app development services.',
        icon: Globe
      }
    ],
    inclusionsTitle: 'What You Get With Scaro Technologies',
    inclusions: [
      'Rapid MVP Delivery',
      'Production Hardening',
      'Custom Backend Integration',
      'Auth & Payments',
      'Database Design',
      'CI/CD Setup',
      'Code Ownership',
      'Ongoing Support'
    ],
    processTitle: 'Our 4-Step Process',
    process: [
      {
        step: '1️⃣',
        title: 'Discovery',
        description: 'Free consultation to understand your goals, audience and requirements.'
      },
      {
        step: '2️⃣',
        title: 'Proposal',
        description: 'Detailed scope, timeline and transparent pricing within 24 hours.'
      },
      {
        step: '3️⃣',
        title: 'Design & Build',
        description: 'Iterative design and development with weekly progress updates.'
      },
      {
        step: '4️⃣',
        title: 'Launch & Support',
        description: 'Go-live, training and ongoing maintenance & optimization.'
      }
    ]
  },
  {
    id: 'local-services',
    title: 'Local Web Design Services',
    subtitle: 'Local Web Design & Remote Support Services',
    description: 'On-site & remote support across Bangalore (Whitefield, Mahadevapura, KR Puram) and Chennai. Delivering custom website designs and tailored software solutions right to your doorstep.',
    phone: '9032517427',
    icon: MapPin,
    subServicesTitle: 'Local Hub Coverage',
    subServices: [
      {
        title: 'Whitefield Web Design',
        description: 'Top-tier tech agency presence for Whitefield startups.',
        icon: MapPin
      },
      {
        title: 'Mahadevapura Web Services',
        description: 'Local and remote dynamic portals for businesses.',
        icon: MapPin
      },
      {
        title: 'KR Puram Design Support',
        description: 'Affordable web design and support for emerging brands.',
        icon: MapPin
      },
      {
        title: 'Chennai Branch Support',
        description: 'Full-service web & mobile app engineering solutions.',
        icon: MapPin
      }
    ],
    inclusionsTitle: 'What You Get With Scaro Technologies',
    inclusions: [
      'On-Site Consultations',
      'Local Team Meetings',
      'Direct Project Managers',
      'SEO Structured Locally',
      '24/7 Remote Assistance',
      'Fast Turnaround Time',
      'Local Payment Gateways',
      'Ongoing Support'
    ],
    processTitle: 'Our 4-Step Process',
    process: [
      {
        step: '1️⃣',
        title: 'Discovery',
        description: 'Free consultation to understand your goals, audience and requirements.'
      },
      {
        step: '2️⃣',
        title: 'Proposal',
        description: 'Detailed scope, timeline and transparent pricing within 24 hours.'
      },
      {
        step: '3️⃣',
        title: 'Design & Build',
        description: 'Iterative design and development with weekly progress updates.'
      },
      {
        step: '4️⃣',
        title: 'Launch & Support',
        description: 'Go-live, training and ongoing maintenance & optimization.'
      }
    ]
  }
];
