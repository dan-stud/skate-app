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
  const [active, setActive] = useState(false);

  const playersName = props.name ? props.name : "Player Name";

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    localStorage.setItem(PLAYER_TAG + props.id, val);
    setValue(val);
  };

  const playerOut = (evt: React.ChangeEvent<HTMLButtonElement>) => {
    if (evt.target?.value;

    setActive(true);
  };

  return (
    <div className="inline-grid grid-cols-6 align-middle px-2 py-3 mx-2 my-2 bg-white shadow-2xl rounded-md bg-opacity-95 border-2 border-gray-300">
      <Letter disabled={!active} value="S" toggle={props.toggled}></Letter>
      <Letter disabled={!active} value="K" toggle={props.toggled}></Letter>
      <Letter disabled={!active} value="A" toggle={props.toggled}></Letter>
      <Letter disabled={!active} value="T" toggle={props.toggled}></Letter>
      <Letter out={!lost} disabled={!active} value="E" toggle={props.toggled}></Letter>
      <textarea
        id="player-name-text"
        onChange={handleChange}
        className="text-sm text-center pt-6 font-dafoe bg-transparent resize-none font-sedge"
        ref={textAreaRef}
        rows={1}
        defaultValue={playersName}
      />
    </div>
  );
}
export default PlayerSection;
