/**
 * Portfolio Configuration
 * Static project configuration - update manually whenever you want to add/edit projects
 */

export const portfolioConfig = {
  // Personal Info
  name: 'Vedh Chengappa',
  title: 'Full-Stack Developer',
  location: 'Bangalore, India',
  email: 'vedh.c04@gmail.com',
  
  // Social Links
  social: {
    github: {
      username: 'nyhtmaer',
      url: 'https://github.com/nyhtmaer',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/vedh-chengappa/',
      handle: '/in/vedh-chengappa/',
    },
    email: {
      address: 'vedh.c04@gmail.com',
    },
  },

  // Response Message
  responseTime: 'Usually within 24 hours. For urgent matters, ping me on LinkedIn.',

  // Projects - Update these manually whenever you want
  projects: [
    {
      id: 'weekly-scheduler',
      version: 'v1.0.0',
      title: 'Weekly Scheduler',
      stack: ['React', 'TypeScript', 'Vite', 'CSS'],
      exception: 'Needed a way to visualize and manage a week at a glance with persistent storage across sessions.',
      algorithm: 'Built a React component with TypeScript that renders a weekly grid, supports drag-and-drop event rescheduling, localStorage persistence, and responsive design for mobile and desktop.',
      output: {
        storage: 'localStorage persistence',
        responsive: 'Mobile & desktop support',
        features: 'Add, edit, move, delete events',
      },
      postmortem: 'Focused on UX with drag-and-drop interactions. The hardest part was managing event state updates efficiently. Learned a lot about React hooks and localStorage limitations on large datasets.',
      link: 'https://github.com/nyhtmaer/Weekly-Scheduler',
      demo: null,
    },
    {
      id: 'opsd-forecast-console',
      version: 'v1.2.0',
      title: 'OPSD PowerDesk: Load Forecasting',
      stack: ['Python', 'Streamlit', 'TensorFlow', 'SARIMA'],
      exception: 'Electric load forecasting for power grids required integrating multiple forecasting approaches with live simulation and anomaly detection.',
      algorithm: 'Implemented dual forecasting pipeline: SARIMA/SARIMAX for classical statistical forecasting and GRU neural networks for deep learning. Added anomaly detection using statistical residual analysis. Built Streamlit dashboard for real-time monitoring and visualization.',
      output: {
        forecasting: 'Classical + Neural models',
        prediction: '24-step ahead forecasting',
        anomaly: 'Statistical + ML detection',
      },
      postmortem: 'The biggest challenge was balancing classical vs ML approaches. Found that ensemble methods work better. Also learned to optimize Streamlit app performance with caching and session states.',
      link: 'https://github.com/nyhtmaer/opsd-forecast-console',
      demo: null,
    },
    {
      id: 'syntactic',
      version: 'v1.0.0',
      title: 'Syntactic',
      stack: ['Python', 'NLP', 'Machine Learning'],
      exception: '418 Hackathon submission exploring natural language processing and syntax analysis.',
      algorithm: 'Developed Python-based NLP tool for syntax analysis and code parsing using machine learning techniques.',
      output: {
        hackathon: '418 Hackathon entry',
        language: 'Python',
        license: 'MIT',
      },
      postmortem: 'Built during a hackathon sprint. Learned rapid prototyping and working under time constraints. Great experience combining NLP with traditional CS concepts.',
      link: 'https://github.com/nyhtmaer/Syntactic',
      demo: null,
    },
    {
      id: 'chronos',
      version: 'v0.1.0',
      title: 'Chronos',
      stack: ['TypeScript', 'Node.js'],
      exception: 'Exploring time-series processing and event scheduling with TypeScript.',
      algorithm: 'TypeScript-based utility for handling temporal operations and event scheduling patterns.',
      output: {
        language: 'TypeScript',
        purpose: 'Time-series utilities',
      },
      postmortem: 'Early-stage exploration project. Good experience with TypeScript type system and async patterns.',
      link: 'https://github.com/nyhtmaer/Chronos',
      demo: null,
    },
  ],
};
