import { useState, createContext, useEffect } from "react";

import { auth } from "../Config";
import { onAuthStateChanged } from "firebase/auth";
import { prods } from "../Data/Data";
export const ProductContext = createContext(null);

export function ProductContextProvider({ children }) {
  const [kart, setKart] = useState([]);
  const [kartPrice, setKartPrice] = useState(0);
  const [products, setProducts] = useState(prods);

  //User Manangement

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
  }, [user]);

  //First Load from Local Storage or to Local Storage

  useEffect(() => {
    if (
      localStorage.getItem("kart") !== null &&
      JSON.parse(localStorage.getItem("kart")).filter(
        (prod) => prod.numinkart > 0
      ).length > 0
    ) {
      // taking products from local Storage

      setProducts(JSON.parse(localStorage.getItem("kart")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kart", JSON.stringify(products));
  }, [products, user]);

  return (
    <div>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          kart,
          setKart,
          kartPrice,
          setKartPrice,
          user,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
}
