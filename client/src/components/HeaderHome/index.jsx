/** @format */

import Logo from "../../assets/logo_white.svg";
import { Link } from "react-router-dom";
import "./headerHome.css";

/**
 * Returns Header for the homePage
 * @returns {React.ReactElement}
 */
export default function HeaderHome() {
  /**
   * Manages the deconnection of the user : LocalStorage is cleaned and the user is redirected to the Login Page
   */
  function deconnection() {
    if (window.confirm("Voulez-vous vraiment vous déconnecter ?")) {
      localStorage.removeItem("user");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }
  return (
    <header className="headerHomeContainer">
      <img src={Logo} alt="Logo Groupomania" className="headerHomeLogo" />
      <Link
        className="headerHomeDeconnectionButton"
        onClick={() => {
          deconnection();
        }}>
        <i
          className="fa-solid fa-power-off fa-lg"
          style={{
            color: "white",
          }}></i>
        <span className="headerHomeDeconnectionText">Déconnexion</span>
      </Link>
    </header>
  );
}
