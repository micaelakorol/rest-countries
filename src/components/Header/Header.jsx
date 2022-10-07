import React, { useContext } from "react";
import "../../styles/header.css";
import moonFill from "../../icons/moon-fill.svg";
import moon from "../../icons/moon.svg";
import { Context } from "../../context/Context";
import "../../styles/global.css";
const Header = () => {
  const { theme, setTheme } = useContext(Context);

  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <header>
        <h2>Where in the word?</h2>
        <button className="theme" onClick={() => changeTheme()}>
          {" "}
          <img src={theme ? moonFill : moon} alt="theme-light-dark" />{" "}
          {theme ? "Dark Mode" : "Light  Mode"}
        </button>
      </header>
    </>
  );
};

export default Header;
