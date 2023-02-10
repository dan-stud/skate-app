import Letter from "../letter/letter";

type Props = {
  toggled: boolean;
  name?: string;
};

function PlayerSection(props: Props) {
  const playersName = props.name ? props.name : "Player Name";
  return (
    <div className="align-middle">
      {" "}
      <Letter value="S." toggle={props.toggled}></Letter>{" "}
      <Letter value="K." toggle={props.toggled}></Letter>{" "}
      <Letter value="A." toggle={props.toggled}></Letter>{" "}
      <Letter value="T." toggle={props.toggled}></Letter>{" "}
      <Letter value="E" toggle={props.toggled}></Letter>{" "}
      <div className="inline-block mx-4">{playersName}</div>{" "}
    </div>
  );
}
export default PlayerSection;
