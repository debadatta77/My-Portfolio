import {
  mobile,
  backend,
  creator,
  web,
  cloud,
  system,
  logo,
  eventora,
  chatflix,
  meta,
  starbucks,
  tesla,
  shopify,
  budgetBuddy,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud & DevOps",
    icon: cloud,
  },
  {
    title: "System Design",
    icon: system,
  },
];

const technologies = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Authentication & APIs",
    items: ["JWT Authentication", "REST APIs"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (Fundamentals)",
      "Docker",
      "Kubernetes (Fundamentals)",
      "Render",
      "MongoDB Atlas",
    ],
  },
  {
    category: "Programming",
    items: ["Java", "Data Structures & Algorithms"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Jira"],
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Next24Tech Technology & Services LLP",
    icon: logo,
    iconBg: "#383E56",
    date: "Jul 2025 – Sep 2025",
    points: [
      "Developed responsive frontend web applications using HTML, CSS, and JavaScript.",
      "Worked on projects including Portfolio Websites, E-Commerce interfaces, and E-Learning platform frontends.",
      "Implemented responsive UI/UX layouts and improved frontend structuring using modern web development practices.",
      "Strengthened understanding of real-world frontend workflows and interactive user interface development.",
    ],
  },
  // {
  //   title: "Java Developer Trainee",
  //   company_name: "Axcentra",
  //   icon: logo,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2026 – Apr 2026",
  //   points: [
  //     "Built foundational knowledge in Java programming and Object-Oriented Programming (OOP) concepts.",
  //     "Worked with core Java concepts including classes, objects, inheritance, polymorphism, and exception handling.",
  //     "Developed logical problem-solving skills and understanding of structured software development principles.",
  //     "Improved programming fundamentals through practical coding exercises and mini-project implementations.",
  //   ],
  // },
  // {
  //   title: "AI/ML Trainee",
  //   company_name: "Nirmaan Organization",
  //   icon: logo,
  //   iconBg: "#383E56",
  //   date: "Apr 2026 – Present",
  //   points: [
  //     "Selected through a qualification-based assessment for an Artificial Intelligence & Machine Learning training program.",
  //     "Exploring Machine Learning fundamentals, Python workflows, and AI-driven problem-solving techniques.",
  //     "Working on practical AI/ML concepts including data preprocessing and intelligent application development.",
  //     "Gaining exposure to modern AI technologies through collaborative and project-oriented learning.",
  //   ],
  // },
  {
    title: "Web Development Trainee",
    company_name: "Skillotech",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Aug 2025 – Jan 2026",
    points: [
      "Learned and applied frontend web development concepts using HTML, CSS, and JavaScript.",
      "Built responsive web interfaces and interactive UI components through hands-on project development.",
      "Worked on improving UI/UX structuring, responsive layouts, and modern web design practices.",
      "Strengthened understanding of frontend development workflows and real-world implementation practices.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "Tetra Trion Technologies Pvt. Ltd.",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2026 – May 2026",
    points: [
      "Developing and contributing to full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      "Worked on projects including an E-Commerce platform and a Real-Time Chat Application with scalable backend integration.",
      "Implemented REST APIs, authentication workflows, middleware, and database operations using modern development practices.",
      "Gaining hands-on experience in scalable application architecture, deployment workflows, and collaborative software development.",
    ],
  },
];

const testimonials = [
  {
    name: "AWS Cloud Technical Essentials",
    testimonial:
      "Built foundational knowledge of cloud computing concepts and AWS core services.\nExplored cloud infrastructure, deployment basics, scalability, and modern cloud-based application workflows.",
    // designation: "Certificate",
    // company: "Skillotech",
  },
  {
    name: "Fundamentals of Generative AI for Beginners",
    testimonial:
      "Explored the fundamentals of Generative AI, modern AI applications, and prompt-based interaction workflows. \nGained foundational understanding of AI-powered systems and their role in modern software development.",
    // designation: "Certificate",
    // company: "Skillotech",
  },
  {
    name: "Docker Fundamentals",
    testimonial:
      "Learned the fundamentals of Docker, containerization, and modern application deployment workflows. \nExplored how containers improve scalability, portability, and consistency across development environments.",
    // designation: "Certificate",
    // company: "Axcentra",
  },
  {
    name: "Jira",
    testimonial:
      "Learned the fundamentals of Agile project management and team collaboration using Jira. \nGained exposure to sprint planning, issue tracking, workflow management, and software development lifecycle practices.",
    // designation: "Certificate",
    // company: "Skillotech",
  },
  {
    name: "Prompt Engineering",
    testimonial:
      "Explored prompt engineering concepts and effective interaction techniques for Generative AI systems. \nLearned how structured prompts can improve AI-assisted problem-solving and software development workflows.",
    // designation: "Certificate",
    // company: "Skillotech",
  },
];

const projects = [
  {
    name: "Budget Buddy - Smart Expense Tracker",
    description:
      "Budget Buddy is a MERN stack-based financial management platform that enables users to track expenses, manage budgets, monitor savings goals, and gain financial insights through secure authentication and interactive analytics dashboards. 🚀",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
    ],
    image: budgetBuddy,
    live_link: "https://budget-buddy-mern.vercel.app/auth",
    source_code_link: "https://github.com/debadatta77/Budget-Buddy-MERN",
  },
  {
    name: "Eventora – Full-Stack Event Management Platform",
    description:
      "Eventora is a MERN stack-based event management platform that enables users to create, manage, and promote events while providing seamless registration and ticketing experiences. 🎉",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
    ],
    image: eventora,
    live_link: "https://eventora-one-alpha.vercel.app/",
    source_code_link: "https://github.com/debadatta77/Eventora",
  },
  {
    name: "ChatFlix – Real-Time Messaging Platform",
    description:
      "ChatFlix is a MERN stack-based real-time messaging platform that enables users to connect instantly through secure authentication, Socket.IO-powered real-time communication, and a clean, responsive interface for seamless conversations. 💬🚀",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
    ],
    image: chatflix,
    live_link: "https://chat-flix-one.vercel.app",
    source_code_link: "https://github.com/Priyansu-Sekhar/chatFlix",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
