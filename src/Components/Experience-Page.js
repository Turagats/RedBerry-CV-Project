import React, { useState } from "react";
import "./Experience-Page.css";
import forbackVector from "../UI/Assets/Images/Vector.svg";
// import forbackEclipse from "../UI/Assets/Images/Ellipse 1.svg";
import { Link } from "react-router-dom";
import AddExperience from "./Add-Experience";
// import Resume from "./Resume";

const ExperincePage = (props) => {
  // const inputName = localStorage.getItem("name") || "";
  // const inputLastName = localStorage.getItem("lastname") || "";
  // const inputaboutMe = localStorage.getItem("aboutme") || "";
  // const inputEmail = localStorage.getItem("email") || "";
  // const inputMobile = localStorage.getItem("mobile") || "";
  // const inputPosition = localStorage.getItem("position" || "");
  // const inputEmployer = localStorage.getItem("employer" || "");

  const [experienceCount, setExperienceCount] = useState(1);
  const onClickaddExperience = () => {
    setExperienceCount(experienceCount + 1);
  };

  return (
    <section className="experinece-inofrmation">
      <div className="left-container">
        <form className="experinece-inofrmation-form">
          <div className="experinece-inofrmation-header">
            <span className="title">გამოცდილება</span>
            <span className="page-number">2/3</span>
          </div>
          <Link to="/">
            <div className="back-to-landging-page">
              <img src={forbackVector} className="vector" alt="back" />
            </div>
          </Link>

          <div>
            {Array.from({ length: experienceCount }, (_, i) => (
              <AddExperience experinceQuantity={i} key={i} />
            ))}
          </div>
        </form>
        <button
          className="add-experience-button"
          onClick={onClickaddExperience}
        >
          მეტი გამოცდილების დამატება
        </button>
        <div className="button-container">
          <Link to="/general-information">
            <button className="button-previous">უკან</button>
          </Link>
          <Link to="/education">
            <button className="button-next">შემდეგი</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperincePage;
