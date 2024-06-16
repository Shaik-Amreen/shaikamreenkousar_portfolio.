import {
    mobile,
    backend,
    creator,
    web,

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
        date: "March 2024 – present",
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
