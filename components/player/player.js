import Letter from "../letter/letter";

const Player = (toggled) => {
  return (
    <div className="align-middle my-2 mx-4">
      <Letter value="S." toggled={toggled}></Letter>
      <Letter value="K." toggled={toggled}></Letter>
      <Letter value="A." toggled={toggled}></Letter>
      <Letter value="T." toggled={toggled}></Letter>
      <Letter value="E" toggled={toggled}></Letter>
    </div>
  );
};

export default Player;
