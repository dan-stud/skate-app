import { useRouter } from "next/router";
import { Player } from "../components";

const Game = () => {
  const router = useRouter();
  const { playerAmount } = router.query;

  const players = [...Array(parseInt(playerAmount, 5)).keys()].map((i) => (
    <Player key={i}>Player {i + 1}</Player>
  ));

  return <div>{players}</div>;
};

export default Game;
