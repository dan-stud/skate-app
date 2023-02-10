import React from "react";
import { useState } from "react";
type Props = {
  toggle: boolean;
  value: string;
};
const Letter = (props: Props) => {
  const [toggled, setToggle] = useState(props.toggle);
  const toggleLetter = () => {
    setToggle(!toggled);
  };
  return (
    <button
      className={
        toggled === true ? "text-pink-200 text-7xl" : "text-grey-200 text-7xl"
      }
      onClick={toggleLetter}
    >
      {" "}
      {props.value}
    </button>
  );
};
export default Letter;
