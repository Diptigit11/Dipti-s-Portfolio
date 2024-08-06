import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
    cake,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Azure Cloud",
      company_name: "TCET",
      icon: backend,
      iconBg: "#383E56",
      date: "19 June - 30 june 2023",
      points: [
        "Expertly handled the setup and management of virtual machines, storage solutions, and network configurations using Azure services.",
        "Successfully completed a project focused on deploying and configuring virtual environments, storage systems, and network setups through Azure's powerful tools.",
        "Gained hands-on experiences with Azure Virtual Machines, Azure Storage and Azure Networking "
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Prodigy InfoTech",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using javascript and other related technologies.",
        " Developing strong problem-solving skills to tackle challenges creatively and efficiently.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Technical Member",
      company_name: "TSDW-TCET",
      icon: web,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Understanding the importance of teamwork and actively participating in collaborative efforts to achieve shared goals and objectives.",
        "I've gained insights into hosting hackathons, from defining objectives and planning logistics to effectively promoting the event to engage participants.",
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "A Cake Shop Website",
      description:
        "This cake website allows customers to browse through various cake options,view descriptions,and make purchases easily via whatsapp.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: cake,
      source_code_link: "https://chocolatetiffin.onrender.com/",
    },
    {
      name: "Tic Tac Toe ",
      description:
        "I've developed a Tic Tac Toe game where users can challenge an AI opponent for an interactive gaming experience.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://diptigit11.github.io/TicTacToeGame/",
    },
    {
      name: "Burger King",
      description:
        "I've developed a frontend of food website showcasing various meals, including burgers and other essential dishes.",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://diptigit11.github.io/BurgerKing/",
    },

  ];
  
  export { services, technologies, experiences, projects };