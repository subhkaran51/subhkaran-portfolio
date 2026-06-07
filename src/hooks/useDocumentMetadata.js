import { useEffect } from "react";

/**
 * Custom hook to dynamically adjust HTML header SEO titles and meta description attributes.
 * @param {string} title - The SEO title for the active viewport.
 * @param {string} description - The meta description text.
 */
const useDocumentMetadata = (title, description) => {
  useEffect(() => {
    // 1. Set document title
    document.title = `${title} | Subh Karan - Senior Full Stack Developer`;

    // 2. Find or create the meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    
    // Update the tag content
    metaDescription.setAttribute("content", description);
  }, [title, description]);
};

export default useDocumentMetadata;
