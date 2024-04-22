import Navbar from "./Component/Navbar/Navbar";
import Product from "./Component/Pages/Product/Product";
import Home from "./Component/Pages/Home/Home";
import About from "./Component/Pages/About/About";
import Kontaktai from "./Component/Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FriendsNavbar from "./Component/FriendsNavbar/friendsNavbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/product" element={<Product />} />

          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Kontaktai />} />
        </Routes>
      </div>
      <FriendsNavbar />
    </>
  );
}

export default App;
