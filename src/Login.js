import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login_logo">
          <StorefrontIcon className="logo_icon" fontSize="large" />
          <h2 className="login_logotitle">eShop</h2>
        </div>
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPasssword(e.target.value)}
          />

          <button type="submit" className="login_button" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to the eShop Website Conditions of Use and
          Sale. Please see our Private Notice, our Cookie Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login_register" onClick={register}>
          Create your eShop account
        </button>
      </div>
    </div>
  );
};
export default Login;
