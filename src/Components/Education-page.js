import React, { useState } from "react";
import "./Education-page.css";
import { Link } from "react-router-dom";
import forbackVector from "../UI/Assets/Images/Vector.svg";
import AddEducation from "./Add-Education";
import Resume from "./Resume";

const EducationPage = () => {
  const [educationCount, setEducationCount] = useState(1);
  const onClickaddExperience = () => {
    setEducationCount(educationCount + 1);
  };
  return (
    <section className="education-information">
      <form className="education-information-form">
        <div className="education-inofrmation-header">
          <h1 className="title">განათლება</h1>
          <span className="page-number">3/3</span>
        </div>
        <Link to="/">
          <div className="back-to-landging-page">
            <img src={forbackVector} className="vector" alt="back" />
          </div>
        </Link>

        {/* <AddEducation />
        <button className="add-education-button">
          სხვა სასწავლებლის დამატება
        </button> */}

        <div>
          {Array.from({ length: educationCount }, (_, i) => (
            <AddEducation key={i} />
          ))}
        </div>
      </form>
      <button onClick={onClickaddExperience}>სხვა სასწავლებლის დამატება</button>
      <div className="button-container">
        <Link to="/experience">
          <button className="button-previous">უკან</button>
        </Link>
        <Link to="/resumes">
          <button className="button-finish">დასრულება</button>
        </Link>
      </div>
      <Resume />
    </section>
  );
};

export default EducationPage;
