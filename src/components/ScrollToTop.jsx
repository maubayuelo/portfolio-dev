import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Opens every new route at the top. Skips hash links and browser back/forward (POP),
// so those keep their own scroll position. "instant" overrides the global smooth scrolling.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (hash || navigationType === "POP") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollToTop;
