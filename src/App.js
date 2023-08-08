/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import UserProvider from "./context/Context";
import "./styles/global.css";
const App = () => {
  // const {theme} = useContext(Context)
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "themeDark" : "themeLight"}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Outlet />
      </UserProvider>{" "}
    </div>
  );
};

export default App;
