import React from "react";
import "./styles.css";
import twitterlogo from "../../assets/twitter-logo.png";
import InputComponent from "../../Components/Input";
import Button from "../../Components/Button";
import DateDropdown from "./DropDown";
import { Link } from "react-router-dom";

function CreateAccountPage() {
  return (
    <div className="create-account">
      <div className="sgp-form">
        <img src={twitterlogo} alt="logo" className="image" />
        <p style={{fontWeight:"700",fontSize:"30px"}}>Create an account</p>
        <InputComponent placeholder="Name" type="text" required={true} />
        <InputComponent
          placeholder="Phone number"
          type="number"
          required={true}
        />
        <Link to={"/signup"}>
          <p className="blue">Use email</p>
        </Link>
        <div>
          <p style={{fontWeight:"700",fontSize:"18px"}}>Date of birth</p>
          <p style={{color:"#666666",fontWeight:"400",fontSize:"16px"}}>
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
            Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio
            enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
            viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
            congue.
          </p>
          <div>
            <DateDropdown />
          </div>
        </div>
        <Button text={"Next"}/>
      </div>
    </div>
  );
}

export default CreateAccountPage;
