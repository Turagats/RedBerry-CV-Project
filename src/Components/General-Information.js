import React from "react";
import "./General-Information.css";
import { Link } from "react-router-dom";
import forbackVector from "../UI/Assets/Images/Vector.svg";
// import forbackEclipse from "../UI/Assets/Images/Ellipse 1.svg";
import Resume from "./Resume";

const GeneralInformation = () => {
  const uploadFile = () => {
    document.getElementById("image-input").click();
  };

  return (
    <div>
      <section className="general-information">
        <form className="personal-information">
          <div className="personal-information-header">
            <h1 className="title">პირადი ინფო</h1>
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
              <input type="text" id="first-name" name="" placeholder="სახელი" />
              <span className="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
            <div className="input-name">
              <label htmlFor="last-name">გვარი</label>
              <input type="text" id="last-name" name="" placeholder="გვარი" />
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
            ></textarea>
          </div>
          <div className="email">
            <label htmlFor="email-input">ელ.ფოსტა</label>
            <input
              type="email"
              id="email-input"
              placeholder="taso@redberry.ge"
            />
            <span className="for-hint">უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </div>
          <div className="mobile-number">
            <label htmlFor="mobile-number-input">მობილურის ნომერი</label>
            <input
              type="text"
              id="mobile-number-input"
              placeholder="+995 551 12 34 56"
            />
            <span className="for-hint">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </span>
          </div>
          <Link to="/experience">
            <button className="button-next">შემდეგი</button>
          </Link>
        </form>
      </section>
      <Resume />
    </div>
  );
};

export default GeneralInformation;
