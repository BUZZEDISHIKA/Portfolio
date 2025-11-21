// data/portfolioData.js
export const portfolioData = {
  personalInfo: {
    name: "Ishika Bagchi",
    title: "Computer Science Professional",
    location: "West Bengal, India",
    email: "ishika.creates6@gmail.com"
  },
  
  education: [
    {
      degree: "BSc Computer Science Honors",
      institution: "T.D.B College",
      university: "Kazi Nazrul University",
      grade: "CGPA: 8.54",
      period: "2021 - 2024",
      image: "/college.jpg" 
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Ballavpur Ramgopal Saraf Vidyapith (H.S)",
      board: "West Bengal Board",
      grade: "Percentage: 84.4%",
      period: "2021",
      image: "/ballavpur.jpg" 
    },
    {
      degree: "Secondary (10th)",
      institution: "Gandhi Memorial Girls High School",
      board: "West Bengal Board",
      grade: "Percentage: 67.14%",
      period: "2019",
      image: "/Gmg.webp" 
    }
  ],

  skills: {
    programming: [
      { name: "C", percentage: 95, icon: "fab fa-cuttlefish" },
      { name: "C++", percentage: 91, icon: "fab fa-cuttlefish" },
      { name: "Java", percentage: 72, icon: "fab fa-java" },
      { name: "JavaScript", percentage: 88, icon: "fab fa-js-square" },
      { name: "Python", percentage: 85, icon: "fab fa-python" },
      { name: "DSA", percentage: 88, icon: "fas fa-code" },
      { name: "React Native", percentage: 75, icon: "fab fa-react" },
      { name: "Machine Learning", percentage: 80, icon: "fas fa-brain" },
    ],
    web: [
      { name: "HTML/CSS", percentage: 95, icon: "fab fa-html5" },
      { name: "ReactJS", percentage: 85, icon: "fab fa-react" },
      { name: "Node.js", percentage: 80, icon: "fab fa-node-js" },
      { name: "PHP", percentage: 75, icon: "fab fa-php" }
    ],
    database: [
      { name: "MongoDB", percentage: 85, icon: "fas fa-database" },
      { name: "MySQL", percentage: 90, icon: "fas fa-database" },
      { name: "Git", percentage: 90, icon: "fab fa-git-alt" },
      { name: "AWS", percentage: 85, icon: "fas fa-cloud" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "HealtFirst Online",
      description: "An Machine learning based healthcare tool that recommends medicines based on user symptoms with real-time predictions and a clean, secure interface. It also includes an interactive map showing nearby doctors and clinics for quick medical assistance",
      image: "/image.png",
      features: [
        "Symptom-based medicine recommendations",
        "Real-time predictions using ML models",
        "Interactive map for nearby doctors",
        "Secure user interface",
        "Geolocation services",
        "Healthcare analytics"
      ],
      tags: ["Machine Learning", "Python", "Flask", "Healthcare AI", "Google Maps API", "Jupyter NoteBook", "Geolocation"],
      github: "https://github.com/BUZZEDISHIKA/Medicine-recommender-Ishika"
    },
    {
      id: 2,
      title: "QuizMaster Pro",
      description: "A dynamic quiz-learning platform with interactive quizzes, real-time scoring, and category-based practice. It offers live classes, daily quizzes, live quiz competitions, and premium features like advanced analytics and adaptive difficulty powered by paid APIs.",
      image: "/quiz.png",
      features: [
        "Interactive quiz system",
        "Real-time scoring and leaderboard",
        "Live quiz competitions",
        "Category-based practice",
        "Premium analytics dashboard",
        "Adaptive difficulty system"
      ],
      tags: ["React JS", "Javascript", "MongoDB", "HTML", "CSS"],
      github: "https://github.com/BUZZEDISHIKA/QuizMasterPro"
    },
    {
      id: 3,
      title: "Stock Market Analyzer",
      description: "An interactive analytics tool that visualizes market trends and uses data-driven models to predict stock movements, helping users make smarter investment decisions.",
      image: "/ml.png",
      features: [
        "Real-time market data visualization",
        "Stock price prediction models",
        "Technical analysis tools",
        "Portfolio tracking",
        "Risk assessment",
        "Historical data analysis"
      ],
      tags: ["Machine Learning", "Python", "Flask"],
      github: "https://github.com/BUZZEDISHIKA/Stock-market-ishika"
    },
  ],

  smallProjects: [
    {
      id: 1,
      title: "Tic-Tac-Toe",
      description: "Classic Tic-Tac-Toe game based on simple HTML,CSS and Javascript.",
      features: [
        "Classic gameplay",
        "Game over detection",
        "Smooth controls",
        "GIF Used"
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://tic-tac-toe-ishikacreates6.netlify.app/",
      github: "https://github.com/BUZZEDISHIKA/tic-tac-toe"
    },
    // {
    //   id: 2,
    //   title: "Weather Dashboard",
    //   description: "A responsive weather dashboard that displays current weather conditions and forecasts with beautiful UI and location-based services.",
    //   features: [
    //     "Current weather display",
    //     "5-day forecast",
    //     "Location-based services",
    //     "Responsive design",
    //     "Weather icons"
    //   ],
    //   tags: ["React", "API", "Weather"],
    //   // link: "#",
    //   // github: "#"
    // },
   
    // {
    //   id: 3,
    //   title: "Calculator App",
    //   description: "A fully functional calculator with basic arithmetic operations and a clean, intuitive interface.",
    //   features: [
    //     "Basic arithmetic operations",
    //     "Clear and delete functions",
    //     "Responsive design",
    //     "Error handling",
    //     "Keyboard support"
    //   ],
    //   tags: ["JavaScript", "Utility", "Web App"],
    //   link: "#",
    //   github: "#"
    // },
   
  ],


  greetings: [
    { text: "Hello", subtext: "Welcome to my portfolio" },
    { text: "Nomoskar", subtext: "আমার পোর্টফোলিওতে আপনাকে স্বাগতম" },
    { text: "Namaste", subtext: "मेरे पोर्टफोलियो में आपका स्वागत है" },
    { text: "Hola", subtext: "Bienvenido a mi portafolio" },
    { text: "Bonjour", subtext: "Bienvenue dans mon portfolio" }
  ]
};
