import React from "react";
import "./Add-Experience.css";

const AddExperience = () => {
  return (
    <div className="experinece-inofrmation-component">
      <div className="position-information">
        <label>
          თანამდებობა
          <input
            type="text"
            id="position-name"
            name=""
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
          />
        </label>
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="company-information">
        <label>
          დამსაქმებელი
          <input
            type="text"
            id="company-name"
            name=""
            placeholder="დამსაქმებელი"
          />
        </label>
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="start-end-date">
        <div className="start-date">
          <label>
            დაწყების რიცხვი
            <input type="date" id="start-date" />
          </label>
        </div>
        <div className="end-date">
          <label>
            daმთავრების რიცხვი
            <input type="date" id="end-date" />
          </label>
        </div>
      </div>
      <div className="about-me-optional">
        <label>
          აღწერა
          <textarea
            name=""
            className=""
            id="about-me-text"
            cols="60"
            rows="5"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          ></textarea>
        </label>
      </div>
    </div>
  );
};

export default AddExperience;
