import React from "react";
import "./styles.css";
import twitterLogo from "../../assets/twitter-logo.png";
import backgroundimg from "../../assets/background-twitter.png";
import googleicon from "../../assets/google-icon.png";
import appleicon from "../../assets/apple-icon.png";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="abc">
      <div className="signup-page">
        <img src={backgroundimg} alt="img" className="bg-img" />
        <div className="signup-section">
          <img src={twitterLogo} alt="logo" className="image" />
          <p style={{ fontWeight: "900", fontSize: "84px" }}>Happening now</p>
          <p style={{ fontWeight: "900", fontSize: "42px" }}>
            Join Twitter today
          </p>
          <div className="btn">
            <img src={googleicon} alt="icon" />
            <h4>Sign up with Google</h4>
          </div>
          <div className="btn">
            <img src={appleicon} alt="icon" />
            <h4>Sign up with Apple</h4>
          </div>
          <Link to={"/create-account"}>
            <div className="btn">
              <h4>Sign up with Phone or Email</h4>
            </div>
          </Link>
          <p className="policy" style={{ fontWeight: "400", fontSize: "14px" }}>
            By singing up you agree to the <span>Terms of Service</span> and
            <span> Privacy Policy</span>, including <span>Cookie Use</span>.
          </p>
          <p style={{ fontWeight: "400", fontSize: "16px" }}>
            Already have an account?
            <Link to={"/"}>
              <span>Log in</span>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
