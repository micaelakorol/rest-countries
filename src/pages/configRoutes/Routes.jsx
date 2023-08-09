import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../../App";
import InfoCard from "../ShowCountry/Card";
import Error from "../ShowError/Error";
import Nav from "../../components/Nav/Nav";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Nav />} /> {/* Ruta index */}
      <Route path="/countries/:id" element={<InfoCard />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
