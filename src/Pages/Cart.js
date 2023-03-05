import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/Context";
import "./Products.css";

export default function Cart() {
  const { products, setProducts, kart, setKart, kartPrice, setKartPrice } =
    useContext(ProductContext);

  useEffect(() => {
    setKartPrice(0);
    let x = kart.flat().map((product) => {
      return parseInt(product.numinkart) * parseInt(product.price);
    });
    setKartPrice(x.reduce((a, b) => a + b, 0));
    console.log(kart.flat());
  }, [kart, setKartPrice]);
  useEffect(() => {
    setKart([products.filter((product) => product.numinkart >= 1)]);
  }, [products, setKart]);
  return (
    <div>
      {/* <h2>Cart</h2> */}
      <div>
        <h2 className="kart-heading">Cart</h2>
        {kart.length !== 0 ? (
          <div className="kart">
            <div className="kart-description">
              <h3>Product</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>

            <div className="kart-products">
              {kart.flat().map(
                (product, idx) =>
                  product.numinkart > 0 && (
                    <div key={idx} className="kart-product">
                      <div className="kart-title-image">
                        <img src={product.src} alt={product.title} />
                        <h4>{product.title}</h4>
                      </div>

                      <div className="change-buttons">
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            // console.log(product.id);
                            setProducts(
                              products.map((prod) => {
                                if (prod.id === product.id) {
                                  prod.numinkart = prod.numinkart - 1;
                                }
                                return prod;
                              })
                            );
                            setKart(
                              kart.map((prod) => {
                                if (prod.id === product.id) {
                                  prod.numinkart = prod.numinkart - 1;
                                }
                                return prod;
                              })
                            );
                          }}
                        >
                          -
                        </button>{" "}
                        <p>{product.numinkart} </p>
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
                            setKart(
                              kart.map((prod) => {
                                if (prod.id === product.id) {
                                  prod.numinkart = prod.numinkart + 1;
                                }
                                return prod;
                              })
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                      <p className="price-para">Price: {product.price} €</p>
                      <p
                        className="remove-product"
                        onClick={() => {
                          setProducts(
                            products.map((prod) => {
                              if (prod.id === product.id) {
                                prod.numinkart = 0;
                              }
                              return prod;
                            })
                          );
                          setKart(
                            kart.map((prod) => {
                              if (prod.id === product.id) {
                                prod.numinkart = 0;
                              }
                              return prod;
                            })
                          );
                        }}
                      >
                        X
                      </p>
                    </div>
                  )
              )}
              <div className="kart-product">
                <h2>Total</h2>
                <p>Price: {kartPrice} €</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="kart">Kart is Empty, Add Items!</div>
        )}
      </div>
    </div>
  );
}
