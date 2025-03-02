import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigninIn, setIsSigninIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigninIn) {
      setIsSigninIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/home"); // Redirect to Home page
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigninIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigninIn) {
      setIsSigninIn(true);
      doSignInWithGoogle()
        .then(() => navigate("/home"))
        .catch(() => setIsSigninIn(false));
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        <h2 className="title">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={onSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button onClick={onGoogleSignIn} className="auth-button google-signin">
          Sign in with Google
        </button>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-button"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
