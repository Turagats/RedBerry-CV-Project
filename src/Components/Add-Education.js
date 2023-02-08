import React, { useState, useEffect } from "react";
import "./Add-Education.css";

const AddEducation = () => {
  const [data, setData] = useState(null);
  // const myjson = { id: 0, title: "აირჩიეთ საწყისი" };
  // const [some, setSome] = useState([]);

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  // setSome(myjson)
  // console.log(some)

  return (
    <div className="education-information-component">
      <div className="education-information">
        <label htmlFor="education-name">სასწავლებელი</label>
        <input
          type="text"
          id="education-name"
          name=""
          placeholder="სასწავლებელი"
        />
        <span className="for-hint">მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className="degree-and-date">
        <div className="degree">
          <label htmlFor="degree-dropdwon">ხარისხი</label>
          <select id="degree-dropdwon">
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
          <input type="date" id="end-date" />
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
        ></textarea>
      </div>
    </div>
  );
};

export default AddEducation;
