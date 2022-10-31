/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../utils/context/index";
import Logogrey from "../../assets/logo_grey.svg";
import LogoWhite from "../../assets/logo_white.svg";
import "./header.css";

/**
 * Returns the Header for the Login and Signup pages
 * @returns {React.ReactElement}
 */
function Header() {
  const theme = useContext(ThemeContext).theme;
  return (
    <header
      className={
        "headerContainer " + (theme === "dark" ? "headerContainerDark" : "")
      }>
      <img
        src={theme === "dark" ? LogoWhite : Logogrey}
        className="headerLogo"
        alt="logo Groupomania"
      />
      <nav className="navContainer">
        <Link
          to="/"
          /* Depending on the name of the page where the user is, and if the theme is dark or light, the border bottom of nav item changes*/
          className={
            "navItem " +
            (window.location.href.endsWith("/") === true
              ? theme === "dark"
                ? "navItemDarkOn"
                : "navItemOn"
              : theme === "dark"
              ? "navItemDark "
              : "")
          }>
          Se connecter
        </Link>
        <Link
          to="/signup"
          className={
            "navItem " +
            (window.location.href.endsWith("/signup") === true
              ? theme === "dark"
                ? "navItemDarkOn"
                : "navItemOn"
              : theme === "dark"
              ? "navItemDark "
              : "")
          }>
          S'inscrire
        </Link>
      </nav>
    </header>
  );
}

export default Header;
