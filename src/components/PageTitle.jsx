
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const titles = {
      "/": "Home",
      "/aboutus": "About Us",
      "/adopt": "Adoption",
      "/release": "Release",
      "/contact": "Contact",
      "/login": "Login",
      "/signup": "Signup",
    };

    let pageTitle = titles[path];

    // Dynamic route: /pets/1, /pets/2, etc.
    if (path.startsWith("/pets/")) {
      pageTitle = "Pet Details";
    }

    document.title = `${pageTitle || "Page Not Found"} | Pet Heaven`;
  }, [location.pathname]);

  return null;
}

export default PageTitle;
