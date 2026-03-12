import type {
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTechnology,
  TTestimonial,
} from '../types';

import {
  backend,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  web,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Good practices',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'React.js Developer',
    companyName: 'SABATA SIEMPRE SABATA',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBF-P3qklhbSYN011d67AskDSIOBLLeujTbQ&s',
    iconBg: '#383E56',
    date: 'November 2024 - September 2025',
    points: [
      'Development of a comprehensive website that centralizes the components and tools for different company products.',
      'I improved product loading on the ecommerce site by implementing best practices in image and background image optimization.',
      'Integration of registration and login methods using external providers.',
      'I introduced the use of CD as a work strategy on GitHub, and I used Figma to accelerate design proposals.',
    ],
  },
  {
    title: 'React Native Developer',
    companyName: 'SEGUROS EQUINOCCIAL',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwI7Tl-Bv0mKfWrIL_WqXwzGJMv-_fensbg&s',
    iconBg: '#E6DEDD',
    date: 'July 2024 - November 2024',
    points: [
      'I resolved critical errors in the Equinoccial Insurance web service, improving system stability through the use of SQL Server.',
      'I implemented best practices in SQL, achieving a significant optimization of the web systems performance.',
      'I identified and fixed bugs, improving the performance of both the website and the database for a smoother user experience.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer FullStack',
    companyName: 'ACADEMIA ELITE',
    icon: 'https://aulavirtual-smartplus.com/src/icons/logo1.png',
    iconBg: '#383E56',
    date: 'January 2023 - May 2023',
    points: [
      'I designed and developed an educational web platform, integrating third-party services for a robust and scalable backend.',
      'I used React, Next.js, GitHub, and Figma to create an attractive and functional user interface, improving the user experience and ensuring high performance standards.',
      'I work with backend and frontend technologies such as React and .Net through contracts and signatures.',
    ],
  },
  {
    title: 'Full stack Developer',
    companyName: 'ARCHETICS',
    icon: 'https://avatars.githubusercontent.com/u/82846905?s=200&v=4',
    iconBg: '#E6DEDD',
    date: 'last',
    points: [
      'I designed and developed a module in a production application that allows users to connect to the app even with location restrictions, improving the accessibility of the service.',
      'I proposed and achieved acceptance of the interface design for the new module, creating a fluid and friendly user experience that facilitates navigation.',
      'Hexagonal architecture alongside Java and Angular in the stack.',
      'Learning about Microfrontends in system development',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'Working with Steven was an excellent experience. During his time as a React.js Developer, he significantly improved the performance of our ecommerce site.',
    name: 'Ing David Alarcon',
    designation: 'RRHH',
    company: 'GAD Calderon',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    testimonial:
      'He proved to be a highly competent and dedicated developer. He quickly integrated into the team and successfully resolved critical errors in our web services.',
    name: 'Mercedes Pillajo',
    designation: 'Sales',
    company: 'Entrepreneur',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    testimonial:
      'She possesses a highly valuable combination of frontend and backend skills. During the development of our educational platform, she successfully built a scalable solution.',
    name: 'Manuel Narvaez',
    designation: 'Economist',
    company: 'Fybeca',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Medical Appointment Management System',
    description:
      'Web platform for comprehensive medical appointment management that allows patients to book consultations online and doctors to view their schedule in real time.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Java',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://expert.holanuna.com/es/practika/wp-content/uploads/2020/12/05_Docplanner.png',
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Personal Finance App with Reports',
    description:
      'A web application designed for personal finance management that allows you to record income and expenses organized by category, making it easier to control your cash flow. The system includes savings goals with automatic alerts based on events that trigger when certain limits or conditions are reached.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'net',
        color: 'pink-text-gradient',
      },
    ],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfLzPXkNlYekF40Ry_3ela6FJqqguBrETyA&s',
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'E-commerce platform with real-time inventory',
    description:
      'E-commerce application developed with a modern architecture that allows you to manage a product catalog, shopping cart, and order processing. It uses PostgreSQL for data persistence and Redis for session management and caching.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgress',
        color: 'green-text-gradient',
      },
      {
        name: 'node',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png',
    sourceCodeLink: 'https://github.com/',
  },
];

export { experiences, projects, services, technologies, testimonials };