import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Player from "../components/player/player";

export const PLAYER_TAG = "player-";

const Game = () => {
  const router = useRouter();
  const [players, setPlayers] = useState([] as Array<string>);
  useEffect(() => {
    const playerAmountParse = parseInt(router.query.playerAmount + "");
    const playerAmount = Number.isNaN(playerAmountParse)
      ? 0
      : playerAmountParse;
    if (playerAmount == 0) {
      return;
    }
    const newPlayers = [] as Array<string>;
    for (let index = 0; index < playerAmount; index++) {
      const value = localStorage.getItem(PLAYER_TAG + index);
      const name = value ? value : PLAYER_TAG + (index + 1);
      newPlayers.push(name);
    }
    setPlayers(newPlayers);
    console.log("Players set ", newPlayers);
  }, []);

  function shuffleArray(players) {
    for (let i = players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }
    console.log(players);
  }

  return (
    <div className="bg-texture h-screen stroke-purple-600">
      {players.map((name: string, i: number) => (
        <Player id={i} key={i} name={name} toggled={true}></Player>
      ))}

      <div className="text-center mt-2">
        <button
          className="bg-white p-0.5 rounded items-center shadow-2xl border-4 border-gray-300 bg-opacity-95"
          onClick={shuffleArray}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            className="w-14 h-14 stroke-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Game;
