import React, { useState } from "react";
import "../App.css";

import { auth } from "../Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("logged in");
      navigate("/products");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="App">
      <div className="signup-login">
        <h4>Already Have An Account ?</h4>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            signin();
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
