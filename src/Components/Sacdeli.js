import React from "react";
import Resume from "./Resume";

const Sacdeli = () => {
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
  return (
    <Resume
      name={inputName}
      lastName={inputLastName}
      aboutMe={inputaboutMe}
      email={inputEmail}
      mobile={inputMobile}
      position={inputPosition}
      employer={inputEmployer}
      startingDate={inputStartingDate}
      endingDate={inputEndingDate}
      aboutJob={inputAboutJob}
      educational={inputEducational}
      degree={inputDegree}
      educationalEnding={inputEducationEndingDate}
      aboutEducation={inputAboutEducation}
      src={photo}
    />
  );
};

export default Sacdeli;
