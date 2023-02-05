import React from "react";
import "./General-Information.css";
import { Link } from "react-router-dom";
import forbackVector from "../UI/Assets/Images/Vector.svg";
import forbackEclipse from "../UI/Assets/Images/Ellipse 1.svg";

const GeneralInformation = () => {
  return (
    <section className="general-information">
      <form className="personal-information">
        <div className="personal-information-header">
          <h1 className="title">პირადი ინფო</h1>
          <span className="page-number">1/3</span>
        </div>
        <Link to="/">
          <div className="back-to-landging-page">
            <img src={forbackEclipse} className="eclipse" alt="back" />
            <img src={forbackVector} className="vector" alt="back" />
          </div>
        </Link>
        <div className="first-last-name">
          <div className="input-name">
            <label>
              სახელი
              <input type="text" id="first-name" name="" placeholder="სახელი" />
            </label>
            <span className="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>
          <div className="input-name">
            <label>
              გვარი
              <input type="text" id="last-name" name="" placeholder="გვარი" />
            </label>
            <span className="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>
        </div>
        <div className="upload-photo">
          <label>
            პირადი ფოტოს ატვირთვა
            <input type="file" id="image-input" />
          </label>
        </div>
        <div className="about-me-optional">
          <label>
            ჩემ შესახებ (არასავალდებულო)
            <textarea
              name=""
              className=""
              id="about-me-text"
              cols="60"
              rows="5"
            ></textarea>
          </label>
        </div>
        <div className="email">
          <label>
            ელ.ფოსტა
            <input
              type="email"
              id="email-input"
              placeholder="taso@redberry.ge"
            />
          </label>
          <span className="for-hint">უნდა მთავრდებოდეს @redberry.ge-ით</span>
        </div>
        <div className="mobile-number">
          <label>
            მობილურის ნომერი
            <input
              type="text"
              id="mobile-number-input"
              placeholder="+995 551 12 34 56"
            />
          </label>
          <span className="for-hint">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </span>
        </div>
        <Link to="/experience">
          <button>შემდეგი</button>
        </Link>
      </form>
    </section>
  );
};

export default GeneralInformation;
