import { useState, createContext } from "react";

export const ProductContext = createContext(null);

export function ProductContextProvider({ children }) {
  const [kart, setKart] = useState([]);
  const [kartPrice, setKartPrice] = useState(0);
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Iphone",
      price: 450,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80",
    },
    {
      id: "2",
      title: "Macbook Pro",
      price: 900,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
    },
    {
      id: "3",
      title: "Ipad",
      price: 650,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80",
    },
    {
      id: "4",
      title: "Earphones",
      price: 90,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1520186994231-6ea0019d8d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
    },
    {
      id: "5",
      title: "Camera",
      price: 900,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80",
    },
    {
      id: "6",
      title: "Camera Lens",
      price: 499,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium, explicabo adipisci et, placeat illum voluptates illo ad ratione magnam consequatur soluta, perferendis fugiat dignissimos quibusdam ipsam maxime recusandae possimus",

      numinkart: 0,
      src: "https://images.unsplash.com/photo-1582994254571-52c62d96ebab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ]);
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
