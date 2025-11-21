import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
