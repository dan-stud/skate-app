import Letter from "../letter/letter";

const PlayerSection = (toggled) => {
  return (
    <div className="align-middle">
      <Letter value="S." toggled={toggled}></Letter>
      <Letter value="K." toggled={toggled}></Letter>
      <Letter value="A." toggled={toggled}></Letter>
      <Letter value="T." toggled={toggled}></Letter>
      <Letter value="E" toggled={toggled}></Letter>
      <div className="inline-block mx-4">Player Name</div>
    </div>
  );
};

export default PlayerSection;
