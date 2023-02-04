import React from "react";
import "./General-Information.css";
import { Link } from "react-router-dom";

const GeneralInformation = () => {
  return (
    <section className="general-information">
      <form className="personal-information">
        <div className="personal-information-header">
          <h1 className="title">პირადი ინფო</h1>
          <span className="page-number">1/3</span>
        </div>
        <Link to="/">
          <div className="back-to-langing-page">
            <img className="eclipse" alt="back" />
            <img className="vector" alt="back" />
          </div>
        </Link>
        <div className="input-names">
          <label>
            სახელი
            <input type="text" id="first-name" name="" placeholder="სახელი" />
          </label>
          <span class="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
        <div className="input-names">
          <label>
            გვარი
            <input type="text" id="last-name" name="" placeholder="გვარი" />
          </label>
          <span class="for-hint">მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
        <div className="upload-photo">
          
        </div>
        <div className="about-me-optional">
          <label>
            <textarea name="" className="" id="about-me-text" cols="60" rows="5"></textarea>
          </label>
        </div>
      </form>
    </section>
  );
};

export default GeneralInformation;
