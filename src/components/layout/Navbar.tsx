import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../../constants/styles';
import { navLinks } from '../../constants';
import { logo, menu, close } from '../../assets';
import { config } from '../../constants/config';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []);

  const getNavTitle = (id: string): string => {
    switch (id) {
      case 'about':
        return t.nav.about;
      case 'work':
        return t.nav.work;
      case 'contact':
        return t.nav.contact;
      default:
        return id;
    }
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? 'text-white' : 'text-secondary'
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${nav.id}`}>{getNavTitle(nav.id)}</a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1 rounded-lg bg-tertiary border border-secondary/30 text-[14px] font-medium px-3 py-1.5 text-white hover:border-secondary transition-all"
            >
              <span>{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
              <span>{language.toUpperCase()}</span>
            </button>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{getNavTitle(nav.id)}</a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="flex items-center gap-1 rounded-lg bg-tertiary border border-secondary/30 text-[14px] font-medium px-3 py-1.5 text-white"
                >
                  <span>{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
                  <span>{language.toUpperCase()}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
