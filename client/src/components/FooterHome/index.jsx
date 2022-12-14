/** @format */

import { useContext } from "react";
import { ThemeContext } from "../../utils/context/index";
import "./footerHome.css";

/**
 * Returns the Footer for the homePage
 * @returns {React.ReactElement}
 */
export default function FooterHome() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <footer className="footerHome">
      <button
        aria-label="Changer de theme"
        onClick={() => toggleTheme()}
        className="footerHomeButton">
        {theme === "dark" ? (
          <i className="fa-solid fa-sun fa-xl"></i>
        ) : (
          <i className="fa-solid fa-moon fa-xl"></i>
        )}
      </button>
      <span className="footerHomeText">@Groupomania, 2022</span>
      <button
        aria-label="Remonter en haut de la page"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="footerHomeButton">
        <i className="fa-solid fa-chevron-up fa-xl"></i>
      </button>
    </footer>
  );
}
