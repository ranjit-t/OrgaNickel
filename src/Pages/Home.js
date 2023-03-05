import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <div className="home-page">
        <img
          style={{ width: "100%", height: "500px" }}
          src="https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="home"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore
          id laboriosam, autem similique voluptates enim laudantium odit
          incidunt illo, ipsam, vitae culpa. Ad velit optio odit sit dignissimos
          minima.
        </p>
        <p
          onClick={() => {
            navigate("/products/");
          }}
          style={{ cursor: "pointer", fontSize: "2em" }}
        >
          {" "}
          <b>Check Out Our Products</b>
        </p>
      </div>
    </div>
  );
}
