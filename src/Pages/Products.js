import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import "./Products.css";

export default function Products() {
  const { products, setKart } = useContext(ProductContext);
  // console.log(kart[0].length);
  // console.log(kart[0]);

  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {products.map((product, idx) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.src} alt="product"></img>
              <h3>{product.title}</h3>
              <p>
                {" "}
                <b>{`${product.price} €`}</b>
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  products[idx].numinkart = products[idx].numinkart + 1;

                  setKart([
                    products.filter((product) => product.numinkart >= 1),
                  ]);
                }}
              >
                add to cart
                <span className="num-of-prods-in-kart">
                  {" "}
                  {product.numinkart > 0 && product.numinkart}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
