import { useRef, useState } from "react";
import { PLAYER_TAG } from "../../pages/game";
import Letter from "../letter/letter";
import useAutosizeTextArea from "../../hooks/useAutosizeTextArea";

type Props = {
  toggled: boolean;
  name?: string;
  id: number;
};

function PlayerSection(props: Props) {
  const [value, setValue] = useState("");

  const playersName = props.name ? props.name : "Player Name";

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    localStorage.setItem(PLAYER_TAG + props.id, val);
    setValue(val);
  };

  return (
    <div className="align-middle pl-4 py-3">
      <Letter value="S." toggle={props.toggled}></Letter>{" "}
      <Letter value="K." toggle={props.toggled}></Letter>{" "}
      <Letter value="A." toggle={props.toggled}></Letter>{" "}
      <Letter value="T." toggle={props.toggled}></Letter>{" "}
      <Letter value="E" toggle={props.toggled}></Letter>{" "}
      <textarea
        id="player-name-text"
        onChange={handleChange}
        className="text-sm relative inline-block text-center pt-3 ml-1 w-20"
        ref={textAreaRef}
        rows={1}
        defaultValue={playersName}
      />
    </div>
  );
}
export default PlayerSection;
