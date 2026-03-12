export type Language = "en" | "es";

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
  experience: {
    p: string;
    h2: string;
  };
  works: {
    p: string;
    h2: string;
    content: string;
  };
  feedbacks: {
    p: string;
    h2: string;
  };
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
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
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
    experience: {
      p: "Lo que he hecho hasta ahora",
      h2: "Experiencia Laboral.",
    },
    works: {
      p: "Mi trabajo",
      h2: "Proyectos.",
      content: `Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demos en vivo. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.`,
    },
    feedbacks: {
      p: "Lo que otros dicen",
      h2: "Testimonios.",
    },
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
