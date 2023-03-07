import { auth } from "../Config";
import "../App.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  //   const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  //   const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("registered");
      navigate("/products");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="App">
      <div className="signup-login">
        <h4>Don't Have An Account ?</h4>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <input
          type="text"
          placeholder="display name"
          onChange={(e) => setDisplayName(e.target.value)}
        /> */}
        <button
          onClick={(e) => {
            e.preventDefault();
            signup();
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
