import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Contact from "../views/Contact/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
