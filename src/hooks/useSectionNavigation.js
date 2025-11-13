import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * useSectionNavigation
 * Returns a handleNavigation(sectionId) function that mirrors NavBar CTA behavior:
 * - If on home ("/"), smooth-scroll to the section
 * - If not on home and navigating to portfolio, go home then scroll after render
 * - Otherwise, attempt to scroll if the element exists
 */
export default function useSectionNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = useCallback(
    (sectionId) => {
      const scrollWithOffset = () => {
        const el = document.getElementById(sectionId);
        if (!el) return;
        const nav = document.querySelector('.nav');
        const navHeight = nav?.offsetHeight || 0;
        const extraGap = 12; // small visual gap so the title isn't flush under the nav
        const targetY = el.getBoundingClientRect().top + window.pageYOffset - navHeight - extraGap;
        window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
      };

      if (location.pathname === "/") {
        scrollWithOffset();
      } else if (location.pathname !== "/" && sectionId === "section_portfolio") {
        navigate("/");
        setTimeout(scrollWithOffset, 120); // ensure home has rendered before measuring
      } else {
        scrollWithOffset();
      }
    },
    [location.pathname, navigate]
  );

  return handleNavigation;
}
