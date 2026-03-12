import { backend, creator, mobile, web } from "../assets";

export type Language = "en" | "es";

export interface TExperiencePoint {
  en: string;
  es: string;
}

export interface TExperienceTranslated {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: TExperiencePoint[];
}

export interface TTestimonialTranslated {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface TProjectTranslated {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  sourceCodeLink: string;
}

export interface TServiceTranslated {
  title: string;
  icon: string;
}

export interface Translations {
  language: Language;
  nav: {
    about: string;
    work: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    description: string[];
  };
  about: {
    p: string;
    h2: string;
    content: string;
  };
  services: TServiceTranslated[];
  experience: {
    p: string;
    h2: string;
  };
  experiences: TExperienceTranslated[];
  works: {
    p: string;
    h2: string;
    content: string;
  };
  projects: TProjectTranslated[];
  feedbacks: {
    p: string;
    h2: string;
  };
  testimonials: TTestimonialTranslated[];
  contact: {
    p: string;
    h2: string;
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    language: "en",
    nav: {
      about: "About",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      subtitle: "Hi, I'm",
      description: [
        "Full Stack Developer: mobile, web, and desktop applications",
      ],
    },
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Fullstack JavaScript Web Developer with over 2 years of experience in application support, specializing in JavaScript, React, Angular, .NET, Java, and Node.js. My experience includes maintaining, improving, and optimizing production web platforms, creating reusable and atomic components, developing microfrontends, troubleshooting, and supporting development and deployment processes.`,
    },
    services: [
      { title: "Web Developer", icon: web },
      { title: "React Native Developer", icon: mobile },
      { title: "Backend Developer", icon: backend },
      { title: "Good practices", icon: creator },
    ],
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    experiences: [
      {
        title: "React.js Developer",
        companyName: "SABATA SIEMPRE SABATA",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBF-P3qklhbSYN011d67AskDSIOBLLeujTbQ&s",
        iconBg: "#383E56",
        date: "November 2024 - September 2025",
        points: [
          {
            en: "Development of a comprehensive website that centralizes the components and tools for different company products.",
            es: "Desarrollo de un sitio web integral que centraliza los componentes y herramientas para los diferentes productos de la empresa.",
          },
          {
            en: "I improved product loading on the ecommerce site by implementing best practices in image and background image optimization.",
            es: "Mejoré la carga de productos en el sitio de comercio electrónico implementando mejores prácticas en optimización de imágenes.",
          },
          {
            en: "Integration of registration and login methods using external providers.",
            es: "Integración de métodos de registro e inicio de sesión utilizando proveedores externos.",
          },
          {
            en: "I introduced the use of CD as a work strategy on GitHub, and I used Figma to accelerate design proposals.",
            es: "Introduje el uso de CD como estrategia de trabajo en GitHub, y utilicé Figma para acelerar las propuestas de diseño.",
          },
        ],
      },
      {
        title: "React Native Developer",
        companyName: "SEGUROS EQUINOCCIAL",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwI7Tl-Bv0mKfWrIL_WqXwzGJMv-_fensbg&s",
        iconBg: "#E6DEDD",
        date: "July 2024 - November 2024",
        points: [
          {
            en: "I resolved critical errors in the Equinoccial Insurance web service, improving system stability through the use of SQL Server.",
            es: "Resolví errores críticos en el servicio web de Seguros Equinoccial, mejorando la estabilidad del sistema mediante el uso de SQL Server.",
          },
          {
            en: "I implemented best practices in SQL, achieving a significant optimization of the web systems performance.",
            es: "Implementé mejores prácticas en SQL, logrando una optimización significativa del rendimiento de los sistemas web.",
          },
          {
            en: "I identified and fixed bugs, improving the performance of both the website and the database for a smoother user experience.",
            es: "Identifiqué y corregí errores, mejorando el rendimiento tanto del sitio web como de la base de datos para una experiencia de usuario más fluida.",
          },
          {
            en: "Participating in code reviews and providing constructive feedback to other developers.",
            es: "Participé en revisiones de código y proporcioné retroalimentación constructiva a otros desarrolladores.",
          },
        ],
      },
      {
        title: "Web Developer FullStack",
        companyName: "ACADEMIA ELITE",
        icon: "https://aulavirtual-smartplus.com/src/icons/logo1.png",
        iconBg: "#383E56",
        date: "January 2023 - May 2023",
        points: [
          {
            en: "I designed and developed an educational web platform, integrating third-party services for a robust and scalable backend.",
            es: "Diseñé y desarrollé una plataforma web educativa, integrando servicios de terceros para un backend robusto y escalable.",
          },
          {
            en: "I used React, Next.js, GitHub, and Figma to create an attractive and functional user interface, improving the user experience and ensuring high performance standards.",
            es: "Utilicé React, Next.js, GitHub y Figma para crear una interfaz de usuario atractiva y funcional, mejorando la experiencia del usuario y asegurando altos estándares de rendimiento.",
          },
          {
            en: "I work with backend and frontend technologies such as React and .Net through contracts and signatures.",
            es: "Trabajo con tecnologías de backend y frontend como React y .Net mediante contratos y firmas.",
          },
        ],
      },
      {
        title: "Full stack Developer",
        companyName: "ARCHETICS",
        icon: "https://avatars.githubusercontent.com/u/82846905?s=200&v=4",
        iconBg: "#E6DEDD",
        date: "last",
        points: [
          {
            en: "I designed and developed a module in a production application that allows users to connect to the app even with location restrictions, improving the accessibility of the service.",
            es: "Diseñé y desarrollé un módulo en una aplicación de producción que permite a los usuarios conectarse a la aplicación incluso con restricciones de ubicación, mejorando la accesibilidad del servicio.",
          },
          {
            en: "I proposed and achieved acceptance of the interface design for the new module, creating a fluid and friendly user experience that facilitates navigation.",
            es: "Propuse y logré la aceptación del diseño de la interfaz para el nuevo módulo, creando una experiencia de usuario fluida y amigable que facilita la navegación.",
          },
          {
            en: "Hexagonal architecture alongside Java and Angular in the stack.",
            es: "Arquitectura hexagonal junto con Java y Angular en el stack.",
          },
          {
            en: "Learning about Microfrontends in system development",
            es: "Aprendiendo sobre Microfrontends en desarrollo de sistemas",
          },
        ],
      },
    ],
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`,
    },
    projects: [
      {
        name: "Medical Appointment Management System",
        description:
          "Web platform for comprehensive medical appointment management that allows patients to book consultations online and doctors to view their schedule in real time.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "mongodb", color: "green-text-gradient" },
          { name: "Java", color: "pink-text-gradient" },
        ],
        image:
          "https://expert.holanuna.com/es/practika/wp-content/uploads/2020/12/05_Docplanner.png",
        sourceCodeLink: "https://github.com/",
      },
      {
        name: "Personal Finance App with Reports",
        description:
          "A web application designed for personal finance management that allows you to record income and expenses organized by category, making it easier to control your cash flow. The system includes savings goals with automatic alerts based on events that trigger when certain limits or conditions are reached.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "restapi", color: "green-text-gradient" },
          { name: "net", color: "pink-text-gradient" },
        ],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfLzPXkNlYekF40Ry_3ela6FJqqguBrETyA&s",
        sourceCodeLink: "https://github.com/",
      },
      {
        name: "E-commerce platform with real-time inventory",
        description:
          "E-commerce application developed with a modern architecture that allows you to manage a product catalog, shopping cart, and order processing. It uses PostgreSQL for data persistence and Redis for session management and caching.",
        tags: [
          { name: "angular", color: "blue-text-gradient" },
          { name: "postgress", color: "green-text-gradient" },
          { name: "node", color: "pink-text-gradient" },
        ],
        image:
          "https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png",
        sourceCodeLink: "https://github.com/",
      },
    ],
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    testimonials: [
      {
        testimonial:
          "Working with Steven was an excellent experience. During his time as a React.js Developer, he significantly improved the performance of our ecommerce site.",
        name: "Ing David Alarcon",
        designation: "RRHH",
        company: "GAD Calderon",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      {
        testimonial:
          "He proved to be a highly competent and dedicated developer. He quickly integrated into the team and successfully resolved critical errors in our web services.",
        name: "Mercedes Pillajo",
        designation: "Sales",
        company: "Entrepreneur",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        testimonial:
          "She possesses a highly valuable combination of frontend and backend skills. During the development of our educational platform, she successfully built a scalable solution.",
        name: "Manuel Narvaez",
        designation: "Economist",
        company: "Fybeca",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
      },
    ],
    contact: {
      p: "Get in touch",
      h2: "Contact.",
      form: {
        name: {
          span: "Your Name",
          placeholder: "What's your name?",
        },
        email: {
          span: "Your Email",
          placeholder: "What's your email?",
        },
        message: {
          span: "Your Message",
          placeholder: "What do you want to say?",
        },
      },
    },
  },
  es: {
    language: "es",
    nav: {
      about: "Sobre Mí",
      work: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Hola, soy",
      description: [
        "Desarrollador Full Stack: aplicaciones móviles, web y de escritorio",
      ],
    },
    about: {
      p: "Introducción",
      h2: "Resumen.",
      content: `Desarrollador Web Fullstack JavaScript con más de 2 años de experiencia en soporte de aplicaciones, especializado en JavaScript, React, Angular, .NET, Java y Node.js. Mi experiencia incluye mantener, mejorar y optimizar plataformas web de producción, crear componentes reutilizables y atómicos, desarrollar microfrontends, resolver problemas y apoyar los procesos de desarrollo y despliegue.`,
    },
    services: [
      { title: "Desarrollador Web", icon: web },
      { title: "Desarrollador React Native", icon: mobile },
      { title: "Desarrollador Backend", icon: backend },
      { title: "Buenas prácticas", icon: creator },
    ],
    experience: {
      p: "Lo que he hecho hasta ahora",
      h2: "Experiencia Laboral.",
    },
    experiences: [
      {
        title: "Desarrollador React.js",
        companyName: "SABATA SIEMPRE SABATA",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBF-P3qklhbSYN011d67AskDSIOBLLeujTbQ&s",
        iconBg: "#383E56",
        date: "Noviembre 2024 - Septiembre 2025",
        points: [
          {
            en: "Development of a comprehensive website that centralizes the components and tools for different company products.",
            es: "Desarrollo de un sitio web integral que centraliza los componentes y herramientas para los diferentes productos de la empresa.",
          },
          {
            en: "I improved product loading on the ecommerce site by implementing best practices in image and background image optimization.",
            es: "Mejoré la carga de productos en el sitio de comercio electrónico implementando mejores prácticas en optimización de imágenes.",
          },
          {
            en: "Integration of registration and login methods using external providers.",
            es: "Integración de métodos de registro e inicio de sesión utilizando proveedores externos.",
          },
          {
            en: "I introduced the use of CD as a work strategy on GitHub, and I used Figma to accelerate design proposals.",
            es: "Introduje el uso de CD como estrategia de trabajo en GitHub, y utilicé Figma para acelerar las propuestas de diseño.",
          },
        ],
      },
      {
        title: "Desarrollador React Native",
        companyName: "SEGUROS EQUINOCCIAL",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwI7Tl-Bv0mKfWrIL_WqXwzGJMv-_fensbg&s",
        iconBg: "#E6DEDD",
        date: "Julio 2024 - Noviembre 2024",
        points: [
          {
            en: "I resolved critical errors in the Equinoccial Insurance web service, improving system stability through the use of SQL Server.",
            es: "Resolví errores críticos en el servicio web de Seguros Equinoccial, mejorando la estabilidad del sistema mediante el uso de SQL Server.",
          },
          {
            en: "I implemented best practices in SQL, achieving a significant optimization of the web systems performance.",
            es: "Implementé mejores prácticas en SQL, logrando una optimización significativa del rendimiento de los sistemas web.",
          },
          {
            en: "I identified and fixed bugs, improving the performance of both the website and the database for a smoother user experience.",
            es: "Identifiqué y corregí errores, mejorando el rendimiento tanto del sitio web como de la base de datos para una experiencia de usuario más fluida.",
          },
          {
            en: "Participating in code reviews and providing constructive feedback to other developers.",
            es: "Participé en revisiones de código y proporcioné retroalimentación constructiva a otros desarrolladores.",
          },
        ],
      },
      {
        title: "Desarrollador Web FullStack",
        companyName: "ACADEMIA ELITE",
        icon: "https://aulavirtual-smartplus.com/src/icons/logo1.png",
        iconBg: "#383E56",
        date: "Enero 2023 - Mayo 2023",
        points: [
          {
            en: "I designed and developed an educational web platform, integrating third-party services for a robust and scalable backend.",
            es: "Diseñé y desarrollé una plataforma web educativa, integrando servicios de terceros para un backend robusto y escalable.",
          },
          {
            en: "I used React, Next.js, GitHub, and Figma to create an attractive and functional user interface, improving the user experience and ensuring high performance standards.",
            es: "Utilicé React, Next.js, GitHub y Figma para crear una interfaz de usuario atractiva y funcional, mejorando la experiencia del usuario y asegurando altos estándares de rendimiento.",
          },
          {
            en: "I work with backend and frontend technologies such as React and .Net through contracts and signatures.",
            es: "Trabajo con tecnologías de backend y frontend como React y .Net mediante contratos y firmas.",
          },
        ],
      },
      {
        title: "Desarrollador Full stack",
        companyName: "ARCHETICS",
        icon: "https://avatars.githubusercontent.com/u/82846905?s=200&v=4",
        iconBg: "#E6DEDD",
        date: "Último",
        points: [
          {
            en: "I designed and developed a module in a production application that allows users to connect to the app even with location restrictions, improving the accessibility of the service.",
            es: "Diseñé y desarrollé un módulo en una aplicación de producción que permite a los usuarios conectarse a la aplicación incluso con restricciones de ubicación, mejorando la accesibilidad del servicio.",
          },
          {
            en: "I proposed and achieved acceptance of the interface design for the new module, creating a fluid and friendly user experience that facilitates navigation.",
            es: "Propuse y logré la aceptación del diseño de la interfaz para el nuevo módulo, creando una experiencia de usuario fluida y amigable que facilita la navegación.",
          },
          {
            en: "Hexagonal architecture alongside Java and Angular in the stack.",
            es: "Arquitectura hexagonal junto con Java y Angular en el stack.",
          },
          {
            en: "Learning about Microfrontends in system development",
            es: "Aprendiendo sobre Microfrontends en desarrollo de sistemas",
          },
        ],
      },
    ],
    works: {
      p: "Mi trabajo",
      h2: "Proyectos.",
      content: `Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demos en vivo. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.`,
    },
    projects: [
      {
        name: "Sistema de Gestión de Citas Médicas",
        description:
          "Plataforma web para la gestión integral de citas médicas que permite a los pacientes reservar consultas en línea y a los médicos ver su agenda en tiempo real.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "mongodb", color: "green-text-gradient" },
          { name: "Java", color: "pink-text-gradient" },
        ],
        image:
          "https://expert.holanuna.com/es/practika/wp-content/uploads/2020/12/05_Docplanner.png",
        sourceCodeLink: "https://github.com/",
      },
      {
        name: "App de Finanzas Personales con Reportes",
        description:
          "Aplicación web diseñada para la gestión de finanzas personales que te permite registrar ingresos y gastos organizados por categoría, facilitando el control de tu flujo de caja. El sistema incluye metas de ahorro con alertas automáticas basadas en eventos que se activan cuando se alcanzan ciertos límites o condiciones.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "restapi", color: "green-text-gradient" },
          { name: "net", color: "pink-text-gradient" },
        ],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfLzPXkNlYekF40Ry_3ela6FJqqguBrETyA&s",
        sourceCodeLink: "https://github.com/",
      },
      {
        name: "Plataforma de E-commerce con inventario en tiempo real",
        description:
          "Aplicación de comercio electrónico desarrollada con una arquitectura moderna que te permite gestionar un catálogo de productos, carrito de compras y procesamiento de pedidos. Utiliza PostgreSQL para persistencia de datos y Redis para gestión de sesiones y caché.",
        tags: [
          { name: "angular", color: "blue-text-gradient" },
          { name: "postgress", color: "green-text-gradient" },
          { name: "node", color: "pink-text-gradient" },
        ],
        image:
          "https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png",
        sourceCodeLink: "https://github.com/",
      },
    ],
    feedbacks: {
      p: "Lo que otros dicen",
      h2: "Testimonios.",
    },
    testimonials: [
      {
        testimonial:
          "Trabajar con Steven fue una experiencia excelente. Durante su tiempo como Desarrollador React.js, mejoró significativamente el rendimiento de nuestro sitio de comercio electrónico.",
        name: "Ing David Alarcon",
        designation: "RRHH",
        company: "GAD Calderon",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      {
        testimonial:
          "Demostró ser un desarrollador altamente competente y dedicado. Se integró rápidamente al equipo y resolvió con éxito errores críticos en nuestros servicios web.",
        name: "Mercedes Pillajo",
        designation: "Ventas",
        company: "Emprendedora",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        testimonial:
          "Posee una combinación muy valiosa de habilidades frontend y backend. Durante el desarrollo de nuestra plataforma educativa, construyó con éxito una solución escalable.",
        name: "Manuel Narvaez",
        designation: "Economista",
        company: "Fybeca",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
      },
    ],
    contact: {
      p: "Contáctame",
      h2: "Contacto.",
      form: {
        name: {
          span: "Tu Nombre",
          placeholder: "¿Cuál es tu nombre?",
        },
        email: {
          span: "Tu Email",
          placeholder: "¿Cuál es tu email?",
        },
        message: {
          span: "Tu Mensaje",
          placeholder: "¿Qué quieres decir?",
        },
      },
    },
  },
};
