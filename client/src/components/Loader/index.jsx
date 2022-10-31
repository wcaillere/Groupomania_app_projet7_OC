/** @format */

import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import "./loader.css";

export default function Loader() {
  const theme = useContext(ThemeContext).theme;

  return (
    <div className={"loader " + (theme === "dark" ? "loaderDark" : "")}></div>
  );
}
