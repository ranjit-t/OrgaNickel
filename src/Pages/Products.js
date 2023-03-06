import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/Context";
import "./Products.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const { products, setKart, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    let productsToKart = products.filter((product) => product.numinkart >= 1);
    setKart(productsToKart);
  }, [products, setKart]);

  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {products.map((product, idx) => {
          return (
            <div className="product" key={product.id}>
              <img
                src={product.src}
                alt="product"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
                style={{ cursor: "pointer" }}
              ></img>

              <h3
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
                style={{ cursor: "pointer" }}
              >
                {product.title}
              </h3>
              <p>
                {" "}
                <b>{`${product.price} €`}</b>
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setProducts(
                    products.map((prod) => {
                      if (prod.id === product.id) {
                        prod.numinkart = prod.numinkart + 1;
                      }
                      return prod;
                    })
                  );
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
