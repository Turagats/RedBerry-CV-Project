import React from "react";
import "./Add-Experience.css";

const AddExperience = () => {
  return (
    <div className="experinece-inofrmation-component">
      <div className="position-information">
        <label htmlFor="position-name">თანამდებობა</label>
        <input
          type="text"
          id="position-name"
          name=""
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
        />
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="company-information">
        <label htmlFor="company-name">დამსაქმებელი</label>
        <input
          type="text"
          id="company-name"
          name=""
          placeholder="დამსაქმებელი"
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
