import React from "react";
import "./Landing-Page.css";
import headerLogo from "../UI/Assets/Images/LOGO-02 3.svg";
import { Link } from "react-router-dom";
import watermark from "../UI/Assets/Images/LOGO-40 1.svg"

const LandingPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img className="header-logo" src={headerLogo} alt="Redberry Logo" />
      </div>
      <div className="button-and-logo">
        <Link to="/general-information">
          <button className="add-resume_button">რეზიუმეს დამატება</button>
        </Link>
        <img className="background-logo" alt="background-logo" src={watermark} />
      </div>
    </div>
  );
};

export default LandingPage;
