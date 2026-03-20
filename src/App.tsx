import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { config } from "./constants/config";
import { LanguageProvider } from "./context/LanguageContext";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="bg-primary relative z-0">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero isMobile={isMobile} />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact isMobile={isMobile} />
            {!isMobile && (
              <Suspense fallback={null}>
                <StarsCanvas />
              </Suspense>
            )}
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
