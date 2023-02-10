import React, { useState } from "react";
import "./Education-page.css";
import { Link } from "react-router-dom";
import forbackVector from "../UI/Assets/Images/Vector.svg";
import AddEducation from "./Add-Education";
import CVFormAPI from "./CVFormAPI";

const EducationPage = () => {
  const [educationCount, setEducationCount] = useState(1);
  const onClickaddExperience = () => {
    setEducationCount(educationCount + 1);
  };
  return (
    <section className="education-information">
      <div className="left-container">
        <form className="education-information-form">
          <div className="education-inofrmation-header">
            <span className="title">განათლება</span>
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
        <button className="add-education-button" onClick={onClickaddExperience}>
          სხვა სასწავლებლის დამატება
        </button>
        <div className="button-container">
          <Link to="/experience">
            <button className="button-previous">უკან</button>
          </Link>
          <Link to="/resumes">
            <CVFormAPI />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
