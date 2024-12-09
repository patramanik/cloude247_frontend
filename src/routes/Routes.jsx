import { Route, Routes } from "react-router-dom";
import Home from "../components/views/Home/Home";
import About from "../components/views/About/About";
import Contact from "../components/views/Contact/Contact";

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
