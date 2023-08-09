import React from "react";
import "../../styles/header.css";
import moonFill from "../../icons/moon-fill.svg";
import moon from "../../icons/moon.svg";
import "../../styles/global.css";
const Header = ({ theme, setTheme }) => {
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <header>
        <h1 className="title">Where in the word?</h1>
        <button
          className={theme ? "themeDark" : "themeLight"}
          onClick={() => changeTheme()}
        >
          {" "}
          <img src={theme ? moonFill : moon} alt="theme-light-dark" />{" "}
          {theme ? "Dark Mode" : "Light  Mode"}
        </button>
      </header>
    </>
  );
};

export default Header;
