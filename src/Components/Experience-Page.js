import React, { useState } from "react";
import "./Experience-Page.css";
import forbackVector from "../UI/Assets/Images/Vector.svg";
// import forbackEclipse from "../UI/Assets/Images/Ellipse 1.svg";
import { Link } from "react-router-dom";
import AddExperience from "./Add-Experience";
import Resume from "./Resume";

const ExperincePage = () => {
  const [experienceCount, setExperienceCount] = useState(1);
  const onClickaddExperience = () => {
    setExperienceCount(experienceCount + 1);
  };
  // const [inputList, setInputList] = useState([]);
  // const onAddBtnClick = (event) => {
  //   setInputList(inputList.concat(<AddExperience key={inputList.length} />));
  // };

  return (
    <section className="experinece-inofrmation">
      <form className="experinece-inofrmation-form">
        <div className="experinece-inofrmation-header">
          <h1 className="title">გამოცდილება</h1>
          <span className="page-number">2/3</span>
        </div>
        <Link to="/">
          <div className="back-to-landging-page">
            {/* <img src={forbackEclipse} className="eclipse" alt="back" /> */}
            <img src={forbackVector} className="vector" alt="back" />
          </div>
        </Link>

        <div>
          {/* <AddExperience /> */}
          {Array.from({ length: experienceCount }, (_, i) => (
            <AddExperience key={i} />
          ))}
        </div>
      </form>
      <button onClick={onClickaddExperience}>მეტი გამოცდილების დამატება</button>

      <div className="button-container">
        <Link to="/general-information">
          <button className="button-previous">უკან</button>
        </Link>
        <Link to="/education">
          <button className="button-next">შემდეგი</button>
        </Link>
      </div>

      <Resume />
    </section>
  );
};

export default ExperincePage;
