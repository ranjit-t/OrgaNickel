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
import { RingLoader } from "react-spinners";
import Signup from "./User-Pages/Signup";
import Login from "./User-Pages/Login";
import { auth } from "./Config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Checkout from "./Pages/Checkout";

function App() {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const { kart } = useContext(ProductContext);
  const [itemsInKart, setItemsInKart] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let x = kart.flat().map((product) => {
      return parseInt(product.numinkart);
    });
    setItemsInKart(x.reduce((a, b) => a + b, 0));
  }, [kart]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const logout = async () => {
    try {
      localStorage.setItem("kart", JSON.stringify([]));
      await signOut(auth);
      alert("logged Out");
    } catch (e) {
      alert(e.message);
    }
  };
  //Checking if user logged in
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
        console.log("no user");
      }
    });
    console.log(user.uid);
  }, [user]);

  return (
    <div className="Top-App">
      {loading && (
        <div className="loading">
          <RingLoader color="#759242" size={100} />
        </div>
      )}
      {!loading && (
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
              {!user && (
                <NavLink
                  to="/signup"
                  className="nav-bar"
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                >
                  Sign Up
                </NavLink>
              )}

              {!user && (
                <NavLink
                  to="/login"
                  className="nav-bar"
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                >
                  Log In
                </NavLink>
              )}

              {user && (
                <NavLink
                  to="/login"
                  className="nav-bar"
                  onClick={() => {
                    logout();
                    setOpen((prev) => !prev);
                  }}
                >
                  Log Out
                </NavLink>
              )}
            </div>
          </div>

          <Routes className="routes">
            <Route className="route" path="/" element={<Home></Home>}></Route>
            <Route
              className="route"
              path="/products"
              element={<Products></Products>}
            ></Route>
            <Route
              className="route"
              path="/cart"
              element={<Cart></Cart>}
            ></Route>
            <Route
              className="route"
              path="/checkout"
              element={<Checkout></Checkout>}
            ></Route>
            <Route
              className="route"
              path="/product/:id"
              element={<Product></Product>}
            ></Route>
            <Route
              className="route"
              path="/signup"
              element={<Signup></Signup>}
            ></Route>
            <Route
              className="route"
              path="/login"
              element={<Login></Login>}
            ></Route>
          </Routes>
        </div>
      )}
      {!loading && (
        <div className="footer">
          <div style={{ cursor: "pointer" }}>
            <p>
              <span
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </span>
            </p>
            <p>
              <span
                onClick={() => {
                  navigate("/products");
                }}
              >
                Products
              </span>
            </p>
            <p>
              <span
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Cart
              </span>
            </p>
          </div>
          <div style={{ cursor: "pointer" }}>
            <p>
              <span
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </span>
            </p>
            <p>
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </span>
            </p>
            <p>
              <span
                onClick={() => {
                  navigate("/");
                }}
              >
                Contact
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
