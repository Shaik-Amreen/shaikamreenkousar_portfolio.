import {
    mobile,
    backend,
    creator,
    web,

    SQLB,
    SQLI,
    js,
    JSI,
    problemsolving,
    pythoncert,

    es6,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    angular,
    vuejs,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    githubDesktop,
    gitlab,
    swagger,
    postman,
    vscode,
    jira,
    insomnia,
    express,
    flask,
    golang,
    nestjs,

    python,
    java,
    c,
    aws,
    mysql,

    carrent,
    jobit,
    tripguide,

    expo,
    reactnative,

    bootstrap,
    headlessui,
    mui,
    tailwind,
    reactbootstrap,

    infobell,
    earthetic,
    yesreal,
    redbee,
    hirecraft
} from "./assets";

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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        category: "Frontend Technologies",
        list: [
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "ES6", icon: es6 },
            { name: "TypeScript", icon: typescript },
            { name: "Angular", icon: angular },
            { name: "Vue.js", icon: vuejs },
            { name: "React", icon: reactjs },
            { name: "Redux ToolKit", icon: redux },

        ]
    },
    {
        category: "Backend Technologies",
        list: [
            { name: "NodeJs", icon: nodejs },
            { name: "ExpressJs", icon: express },
            { name: "Flask", icon: flask },
            { name: "NestJs", icon: nestjs },
            { name: "GoLang", icon: golang },
        ]
    },
    {
        category: "Mobile Development",
        list: [
            { name: "Expo ", icon: expo },
            { name: "React Native CLI", icon: reactnative },

        ]
    },
    {
        category: "Databases",
        list: [
            { name: "MongoDB", icon: mongodb },
            { name: "MySQL", icon: mysql },
        ]
    },
    {
        category: "UI Libraries",
        list: [
            { name: "Material-UI", icon: mui },
            { name: "BootStrap", icon: bootstrap },
            { name: "Tailwind CSS", icon: tailwind },
            { name: "Headless UI", icon: headlessui },
            { name: "React-BootStrap", icon: reactbootstrap },

        ]
    },
    {
        category: "UI/UX Design",
        list: [
            { name: "Figma", icon: figma },
        ]
    },



    {
        category: "Programming Languages",
        list: [
            { name: "C-Programming", icon: c },
            { name: "Java", icon: java },
            { name: "Python", icon: python },
        ]
    },
    {
        category: "Tools",
        list: [
            { name: "Git", icon: git },
            { name: "GitHub Desktop", icon: githubDesktop },
            { name: "GitLab", icon: gitlab },
            { name: "VSCode", icon: vscode },
            { name: "Swagger", icon: swagger },
            { name: "Postman", icon: postman },
            { name: "Insomnia", icon: insomnia },
            { name: "Jira", icon: jira },
        ]
    },
    {
        category: "Cloud",
        list: [
            { name: "AWS", icon: aws },
            { name: "Docker", icon: docker },
            { name: "Gitops (CICD)", icon: git },
        ]
    }
];


const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Infobell it | AMD",
        icon: infobell,
        iconBg: "linear-gradient( rgba(61, 91, 157, 1), rgba(17, 24, 39, 1))",
        date: "March 2024 – December 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Infobell it",
        icon: infobell,
        iconBg: "linear-gradient( rgba(61, 91, 157, 1), rgba(17, 24, 39, 1))",
        date: "July 2023 – March 2024 ",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Infobell it",
        icon: infobell,
        iconBg: "linear-gradient( rgba(61, 91, 157, 1), rgba(17, 24, 39, 1))",
        date: "January 2023 - June 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer (MEAN) ",
        company_name: "Redbee 365 Studio Private Limited - Intern",
        icon: redbee,
        iconBg: "#E6DEDD",
        date: "September 2022 - December 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Earthetic - Intern",
        icon: earthetic,
        iconBg: "#383E56",
        date: "July 2022 – October 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer (MERN)",
        company_name: "Yes Real Technologies private Limited - Intern",
        icon: yesreal,
        iconBg: "#E6DEDD",
        date: "January 2022 - June 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Node.js Developer",
        company_name: "Hirecraft - Intern",
        icon: hirecraft,
        iconBg: "#E6DEDD",
        date: "July 2020 - Aug 2020",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];



const certifications = [
    { name: 'Javascript', link: "https://www.hackerrank.com/certificates/ab632039636e", image: js },
    { name: 'Javascript (Intermediate)', link: "https://www.hackerrank.com/certificates/20eb356e5db2", image: JSI },
    { name: 'Problem solving', link: "https://www.hackerrank.com/certificates/fa9ea78d6e05", image: problemsolving },
    { name: 'Python', link: "https://www.hackerrank.com/certificates/17795979b091", image: pythoncert },
    { name: 'SQL-Basic', link: "https://www.hackerrank.com/certificates/3455fe4f7f6f", image: SQLB },
    { name: 'SQL-Intermediate', link: "https://www.hackerrank.com/certificates/6b69f49697dd", image: SQLI },
]

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        "name": "Benchmark Automation - AMD ",
        "description": "Automates the process of running, managing, and analyzing performance benchmarks for hardware components, providing faster and more accurate benchmarking results for AMD products.",
        "tags": [
            {
                "name": "Vue.js",
                "color": "blue-text-gradient"
            },
            {
                "name": "Node.js",
                "color": "green-text-gradient"
            },
            {
                "name": "MongoDB",
                "color": "pink-text-gradient"
            },
            {
                "name": "Express.js",
                "color": "yellow-text-gradient"
            },
            {
                "name": "AWS",
                "color": "orange-text-gradient"
            },
            {
                "name": "GitHub",
                "color": "purple-text-gradient"
            },
            {
                "name": "Visual Studio",
                "color": "red-text-gradient"
            },
            {
                "name": "Swagger",
                "color": "teal-text-gradient"
            },
            {
                "name": "Postman",
                "color": "cyan-text-gradient"
            }
        ],
        "role": "Full stack Developer"
    },
    {
        "name": "GSI Sales Advisory - AMD",
        "description": "Supports global system integrators by offering data-driven insights and recommendations to optimize sales strategies and enhance performance outcomes.",
        "tags": [
            {
                "name": "React.js",
                "color": "blue-text-gradient"
            },
            {
                "name": "Node.js",
                "color": "green-text-gradient"
            },
            {
                "name": "MongoDB",
                "color": "pink-text-gradient"
            },
            {
                "name": "Python",
                "color": "yellow-text-gradient"
            },
            {
                "name": "AWS",
                "color": "orange-text-gradient"
            },
            {
                "name": "GitHub",
                "color": "purple-text-gradient"
            },
            {
                "name": "Visual Studio",
                "color": "red-text-gradient"
            },
            {
                "name": "Swagger",
                "color": "teal-text-gradient"
            },
            {
                "name": "Postman",
                "color": "cyan-text-gradient"
            }
        ],
        "role": "Full stack Developer"
    },
    {
        "name": "NextZEN ERP HRMS",
        "description": "A unified solution integrating HRMS, Accounting, and Warehouse Management functionalities.",
        "tags": [
            {
                "name": "React-Native",
                "color": "blue-text-gradient"
            },
            {
                "name": "Android Studio",
                "color": "green-text-gradient"
            },
            {
                "name": "Xcode",
                "color": "pink-text-gradient"
            },
            {
                "name": "GitHub",
                "color": "purple-text-gradient"
            },
            {
                "name": "Visual Studio",
                "color": "red-text-gradient"
            }
        ],
        "role": "React Native Developer"
    },
    {
        "name": "Upturn",
        "description": "A stock advisor app utilizing adaptive AI for personalized Buy and Sell recommendations, with features like custom Robo-Portfolios and financial guidance based on AI technologies.",
        "tags": [
            {
                "name": "React-Native",
                "color": "blue-text-gradient"
            },
            {
                "name": "Android Studio",
                "color": "green-text-gradient"
            },
            {
                "name": "Xcode",
                "color": "pink-text-gradient"
            },
            {
                "name": "Firebase",
                "color": "orange-text-gradient"
            },
            {
                "name": "GitHub",
                "color": "purple-text-gradient"
            },
            {
                "name": "Visual Studio",
                "color": "red-text-gradient"
            }
        ],
        "role": "React Native Developer - Lead "
    },
    {
        "name": "Nova Physician Wellness Center",
        "description": "Enables users to monitor diet plans and exercise routines, offering expert advice from dieticians and fostering connections with fitness enthusiasts.",
        "tags": [
            {
                "name": "React-Native",
                "color": "blue-text-gradient"
            },
            {
                "name": "Figma",
                "color": "green-text-gradient"
            },
            {
                "name": "Android Studio",
                "color": "pink-text-gradient"
            },
            {
                "name": "Xcode",
                "color": "yellow-text-gradient"
            },
            {
                "name": "Firebase",
                "color": "orange-text-gradient"
            },
            {
                "name": "GitHub",
                "color": "purple-text-gradient"
            },
            {
                "name": "Visual Studio",
                "color": "red-text-gradient"
            }
        ],
        "role": "Full Stack Developer – Lead"

    },
    {
        "name": "Buzz Staff Women",
        "description": "An NGO fostering community and growth among women, focusing on empowerment and extending reach to rural areas for training.",
        "tags": [
            {
                "name": "React.js",
                "color": "blue-text-gradient"
            },
            {
                "name": "Redux",
                "color": "green-text-gradient"
            },
            {
                "name": "Material UI",
                "color": "pink-text-gradient"
            },
            {
                "name": "GitHub",
                "color": "purple-text-gradient"
            },
            {
                "name": "Jira",
                "color": "red-text-gradient"
            },
            {
                "name": "Visual Studio",
                "color": "yellow-text-gradient"
            }
        ],
        "role": "Frontend Developer"
    },
    {
        "name": "ARIKYA – WEB | ANDROID | IOS",
        "description": "Arikya is the platform which discovers the path to Skill Enhancement, Automated Recruitment and Remarkable achievement.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "React Native", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "Insomnia", "color": "purple-text-gradient" },
            { "name": "AWS", "color": "cyan-text-gradient" },
            { "name": "GITOPS", "color": "brown-text-gradient" }
        ],
        "role": "Full Stack Developer"

    },
    {
        "name": "Diny Bee",
        "description": "Diny Bee is a Warehouse Management Tool designed to streamline warehouse operations.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Material-UI", "color": "pink-text-gradient" },
            { "name": "Slack", "color": "orange-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" },
            { "name": "Visual Studio", "color": "cyan-text-gradient" }
        ],
        "role": "Frontend Developer"
    },
    {
        "name": "Dynamic Ecommerce App",
        "description": "A cross-platform app designed with a dynamic UI for an ecommerce experience.",
        "tags": [
            { "name": "React-Native CLI", "color": "blue-text-gradient" },
            { "name": "Figma", "color": "green-text-gradient" },
            { "name": "Android Studio", "color": "pink-text-gradient" },
            { "name": "Xcode", "color": "orange-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" },
            { "name": "Visual Studio", "color": "cyan-text-gradient" }
        ],
        "role": "React Native Developer - Lead "
    },
    {
        "name": "ERP",
        "description": "Product to digitalize manual processes in college activities.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Redux", "color": "orange-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" },
            { "name": "Visual Studio", "color": "cyan-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"

    },
    {
        "name": "College Feedback and Task Management System",
        "description": "Enables faculty and students to exchange feedback seamlessly. Admins can view and download reports while faculty upload tasks.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "AWS", "color": "cyan-text-gradient" },
            { "name": "GitOps", "color": "purple-text-gradient" },
            { "name": "GitHub", "color": "brown-text-gradient" }
        ],
        "role": "Full stack Developer"
    },
    {
        "name": "AI Based Slum Control | SMART INDIA HACKATHON (SIH)",
        "description": "Web app with advanced AI for slum identification via image segmentation, coupled with automated employment solutions.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "React Native Developer - Lead "
    },
    {
        "name": "Online Exam Fee Payment",
        "description": "Web app for online exam fee payment with separate logins for Students and Admin. Integrated a payment gateway for secure transactions.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"

    },
    {
        "name": "Digital Library",
        "description": "A web application offering students technical and verbal skill enhancement through quizzes, study materials, and course rankings.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"
    },
    {
        "name": "Digital Admission Process",
        "description": "A web application facilitating the admissions process for the institute, enabling students to apply and manage applications efficiently.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"
    },
    {
        "name": "Recruitment Process for Internships or Any Events",
        "description": "A web app where candidates submit applications for internships or events, with feedback and interview evaluations.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Redux", "color": "orange-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"
    },
    {
        "name": "Agri-Farm | SMART INDIA HACKATHON (SIH)",
        "description": "React Native mobile app for Agriculture Food processing, providing farmers with crop updates and customer interaction.",
        "tags": [
            { "name": "React Native", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full stack Developer"
    },
    {
        "name": "Event Accounting Management",
        "description": "Centralized fund management system for events, tracking all transactions and histories specific to each event.",
        "tags": [
            { "name": "Angular", "color": "blue-text-gradient" },
            { "name": "Bootstrap", "color": "green-text-gradient" },
            { "name": "Node.js", "color": "yellow-text-gradient" },
            { "name": "Express", "color": "orange-text-gradient" },
            { "name": "Swagger", "color": "red-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full stack Developer - Lead"
    },
    {
        "name": "Automation of Exam Hall and Seating Arrangement",
        "description": "An online process-based web application simplifying seat allocation during examinations for colleges and students. Developed with distinct logins for admin and students, allowing tasks like hall number management and exam timetable uploads. Automates seating arrangements and distributes hall numbers via email. Admins can print seating arrangements.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Redux", "color": "yellow-text-gradient" },
            { "name": "Node.js", "color": "orange-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" },
            { "name": "Visual Studio", "color": "cyan-text-gradient" }
        ],
        "role": "React Native Developer - Lead "
    },
    {
        "name": "Automation Plugin of Attendance Marking in MS Teams",
        "description": "Developed an Automation Plugin for MS Teams, streamlining virtual classes by automating attendance tracking. Designed and developed UI, backend, and API integration for real-time data synchronization, enhancing convenience and productivity.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Node.js", "color": "orange-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"
    },
    {
        "name": "Task Forz",
        "description": "A responsive web app enhancing project tracking for individual tenants with graphical reports. Available in fifty languages, including Arabic, it allows tenants to add projects and teams while tracking status and documentation.",
        "tags": [
            { "name": "Node.js", "color": "orange-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" },
            { "name": "Visual Studio", "color": "cyan-text-gradient" }
        ],
        "role": "Backend Developer"
    },
    {
        "name": "Employee Leave and Salary Management System",
        "description": "A system managing employee leave requests and automating salary generation. Employees apply for leave, which is processed for salary generation, with email notifications sent upon salary crediting.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Redux", "color": "yellow-text-gradient" },
            { "name": "Node.js", "color": "orange-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" },
            { "name": "Visual Studio", "color": "cyan-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"
    },
    {
        "name": "Automated Time Table Generation",
        "description": "A system simplifying schedule creation for educational institutions by automating timetable generation. Designed algorithms and interfaces, integrating data sources for optimal scheduling with minimal conflicts.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Node.js", "color": "orange-text-gradient" },
            { "name": "Express.js", "color": "yellow-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"
    },
    {
        "name": "Examination Report Generation",
        "description": "A web application for generating university semester examination reports. Admins upload subject information, while faculty input student marks, assessments, and syllabus details via Excel. Students provide feedback for internal evaluation.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Node.js", "color": "orange-text-gradient" },
            { "name": "Express.js", "color": "yellow-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer – Lead"
    },
    {
        "name": "BGMI Tournaments",
        "description": "A webpage developed to conduct online tournaments for any kind of events or occasions. A responsive webpage was designed for tournament registrations, with BGMI as a reference example.",
        "tags": [
            { "name": "React.js", "color": "blue-text-gradient" },
            { "name": "React Hooks", "color": "green-text-gradient" },
            { "name": "Bootstrap", "color": "pink-text-gradient" },
            { "name": "Node.js", "color": "orange-text-gradient" },
            { "name": "Express.js", "color": "yellow-text-gradient" },
            { "name": "MongoDB", "color": "green-text-gradient" },
            { "name": "GitHub", "color": "purple-text-gradient" }
        ],
        "role": "Full Stack Developer"
    }
]




export { services, technologies, experiences, certifications, testimonials, projects };
