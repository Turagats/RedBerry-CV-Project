import React from "react";
import "./Landing-Page.css";
import headerLogo from "../UI/Assets/Images/LOGO-02 3.svg";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img className="header-logo" src={headerLogo} alt="Redberry Logo" />
      </div>
      <button className="add-resume_button">რეზიუმეს დამატება</button>
      <div className="background-logo "></div>
    </div>
  );
};

export default LandingPage;
