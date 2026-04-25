import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactPage from "../pages/ContactPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;