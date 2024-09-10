/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Kurtovic",
  logo_name: "mirza.k()",
  nickname: "mile / miki",
  full_name: "Mirza Kurtovic",
  subTitle: "QA Engineer, ML Enthusiast 🔥. Always learning.",
  resumeLink: "https://www.upwork.com/freelancers/mirzakurtovic",
  mail: "mailto:mirzakurtovic0@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mirzakurtovic1",
  linkedin: "https://www.linkedin.com/in/mirza-kurtovic-612b3b181/",
  gmail: "mirzakurtovic0@gmail.com",
  gitlab: "https://gitlab.com/mirzakurtovic1",
  upwork: "https://www.upwork.com/freelancers/~01dda56773c8302d9e",
  twitter: "#",
  instagram: "#",
};

const skills = {
  data: [
    {
      title: "Quality Assurance",
      fileName: "FullStackImg",
      skills: [
        "⚡ Oversee testing, plan resources, develop strategies, and define metrics for efficient testing aligned with project goals.",
        "⚡ Create test cases, execute them manually, report defects, perform regression testing, and conduct exploratory testing to ensure software behaves as expected.",
        "⚡ Develop and maintain an automation framework, script tests for repetitive scenarios, integrate them into the CI/CD pipeline, and ensure efficient parallel execution for speed and repeatability",
        "⚡ Assess software performance under different loads, define metrics, execute load scenarios to simulate heavy user loads, and evaluate scalability for optimal peak performance.",
        "⚡ Identify and address vulnerabilities through tasks like vulnerability assessment, penetration testing, evaluating authentication and authorization mechanisms, ensuring data security, and verifying compliance with standards.",
      ],
      softwareSkills: [
        {
          skillName: "cypress",
          fontAwesomeClassname: "simple-icons:cypress",
          style: {
            color: "#69D3A7",
          },
        },
        {
          skillName: "playwright",
          fontAwesomeClassname: "simple-icons:playwright",
          style: {
            color: "#2EAD33",
          },
        },
        {
          skillName: "protractor",
          fontAwesomeClassname: "simple-icons:protractor",
          style: {
            color: "#ED163A",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Qase",
          fontAwesomeClassname: "simple-icons:qase",
          style: {
            color: "#4F46DC",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Continuous integration",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in integrating automated tests into Continuous Integration pipelines, ensuring consistent, efficient testing, and enhancing software quality throughout development.",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Circle CI",
          fontAwesomeClassname: "simple-icons:circleci",
          style: {
            color: "#343434",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Mostar",
      subtitle:
        "Bachelor of Science in Information Technology, Computer science",
      logo_path: "fit.png",
      alt_name: "FIT",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied core subjects like Web development, Data Structures, DBMS, Networking, Security, etc.",
      ],
      website_link: "http://www.fit.ba",
    },
    {
      title: "University of Mostar",
      subtitle: "Master in Information Technology, Computer science",
      logo_path: "fit.png",
      alt_name: "FIT",
      duration: "2020 - 2022",
      descriptions: [],
      website_link: "http://www.fit.ba",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Tester, Foundation Level",
      subtitle: "ISTQB",
      logo_path: "istqb.png",
      certificate_link: "#",
      alt_name: "Postman",
      color_code: "#fffbf3",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link: "#",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link: "#",
      alt_name: "Postman",
      color_code: "#fffbf3",
    },
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link: "#",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have played a pivotal role as a QA engineer in a multitude of international projects, contributing my expertise across a broad spectrum of applications. My experience spans from meticulously testing and ensuring the quality of simple e-commerce applications to intricately validating the functionality and performance of advanced Machine Learning (ML) systems.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Secure privacy",
      url: "https://secureprivacy.ai/",
      description:
        "Secure Privacy automates cookie consent, visitor preferences, privacy policy & cookie declaration management across international data privacy laws. It saves you time and money and assists you to comply with data privacy laws.",
      languages: [],
      links: [
        {
          name: "Website",
          url: "https://secureprivacy.ai/",
        },
      ],
    },
    {
      id: "1",
      name: "Della",
      url: "https://www.wolterskluwer.com/",
      description:
        "Della AI provides a contract analysis platform for legal professionals. Helping business and legal professional torn between proper legal review and the need for speed, to easily identify and locate the point that matters and the red flag in their contracts.",
      languages: [],
      links: [
        {
          name: "Website",
          url: "https://www.wolterskluwer.com/",
        },
      ],
    },
    {
      id: "2",
      name: "Relay",
      url: "https://relayfi.com",
      description:
        "Relay is a no-fee, online business banking and money management platform designed to help small businesses take control of their cash flow.",
      languages: [],
      links: [
        {
          name: "Website",
          url: "https://relayfi.com",
        },
      ],
    },
    {
      id: "3",
      name: "Parserr",
      url: "https://parserr.com/",
      description:
        "Parser is a software that allows you to extract data from incoming emails. Email parsers can be configured to pull specific data fields from incoming emails.",
      languages: [],
      links: [
        {
          name: "Website",
          url: "https://relayfi.com",
        },
      ],
    },
    {
      id: "4",
      name: "eComply",
      url: "https://ecomplysolutions.com/",
      description:
        "Cloud-based agency-focused labor compliance and diversity management solution for custom reporting and workflow automation on a single platform",
      languages: [],
      links: [
        {
          name: "Website",
          url: "https://ecomplysolutions.com/",
        },
      ],
    },
    {
      id: "5",
      name: "Elunic",
      url: "elunic.com",
      description:
        "shopfloor.io connects and visualizes your machinery, products and employees; either as the foundation of a scalable and secure Industry 4.0 system architecture or by connecting to your existing infrastructure. ",
      languages: [],
      links: [
        {
          name: "Website",
          url: "elunic.com",
        },
      ],
    },
    {
      id: "6",
      name: "Collaboard",
      url: "https://www.collaboard.app/",
      description:
        "Collaboard is a solution developed by the Swiss software company IBV, which is over 42 years old. Behind Collaboard is a European team for which data security, data sovereignty and independence are important core values.",
      languages: [],
      links: [
        {
          name: "Website",
          url: "https://www.collaboard.app/",
        },
      ],
    },
    {
      id: "7",
      name: "Monk",
      url: "https://monk.io/",
      description:
        "Monk is an autonomous AI DevOps agent that runs your app in the cloud. Monk is a smart teammate that architects, builds and optimizes your running app. ",
      languages: [],
      links: [
        {
          name: "Website",
          url: "https://monk.io/",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
  projects,
};
