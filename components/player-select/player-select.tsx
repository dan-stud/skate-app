import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

const PlayerSelect = () => {
  const handleClick = (playerAmount: number) => {
    Router.push({
      pathname: "/game",
      query: { playerAmount },
    });
  };

  return (
    <div className="h-screen bg-gray-100 to-stone-200 px-8 pt-40 grid grid-cols-5 grid-rows-5 gap-5">
      <div></div>
      <div className="font-mono text-black text-center text-3xl col-span-3">
        Amount of players:
      </div>
      <button
        className=" bg-gradient-to-br from-stone-500 to-white text-gray-800 font-semibold py-8 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg row-start-2 col-start-2 w-16 h-24"
        onClick={(e) => handleClick(1)}
      >
        1
      </button>
      <button
        className="bg-gradient-to-br from-stone-500 to-white text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-4 w-16 h-24"
        onClick={(e) => handleClick(2)}
      >
        2
      </button>
      <button
        className="bg-gradient-to-br from-stone-500 to-white text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-1 w-16 h-24 "
        onClick={(e) => handleClick(3)}
      >
        3
      </button>
      <button
        className="bg-gradient-to-br from-stone-500 to-white text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-3 w-16 h-24 "
        onClick={(e) => handleClick(4)}
      >
        4
      </button>
      <button
        className="bg-gradient-to-br from-stone-500 to-white text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-5 w-16 h-24"
        onClick={(e) => handleClick(5)}
      >
        5
      </button>
    </div>
  );
};

export default PlayerSelect;
