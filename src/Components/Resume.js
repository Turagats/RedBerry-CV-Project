import React from "react";
import "./Resume.css";

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
            <h3 className="resume-about-me-header">ჩემ შესახებ</h3>
            <p className="resume-about-me-text">{props.aboutMe}</p>
          </div>
          <div className="resume-profile-img"></div>
        </div>

        <div className="resresume-experience">
          <h3 className="resExperienceHeading">გამოცდილება</h3>
          <div className="resPositionAndDates">
            <div className="resume-position-employer">
              <span className="resPosition">{props.position}</span>,
              <span className="resEmployer"> {props.employer}</span>
            </div>
            <div className="resume-dates">
              <span className="resume-statring-date">{props.startingDate}</span>{" "}
              -<span className="resume-ending-date">{props.endingDate}</span>
            </div>
          </div>
          <p className="resume-about-experience">{props.aboutJob}</p>
        </div>
        <div className="resume-education">
          <h3 className="resume-education-header">განათლება</h3>
          <div className="resume-institute-dates">
            <div className="resume-institute-dates">
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
        <img
          className="resume-star"
          src="./assets/images/starIcon.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Resume;
