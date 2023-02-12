import React, { useState } from "react";
import { useEffect } from "react";
import "./General-Information.css";
import { Link } from "react-router-dom";
import forbackVector from "../UI/Assets/Images/Vector.svg";
import Resume from "./Resume";
import redTriangle from "../UI/Assets/Images/red-triangle.png";
import greenCheck from "../UI/Assets/Images/green-bird.png";

const GeneralInformation = () => {
  const inputPosition = sessionStorage.getItem("position" || "");
  const inputEmployer = sessionStorage.getItem("employer" || "");
  const inputStartingDate = sessionStorage.getItem("starting-date" || "");
  const inputEndingDate = sessionStorage.getItem("ending-date" || "");
  const inputAboutJob = sessionStorage.getItem("about-job" || "");
  const inputEducational = sessionStorage.getItem("educational" || "");
  const inputDegree = sessionStorage.getItem("degree" || "");
  const inputEducationEndingDate = sessionStorage.getItem(
    "education-ending-date" || ""
  );
  const inputAboutEducation = sessionStorage.getItem("about-education" || "");

  // for button upload

  const uploadFile = () => {
    document.getElementById("image-input").click();
  };
  const [photo, setPhoto] = useState(
    sessionStorage.getItem("profile-photo") || null
  );

  const handleChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
    // setPhoto(e.target.files[0]);


    console.log(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    sessionStorage.setItem("profile123", URL.createObjectURL(e.target.files[0]));

    
  };

  useEffect(() => {
    sessionStorage.setItem("profile-photo", photo);
  }, [photo]);

  // Name

  const [inputName, setInputName] = useState(
    sessionStorage.getItem("name") || ""
  );
  const HandeChengeName = (event) => {
    setInputName(event.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem("name", inputName);
  }, [inputName]);

  // Last name

  const [inputLastName, setInputLastName] = useState(
    sessionStorage.getItem("lastname") || ""
  );
  const HandeChengeLastName = (event) => {
    setInputLastName(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("lastname", inputLastName);
  }, [inputLastName]);

  //about me
  const [inputaboutMe, setInputAboutMe] = useState(
    sessionStorage.getItem("aboutme") || ""
  );

  const HandeChangeAboutme = (event) => {
    setInputAboutMe(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("aboutme", inputaboutMe);
  }, [inputaboutMe]);

  //email

  const [inputEmail, setInputEmail] = useState(
    sessionStorage.getItem("email") || ""
  );

  const HandeChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("email", inputEmail);
  }, [inputEmail]);

  // mobile
  const [inputMobile, setInputMobile] = useState(
    sessionStorage.getItem("mobile") || ""
  );

  const HandeChangeMobile = (event) => {
    setInputMobile(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("mobile", inputMobile);
  }, [inputMobile]);

  //validation Name
  const [isNameValid, setNameIsValid] = useState(false);
  const [isNameTouched, setNameIsTouched] = useState(false);

  const handleBlurName = () => {
    setNameIsTouched(true);

    const pattern = /^[\u10A0-\u10FF]+$/;
    setNameIsValid(inputName.length >= 2 && pattern.test(inputName));
  };

  //validation Last Name

  const [isLastNameValid, setLastNameIsValid] = useState(false);
  const [isLastNameTouched, setLastNameIsTouched] = useState(false);

  const handleBlurLastName = () => {
    setLastNameIsTouched(true);

    const pattern = /^[\u10A0-\u10FF]+$/;
    setLastNameIsValid(
      inputLastName.length >= 2 && pattern.test(inputLastName)
    );
  };

  // validation email
  const [isEmailValid, setEmailIsValid] = useState(false);
  const [isEmailTouched, setEmailIsTouched] = useState(false);

  const handleBlurEmail = () => {
    setEmailIsTouched(true);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
    setEmailIsValid(emailPattern.test(inputEmail));
  };

  //validate number

  const [isMobileValid, setMobileIsValid] = useState(false);
  const [isMobileTouched, setMobileIsTouched] = useState(false);

  const handleBlurMobile = () => {
    setMobileIsTouched(true);
    if (inputMobile.length === 13 && inputMobile.startsWith("+995")) {
      setMobileIsValid(true);
    } else {
      setMobileIsValid(false);
    }
  };

  // about me border color

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
              <img src={forbackVector} className="vector" alt="back" />
            </div>
          </Link>
          <div className="first-last-name">
            <div className="input-name">
              <label htmlFor="first-name">სახელი</label>
              <div className="input-checks-wrapper">
                <input
                  type="text"
                  id="first-name"
                  onChange={HandeChengeName}
                  onBlur={handleBlurName}
                  style={{
                    borderColor: isNameTouched
                      ? isNameValid
                        ? "green"
                        : "red"
                      : "black",
                  }}
                  required
                  value={inputName}
                  placeholder="სახელი"
                />
                <img
                  className="green-check"
                  src={greenCheck}
                  alt=""
                  style={{
                    display: isNameTouched
                      ? isNameValid
                        ? "block"
                        : "none"
                      : "none",
                  }}
                />
                <img
                  className="red-triangle"
                  src={redTriangle}
                  alt=""
                  style={{
                    display: isNameTouched
                      ? isNameValid
                        ? "none"
                        : "block"
                      : "none",
                  }}
                />
              </div>
              <span className="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>

            <div className="input-name">
              <label htmlFor="last-name">გვარი</label>
              <div className="input-checks-wrapper">
                <input
                  type="text"
                  id="last-name"
                  placeholder="გვარი"
                  value={inputLastName}
                  required
                  style={{
                    borderColor: isLastNameTouched
                      ? isLastNameValid
                        ? "green"
                        : "red"
                      : "black",
                  }}
                  onChange={HandeChengeLastName}
                  onBlur={handleBlurLastName}
                />
                <img
                  className="green-check"
                  src={greenCheck}
                  alt=""
                  style={{
                    display: isLastNameTouched
                      ? isLastNameValid
                        ? "block"
                        : "none"
                      : "none",
                  }}
                />
                <img
                  className="red-triangle"
                  src={redTriangle}
                  alt=""
                  style={{
                    display: isLastNameTouched
                      ? isLastNameValid
                        ? "none"
                        : "block"
                      : "none",
                  }}
                />
              </div>
              <span className="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
          </div>
          <div className="upload-photo">
            <h4 className="upload-photo-header">პირადი ფოტოს ატვირთვა</h4>

            <div className="upload-photo-button" onClick={uploadFile}>
              ატვირთვა
              <input
                type="file"
                id="image-input"
                style={{ display: "none" }}
                onChange={handleChange}
                required
              />
            </div>
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
              style={{
                borderColor: inputaboutMe.length > 0 ? "green" : "black",
              }}
            ></textarea>
          </div>
          <div className="email">
            <label htmlFor="email-input">ელ.ფოსტა</label>
            <div className="input-checks-wrapper">
              <input
                type="email"
                id="email-input"
                placeholder="taso@redberry.ge"
                value={inputEmail}
                required
                onChange={HandeChangeEmail}
                onBlur={handleBlurEmail}
                style={{
                  borderColor: isEmailTouched
                    ? isEmailValid
                      ? "green"
                      : "red"
                    : "black",
                }}
              />
              <img
                className="green-check"
                src={greenCheck}
                alt=""
                style={{
                  display: isEmailTouched
                    ? isEmailValid
                      ? "block"
                      : "none"
                    : "none",
                }}
              />
              <img
                className="red-triangle"
                src={redTriangle}
                alt=""
                style={{
                  display: isEmailTouched
                    ? isEmailValid
                      ? "none"
                      : "block"
                    : "none",
                }}
              />
            </div>
            <span className="for-hint">უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </div>
          <div className="mobile-number">
            <label htmlFor="mobile-number-input">მობილურის ნომერი</label>
            <div className="input-checks-wrapper">
              <input
                type="text"
                id="mobile-number-input"
                placeholder="+995 551 12 34 56"
                value={inputMobile}
                required
                onChange={HandeChangeMobile}
                onBlur={handleBlurMobile}
                style={{
                  borderColor: isMobileTouched
                    ? isMobileValid
                      ? "green"
                      : "red"
                    : "black",
                }}
              />
              <img
                className="green-check"
                src={greenCheck}
                alt=""
                style={{
                  display: isMobileTouched
                    ? isMobileValid
                      ? "block"
                      : "none"
                    : "none",
                }}
              />
              <img
                className="red-triangle"
                src={redTriangle}
                alt=""
                style={{
                  display: isMobileTouched
                    ? isMobileValid
                      ? "none"
                      : "block"
                    : "none",
                }}
              />
            </div>
            <span className="for-hint">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </span>
          </div>
          <div id="buttons-next-back">
            <Link to="/experience" className="button-wrapper-to-link">
              <button id="button-next">შემდეგი</button>
            </Link>
          </div>
        </form>
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
        src={photo}
      />
    </section>
  );
};

export default GeneralInformation;
