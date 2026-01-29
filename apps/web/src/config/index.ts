import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks } from "react-icons/pi";
import { GoalIcon } from '@primer/octicons-react'
import { LuGithub, LuPencil, LuLinkedin } from "react-icons/lu";
import { SiPython, SiMysql, SiSqlite, SiKaggle } from 'react-icons/si';
import { AiOutlinePython } from "react-icons/ai";
import { SiFastapi } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { TbBrandDocker, TbBrandMysql } from "react-icons/tb";
import { TbPhotoSquareRounded } from "react-icons/tb";

const config: Config = {
  avatar: '/images/profile.png',
  title: "Milan Sharma | Python Developer & Data Engineer",
  description: "I'm Milan Sharma, a Python Developer and Data Engineer with a passion for building scalable solutions and solving real-world problems.",
  author: "Milan Sharma",
  keywords: ["Milan Sharma", "Python Developer", "Data Engineer", "Data Analyst", "Backend Development", "Data Science"],
  status: "Python Developer & Data Engineer 🚀",
  siteURL: "https://milansharma.dev/",
  openGraph: {
    url: "https://milansharma.dev/",
    type: "website",
    siteName: "Milan Sharma | Python Developer & Data Engineer",
    title: "Milan Sharma | Python Developer & Data Engineer",
    description:"I'm Milan Sharma, a Python Developer and Data Engineer with a passion for building scalable solutions and solving real-world problems. My expertise spans Python development, Data Science, Backend APIs, and Data Analysis. I am dedicated to enhancing technology and overall system performance.",
  },
  navItems: [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    {path: '/contact', label: 'Contact'},
  ],
  socialLinks: [
    { url: `https://github.com/MilannSharma`, icon: LuGithub, name: 'GitHub' },
    { url: `https://www.kaggle.com/mishh01`, icon: SiKaggle, name: 'Kaggle' },
    { url: `https://www.linkedin.com/in/milansharma01`, icon: LuLinkedin, name: 'LinkedIn' },
    { url: `mailto:milansharma942105@gmail.com`, icon: MdAttachment, name: 'Email' },
  ],
  about: {
    "firstName": 'Milan',
    "lastName": 'Sharma',
    "middleName": "",
    "preferredName": "",
    "additionalName": "",
    "pronouns": 'He/Him',
    "githubUsername": "MilannSharma",
    "introduction": `
I am a Python Developer and Data Engineer with a passion for building scalable solutions and solving real-world problems. My expertise spans Python development, Data Science, Backend APIs, and Data Analysis. I am dedicated to enhancing technology and overall system performance.

With strong foundations in Object-Oriented Programming, Data Structures, and Software Engineering, I focus on creating efficient, maintainable code that makes a real-world impact. I'm constantly learning and exploring new technologies to stay at the forefront of innovation.

**Check out my [resume](/resume) for a detailed overview of my experience, skills, and accomplishments.**

Let's connect to explore how I can contribute to your projects and drive technological advancement.

**Self-motivated, Problem solver, Tech enthusiast, Passionate coder 👨🏻‍💻**
    `,
    "lifestyles": [
      {
        "icon": LuGithub,
        "title": "Open Source Contributor",
        "text": "Actively contributing to GitHub projects in Python development, Data Science, and Backend APIs to advance the tech community."
      },
      {
        "icon": LuPencil,
        "title": "Problem Solver",
        "text": "Dedicated to solving real-world problems through innovative solutions in data engineering and backend development."
      },
      {
        "icon": GoalIcon,
        "title": "Continuous Learner",
        "text": "Committed to staying updated with the latest technologies and best practices in Python, Data Science, and System Design."
      },
      {
        "icon": TbPhotoSquareRounded,
        "title": "Tech Enthusiast",
        "text": "Passionate about exploring emerging technologies and their applications in building scalable, high-performance systems."
      },
    ],
    "techStacks": {
      programmingLanguages: [
        { name: 'Python', icon: AiOutlinePython },
        { name: 'SQL', icon: TbBrandMysql },
      ],
      frameworks: [
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Flask', icon: BiLogoFlask },
      ],
      dataTools: [
        { name: 'Pandas', icon: SiPython },
        { name: 'Scikit-Learn', icon: SiPython },
        { name: 'MySQL', icon: TbBrandMysql },
        { name: 'SQLite', icon: SiSqlite },
        { name: 'Docker', icon: TbBrandDocker },
      ]
    },
    "skills": [
      // Python Development
      { name: 'Core Python', category: 'Python Development' },
      { name: 'OOP', category: 'Python Development' },
      { name: 'Modules & Packages', category: 'Python Development' },
      { name: 'Automation Scripts', category: 'Python Development' },
      { name: 'CLI Tools', category: 'Python Development' },
      { name: 'Exception Handling', category: 'Python Development' },
      // Backend & APIs
      { name: 'FastAPI', category: 'Backend & APIs' },
      { name: 'Flask', category: 'Backend & APIs' },
      { name: 'RESTful APIs', category: 'Backend & APIs' },
      { name: 'Waitress Server', category: 'Backend & APIs' },
      // Data Science & Analysis
      { name: 'Scikit-Learn', category: 'Data Science & Analysis' },
      { name: 'Pandas', category: 'Data Science & Analysis' },
      { name: 'NumPy', category: 'Data Science & Analysis' },
      { name: 'Matplotlib', category: 'Data Science & Analysis' },
      { name: 'Seaborn', category: 'Data Science & Analysis' },
      { name: 'Feature Engineering', category: 'Data Science & Analysis' },
      { name: 'EDA', category: 'Data Science & Analysis' },
      // SQL
      { name: 'SQL', category: 'SQL' },
      // Software Engineering
      { name: 'Git/GitHub', category: 'Software Engineering' },
      { name: 'Code Optimization', category: 'Software Engineering' },
      { name: 'Debugging', category: 'Software Engineering' },
      { name: 'Testing', category: 'Software Engineering' },
      { name: 'Modular Architecture', category: 'Software Engineering' },
      // Database
      { name: 'MySQL', category: 'Database' },
      { name: 'SQLite', category: 'Database' },
      { name: 'Data Parsing (JSON, CSV, XML)', category: 'Database' },
      { name: 'File Handling', category: 'Database' },
      // Oracle ERP
      { name: 'Oracle ERP', category: 'Oracle ERP' },
      { name: 'P2P Workflow', category: 'Oracle ERP' },
      { name: 'O2C Workflow', category: 'Oracle ERP' },
      { name: 'Inventory Management', category: 'Oracle ERP' },
      { name: 'Transaction Processing', category: 'Oracle ERP' },
    ]
  },
  resume: {
    "educations": {
      "icon": IoSchoolOutline,
      "title": "Education",
      "items": [
        {
          company: "Global Institute Of Technology Jaipur",
          location: "Jaipur, Rajasthan, India",
          role: "B-Tech",
          duration: "2023 — 2026",
          tasksMarkdown: `
- Pursuing Bachelor of Technology degree
- Focus on Computer Science and Engineering
- Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, Software Engineering
`,
        },
        {
          company: "VP College Of Science Pune",
          location: "Pune, Maharashtra, India",
          role: "12th Grade",
          duration: "2020 — 2021",
          tasksMarkdown: `
- Completed Senior Secondary Education
- Stream: Science
`,
        },
        {
          company: "Sharda Niketan English Medium School Pune",
          location: "Pune, Maharashtra, India",
          role: "10th Grade",
          duration: "2018 — 2019",
          tasksMarkdown: `
- Completed Secondary Education
`,
        },
      ],
    },
    "awardLeaderships": {
      "icon": PiTrophy,
      "title": "Certifications",
      "items": [
        {
          company: "Oracle",
          location: "Online",
          role: "Oracle Fusion Cloud Applications ERP Process Essentials",
          duration: "Certified - Rel 1",
          tasksMarkdown: `
- Oracle ERP fundamentals
- P2P and O2C cycles
- Inventory management processes
        `,
        },
        {
          company: "Upflairs Pvt. Ltd.",
          location: "Online",
          role: "Data Science with Machine Learning",
          duration: "ID: UF/0625/6362",
          tasksMarkdown: `
- Machine Learning algorithms and applications
- Data analysis and preprocessing
        `,
        },
        {
          company: "Certified Program",
          location: "Online",
          role: "Java — Learn and Build",
          duration: "ID: IN23PM112468961010",
          tasksMarkdown: `
- Java programming fundamentals
- Object-oriented concepts
        `,
        },
        {
          company: "Professional Development",
          location: "Online",
          role: "AI & Data Science",
          duration: "Certification",
          tasksMarkdown: `
- Artificial Intelligence fundamentals
- Data science best practices
        `,
        },
        {
          company: "Professional Development",
          location: "Online",
          role: "Data Analysis",
          duration: "Certification",
          tasksMarkdown: `
- Data analysis techniques
- Business intelligence
        `,
        },
        {
          company: "Professional Development",
          location: "Online",
          role: "SQL",
          duration: "Certification",
          tasksMarkdown: `
- SQL query optimization
- Database design
        `,
        },
      ],
    },
    "teachingExperiences": {
      "icon": PiBooks,
      "title": "Freelance Services",
      "items": [
        {
          "company": "UI/UX Design",
          "location": "Remote",
          "role": "UI/UX Design",
          "duration": "Available",
          "tasksMarkdown": `
- User interface design
- User experience optimization
        `,
        },
        {
          "company": "Frontend Development",
          "location": "Remote",
          "role": "Frontend Development",
          "duration": "Available",
          "tasksMarkdown": `
- Modern web technologies
- Responsive design
        `,
        },
        {
          "company": "Video Editing",
          "location": "Remote",
          "role": "Video Editing",
          "duration": "Available",
          "tasksMarkdown": `
- Professional video editing
- Content creation
        `,
        },
        {
          "company": "SEO Optimization",
          "location": "Remote",
          "role": "SEO Optimization",
          "duration": "Available",
          "tasksMarkdown": `
- Search engine optimization
- Digital marketing
        `,
        },
        {
          "company": "Web Store Creation",
          "location": "Remote",
          "role": "Web Store Creation",
          "duration": "Available",
          "tasksMarkdown": `
- E-commerce platform development
- Payment gateway integration
        `,
        },
      ],
    },
    "professionalExperiences": {
      "icon": MdOutlineDevices,
      "title": "Primary Roles",
      "items": [
        {
          "company": "Data Engineer",
          "location": "Remote",
          "role": "Data Engineer",
          "duration": "Current",
          "tasksMarkdown": `
- Design and manage data pipelines
- ETL process development
- Database optimization
- Data warehousing solutions
          `,
        },
        {
          "company": "Python Developer",
          "location": "Remote",
          "role": "Python Developer",
          "duration": "Current",
          "tasksMarkdown": `
- Backend API development with FastAPI and Flask
- Automation scripts and CLI tools
- Code optimization and refactoring
- Testing and debugging
          `,
        },
        {
          "company": "Data Analyst",
          "location": "Remote",
          "role": "Data Analyst",
          "duration": "Current",
          "tasksMarkdown": `
- Exploratory Data Analysis (EDA)
- Statistical analysis and visualization
- Business intelligence and reporting
- Data-driven insights and recommendations
          `,
        },
      ],
    },
  },
  "featuredProjects": [
    {
      title: "StreamFusion",
      description: "A powerful stream data processing and fusion system",
      url: "https://github.com/MilannSharma/StreamFusion",
      image: "/images/projects/streamfusion.svg",
    },
    {
      title: "FarmHelp",
      description: "Smart farming assistance application with web and mobile support",
      url: "https://github.com/MilannSharma/FarmHelp",
      image: "/images/projects/farmhelp.svg",
    },
    {
      title: "Jarvis Assistant",
      description: "Intelligent voice assistant built with Python",
      url: "https://github.com/MilannSharma/Jarvis",
      image: "/images/projects/jarvis.svg",
    },
    {
      title: "LockSy",
      description: "Secure lock management system",
      url: "https://github.com/MilannSharma/LockSy",
      image: "/images/projects/locksy.svg",
    },
    {
      title: "Netflix Recommendation System",
      description: "Advanced recommendation engine using machine learning",
      url: "https://github.com/MilannSharma/Netflix-RS",
      image: "/images/projects/netflix-rs.svg",
    },
    {
      title: "NEXA AI",
      description: "AI-powered dashboard and analytics platform",
      url: "https://github.com/MilannSharma/NEXA-AI",
      image: "/images/projects/nexa-ai.svg",
    },
    {
      title: "InsightFlow",
      description: "Data insights and analytics workflow automation",
      url: "https://github.com/MilannSharma/InsightFlow",
      image: "/images/projects/insightflow.svg",
    },
  ],
  "certifications": [
    {
      title: "Applied Artificial Intelligence - Learn, Build and Create an AI Agent 2025-26",
      issuer: "IBM SkillsBuild",
      certificateId: "PLAN-EC2A0C27B7E2",
      completionDate: "16 Dec 2025",
      category: "AI & Machine Learning",
    },
    {
      title: "15 Days Online Summer Training and Internship Program 2023 - Java Core",
      issuer: "Learn and Build (LnB)",
      certificateId: "IN23PM1124689610",
      completionDate: "07 Aug 2023",
      category: "Programming Languages",
    },
    {
      title: "AI and Data Scientist",
      issuer: "OneRoadmap",
      certificateId: "CERT-184EA4EE",
      completionDate: "12 Sep 2025",
      category: "Data Science",
    },
    {
      title: "Data Science with Machine Learning & AI",
      issuer: "Upflairs Pvt. Ltd.",
      certificateId: "UF/0625/6362",
      completionDate: "31 Jul 2025",
      category: "Data Science",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "IBM SkillsBuild",
      certificateId: "ALM-COURSE_3955167",
      completionDate: "16 Dec 2025",
      category: "AI & Machine Learning",
    },
    {
      title: "SQL",
      issuer: "OneRoadmap",
      certificateId: "CERT-84B925D",
      completionDate: "12 Sep 2025",
      category: "Database",
    },
    {
      title: "Data Analyst",
      issuer: "OneRoadmap",
      certificateId: "CERT-34EC3A32",
      completionDate: "12 Sep 2025",
      category: "Data Science",
    },
    {
      title: "IBM SkillsBuild Presents: Tips for Career Planning",
      issuer: "IBM SkillsBuild",
      certificateId: "URL-EE533F89DE36",
      completionDate: "15 Dec 2025",
      category: "Professional Development",
    },
    {
      title: "Machine Learning",
      issuer: "IBM SkillsBuild",
      certificateId: "ALM-COURSE_3955165",
      completionDate: "16 Dec 2025",
      category: "AI & Machine Learning",
    },
    {
      title: "Exploring Data",
      issuer: "IBM SkillsBuild",
      certificateId: "ALM-COURSE_3825245",
      completionDate: "16 Dec 2025",
      category: "Data Science",
    },
    {
      title: "Exploring Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      certificateId: "ALM-COURSE_3825247",
      completionDate: "16 Dec 2025",
      category: "AI & Machine Learning",
    },
    {
      title: "Exploring Cloud Computing",
      issuer: "IBM SkillsBuild",
      certificateId: "ALM-COURSE_3825249",
      completionDate: "16 Dec 2025",
      category: "Cloud & Infrastructure",
    },
    {
      title: "Exploring Cybersecurity",
      issuer: "IBM SkillsBuild",
      certificateId: "ALM-COURSE_3825251",
      completionDate: "16 Dec 2025",
      category: "Security",
    },
    {
      title: "Exploring Quantum Computing",
      issuer: "IBM SkillsBuild",
      certificateId: "ALM-COURSE_3825253",
      completionDate: "16 Dec 2025",
      category: "Advanced Computing",
    },
  ],
  "giscusConfig": {
    id: "comments",
    repo: "MilannSharma/milansharma",
    repoId: "R_kgDOLBatdw",
    category: "General",
    categoryId: "DIC_kwDOLBatd84CjpPs",
    mapping: "pathname",
    term: "Welcome to Milan Sharma's Portfolio!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  "googleAnalyticId": process.env.NEXT_PUBLIC_GA_ID || '',
  "googleTagManagerId": process.env.NEXT_PUBLIC_GTM_ID || '',
};

export default config;
