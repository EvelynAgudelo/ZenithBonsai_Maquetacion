import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ContactPage from "../pages/Contact/ContactPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;