import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/Context";

export default function Product() {
  const { products, setKart, setProducts } = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentProduct = products.filter((prod) => prod.id === id)[0];

  return (
    <div>
      <h2>Product</h2>
      <div className="each-product"></div>
      <img
        style={{ width: "300px", height: "auto" }}
        src={currentProduct.src}
        alt={currentProduct.title}
      />
      <h3>{currentProduct.title}</h3>
      <p style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
        {currentProduct.description}
      </p>
      <p>
        <b>Price : {currentProduct.price}</b>
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();

          setProducts(
            products.map((prod) => {
              if (prod.id === currentProduct.id) {
                prod.numinkart = prod.numinkart + 1;
              }
              return prod;
            })
          );

          setKart([products.filter((product) => product.numinkart >= 1)]);
        }}
      >
        add to cart
        <span className="num-of-prods-in-kart">
          {" "}
          {currentProduct.numinkart > 0 && currentProduct.numinkart}
        </span>
      </button>

      <p
        style={{ cursor: "pointer", marginTop: "50px", marginBottom: "50px" }}
        onClick={() => {
          navigate("/products");
        }}
      >
        <b> {`<< Back to All Products`}</b>
      </p>
    </div>
  );
}
