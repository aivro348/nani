export const AI_CATEGORIES = [
  { id: 'all',       label: 'All AI Courses',          count: 6 },
  { id: 'genai',     label: 'Generative AI',            count: 2 },
  { id: 'ml',        label: 'Machine Learning',         count: 2 },
  { id: 'vision',    label: 'Computer Vision & NLP',    count: 1 },
  { id: 'ops',       label: 'MLOps & Infrastructure',   count: 1 },
];

export const aiCourses = [
  {
    id: 1,
    slug: 'generative-ai-foundations',
    title: 'Generative AI Foundations',
    category: 'genai',
    skills: ['Large Language Model Architecture', 'Prompt Engineering & Design', 'RAG Pipeline Construction', 'AI Safety & Ethics'],
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Understand how LLMs work, master prompt engineering, and build your first AI-powered applications from the ground up.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Hands-On AI Projects',
      mentorshipDesc: 'Expert AI Mentors',
      careerDesc: 'AI Career Placement Support'
    },
    about: 'This foundational course covers the transformer architecture, tokenization, attention mechanisms, and the full lifecycle of prompt engineering. You will learn to build Retrieval-Augmented Generation (RAG) pipelines, work with vector databases, and understand the ethical considerations behind modern AI systems.',
    outcomes: [
      'Understand transformer architecture and attention mechanisms',
      'Master advanced prompt engineering techniques',
      'Build RAG pipelines using LangChain and vector databases',
      'Evaluate and mitigate AI bias and safety risks',
      'Deploy AI applications using OpenAI and Google Gemini APIs'
    ],
    curriculum: [
      {
        module: 'Introduction to Modern AI',
        topics: [
          'History of AI: From Expert Systems to Transformers',
          'What are Large Language Models (LLMs)?',
          'Tokenization, Embeddings & Attention Mechanisms',
          'Overview of GPT, Gemini, Claude, and LLaMA families',
          'Setting up API keys and development environment'
        ]
      },
      {
        module: 'Prompt Engineering Mastery',
        topics: [
          'Zero-shot, Few-shot, and Chain-of-Thought prompting',
          'System prompts and role-based instructions',
          'Structured output: JSON mode and function calling',
          'Prompt chaining and orchestration patterns',
          'Evaluation frameworks for prompt quality'
        ]
      },
      {
        module: 'Building RAG Pipelines',
        topics: [
          'Document loading, chunking, and preprocessing',
          'Vector databases: Pinecone, ChromaDB, FAISS',
          'Embedding models and semantic search',
          'LangChain framework deep dive',
          'End-to-end RAG application development'
        ]
      },
      {
        module: 'AI Safety, Ethics & Deployment',
        topics: [
          'Bias detection and mitigation strategies',
          'Responsible AI guidelines and governance',
          'Model evaluation metrics and benchmarks',
          'Deploying AI apps with Streamlit and FastAPI',
          'Capstone: Build and deploy a full AI assistant'
        ]
      }
    ],
    projects: [
      { title: 'AI-Powered Research Assistant', description: 'Build a RAG-based assistant that answers questions from uploaded PDFs using LangChain and ChromaDB.' },
      { title: 'Multi-Model Prompt Evaluator', description: 'Create a tool that compares prompt outputs across GPT, Gemini, and Claude models side-by-side.' },
      { title: 'Ethical AI Audit Dashboard', description: 'Develop a dashboard that detects and visualizes bias in LLM-generated text across demographics.' }
    ],
    testimonials: []
  },
  {
    id: 2,
    slug: 'ai-application-development',
    title: 'AI-Powered Application Development',
    category: 'genai',
    skills: ['OpenAI & Gemini API Integration', 'Full-Stack AI App Architecture', 'Chatbot & Agent Development', 'AI Workflow Automation'],
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Build production-grade, full-stack applications powered by AI — from intelligent chatbots to automated workflows.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Production-Grade Apps',
      mentorshipDesc: 'Senior AI Engineers',
      careerDesc: 'Startup & Enterprise Roles'
    },
    about: 'Go beyond prompts. This course teaches you to architect and build complete AI-powered applications. You will integrate LLMs into React frontends and Python backends, build autonomous AI agents, and design production-ready AI microservices.',
    outcomes: [
      'Integrate OpenAI and Gemini APIs into full-stack apps',
      'Build autonomous AI agents with tool-use capabilities',
      'Design streaming chat interfaces with real-time responses',
      'Implement authentication, rate limiting, and cost management',
      'Deploy AI microservices to cloud platforms'
    ],
    curriculum: [
      {
        module: 'API Integration & Streaming',
        topics: [
          'OpenAI Chat Completions API deep dive',
          'Google Gemini API setup and usage',
          'Streaming responses with Server-Sent Events',
          'Token counting and cost optimization',
          'Error handling and retry strategies'
        ]
      },
      {
        module: 'AI Agent Architecture',
        topics: [
          'What are AI Agents? ReAct pattern',
          'Tool use and function calling',
          'Multi-step reasoning and planning',
          'Memory systems: short-term and long-term',
          'Building agents with LangGraph'
        ]
      },
      {
        module: 'Full-Stack AI App Development',
        topics: [
          'React + FastAPI AI application architecture',
          'Streaming chat UI components',
          'User authentication and session management',
          'Database integration for conversation history',
          'Rate limiting, caching, and API key management'
        ]
      },
      {
        module: 'Deployment & Production',
        topics: [
          'Containerizing AI apps with Docker',
          'Cloud deployment: AWS, GCP, Vercel',
          'Monitoring, logging, and observability',
          'A/B testing different models',
          'Capstone: Ship a production AI SaaS application'
        ]
      }
    ],
    projects: [
      { title: 'AI Customer Support Chatbot', description: 'Build a context-aware chatbot with conversation history, tool use, and knowledge base integration.' },
      { title: 'AI Code Review Assistant', description: 'Create an agent that reviews pull requests, suggests improvements, and explains code changes.' }
    ],
    testimonials: []
  },
  {
    id: 3,
    slug: 'enterprise-machine-learning',
    title: 'Enterprise Machine Learning',
    category: 'ml',
    skills: ['Supervised & Unsupervised Learning', 'Feature Engineering', 'Model Selection & Tuning', 'Scikit-Learn & XGBoost'],
    heroImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Master the full ML pipeline — from data preprocessing to deploying production models at enterprise scale.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Industry Case Studies',
      mentorshipDesc: 'ML Engineers at Scale',
      careerDesc: 'ML Engineer Roles'
    },
    about: 'This intensive course takes you through the entire machine learning lifecycle. Learn to clean messy real-world data, engineer powerful features, select the right algorithms, tune hyperparameters, and deploy models that serve millions of predictions per day.',
    outcomes: [
      'Build end-to-end ML pipelines from raw data to production',
      'Master classification, regression, and clustering algorithms',
      'Perform advanced feature engineering and selection',
      'Tune hyperparameters using Grid Search and Optuna',
      'Deploy models with Flask APIs and cloud endpoints'
    ],
    curriculum: [
      {
        module: 'Data Preprocessing & EDA',
        topics: ['Data cleaning', 'Missing value imputation', 'Outlier detection', 'Exploratory Data Analysis with Pandas', 'Statistical summaries and distributions']
      },
      {
        module: 'Supervised Learning Algorithms',
        topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Support Vector Machines', 'XGBoost & Gradient Boosting', 'Model evaluation metrics']
      },
      {
        module: 'Unsupervised Learning & Feature Engineering',
        topics: ['K-Means & DBSCAN Clustering', 'PCA & Dimensionality Reduction', 'Feature scaling & encoding', 'Feature selection techniques', 'Pipeline construction with Scikit-Learn']
      },
      {
        module: 'Model Deployment & Monitoring',
        topics: ['Model serialization with Pickle & Joblib', 'Flask & FastAPI model serving', 'A/B testing models', 'Drift detection and monitoring', 'Capstone: End-to-end ML project']
      }
    ],
    projects: [
      { title: 'Credit Risk Prediction Engine', description: 'Build a model that predicts loan default risk using historical banking data and gradient boosting.' },
      { title: 'Customer Segmentation System', description: 'Segment e-commerce customers using unsupervised learning for targeted marketing campaigns.' }
    ],
    testimonials: []
  },
  {
    id: 4,
    slug: 'deep-learning-neural-networks',
    title: 'Deep Learning & Neural Networks',
    category: 'ml',
    skills: ['Neural Network Architecture', 'TensorFlow & PyTorch', 'CNNs & RNNs', 'Transfer Learning'],
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Dive into the mathematics and implementation of neural networks powering modern AI breakthroughs.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Research-Level Projects',
      mentorshipDesc: 'PhD-Level Mentors',
      careerDesc: 'Deep Learning Engineer Roles'
    },
    about: 'Go beyond classical ML into the world of deep learning. Understand backpropagation, build CNNs for image recognition, RNNs/LSTMs for sequential data, and leverage transfer learning to achieve state-of-the-art results with minimal data.',
    outcomes: [
      'Understand backpropagation and gradient descent mathematically',
      'Build and train CNNs for image classification and detection',
      'Implement RNNs and LSTMs for text and time-series',
      'Apply transfer learning with pre-trained models',
      'Train models on GPUs using TensorFlow and PyTorch'
    ],
    curriculum: [
      {
        module: 'Neural Network Fundamentals',
        topics: ['Perceptrons and activation functions', 'Forward and backward propagation', 'Gradient descent variants', 'Loss functions and optimization', 'Regularization techniques']
      },
      {
        module: 'Convolutional Neural Networks',
        topics: ['Convolution, pooling, and stride', 'CNN architectures: VGG, ResNet, EfficientNet', 'Image classification and object detection', 'Data augmentation strategies', 'Transfer learning with pre-trained models']
      },
      {
        module: 'Recurrent & Sequence Models',
        topics: ['RNNs and vanishing gradient problem', 'LSTM and GRU architectures', 'Text classification with embeddings', 'Seq2Seq and attention mechanisms', 'Transformer architecture overview']
      },
      {
        module: 'Advanced Topics & Capstone',
        topics: ['GANs: Generative Adversarial Networks', 'Autoencoders and representation learning', 'Model quantization and optimization', 'Deploying deep learning models', 'Capstone: Build a state-of-the-art model']
      }
    ],
    projects: [
      { title: 'Medical Image Classifier', description: 'Train a CNN to detect diseases from X-ray images using transfer learning with EfficientNet.' },
      { title: 'Stock Price Predictor', description: 'Build an LSTM-based model that predicts stock trends using historical time-series data.' }
    ],
    testimonials: []
  },
  {
    id: 5,
    slug: 'computer-vision-nlp',
    title: 'Computer Vision & NLP',
    category: 'vision',
    skills: ['Image Processing with OpenCV', 'Object Detection (YOLO)', 'Text Analytics & Sentiment Analysis', 'Hugging Face Transformers'],
    heroImage: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Master the two most impactful domains of applied AI — teaching machines to see and understand language.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Applied AI Projects',
      mentorshipDesc: 'Industry AI Researchers',
      careerDesc: 'CV/NLP Engineer Roles'
    },
    about: 'This dual-track course combines Computer Vision and Natural Language Processing. Learn image manipulation with OpenCV, real-time object detection with YOLO, text preprocessing with spaCy, sentiment analysis, and fine-tuning transformer models from Hugging Face.',
    outcomes: [
      'Process and analyze images using OpenCV',
      'Implement real-time object detection with YOLO',
      'Build NLP pipelines for text classification and NER',
      'Fine-tune Hugging Face transformer models',
      'Create multimodal AI applications'
    ],
    curriculum: [
      {
        module: 'Computer Vision Fundamentals',
        topics: ['Image processing with OpenCV', 'Edge detection and feature extraction', 'Image segmentation', 'Face detection and recognition', 'Optical Character Recognition (OCR)']
      },
      {
        module: 'Object Detection & Tracking',
        topics: ['YOLO architecture and training', 'Real-time object detection', 'Video analysis and tracking', 'Custom dataset creation', 'Model optimization for edge devices']
      },
      {
        module: 'Natural Language Processing',
        topics: ['Text preprocessing and tokenization', 'Word embeddings: Word2Vec, GloVe', 'Named Entity Recognition with spaCy', 'Sentiment analysis pipelines', 'Topic modeling and text clustering']
      },
      {
        module: 'Transformers & Multimodal AI',
        topics: ['Hugging Face ecosystem deep dive', 'Fine-tuning BERT, RoBERTa, and T5', 'Vision Transformers (ViT)', 'Multimodal models and applications', 'Capstone: Build a multimodal AI system']
      }
    ],
    projects: [
      { title: 'Smart Surveillance System', description: 'Build real-time object detection and tracking using YOLO for security camera feeds.' },
      { title: 'AI News Analyzer', description: 'Create an NLP pipeline that extracts entities, summarizes articles, and classifies sentiment from news feeds.' }
    ],
    testimonials: []
  },
  {
    id: 6,
    slug: 'mlops-ai-infrastructure',
    title: 'MLOps & AI Infrastructure',
    category: 'ops',
    skills: ['ML Pipeline Automation', 'Docker & Kubernetes for ML', 'Model Versioning & Registry', 'CI/CD for AI Systems'],
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Bridge the gap between ML experimentation and production — learn to operationalize AI at scale.',
    stats: {
      learningMode: 'Online',
      projectsDesc: 'Infrastructure Projects',
      mentorshipDesc: 'MLOps Engineers',
      careerDesc: 'MLOps & Platform Roles'
    },
    about: 'MLOps is the fastest-growing discipline in AI. This course teaches you to automate ML workflows, version datasets and models, build reproducible training pipelines, containerize models, and set up CI/CD specifically designed for machine learning systems.',
    outcomes: [
      'Automate ML pipelines with Airflow and Prefect',
      'Version data and models with DVC and MLflow',
      'Containerize and orchestrate ML workloads',
      'Build CI/CD pipelines for model training and deployment',
      'Monitor model performance and detect data drift'
    ],
    curriculum: [
      {
        module: 'ML Experiment Tracking',
        topics: ['MLflow setup and experiment logging', 'Hyperparameter tracking', 'Model registry and versioning', 'Data versioning with DVC', 'Reproducible experiments']
      },
      {
        module: 'Pipeline Automation',
        topics: ['Apache Airflow for ML workflows', 'Prefect and Dagster alternatives', 'Feature stores: Feast', 'Automated data validation', 'Scheduling and triggering pipelines']
      },
      {
        module: 'Containerization & Orchestration',
        topics: ['Docker for ML environments', 'Kubernetes for model serving', 'GPU resource management', 'Model serving with Triton and TorchServe', 'Scaling inference endpoints']
      },
      {
        module: 'CI/CD & Monitoring',
        topics: ['GitHub Actions for ML', 'Automated model testing', 'Data drift and concept drift detection', 'Alerting and observability', 'Capstone: Build a complete MLOps pipeline']
      }
    ],
    projects: [
      { title: 'Automated ML Training Pipeline', description: 'Build an end-to-end pipeline that retrains a model when new data arrives and auto-deploys if performance improves.' },
      { title: 'Model Monitoring Dashboard', description: 'Create a real-time dashboard that tracks model predictions, data drift, and system health metrics.' }
    ],
    testimonials: []
  }
];

// AI Roadmaps Data
export const aiRoadmaps = [
  {
    id: 'prompt-engineer',
    title: 'Prompt Engineering & AI Operations',
    shortTitle: 'PROMPT ENG',
    icon: 'Sparkles',
    tagline: 'Master the art and science of communicating with AI models for maximum output quality',
    difficulty: 'beginner' as const,
    duration: '8 Weeks',
    hoursPerWeek: '6–8 hrs/wk',
    rating: 4.9,
    students: '380+',
    jobSalary: '₹6–15 LPA',
    hotBadge: '🔥 Trending',
    prerequisites: ['Basic understanding of AI concepts', 'Familiarity with any programming language'],
    learningOutcomes: [
      'Master all prompt engineering techniques and patterns',
      'Build production-grade RAG applications',
      'Design and implement AI agent workflows',
      'Evaluate and optimize LLM outputs systematically',
      'Deploy AI-powered applications to production'
    ],
    skillsGained: ['Prompt Design', 'RAG Architecture', 'LangChain', 'Vector DBs', 'AI Agents', 'API Integration'],
    tools: ['OpenAI API', 'Google Gemini', 'LangChain', 'ChromaDB', 'Streamlit', 'FastAPI'],
    careerPaths: ['Prompt Engineer', 'AI Solutions Architect', 'AI Product Manager', 'LLM Operations Engineer'],
    topRecruiters: ['Google', 'Microsoft', 'OpenAI', 'Anthropic', 'Startups'],
    interviewTopics: ['Prompt Patterns', 'RAG Architecture', 'Token Optimization', 'AI Safety', 'Agent Design'],
    projectExamples: [
      { name: 'AI Research Assistant', desc: 'RAG-powered assistant that answers from uploaded documents', level: 'Mid' },
      { name: 'Multi-Agent Workflow', desc: 'Orchestrate multiple AI agents for complex task completion', level: 'Advanced' },
      { name: 'Prompt Testing Suite', desc: 'Automated evaluation framework for prompt quality', level: 'Mid' },
    ],
    certification: 'Scaro Technologies AI Prompt Engineer Certificate',
    weeks: [
      { week: 1, phase: 'Foundation', title: 'AI & LLM Fundamentals',     subtitle: 'Transformers, tokens, and model landscape',  topics: ['Transformer Architecture', 'Tokenization', 'Model Families', 'API Setup'] },
      { week: 2, phase: 'Foundation', title: 'Prompt Engineering Basics',  subtitle: 'Core techniques and structured outputs',     topics: ['Zero-shot & Few-shot', 'Chain-of-Thought', 'System Prompts', 'JSON Mode'] },
      { week: 3, phase: 'Core',       title: 'Advanced Prompting',        subtitle: 'Complex patterns and evaluation',             topics: ['Prompt Chaining', 'Self-Consistency', 'Tree-of-Thought', 'Evaluation Metrics'] },
      { week: 4, phase: 'Core',       title: 'RAG Pipeline Construction', subtitle: 'Building knowledge-augmented AI systems',     topics: ['Document Chunking', 'Vector Databases', 'Embedding Models', 'Retrieval Strategies'] },
      { week: 5, phase: 'Core',       title: 'LangChain Framework',       subtitle: 'Building complex AI chains and agents',       topics: ['Chains & Runnables', 'Memory Systems', 'Tool Integration', 'Output Parsers'] },
      { week: 6, phase: 'Advanced',   title: 'AI Agent Development',      subtitle: 'Autonomous agents with tool use',             topics: ['ReAct Pattern', 'Function Calling', 'Multi-Agent Systems', 'LangGraph'] },
      { week: 7, phase: 'Advanced',   title: 'Production Deployment',     subtitle: 'Shipping AI applications to users',           topics: ['FastAPI Integration', 'Streaming Responses', 'Cost Management', 'Monitoring'] },
      { week: 8, phase: 'Capstone',   title: 'Capstone Project',          subtitle: 'Build and deploy a production AI application', topics: ['Project Planning', 'Full Development', 'Testing & Evaluation', 'Demo & Certificate'] },
    ],
  },
  {
    id: 'ai-solutions-architect',
    title: 'AI Solutions Architect',
    shortTitle: 'AI ARCH',
    icon: 'Building2',
    tagline: 'Design enterprise-grade AI systems that scale, from architecture to deployment',
    difficulty: 'advanced' as const,
    duration: '12 Weeks',
    hoursPerWeek: '10–12 hrs/wk',
    rating: 4.8,
    students: '210+',
    jobSalary: '₹12–30 LPA',
    hotBadge: '⭐ Premium',
    prerequisites: ['Strong programming skills (Python)', 'Basic ML knowledge', 'Understanding of cloud services'],
    learningOutcomes: [
      'Architect end-to-end AI solutions for enterprises',
      'Design scalable ML pipelines and serving infrastructure',
      'Implement MLOps best practices for production systems',
      'Lead AI transformation projects from concept to delivery',
      'Build and manage AI teams and vendor relationships'
    ],
    skillsGained: ['System Design', 'MLOps', 'Cloud AI Services', 'Data Architecture', 'Leadership', 'Cost Optimization'],
    tools: ['AWS SageMaker', 'GCP Vertex AI', 'Kubernetes', 'MLflow', 'Terraform', 'Grafana'],
    careerPaths: ['AI Solutions Architect', 'Head of AI', 'ML Platform Engineer', 'AI Consultant'],
    topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Deloitte'],
    interviewTopics: ['System Design', 'ML Architecture', 'Cost Analysis', 'Data Strategy', 'Cloud AI'],
    projectExamples: [
      { name: 'Enterprise AI Platform', desc: 'Design a multi-tenant AI platform with model serving and monitoring', level: 'Advanced' },
      { name: 'AI Cost Optimizer', desc: 'Build a system that optimizes inference costs across multiple providers', level: 'Advanced' },
      { name: 'Data Pipeline Architecture', desc: 'Design real-time data ingestion and feature engineering pipelines', level: 'Mid' },
    ],
    certification: 'Scaro Technologies AI Solutions Architect Certificate',
    weeks: [
      { week: 1,  phase: 'Foundation', title: 'AI Landscape & Strategy',       subtitle: 'Understanding the enterprise AI ecosystem',    topics: ['AI Market Landscape', 'Business Use Cases', 'ROI Frameworks', 'AI Maturity Models'] },
      { week: 2,  phase: 'Foundation', title: 'Data Architecture',             subtitle: 'Designing data foundations for AI',             topics: ['Data Lakes & Warehouses', 'ETL Pipelines', 'Data Quality', 'Governance'] },
      { week: 3,  phase: 'Foundation', title: 'Cloud AI Services',             subtitle: 'AWS, GCP, and Azure AI offerings',              topics: ['SageMaker', 'Vertex AI', 'Azure ML', 'Cost Comparison'] },
      { week: 4,  phase: 'Core',       title: 'ML System Design',             subtitle: 'Architecting ML systems at scale',              topics: ['Batch vs Real-time', 'Feature Stores', 'Model Registry', 'A/B Testing'] },
      { week: 5,  phase: 'Core',       title: 'Model Serving & Inference',     subtitle: 'Serving models to millions of users',           topics: ['REST vs gRPC', 'Triton Server', 'Load Balancing', 'GPU Optimization'] },
      { week: 6,  phase: 'Core',       title: 'MLOps & Automation',            subtitle: 'CI/CD pipelines for ML systems',                topics: ['Training Pipelines', 'Model Validation', 'Automated Retraining', 'Rollback'] },
      { week: 7,  phase: 'Core',       title: 'LLM Integration Architecture',  subtitle: 'Integrating GenAI into enterprise systems',     topics: ['API Gateway Design', 'Prompt Management', 'RAG at Scale', 'Fine-tuning'] },
      { week: 8,  phase: 'Advanced',   title: 'Security & Compliance',         subtitle: 'AI governance and regulatory requirements',     topics: ['Data Privacy', 'Model Auditing', 'GDPR/DPDPA', 'Responsible AI'] },
      { week: 9,  phase: 'Advanced',   title: 'Monitoring & Observability',    subtitle: 'Keeping AI systems healthy in production',      topics: ['Data Drift', 'Model Decay', 'Alerting', 'Grafana Dashboards'] },
      { week: 10, phase: 'Advanced',   title: 'Cost Optimization',             subtitle: 'Managing AI infrastructure budgets',            topics: ['Spot Instances', 'Model Distillation', 'Quantization', 'Batch vs Realtime'] },
      { week: 11, phase: 'Capstone',   title: 'Architecture Design Project',   subtitle: 'Design a complete enterprise AI solution',      topics: ['Requirements Analysis', 'Architecture Document', 'Cost Estimation', 'Presentation'] },
      { week: 12, phase: 'Capstone',   title: 'Final Review & Certification',  subtitle: 'Present, defend, and certify',                  topics: ['Design Review', 'Panel Defense', 'Portfolio Building', 'Certificate'] },
    ],
  },
];
