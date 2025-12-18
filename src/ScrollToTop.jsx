import { useEffect } from "react";

const ScrollToTopOnRefresh = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []); // empty array = run **only on mount**, i.e., page load

  return null;
};

export default ScrollToTopOnRefresh;