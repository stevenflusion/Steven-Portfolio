import { lazy, Suspense, useState, useEffect } from "react";
import Loader from "../layout/Loader";

const StarsCanvas = lazy(() => import("../canvas/Stars"));
const ComputersCanvas = lazy(() => import("../canvas/Computers"));
const EarthCanvas = lazy(() => import("../canvas/Earth"));
const BallCanvas = lazy(() => import("../canvas/Ball"));

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export const Lazy3D = ({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <>{fallback}</>;
  }

  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export { StarsCanvas, ComputersCanvas, EarthCanvas, BallCanvas };
