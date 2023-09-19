import { useState, useEffect } from "react";

const BREAKPOINTS = {
  desktop: 1280,
  tablet: 1048,
  mobile: 375,
};

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    function handleResize() {
      const { width } = getWindowDimensions();

      if (width < BREAKPOINTS.tablet) {
        setBreakpoint("mobile");
      }
      if (BREAKPOINTS.tablet < width && width < BREAKPOINTS.desktop) {
        setBreakpoint("tablet");
      }
      if (width >= BREAKPOINTS.desktop) {
        setBreakpoint("desktop");
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = breakpoint === "mobile";
  const isTablet = breakpoint === "tablet";
  const isDesktop = breakpoint === "desktop";

  return { breakpoint, isMobile, isTablet, isDesktop };
}
