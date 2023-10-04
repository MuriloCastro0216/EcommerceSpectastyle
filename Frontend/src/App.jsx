import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import Cursor from "./Components/Cursor";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import UserProfile from "./Pages/UserProfile";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
      <Footer/>
      {/* <Cursor /> */}
    </div>
  );
}

export default App;
