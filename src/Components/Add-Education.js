import React from "react";
import "./Add-Education.css";

const AddEducation = () => {
  return (
    <div className="education-information-component">
      <div className="education-information">
        <label>
          სასწავლებელი
          <input
            type="text"
            id="education-name"
            name=""
            placeholder="სასწავლებელი"
          />
        </label>
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="degree-and-date">
        <div className="degree">
          <label>
            ხარისხი
            <select className="degree" id="degree-dropdwon">
              <option disabled selected value>
                {" "}
                აირჩიეთ ხარისხი{" "}
              </option>
              <option value="value1">Option 1</option>
              <option value="value2">Option 2</option>
              <option value="value3">Option 3</option>
            </select>
          </label>
        </div>
        <div className="end-date">
          <label>
            დამთავრების რიცხვი
            <input type="date" id="end-date" />
          </label>
        </div>
      </div>
      <div className="about-education">
        <label>
          აღწერა
          <textarea
            name=""
            className=""
            id="about-education-text"
            cols="60"
            rows="5"
            placeholder="განათლების აღწერა"
          ></textarea>
        </label>
      </div>
    </div>
  );
};

export default AddEducation;
