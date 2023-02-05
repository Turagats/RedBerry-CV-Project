import React from "react";
import "./Experience-Page.css";
import forbackVector from "../UI/Assets/Images/Vector.svg";
import forbackEclipse from "../UI/Assets/Images/Ellipse 1.svg";
import { Link } from "react-router-dom";
import AddExperience from "./Add-Experience";

const ExperincePage = () => {
  return (
    <section className="experinece-inofrmation">
      <form className="experinece-inofrmation">
        <div className="experinece-inofrmation-header">
          <h1 className="title">გამოცდილება</h1>
          <span className="page-number">2/3</span>
        </div>
        <Link to="/">
          <div className="back-to-landging-page">
            <img src={forbackEclipse} className="eclipse" alt="back" />
            <img src={forbackVector} className="vector" alt="back" />
          </div>
        </Link>
        <AddExperience />
        <button className="add-experience-button">
          მეტი გამოცდილების დამატება
        </button>

        <div className="button-container">
          <Link to="/general-information">
            <button>უკან</button>
          </Link>
          <Link to="/education">
            <button>შემდეგი</button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default ExperincePage;
