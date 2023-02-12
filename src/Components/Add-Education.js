import React, { useState, useEffect } from "react";
import "./Add-Education.css";
import Resume from "./Resume";
import redTriangle from "../UI/Assets/Images/red-triangle.png";
import greenCheck from "../UI/Assets/Images/green-bird.png";

const AddEducation = (props) => {
  const [data, setData] = useState(null);
  // const myjson = { id: 0, title: "აირჩიეთ საწყისი" };
  // const [some, setSome] = useState([]);

  const inputName = sessionStorage.getItem("name") || "";
  const inputLastName = sessionStorage.getItem("lastname") || "";
  const inputaboutMe = sessionStorage.getItem("aboutme") || "";
  const inputEmail = sessionStorage.getItem("email") || "";
  const inputMobile = sessionStorage.getItem("mobile") || "";
  const inputPosition = sessionStorage.getItem("position" || "");
  const inputEmployer = sessionStorage.getItem("employer" || "");
  const inputStartingDate = sessionStorage.getItem("starting-date" || "");
  const inputEndingDate = sessionStorage.getItem("ending-date" || "");
  const inputAboutJob = sessionStorage.getItem("about-job" || "");
  const photo = sessionStorage.getItem("profile-photo" || null);
  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  //about educational
  const [inputEducational, setInputEducational] = useState(
    sessionStorage.getItem("educational") || ""
  );
  const HandleChangeEducational = (event) => {
    setInputEducational(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("educational", inputEducational);
  }, [inputEducational]);

  //anbout degree
  const [inputDegree, setInputDegree] = useState(
    sessionStorage.getItem("degree") || ""
  );
  const HandleChangeDegree = (event) => {
    setInputDegree(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("degree", inputDegree);
  }, [inputDegree]);

  // ending date

  const [inputEducationEndingDate, setInputEducationEndingDate] = useState(
    sessionStorage.getItem("education-ending-date") || ""
  );
  const HandleChangeEducationEndingDate = (event) => {
    setInputEducationEndingDate(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("education-ending-date", inputEducationEndingDate);
  }, [inputEducationEndingDate]);

  // about education

  const [inputAboutEducation, setInputinputAboutEducation] = useState(
    sessionStorage.getItem("about-education") || ""
  );
  const HandleChangeAboutEducation = (event) => {
    setInputinputAboutEducation(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("about-education", inputAboutEducation);
  }, [inputAboutEducation]);

  return (
    <div className="education-information-component">
      <div className="education-information">
        <label htmlFor="education-name">სასწავლებელი</label>
        <div className="input-checks-wrapper">
          <input
            type="text"
            id="education-name"
            name=""
            placeholder="სასწავლებელი"
            onChange={HandleChangeEducational}
            value={inputEducational}
            required
          />
          <img className="green-check" src={greenCheck} alt="" />
          <img className="red-triangle" src={redTriangle} alt="" />
        </div>
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="degree-and-date">
        <div className="degree">
          <label htmlFor="degree-dropdwon">ხარისხი</label>
          <select
            id="degree-dropdwon"
            required
            onChange={HandleChangeDegree}
            value={inputDegree}
          >
            <option disabled selected>
              აირჩიეთ ხარისხი
            </option>
            {data
              ? data.map((item) => <option key={item.id}>{item.title}</option>)
              : "Loading..."}
          </select>
        </div>
        <div className="end-date">
          <label htmlFor="end-date">დამთავრების რიცხვი</label>
          <input
            type="date"
            id="end-date"
            value={inputEducationEndingDate}
            required
            onChange={HandleChangeEducationEndingDate}
          />
        </div>
      </div>
      <div className="about-education">
        <label htmlFor="about-education-text">აღწერა</label>
        <textarea
          name=""
          className=""
          id="about-education-text"
          cols="60"
          rows="5"
          placeholder="განათლების აღწერა"
          required
          value={inputAboutEducation}
          onChange={HandleChangeAboutEducation}
        ></textarea>
      </div>
      <Resume
        name={inputName}
        lastName={inputLastName}
        aboutMe={inputaboutMe}
        email={inputEmail}
        mobile={inputMobile}
        position={inputPosition}
        employer={inputEmployer}
        experinceQuantity={props.experinceQuantity}
        startingDate={inputStartingDate}
        endingDate={inputEndingDate}
        aboutJob={inputAboutJob}
        educational={inputEducational}
        degree={inputDegree}
        educationalEnding={inputEducationEndingDate}
        aboutEducation={inputAboutEducation}
        src={photo}
      />
    </div>
  );
};

export default AddEducation;
