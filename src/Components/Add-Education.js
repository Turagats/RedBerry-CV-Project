import React, { useState, useEffect } from "react";
import "./Add-Education.css";
import Resume from "./Resume";

const AddEducation = (props) => {
  const [data, setData] = useState(null);
  // const myjson = { id: 0, title: "აირჩიეთ საწყისი" };
  // const [some, setSome] = useState([]);

  const inputName = localStorage.getItem("name") || "";
  const inputLastName = localStorage.getItem("lastname") || "";
  const inputaboutMe = localStorage.getItem("aboutme") || "";
  const inputEmail = localStorage.getItem("email") || "";
  const inputMobile = localStorage.getItem("mobile") || "";
  const inputPosition = localStorage.getItem("position" || "");
  const inputEmployer = localStorage.getItem("employer" || "");
  const inputStartingDate = localStorage.getItem("starting-date" || "");
  const inputEndingDate = localStorage.getItem("ending-date" || "");
  const inputAboutJob = localStorage.getItem("about-job" || "");
  const photo = localStorage.getItem("profile-photo" || null);
  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  //about educational
  const [inputEducational, setInputEducational] = useState(
    localStorage.getItem("educational") || ""
  );
  const HandleChangeEducational = (event) => {
    setInputEducational(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("educational", inputEducational);
  }, [inputEducational]);

  //anbout degree
  const [inputDegree, setInputDegree] = useState(
    localStorage.getItem("degree") || ""
  );
  const HandleChangeDegree = (event) => {
    setInputDegree(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("degree", inputDegree);
  }, [inputDegree]);

  // ending date

  const [inputEducationEndingDate, setInputEducationEndingDate] = useState(
    localStorage.getItem("education-ending-date") || ""
  );
  const HandleChangeEducationEndingDate = (event) => {
    setInputEducationEndingDate(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("education-ending-date", inputEducationEndingDate);
  }, [inputEducationEndingDate]);

  // about education

  const [inputAboutEducation, setInputinputAboutEducation] = useState(
    localStorage.getItem("about-education") || ""
  );
  const HandleChangeAboutEducation = (event) => {
    setInputinputAboutEducation(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("about-education", inputAboutEducation);
  }, [inputAboutEducation]);

  return (
    <div className="education-information-component">
      <div className="education-information">
        <label htmlFor="education-name">სასწავლებელი</label>
        <input
          type="text"
          id="education-name"
          name=""
          placeholder="სასწავლებელი"
          onChange={HandleChangeEducational}
          value={inputEducational}
          required
        />
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
