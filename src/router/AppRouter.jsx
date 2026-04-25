import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactPage from "../pages/ContactPage";
import Reservas from "../pages/Reservas";
import Filosofia from "../pages/Filosofia/Filosofia";
import Galeria from "../pages/Galeria/Galeria";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/galeria" element={<Galeria/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;