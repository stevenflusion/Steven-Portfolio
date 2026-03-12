export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    about: string;
    work: string;
    contact: string;
  };
  hero: {
    subtitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      contact: 'Contact',
    },
    hero: {
      subtitle: "Hi, I'm",
    },
  },
  es: {
    nav: {
      about: 'Sobre Mí',
      work: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      subtitle: 'Hola, soy',
    },
  },
};
