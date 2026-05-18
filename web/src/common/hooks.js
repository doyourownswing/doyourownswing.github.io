import { useEffect } from "react";

/**
 * Sets the page's title. Or, if a title wasn't passed in,
 * resets the page's title to the default.
 *
 * This hook should be called once in every top-level component.
 */
export function useTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Do Your Own Swing`
      : "Do Your Own Swing";
  }, [title]);
}
