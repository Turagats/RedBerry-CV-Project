import React, { useState } from "react";
import { useEffect } from "react";
import "./General-Information.css";
import { Link } from "react-router-dom";
import forbackVector from "../UI/Assets/Images/Vector.svg";
// import forbackEclipse from "../UI/Assets/Images/Ellipse 1.svg";
import Resume from "./Resume";

const GeneralInformation = () => {
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
  

  const uploadFile = () => {
    document.getElementById("image-input").click();
  };

  // Name
  const [inputName, setInputName] = useState(
    localStorage.getItem("name") || ""
  );
  const HandeChengeName = (event) => {
    setInputName(event.target.value);
    console.log(event);
  };
  useEffect(() => {
    localStorage.setItem("name", inputName);
  }, [inputName]);

  // Last name

  const [inputLastName, setInputLastName] = useState(
    localStorage.getItem("lastname") || ""
  );
  const HandeChengeLastName = (event) => {
    setInputLastName(event.target.value);
    console.log(event);
  };
  useEffect(() => {
    localStorage.setItem("lastname", inputLastName);
  }, [inputLastName]);

  //about me
  const [inputaboutMe, setInputAboutMe] = useState(
    localStorage.getItem("aboutme") || ""
  );

  const HandeChangeAboutme = (event) => {
    setInputAboutMe(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("aboutme", inputaboutMe);
  }, [inputaboutMe]);

  //email

  const [inputEmail, setInputEmail] = useState(
    localStorage.getItem("email") || ""
  );

  const HandeChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("email", inputEmail);
  }, [inputEmail]);

  // mobile
  const [inputMobile, setInputMobile] = useState(
    localStorage.getItem("mobile") || ""
  );

  const HandeChangeMobile = (event) => {
    setInputMobile(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("mobile", inputMobile);
  }, [inputMobile]);

  // const [errors, setErrors] = useState({ name: null, surname: null });

  // const handleChange = (field, event) => {
  //   const { value } = event.target;

  //   if (!value) {
  //     setErrors({ ...errors, [field]: `${field} is required` });
  //     return;
  //   }

  //   if (value.length < 2) {
  //     setErrors({
  //       ...errors,
  //       [field]: `${field} can only contain 2 characters`,
  //     });
  //     return;
  //   }

  //   if (/[^ა-ჰ ]/g.test(value)) {
  //     setErrors({
  //       ...errors,
  //       [field]: `${field} can only contain Georgian characters`,
  //     });
  //     return;
  //   }

  //   setErrors({ ...errors, [field]: null });
  //   onChange(field, value);
  // };

  return (
    <section className="general-information">
      <div className="informations-buttons">
        <form className="personal-information">
          <div className="personal-information-header">
            <span className="title">პირადი ინფო</span>
            <span className="page-number">1/3</span>
          </div>
          <Link to="/">
            <div className="back-to-landging-page">
              {/* <img src={forbackEclipse} className="eclipse" alt="back" /> */}
              <img src={forbackVector} className="vector" alt="back" />
            </div>
          </Link>
          <div className="first-last-name">
            <div className="input-name">
              <label htmlFor="first-name">სახელი</label>
              <input
                type="text"
                id="first-name"
                // onChange={(event) => handleChange("name", event)}
                onChange={HandeChengeName}
                minLength={2}
                required
                value={inputName}
                placeholder="სახელი"
              />
              {/* {errors.name && <div style={{ color: "red" }}>{errors.name}</div>} */}
              <span className="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
            <div className="input-name">
              <label htmlFor="last-name">გვარი</label>
              <input
                type="text"
                id="last-name"
                placeholder="გვარი"
                value={inputLastName}
                required
                onChange={HandeChengeLastName}
              />
              <span className="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
          </div>
          <div className="upload-photo">
            <h4 className="upload-photo-header">პირადი ფოტოს ატვირთვა</h4>
            <button className="upload-photo-button" onClick={uploadFile}>
              ატვირთვა
            </button>
            <input type="file" id="image-input" style={{ display: "none" }} />
          </div>
          <div className="about-me-optional">
            <label htmlFor="about-me-text">ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              name=""
              className=""
              id="about-me-text"
              cols="60"
              rows="5"
              onChange={HandeChangeAboutme}
              value={inputaboutMe}
            ></textarea>
          </div>
          <div className="email">
            <label htmlFor="email-input">ელ.ფოსტა</label>
            <input
              type="email"
              id="email-input"
              placeholder="taso@redberry.ge"
              value={inputEmail}
              required
              onChange={HandeChangeEmail}
            />
            <span className="for-hint">უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </div>
          <div className="mobile-number">
            <label htmlFor="mobile-number-input">მობილურის ნომერი</label>
            <input
              type="text"
              id="mobile-number-input"
              placeholder="+995 551 12 34 56"
              value={inputMobile}
              required
              onChange={HandeChangeMobile}
            />
            <span className="for-hint">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </span>
          </div>
        </form>
        <div id="buttonsnextback">
          <Link to="/experience">
            <button id="buttonnext">შემდეგი</button>
          </Link>
        </div>
      </div>
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
      />
    </section>
  );
};

export default GeneralInformation;
