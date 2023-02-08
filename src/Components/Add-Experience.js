import React, { useState, useEffect } from "react";
import "./Add-Experience.css";
import Resume from "./Resume";

const AddExperience = (props) => {
  console.log(props.experinceQuantity)

  const inputName = localStorage.getItem("name") || "";
  const inputLastName = localStorage.getItem("lastname") || "";
  const inputaboutMe = localStorage.getItem("aboutme") || "";
  const inputEmail = localStorage.getItem("email") || "";
  const inputMobile = localStorage.getItem("mobile") || "";
  // const inputPosition = localStorage.getItem("position" || "");
  // const inputEmployer = localStorage.getItem("employer" || "");

  //position
  const [inputPosition, setInputPosition] = useState(
    localStorage.getItem("position") || ""
  );
  const HandeChengePosition = (event) => {
    setInputPosition(event.target.value);
    console.log()
  };
  useEffect(() => {
    localStorage.setItem("position", inputPosition);
  }, [inputPosition]);

  //employer
  const [inputEmployer, setInputEmployer] = useState(
    localStorage.getItem("employer") || ""
  );
  const HandeChengeEmployer = (event) => {
    setInputEmployer(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("employer", inputEmployer);
  }, [inputEmployer]);

  return (
    <div className="experinece-inofrmation-component">
      <div className="position-information">
        <label htmlFor="position-name">თანამდებობა</label>
        <Resume
          name={inputName}
          lastName={inputLastName}
          aboutMe={inputaboutMe}
          email={inputEmail}
          mobile={inputMobile}
          position={inputPosition}
          employer={inputEmployer}
          experinceQuantity={props.experinceQuantity}
        />
        <input
          type="text"
          id="position-name"
          name=""
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          onChange={HandeChengePosition}
          value={inputPosition}
          required
        />
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="company-information">
        <label htmlFor="company-name">დამსაქმებელი</label>
        <input
          type="text"
          id="company-name"
          placeholder="დამსაქმებელი"
          value={inputEmployer}
          onChange={HandeChengeEmployer}
        />
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="start-end-date">
        <div className="start-date">
          <label htmlFor="start-date">დაწყების რიცხვი</label>
          <input type="date" id="start-date" />
        </div>
        <div className="end-date">
          <label htmlFor="end-date">დამთავრების რიცხვი</label>
          <input type="date" id="end-date" />
        </div>
      </div>
      <div className="about-me-optional">
        <label htmlFor="about-me-text">აღწერა</label>
        <textarea
          name=""
          className=""
          id="about-me-text"
          cols="60"
          rows="5"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        ></textarea>
      </div>
    </div>
  );
};

export default AddExperience;
