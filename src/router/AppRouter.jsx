import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ComponentsPage from "../pages/ComponentsPage";
import ComponentList from "../pages/ComponentList";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/components/:component" element={<ComponentList /> } />
      <Route path="/contact" element={<ContactPage /> } />
      <Route path="/about" element={<AboutPage /> } />
    </Routes>
  );
};

export default AppRouter;
