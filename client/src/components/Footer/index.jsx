/** @format */

import { useContext } from "react";
import { ThemeContext } from "../../utils/context/index";
import "./footer.css";

/**
 * returns the Footer for the Login and Signup pages
 * @returns {React.ReactElement}
 */
function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <footer className="footerContainer">
      <button
        onClick={() => toggleTheme()}
        className={
          "footerButton " + (theme === "dark" ? "footerButtonDark" : "")
        }>
        {theme === "dark" ? (
          <i className="fa-solid fa-sun fa-xl"></i>
        ) : (
          <i className="fa-solid fa-moon fa-xl"></i>
        )}
      </button>
      <span
        className={"footerText " + (theme === "dark" ? "footerTextDark" : "")}>
        @Groupomania, 2022
      </span>
    </footer>
  );
}

export default Footer;
