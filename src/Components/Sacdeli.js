import React, { useState } from "react";
import AddExperience from "./Add-Experience";

const Sacdeli = () => {
  const [experienceCount, setExperienceCount] = useState(1);
  const onClickaddExperience = () => {
    setExperienceCount(experienceCount + 1);
  };
  return (
    <section>
      <form>
        <div>
          {Array.from({ length: experienceCount }, (_, i) => (
            <AddExperience key={i} />
          ))}
          <button onClick={onClickaddExperience}>
            მეტი გამოცდილების დამატება
          </button>
        </div>
      </form>
    </section>
  );
};
export default Sacdeli;
