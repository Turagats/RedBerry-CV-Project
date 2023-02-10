import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CVFormAPI = () => {
  const inputPosition = localStorage.getItem("position" || "");
  const inputEmployer = localStorage.getItem("employer" || "");
  const inputStartingDate = localStorage.getItem("starting-date" || "");
  const inputEndingDate = localStorage.getItem("ending-date" || "");
  const inputAboutJob = localStorage.getItem("about-job" || "");
  const inputEducational = localStorage.getItem("educational" || "");
  const inputDegree = localStorage.getItem("degree" || "");
  const inputEducationEndingDate = localStorage.getItem(
    "education-ending-date" || ""
  );
  const inputAboutEducation = localStorage.getItem("about-education" || "");
  const inputName = localStorage.getItem("name") || "";
  const inputLastName = localStorage.getItem("lastname" || "");
  const inputaboutMe = localStorage.getItem("aboutme" || "");
  const inputEmail = localStorage.getItem("email" || "");
  const inputMobile = localStorage.getItem("mobile" || "");
  const photo = localStorage.getItem("profile-photo" || null);

  const [formData, setFormData] = useState({
    // const formData = [

    name: inputName,
    surname: inputLastName,
    email: inputEmail,
    phone_number: inputMobile,
    experiences: [
      {
        position: inputPosition,
        employer: inputEmployer,
        start_date: inputStartingDate,
        due_date: inputEndingDate,
        description: inputAboutJob,
      },
    ],
    educations: [
      {
        institute: inputEducational,
        degree_id: inputDegree,
        due_date: inputEducationEndingDate,
        description: inputAboutEducation,
      },
    ],
    image: photo,
    about_me: inputaboutMe,
  });
  console.log(formData);
  console.log(setFormData);
  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleSubmit = () => {
    // event.preventDefault();
    axios
      .post("https://resume.redberryinternship.ge/api/cvs", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    // console.log(formData + "gagzavnamde2");
    // setFormData({
    //   ...formData,
    // });
    // console.log(formData + "final");
    // event.preventDefault();
    // fetch("https://resume.redberryinternship.ge/api/cvs", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: "kvercia",
    // })
    //   .then((response) => response.text())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <Link to="/resumes">
      <button className="button-finish" type="submit" onClick={handleSubmit}>
        დასრულება
      </button>
    </Link>
  );
};

export default CVFormAPI;
