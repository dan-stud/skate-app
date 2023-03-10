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
    <div className="inline-grid grid-cols-6 align-middle px-2 py-3 mx-2 my-2 bg-white shadow-2xl rounded-md bg-opacity-95 border border-gray-300">
      <Letter value="S" toggle={props.toggled}></Letter>
      <Letter value="K" toggle={props.toggled}></Letter>
      <Letter value="A" toggle={props.toggled}></Letter>
      <Letter value="T" toggle={props.toggled}></Letter>
      <Letter value="E" toggle={props.toggled}></Letter>
      <textarea
        id="player-name-text"
        onChange={handleChange}
        className="text-sm text-center pt-6 font-dafoe bg-transparent resize-none"
        ref={textAreaRef}
        rows={1}
        defaultValue={playersName}
      />
    </div>
  );
}
export default PlayerSection;
