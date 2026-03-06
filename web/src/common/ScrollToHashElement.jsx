/* code modified from https://ncoughlin.com/posts/react-router-v6-hash-links/ */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This wrapper listens to page change events for two reasons:
// (1) React Router preserves scroll location between routes.
//     This is undesired behavior. We want to scroll to the top for new pages.
// (2) We want to scroll to the element indicated by the hash / anchor link,
//     if any.
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    // Get only the value following the # in the URL
    const hashValue = location.hash.slice(1);
    const hashElement = hashValue ? document.getElementById(hashValue) : null;

    if (hashElement) {
      // Scroll to the element indicated by a hash
      hashElement.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.hash, location.pathname]);

  return null;
};

export default ScrollToHashElement;
