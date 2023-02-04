import React from "react";
import "./Landing-Page.css";
import headerLogo from "../UI/Assets/Images/LOGO-02 3.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img className="header-logo" src={headerLogo} alt="Redberry Logo" />
      </div>
      <Link to="/general-information">
        <button className="add-resume_button">რეზიუმეს დამატება</button>
      </Link>
      <div className="background-logo "></div>
    </div>
  );
};

export default LandingPage;
