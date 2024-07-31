import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ComponentsPage from "../pages/ComponentsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/components" element={<ComponentsPage />} />
    </Routes>
  );
};

export default AppRouter;
