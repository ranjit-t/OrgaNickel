import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Hamburger from "hamburger-react";
import { useState, useContext, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductContext } from "./Context/Context";
import Product from "./Pages/Product";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const { kart } = useContext(ProductContext);
  const [itemsInKart, setItemsInKart] = useState(0);
  useEffect(() => {
    let x = kart.flat().map((product) => {
      return parseInt(product.numinkart);
    });
    setItemsInKart(x.reduce((a, b) => a + b, 0));
  }, [kart]);

  return (
    <div className="App">
      <div className="header">
        <h2
          className="logo"
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          OrgaNickel
        </h2>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />

        <div className={isOpen ? "nav-links open" : "nav-links"}>
          <NavLink
            to="/"
            className="nav-bar"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="nav-bar"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="nav-bar"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <AiOutlineShoppingCart size="1.4em" />
            {itemsInKart}
          </NavLink>
        </div>
      </div>
      {/* <ProductContextProvider> */}
      <Routes className="routes">
        <Route className="route" path="/" element={<Home></Home>}></Route>
        <Route
          className="route"
          path="/products"
          element={<Products></Products>}
        ></Route>
        <Route className="route" path="/cart" element={<Cart></Cart>}></Route>
        <Route
          className="route"
          path="/product/:id"
          element={<Product></Product>}
        ></Route>
      </Routes>
      {/* </ProductContextProvider> */}
    </div>
  );
}

export default App;
