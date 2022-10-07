/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import UserProvider from "./context/Context";
const App = () => {

  return (
    <>
    <UserProvider>
        <Header/>
        <Outlet/>
    </UserProvider>  </>
  );
};

export default App;
