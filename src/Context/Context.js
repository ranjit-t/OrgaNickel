import { useState, createContext, useEffect } from "react";
import {
  addDoc,
  doc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../Config";
import { onAuthStateChanged } from "firebase/auth";

export const ProductContext = createContext(null);

export function ProductContextProvider({ children }) {
  // const [fireBaseKart, setFireBaseKart] = useState([]);
  const [kart, setKart] = useState([]);
  const [kartPrice, setKartPrice] = useState(0);
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Apples 1kg",
      price: 1.49,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "2",
      title: "Oranges 1kg",
      price: 2.99,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: "3",
      title: "Bananas 1kg",
      price: 1.99,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: "4",
      title: "Strawberries 1kg",
      price: 2.99,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "5",
      title: "Water Melon 1pc",
      price: 1.99,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1526841535633-ef3be0b21fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "6",
      title: "Lemons 1kg",
      price: 2.99,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus ",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
  ]);

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
    if (user) {
      getDocs(collection(db, "kart"))
        .then((snapshot) => {
          //deleting existing products in firestore
          snapshot.docs.forEach((element) => {
            const currentID = element.id;
            const ref = doc(db, "kart", currentID);

            deleteDoc(ref);
            console.log("deleted fires");
          });
        })
        .then(() => {
          //adding new products in firestore
          JSON.parse(localStorage.getItem("kart")).forEach((prod) => {
            addDoc(collection(db, "kart"), prod);
            console.log("added fires");
          });
        });
    }
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
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
}
