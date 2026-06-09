import Image from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

import {
  SkillCategory,
  Project,
  Experience,
  Education,
  Achievement,
  Certification,
} from "../types/index";

export const PERSONAL_INFO = {
  name: "YASH PATEL",
  title: "Full-Stack Web Developer & DevOps Engineer",
  email: "yash01912@gmail.com",
  phone: "+91-9428937596",
  location: "Mehsana, Gujarat",
  profileImage: Image,
  resume: resume,
  linkedin: "https://www.linkedin.com/in/yash-patel-9558b62a7",
  github: "https://github.com/YashPatel1912",
  bio: "Full-Stack Developer and DevOps Engineer with hands-on experience building and deploying production-ready web applications using React.js, Node.js, Express.js, PostgreSQL, and MongoDB. Proficient in Docker, Kubernetes, GitHub Actions, Terraform, and AWS for cloud infrastructure and CI/CD automation.",
};

export const ABOUT = {
  summary: `I'm a Full-Stack Developer and DevOps Engineer who builds and ships production-ready web applications from end to end. My stack spans React.js, Node.js, Express.js, PostgreSQL, and MongoDB on the application side, and Docker, Kubernetes, GitHub Actions, Terraform, and AWS (EC2, S3) on the infrastructure side.

  I've built RESTful APIs with JWT authentication, role-based access control, Stripe payment integration, and automated CI/CD pipelines — deployed on cloud platforms with real-world reliability in mind. Currently pursuing my B.E. in Computer Engineering, while actively strengthening my DSA and Machine Learning fundamentals.

  I care about writing clean, maintainable code and designing systems that are secure, scalable, and easy to reason about.`,

  objectives: [
    "Design and develop scalable web applications with modern tech stack",
    "Implement robust DevOps practices and CI/CD pipelines",
    "Optimize database performance and system architecture",
    "Contribute to open-source projects and tech community",
  ],
  strengths: [
    "Full-Stack Web Development",
    "DevOps & Cloud Infrastructure",
    "Database Design & Optimization",
    "REST API Design",
    "CI/CD Pipeline Management",
    "System Architecture",
    "Problem Solving & DSA",
    "Quick Learner",
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "React.js", level: 90 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "REST API Design", level: 85 },
      { name: "JWT Authentication", level: 85 },
      { name: "Stripe API", level: 80 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: 87 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 83 },
      { name: "Drizzle ORM", level: 80 },
      { name: "Mongoose", level: 85 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 71 },
      { name: "GitHub Actions", level: 80 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "AWS (EC2, S3)", level: 70 },
      { name: "Terraform", level: 75 },
      { name: "Jenkins", level: 75 },
      { name: "ArgoCD", level: 72 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux & Bash", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Python", level: 75 },
      { name: "DSA & Problem Solving", level: 80 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "banking-api",
    title: "Banking Transaction System API",
    description:
      "RESTful Banking API with comprehensive transaction management, JWT authentication, and role-based access control.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose",
      "Nodemailer",
    ],
    features: [
      "10+ endpoints for account creation, deposits, withdrawals, and balance tracking",
      "JWT-based authentication with 3 permission scopes",
      "Role-based access control (RBAC) securing 100% of API endpoints",
      "MongoDB transaction ledger with 8+ schema collections",
      "Idempotency key handling for duplicate transactions",
      "Automated email alerts via Nodemailer",
      "20+ Postman test cases for validation",
    ],
    github: "https://github.com/YashPatel1912/Bank-Transaction-System",
    live: "",
    duration: "Jan 2026 - Mar 2026",
  },
  {
    id: "avido-fitness",
    title: "Avido Fitness - PERN Stack",
    description:
      "Full-stack fitness application with subscription management, JWT authentication, and Stripe payment integration.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Stripe API",
      "Docker",
    ],
    features: [
      "12+ REST API endpoints with JWT authentication",
      "Multi-role user access control with session management",
      "Stripe integration for 2 subscription plans and one-time payments",
      "Webhook listeners for real-time payment lifecycle management",
      "Normalized PostgreSQL schema with 8+ tables",
      "Dockerized 3 services with 4-stage GitHub Actions CI/CD pipeline",
      "Frontend deployed on Vercel, Backend on Render",
    ],
    github: "https://github.com/YashPatel1912/Avido-fitness_web_project",
    live: "",
    duration: "Mar 2025 - Jul 2025",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "freelance-dev",
    role: "Full-Stack Developer",
    company: "Self-Employed",
    duration: "Jan 2026 - Present",
    startDate: "Jan 2026",
    endDate: "Present",
    responsibilities: [
      "Developed and deployed RESTful Banking API with 10+ endpoints",
      "Implemented JWT-based authentication and role-based access control",
      "Architected MongoDB transaction ledger with audit trails",
      "Eliminated duplicate transactions via idempotency keys",
      "Created automated email alert system using Nodemailer",
    ],
  },
  {
    id: "avido-dev",
    role: "Full-Stack Developer",
    company: "Avido Fitness",
    duration: "Mar 2025 - Jul 2025",
    startDate: "Mar 2025",
    endDate: "Jul 2025",
    responsibilities: [
      "Built full-stack PERN fitness application with 12+ REST API endpoints",
      "Integrated Stripe API for subscription and payment management",
      "Designed normalized PostgreSQL schema with 8+ tables using Drizzle ORM",
      "Dockerized services and configured 4-stage GitHub Actions CI/CD pipeline",
      "Deployed frontend on Vercel and backend on Render with production-grade CORS",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "bachelor",
    degree: "Bachelor of Computer Engineering",
    institution: "LCIT, Gujarat",
    year: "2025 - Present",
    achievements: [
      "Pursuing B.E. in Computer Engineering",
      "Coursework: DSA, Machine Learning, Computer Network",
    ],
  },
  {
    id: "diploma",
    degree: "Diploma of Computer Engineering",
    institution: "S.K. Patel University, Gujarat",
    year: "2022 - 2025",
    percentage: "83%",
    achievements: [
      "GPA: 8.3/10",
      "Active in technical projects and coding competitions",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "novitech-ai",
    name: "Artificial Intelligence",
    organization: "NoviTech R&D Private Limited",
    issueDate: "March 2026",
    credentialId: "NT_B1AIHC78",
    certificateUrl:
      "https://drive.google.com/file/d/1t4Zu4tEBSFZE8N51EgBViGWVx8RIwZnn/view?usp=drive_link/",
  },
  {
    id: "novitech-fullstack",
    name: "Full Stack Development",
    organization: "NoviTech R&D Private Limited",
    issueDate: "February 2026",
    credentialId: "NT_B11FSDEET75",
    certificateUrl:
      "https://drive.google.com/file/d/1Ym5R2Vm7SaFJnsdhtHF2HMNvb71GFKEM/view?usp=drive_link/",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "banking-api-achievement",
    title: "Banking Transaction System",
    description:
      "Developed comprehensive RESTful Banking API with RBAC and transaction management securing 100% of endpoints",
    date: "2026",
    category: "achievement",
  },
  {
    id: "fitness-app",
    title: "Full-Stack Fitness Platform",
    description:
      "Built production-ready PERN stack fitness app with Stripe integration and advanced DevOps practices",
    date: "2025",
    category: "achievement",
  },
  {
    id: "dsa-mastery",
    title: "DSA & Problem Solving",
    description:
      "Active in competitive programming and DSA fundamentals strengthening",
    date: "Ongoing",
    category: "achievement",
  },
  {
    id: "ml-exploration",
    title: "Machine Learning Exploration",
    description:
      "Pursuing ML fundamentals and applications in real-world scenarios",
    date: "Ongoing",
    category: "achievement",
  },
];

export const CORE_COMPETENCIES = [
  "Full-Stack Web Development",
  "Python",
  "Database Design",
  "DevOps & CI/CD",
  "Cloud Deployment (AWS)",
  "System Architecture",
  "DSA & Problem Solving",
  "Machine Learning",
  "Quick Learner",
];
