import { useState } from "react";

const Letter = ({ value }) => {
  const [toggled, setToggle] = useState(true);
   
    const toggleLetter = () => {
    setToggle(!toggled);
  };

  return (
    <button
      className={
        toggled === true ? "text-pink-200 text-7xl" : "text-grey-200 text-7xl"
      }
      toggled={toggled}
      onClick={toggleLetter}
    >
      {value}
    </button>
  );
};

export default Letter;
