import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen);

  return (
    <div className="App">
      <div className="header">
        <h2 className="logo">OrgaNickel</h2>
        <Hamburger toggled={isOpen} toggle={setOpen} />

        <div className={isOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" className="nav-bar">
            Home
          </NavLink>
          <NavLink to="/products" className="nav-bar">
            Products
          </NavLink>
          <NavLink to="/cart" className="nav-bar">
            <AiOutlineShoppingCart size="1.4em" />3
          </NavLink>
        </div>
      </div>
      <Routes className="routes">
        <Route className="route" path="/" element={<Home></Home>}></Route>
        <Route
          className="route"
          path="/products"
          element={<Products></Products>}
        ></Route>
        <Route className="route" path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
