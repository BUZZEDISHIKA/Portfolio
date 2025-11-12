export const portfolioData = {
  personalInfo: {
    name: "Ishika Bagchi",
    title: "Computer Science Professional",
    location: "West Bengal, India",
    email: "ishika.creates6@gmail.com",
    phone: "+91 7431816443"
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
      { name: "React Native", percentage: 75, icon: "fab fa-react" }
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
      { name: "Machine Learning", percentage: 80, icon: "fas fa-brain" },
      { name: "Git", percentage: 90, icon: "fab fa-git-alt" },
      { name: "AWS", percentage: 85, icon: "fas fa-cloud" }
    ]
  },

  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website with payment integration and user authentication.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with drag and drop functionality.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex data sets with various chart types.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["D3.js", "JavaScript", "Python", "Flask"]
    }
  ],

  greetings: [
    { text: "Hello", subtext: "Welcome to my portfolio" },
    { text: "Nomoskar", subtext: "আমার পোর্টফোলিওতে আপনাকে স্বাগতম" },
    { text: "Namaste", subtext: "मेरे पोर्टफोलियो में आपका स्वागत है" },
    { text: "Hola", subtext: "Bienvenido a mi portafolio" },
    { text: "Bonjour", subtext: "Bienvenue dans mon portfolio" }
  ]
};
