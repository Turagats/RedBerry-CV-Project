import React from "react";
import "./Resume.css";
import star from "../UI/Assets/Images/star-logo.png";

const Resume = (props) => {
  return (
    <div className="resume-block">
      <div className="resume-view">
        <div className="resume-personal-information">
          <div className="resume-name-lastname">
            <h1 className="resume-name-lastname">
              <span className="resume-name">{props.name}</span>
              <span className="resume-lastName"> {props.lastName}</span>
            </h1>
          </div>
          <div className="resume-contact">
            <div className="resume-mail-and-icon">
              <img
                className="resume-mail"
                src="./assets/images/mailIcon.svg"
                alt=""
              />
              <span className="resume-mail">{props.email}</span>
            </div>
            <div className="resume-phone-nuber-icon">
              <img
                className="resume-phone-icons"
                src="./assets/images/phoneIcon.svg"
                alt=""
              />
              <span className="resume-phone-number">{props.mobile}</span>
            </div>
          </div>
          <div className="resume-about-me">
            <h3
              className="resume-about-me-header"
              style={{
                display: props.aboutMe ? "block" : "none",
              }}
            >
              ჩემ შესახებ
            </h3>
            <p className="resume-about-me-text">{props.aboutMe}</p>
          </div>
          <div
            style={{
              width: "246px",
              height: "246px",
              borderRadius: "50%",
              overflow: "hidden",
              display: props.src ? "block" : "none",
            }}
            className="resume-profile-img"
          >
            <img
              src={props.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                display : props.src  ?   "block" :  "block"
              }}
            ></img>
          </div>
        </div>

        <div
          className="resume-experience"
          style={{
            borderTop:
              props.position || props.employer ? "1px solid #c8c8c8" : "0px",
          }}
        >
          <h3
            className="resume-Experience-Heading"
            style={{
              display: props.position || props.employer ? "block" : "none",
            }}
          >
            გამოცდილება
          </h3>
          <div className="resume-Position-Dates">
            <div
              className="resume-position-employer"
              style={{
                display: props.position || props.employer ? "block" : "none",
              }}
            >
              <span className="resume-Position">{props.position}</span>,
              <span className="resume-Employer"> {props.employer}</span>
            </div>
            <div
              className="resume-dates"
              style={{
                display:
                  props.startingDate || props.endingDate ? "block" : "none",
              }}
            >
              <span className="resume-statring-date">{props.startingDate}</span>{" "}
              - <span className="resume-ending-date">{props.endingDate}</span>
            </div>
          </div>
          <p className="resume-about-experience">{props.aboutJob}</p>
        </div>

        <div
          className="resume-education"
          style={{
            borderTop:
              props.degree || props.educational || props.educationalEnding
                ? "1px solid #c8c8c8"
                : "0px",
          }}
        >
          <h3
            className="resume-education-header"
            style={{
              display:
                props.degree ||
                props.educational ||
                props.educationalEnding ||
                props.educationalEnding ||
                props.aboutEducation
                  ? "block"
                  : "none",
            }}
          >
            განათლება
          </h3>
          <div className="resume-institute-dates">
            <div
              className="resume-institute-dates"
              style={{
                display:
                  props.educational || props.educationalEnding
                    ? "block"
                    : "none",
              }}
            >
              <span className="resume-institute">{props.educational}</span>,
              <span className="resume-degree"> {props.degree}</span>
            </div>
            <div className="resume-graduation-year">
              <span className="resume-education-ending-date">
                {props.educationalEnding}
              </span>
            </div>
          </div>
          <p className="resume-about-education">{props.aboutEducation}</p>
        </div>
        <img className="resume-star" src={star} alt="" />
      </div>
    </div>
  );
};

export default Resume;
