import React, { useState } from "react";
import "./ResponseResume.css";
import star from "../UI/Assets/Images/star-logo.png";
import mailIcon from "../UI/Assets/Images/email.png";
import phoneIcon from "../UI/Assets/Images/phone.png";
import closeLogo from "../UI/Assets/Images/deletebutton.png";
import { Link } from "react-router-dom";
import forbackVector from "../UI/Assets/Images/Vector.svg";
const ResponseResume = () => {
  const LuckyResume = () => {
    const [close, setClose] = useState(true);
    const HandleClose = () => {
      setClose(false);
    };
    return (
      <div
        className="lucky-resume"
        style={{ display: close ? "block" : "none" }}
      >
        <img className="close-logo" src={closeLogo} onClick={HandleClose}></img>
        რეზიუმე წარმატებით გაიგზავნა 🎉
        <div></div>
      </div>
    );
  };

  const data = JSON.parse(sessionStorage.getItem("data"));

  console.log(data);
  const imageUrl = "https://resume.redberryinternship.ge/" + data.image;

  return (
    <div>
      <Link to="/">
        <div className="back-to-landging-page">
          <img src={forbackVector} className="vector" alt="back" />
        </div>
      </Link>
      <div>
        <LuckyResume />
        <div className="response-resume-block">
          <div className="response-resume-view">
            <div className="response-resume-personal-information">
              <div className="response-resume-name-lastname">
                <h1 className="response-resume-name-lastname">
                  <span className="response-resume-name">{data.name}</span>
                  <span className="response-resume-lastName">
                    {" "}
                    {data.surname}
                  </span>
                </h1>
              </div>
              <div className="response-resume-contact">
                <div className="response-resume-mail-and-icon">
                  <img
                    className="response-resume-mail-icon"
                    src={mailIcon}
                    style={{
                      display: data.email ? "block" : "none",
                    }}
                    alt=""
                  />
                  <span className="response-resume-mail">{data.email}</span>
                </div>
                <div className="response-resume-phone-nuber-icon">
                  <img
                    className="response-resume-phone-icons"
                    src={phoneIcon}
                    alt=""
                    style={{
                      display: data.phone_number ? "block" : "none",
                    }}
                  />
                  <span className="response-resume-phone-number">
                    {data.phone_number}
                  </span>
                </div>
              </div>
              <div className="response-resume-about-me">
                <h3
                  className="response-resume-about-me-header"
                  style={{
                    display: data.about_me ? "block" : "none",
                  }}
                >
                  ჩემ შესახებ
                </h3>
                <p className="response-resume-about-me-text">{data.about_me}</p>
              </div>
              <div
                style={{
                  width: "246px",
                  height: "246px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
                className="response-resume-profile-img"
              >
                <img
                  src={imageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    // display: data.image ? "block" : "none",
                  }}
                ></img>
              </div>
            </div>

            <div
              className="response-resume-experience"
              style={{
                borderTop:
                  data.experiences[0].position || data.experiences[0].employer
                    ? "1px solid #c8c8c8"
                    : "0px",
              }}
            >
              <h3
                className="response-resume-Experience-Heading"
                style={{
                  display:
                    data.experiences[0].position || data.experiences[0].employer
                      ? "block"
                      : "none",
                }}
              >
                გამოცდილება
              </h3>
              <div className="response-resume-Position-Dates">
                <div
                  className="response-resume-position-employer"
                  style={{
                    display:
                      data.experiences[0].position ||
                      data.experiences[0].employer
                        ? "block"
                        : "none",
                  }}
                >
                  <span className="response-resume-Position">
                    {data.experiences[0].position}
                  </span>
                  ,
                  <span className="response-resume-Employer">
                    {" "}
                    {data.experiences[0].employer}
                  </span>
                </div>
                <div
                  className="response-resume-dates"
                  style={{
                    display:
                      data.experiences[0].start_date ||
                      data.experiences[0].due_date
                        ? "block"
                        : "none",
                  }}
                >
                  <span className="response-resume-statring-date">
                    {data.experiences[0].start_date}
                  </span>{" "}
                  -{" "}
                  <span className="response-resume-ending-date">
                    {data.experiences[0].due_date}
                  </span>
                </div>
              </div>
              <p className="response-resume-about-experience">
                {data.experiences[0].description}
              </p>
            </div>

            <div
              className="response-resume-education"
              style={{
                borderTop:
                  data.educations[0].degree ||
                  data.educations[0].institute ||
                  data.educations[0].due_date
                    ? "1px solid #c8c8c8"
                    : "0px",
              }}
            >
              <h3
                className="response-resume-education-header"
                style={{
                  display:
                    data.educations[0].degree ||
                    data.educations[0].institute ||
                    data.educations[0].due_date ||
                    data.educations[0].description
                      ? "block"
                      : "none",
                }}
              >
                განათლება
              </h3>
              <div className="response-resume-institute-dates">
                <div
                  className="response-resume-institute-dates"
                  style={{
                    display:
                      data.educations[0].institute ||
                      data.educations[0].due_date
                        ? "block"
                        : "none",
                  }}
                >
                  <span className="response-resume-institute">
                    {data.educations[0].institute}
                  </span>
                  ,
                  <span className="response-resume-degree">
                    {" "}
                    {data.educations[0].degree}
                  </span>
                </div>
                <div className="response-resume-graduation-year">
                  <span className="response-resume-education-ending-date">
                    {data.educations[0].due_date}
                  </span>
                </div>
              </div>
              <p className="response-resume-about-education">
                {data.educations[0].description}
              </p>
            </div>
            <img className="response-resume-star" src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseResume;
