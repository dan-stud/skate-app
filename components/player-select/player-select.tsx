import Router from "next/router";

const PlayerSelect = () => {
  const handleClick = (playerAmount: number) => {
    Router.push({
      pathname: "/game",
      query: { playerAmount },
    });
  };

  return (
    <div className="h-screen bg-gray-100 to-stone-200 px-8 pt-40 grid grid-cols-5 grid-rows-5 gap-5 bg-initial">
      <div></div>
      <div className="font-painterz font-extrabold text-center text-5xl col-span-3  text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-400">
        PLAYAZ:
      </div>
      <button
        className=" bg-gradient-to-br from-purple-100 to-white text-gray-800 font-creepster font-semibold text-xl py-8 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg row-start-2 col-start-2 w-16 h-24"
        onClick={(e) => handleClick(1)}
      >
        1
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-creepster font-semibold text-xl py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-4 w-16 h-24"
        onClick={(e) => handleClick(2)}
      >
        2
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-creepster font-semibold text-xl py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-1 w-16 h-24 "
        onClick={(e) => handleClick(3)}
      >
        3
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-creepster font-semibold text-xl py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-3 w-16 h-24 "
        onClick={(e) => handleClick(4)}
      >
        4
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-creepster font-semibold text-xl py-2 px-3 border border-gray-400 rounded shadow-xl drop-shadow-lg col-start-5 w-16 h-24"
        onClick={(e) => handleClick(5)}
      >
        5
      </button>
    </div>
  );
};

export default PlayerSelect;
