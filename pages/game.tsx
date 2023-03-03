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
  return (
    <>
      {players.map((name: string, i: number) => (
        <Player id={i} key={i} name={name} toggled={true}></Player>
      ))}
    </>
  );
};
export default Game;
