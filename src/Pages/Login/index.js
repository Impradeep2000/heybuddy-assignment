import React, { useState } from "react";
import "./styles.css";
import InputComponent from "../../Components/Input";
import Button from "../../Components/Button";
import twitterlogo from "../../assets/twitter-logo.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Login successful");
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <img src={twitterlogo} alt="logo" className="image"/>
        <p style={{fontWeight:"900",fontSize:"42px"}}>Log in to Twitter</p>
        <InputComponent
          state={email}
          setState={setEmail}
          placeholder="Phone number, email address"
          type="email"
          required={true}
        />
        <InputComponent
          state={password}
          setState={setPassword}
          placeholder="Password"
          type="password"
          required={true}
        />
        <Button text={"Log In"} onClick={handleLogin}/>
        <div className="links">
          <p>Forgot Password?</p>
          <Link to={"/signup"}>
            <p>Sign up to Twitter</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
