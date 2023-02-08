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
              <span  className="resPosition">{props.position}</span>,
              <span className="resEmployer">{props.employer}</span>
            </div>
            <div className="resume-dates">
              <span className="resStartDate">2020-09-23</span> -
              <span className="resEndDate">2020-09-23</span>
            </div>
          </div>



          <p className="resAboutExperience">
            Experienced Javascript Native Developer with 5 years in the
            industry. proficient withreact. Used problem-solving aptitude to
            encahge application performance by 14%. created data visualisation
            tools and integrated designs.
          </p>
        </div>
        <div className="resume-education">
          <h3 className="resEducationHeading">განათლება</h3>
          <div className="resInstitutionAndDates">
            <div className="resInstitutionAndDates">
              <span className="resinstitution">
                წმ. ანდრიას საპატრიარქოს სასწავლებელი
              </span>
              ,<span className="resDegree">სტუდენტი</span>
            </div>
            <div className="resume-graduation-year">
              <span className="resStartDate">2020-09-09</span>
            </div>
          </div>
          <p className="resAboutEducation">
            ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
            კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
            მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
            ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
          </p>
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
