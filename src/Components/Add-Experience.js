import React, { useState, useEffect } from "react";
import "./Add-Experience.css";
import Resume from "./Resume";
import redTriangle from "../UI/Assets/Images/red-triangle.png";
import greenCheck from "../UI/Assets/Images/green-bird.png";

const AddExperience = (props) => {
  // console.log('data: ', props);
  console.log(props.experinceQuantity);
  // var experience = props.experience;
  // var setExperiences = props.setExperiences;

  const inputName = sessionStorage.getItem("name" || "");
  const inputLastName = sessionStorage.getItem("lastname" || "");
  const inputaboutMe = sessionStorage.getItem("aboutme" || "");
  const inputEmail = sessionStorage.getItem("email" || "");
  const inputMobile = sessionStorage.getItem("mobile" || "");
  const inputEducational = sessionStorage.getItem("educational" || "");
  const inputDegree = sessionStorage.getItem("degree" || "");
  const inputEducationEndingDate = sessionStorage.getItem(
    "education-ending-date" || ""
  );
  const inputAboutEducation = sessionStorage.getItem("about-education" || "");
  const photo = sessionStorage.getItem("profile-photo" || null);

  // const inputPosition = sessionStorage.getItem("position" || "");
  // const inputEmployer = sessionStorage.getItem("employer" || "");

  //position
  const [inputPosition, setInputPosition] = useState(
    sessionStorage.getItem("position") || ""
  );

  useEffect(() => {
    sessionStorage.setItem("position", inputPosition);
  }, [inputPosition]);

  // validate position
  const [isPositionValid, setIsPositionValid] = useState(false);
  const [isPositionTouched, setIsPositionTouched] = useState(false);

  const HandeChengePosition = (event) => {
    setInputPosition(event.target.value);
    
  };

  const handleBlurPosition = () => {
    setIsPositionTouched(true);
    if (inputPosition.length >= 2) {
      setIsPositionValid(true);
    } else {
      setIsPositionValid(false);
    }
  };

  //employer
  const [inputEmployer, setInputEmployer] = useState(
    sessionStorage.getItem("employer") || ""
  );
  const HandeChengeEmployer = (event) => {
    setInputEmployer(event.target.value);
    // setExperiences([{employer:event.target.value}]);
  };
  useEffect(() => {
    sessionStorage.setItem("employer", inputEmployer);
  }, [inputEmployer]);


  //validate employer.
  const [isEmployerValid, setIsEmployerValid] = useState(false);
  const [isEmployerTouched, setEmployerTouched] = useState(false);

  const handleBlurEmployer = () => {
    setEmployerTouched(true);
    if (inputEmployer.length >= 2) {
      setIsEmployerValid(true);
    } else {
      setIsEmployerValid(false);
    }
  };
  


  //start date
  const [isStaringDateTouched, setIsStaringDateTouched] = useState(false)
  const [isStartDateValid, setIsStartDateValid]= useState(false)
  const [inputStartingDate, setInputStartingDate] = useState(
    sessionStorage.getItem("starting-date") || ""
  );
  const HandleChangeStartingDate = (event) => {
    setInputStartingDate(event.target.value);
    setIsStartDateValid(true)
  };
  useEffect(() => {
    sessionStorage.setItem("starting-date", inputStartingDate);
  }, [inputStartingDate]);

  const HandleblurStartingDate = () => {
    setIsStaringDateTouched(true)
  }


  //end date
  const [isEndinggDateTouched, setIsEndinggDateTouched] = useState(false)
  const [isEndingDateValid, setIsEndingDateValid]= useState(false)
  const [inputEndingDate, setInputEndingDate] = useState(
    sessionStorage.getItem("ending-date") || ""
  );
  const HandleChangeEndingDate = (event) => {
    setInputEndingDate(event.target.value);
    setIsEndingDateValid(true)
  };
  useEffect(() => {
    sessionStorage.setItem("ending-date", inputEndingDate);
  }, [inputEndingDate]);

  const HandleBlurEdingDate = () => {
    setIsEndinggDateTouched(true)
  }

  //about job
  const [inputAboutJob, setInputAboutJob] = useState(
    sessionStorage.getItem("about-job") || ""
  );
  const HandleChangeAboutJob = (event) => {
    setInputAboutJob(event.target.value);
  };
  useEffect(() => {
    sessionStorage.setItem("about-job", inputAboutJob);
  }, [inputAboutJob]);
  console.log(inputEndingDate)
  return (
    <div className="experinece-inofrmation-component">
      <Resume
        name={inputName}
        lastName={inputLastName}
        aboutMe={inputaboutMe}
        email={inputEmail}
        mobile={inputMobile}
        position={inputPosition}
        employer={inputEmployer}
        experinceQuantity={props.experinceQuantity}
        startingDate={inputStartingDate}
        endingDate={inputEndingDate}
        aboutJob={inputAboutJob}
        educational={inputEducational}
        degree={inputDegree}
        educationalEnding={inputEducationEndingDate}
        aboutEducation={inputAboutEducation}
        src={photo}
      />
      <div className="position-information">
        <label htmlFor="position-name">?????????????????????????????????</label>

        <div className="input-checks-wrapper">
          <input
            type="text"
            id="position-name"
            name=""
            placeholder="??????????????????????????????, ???????????????????????????, ???.???."
            onChange={HandeChengePosition}
            value={inputPosition}
            required
            onBlur={handleBlurPosition}
            style={{
              borderColor: isPositionTouched
                ? isPositionValid
                  ? "green"
                  : "red"
                : "black",
            }}
          />
          <img className="green-check" src={greenCheck} alt="" style={{
                    display: isPositionValid
                      ? isPositionValid
                        ? "block"
                        : "none"
                      : "none",
                  }}/>
          <img className="red-triangle" src={redTriangle} alt="" style={{
                    display: isPositionTouched
                      ? isPositionValid
                        ? "none"
                        : "block"
                      : "none",
                  }}/>
        </div>
        <span className="for-hint">????????????????????? 2 ?????????????????????</span>
      </div>
      <div className="company-information">
        <label htmlFor="company-name">????????????????????????????????????</label>
        <div className="input-checks-wrapper">
          <input
            type="text"
            id="company-name"
            placeholder="????????????????????????????????????"
            value={inputEmployer}
            onChange={HandeChengeEmployer}
            onBlur={handleBlurEmployer}
            required
            style={{
              borderColor: isEmployerTouched
                ? isEmployerValid
                  ? "green"
                  : "red"
                : "black",
            }}
          />
          <img className="green-check" src={greenCheck} alt="" style={{
                    display: isEmployerValid
                      ? isEmployerValid
                        ? "block"
                        : "none"
                      : "none",
                  }}/>
          <img className="red-triangle" src={redTriangle} alt="" style={{
                    display: isEmployerTouched
                      ? isEmployerValid
                        ? "none"
                        : "block"
                      : "none",
                  }}/>
        </div>
        <span className="for-hint">????????????????????? 2 ?????????????????????</span>
      </div>
      <div className="start-end-date">
        <div className="start-date">
          <label htmlFor="start-date">???????????????????????? ??????????????????</label>
          <input
            type="date"
            id="start-date"
            value={inputStartingDate}
            required
            onChange={HandleChangeStartingDate}
            onBlur={HandleblurStartingDate}
            style={{borderColor : isStaringDateTouched ? isStartDateValid ? "green" : "red" : "black"}}
          />
        </div>
        <div className="end-date">
          <label htmlFor="end-date">????????????????????????????????? ??????????????????</label>
          <input
            type="date"
            id="end-date"
            onChange={HandleChangeEndingDate}
            onBlur={HandleBlurEdingDate}
            required
            value={inputEndingDate}
            style={{borderColor : isEndinggDateTouched ? isEndingDateValid ? "green" : "red" : "black"}}

          />
        </div>
      </div>
      <div className="about-me-optional">
        <label htmlFor="about-me-text">??????????????????</label>
        <textarea
          name=""
          className=""
          id="about-me-text"
          cols="60"
          rows="5"
          placeholder="???????????? ??????????????????????????????????????? ?????? ?????????????????? ??????????????????"
          required
          value={inputAboutJob}
          onChange={HandleChangeAboutJob}
        ></textarea>
      </div>
    </div>
  );
};

export default AddExperience;
