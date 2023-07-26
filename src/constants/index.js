import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  carrier,
  emertxe,
  jncasr,
  cpp,
  python,
  tf,
  arm,
  signLang,
  ecom,
  blog,
  home,
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
    title: "Embedded Systems Programming",
    icon: creator,
  },
  {
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tf,
  },
  {
    name: "Intel ARM M4",
    icon: arm,
  },
  
];

const experiences = [
  {
    title: "Management Trainee - Engineering Leadership Program",
    company_name: "Carrier Corporation, Hyderabad",
    icon: carrier,
    iconBg: "#383E56",
    date: "From July 2024",
    points: [
      "Got selected through campus placement drive.",
      "Would be working on Embedded Systems at Carrier's Research and Design Centre, Hyderabad."
    ],
  },
  {
    title: "IoT Developer Intern",
    company_name: "Emertxe Information Technologies, Bengaluru",
    icon: emertxe,
    iconBg: "#E6DEDD",
    date: "June 2022 - Aug 2022",
    points: [
      "Developing an IoT solution for a smart home.",
      "Used PICSimLab, Null Emulator and Blynk IOT Cloud Application to simulate a home automation project.",
      "Learnt about ATmega 328p, serial communication protocol, I2C protocol, LCD interfacing, PWM, ethernet shield and SDLC."
    ],
  },
  {
    title: "Summer Research Fellow",
    company_name: "Jawaharlal Nehru Centre for Advanced Scientific Research, Bengaluru",
    icon: jncasr,
    iconBg: "#383E56",
    date: "June 2022 - Aug 2022",
    points: [
      "Worked on electrical and thermal testing of thermoelectric materials under guidance of Professor Kanishka Biswas.",
      "Got exposure on X-Ray Diffraction, Thermogravimetric analysis, Spark Plasma Sintering, Seebeck coefficient measurement, and band gap measurement (using Kubelka-Munk theorem) of semiconductor samples.",
      "Worked extensively on Riko Mini PEM (Thermoelectric Conversion Efficiency Evaluation System for Small Modules).",
      "Was involved in the fabrication of a totally in-house novel thermoelectric device.",
    ],
  }
];

const projects = [
  {
    name: "Sign Language Recognition and Object Classification Model",
    description:
      "Using Convolutional Neural Networks (Computer Vision), to help the deaf, dumb and blind",
    tags: [
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: signLang,
    source_code_link: "https://github.com/shrikar-tamirisa/signLang",
  },
  {
    name: "ECom Website",
    description:
      "A shopping website with a shopping page, a user log in and registration page,a fully functioning cart, and a checkout using Stripe Payments API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/shrikar-tamirisa/e-com-clothing",
  },
  {
    name: "Custom Blog Website",
    description:
      "A minimalist website with MongoDB as backend. Made to host blogs and poems of a group of college science and literature aficionados.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/shrikar-tamirisa/Blog_improvised",
  },
  {
    name: "Home Automation Simulation",
    description:
      "Embedded C on ATmega328p. Used Blynk IoT app interface",
    tags: [
      {
        name: "picsimlab",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
      {
        name: "i2c",
        color: "pink-text-gradient",
      },
    ],
    image: home,
    source_code_link: "https://github.com/shrikar-tamirisa/home_automation",
  },
];

export { services, technologies, experiences, projects };
