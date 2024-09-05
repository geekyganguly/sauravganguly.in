import { HomeIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "Saurav Ganguly",
  initials: "SG",
  url: "https://sauravganguly.in",
  description: "Software Developer. I love building things and helping people.",
  summary: `
Experienced software developer with over 3 years in the industry, proficient in a wide range of tools and technologies. 
I bring a deep understanding of software development, consistently delivering high-quality solutions. 
By staying current with industry trends, I harness the latest tools and technologies to build innovative, scalable software.
  `,
  avatar: "/me.jpg",
  skills: [
    "Python",
    "Django",
    "Django Rest Framework",
    "React",
    "React Query",
    "React Redux",
    "Next.js",
    "TailwindCSS",
    "Shadcn UI",
    "MUI",
    "Typescript",
    "Node.js",
    "Express",
    "Drizzle ORM",
    "Dart",
    "Flutter",
    "Postgres",
    "Docker",
    "AWS",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@sauravganguly.in",
    social: {
      github: {
        name: "GitHub",
        url: "https://github.com/geekyganguly",
        icon: Icons.github,
        navbar: true,
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/geekyganguly",
        icon: Icons.linkedin,
        navbar: true,
      },
      x: {
        name: "X",
        url: "https://x.com/geekyganguly",
        icon: Icons.x,
        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/geekyganguly",
        icon: Icons.instagram,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      position: "Independent Software Developer",
      logo: "",
      start: "Aug 2023",
      end: "Present",
      description: `
  As a freelance software developer, I’ve taken on a variety of projects that span multiple industries, including event management, nonprofit organizations, startups, and document services. 
  My freelance work has given me the opportunity to design and develop complex systems tailored to the unique needs of each client. 
  I’ve utilized a diverse tech stack, including Django, React, Next.js, PostgreSQL, and Docker, to build robust and scalable applications.  
      `,
      href: "",
    },
    {
      company: "CodeNicely",
      position: "Software Development Engineer (SDE-II)",
      logo: "/codenicely.jpeg",
      start: "July 2021",
      end: "May 2023",
      description: `
  As a full-stack software developer at CodeNicely, I contributed to several key projects, including WizFit Challenge, SteelLive, HealthPotli, and Worldwide Transcripts. 
  I leveraged a range of technologies such as Django, DRF, Vue, Nuxt, PostgreSQL, Docker, and AWS to deliver robust solutions. 
  My role involved close collaboration with clients, the UI/UX team, Android and iOS developers, and QA engineers to ensure the highest quality of software delivery. 
  Additionally, I played an active role in the hiring process and provided mentorship to new team members.
      `,
      href: "https://www.linkedin.com/company/13260912/",
    },
  ],

  education: [
    {
      school: "Kalinga University, Raipur",
      href: "https://www.linkedin.com/company/15135585/",
      degree: "Bachelor of Technology in Computer Science Engineering",
      logo: "/kalinga_university.jpg",
      start: "2017",
      end: "2021",
    },
    {
      school: "R.N. College, Hajipur, Bihar",
      href: "https://www.linkedin.com/company/15115363/",
      degree: "HSC (Senior Secondary) in Science",
      logo: "/rnc.jpg",
      start: "2015",
      end: "2017",
    },
  ],

  projects: [
    {
      title: "Encircle",
      href: "",
      dates: "Jun 2024 - Aug 2024",
      description: `
  I developed an event management system, Encricle, designed to streamline the planning and execution of events. 
  The software offers features such as event creation & scheduling, exhibitor & visitor management, ticketing & badge generation, and email notifications. 
  It was built using Express for the backend, PostgreSQL for data management, and front-end with React and MUI. 
  The application is containerized using Docker and deployed on EC2 for scalability and reliability.
      `,
      technologies: [
        "React",
        "Zustand",
        "React Query",
        "Typescript",
        "MUI",
        "Express",
        "Drizzle ORM",
        "PostgreSQL",
        "Docker",
      ],
      links: [],
      image: "/encircle.png",
      video: "",
    },
    {
      title: "Startup Visa Works",
      href: "https://www.startupvisaworks.com/",
      dates: "Apr 2024 - May 2024",
      description: `
  I developed a website with headless CMS for Startup Visa Works, a platform designed to streamline the visa application process for startups. 
  The CMS was built using Next.js and Tailwind CSS for a fast, responsive, and modern user interface. 
  I integrated cal.com to enable seamless call scheduling directly within the platform, enhancing the user experience. 
  The project also involved using Shadcn UI for design consistency and deploying the application on Netlify for scalable hosting. 
      `,
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Directus",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.startupvisaworks.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/startup-visa-works.jpeg",
      video: "",
    },
    {
      title: "Bal Asha Trust",
      href: "https://program.balashatrust.org/",
      dates: "Jan 2024 - Apr 2024",
      description: `
  I developed a comprehensive ERP system for Bal Asha Trust, a nonprofit organization focused on child welfare.
  The system was built using Django for the backend and React for a dynamic, user-friendly front-end. 
  I utilized PostgreSQL for secure data management and Tailwind CSS along with Shadcn UI for a clean, modern design. 
  The project also included React Query for efficient data fetching, and the entire application was containerized with Docker and deployed on AWS for scalability. 
  This ERP system streamlined the organization's operations, from case management to resource allocation, enhancing their ability to serve the community.
      `,
      technologies: [
        "Django",
        "Django Rest Framework",
        "React.js",
        "React Redux",
        "React Query",
        "Tailwind CSS",
        "Docker",
        "Amazon Web Services (AWS)",
        "Flutter",
      ],
      links: [
        {
          type: "Website",
          href: "https://program.balashatrust.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/balasha.png",
      video: "",
    },
    {
      title: "World Document Services",
      href: "https://worlddocservices.com/",
      dates: "Jan 2024 - Apr 2024",
      description: `
  I developed an ERP system for World Document Services, a company specializing in document management and verification. 
  The system was designed to handle complex workflows, integrating Django for the backend and React with MUI for a responsive front-end. 
  I employed PostgreSQL for robust data management and React Query for efficient state management. 
  The project also involved the use of Docker for containerization, Flutter for cross-platform mobile accessibility, and deployment on AWS for scalability and reliability. 
  This ERP solution optimized the company’s operations, from document processing to client management, improving efficiency and client satisfaction.
      `,
      technologies: [
        "Django",
        "Django Rest Framework",
        "React.js",
        "React Redux",
        "React Query",
        "PostgreSQL",
        "TypeScript",
        "mui",
        "Flutter",
        "Docker",
        "Amazon Web Services (AWS)",
      ],
      links: [
        {
          type: "Website",
          href: "https://worlddocservices.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/world-document-services.png",
      video: "",
    },
  ],
} as const;
