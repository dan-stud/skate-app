import Router from "next/router";

const PlayerSelect = () => {
  const handleClick = (playerAmount: number) => {
    Router.push({
      pathname: "/game",
      query: { playerAmount },
    });
  };

  return (
    <div className="h-screen bg-gray-100 to-stone-200 grid grid-cols-6 grid-rows-5 gap-5 bg-initial">
      <div className="font-extrabold text-center text-6xl col-span-7 row-start-2   text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-400">
        PLAYAZ:
      </div>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-dafoe font-bold text-xl py-6 px-2 border-2 border-gray-400 rounded shadow-xl drop-shadow-lg w-16 h-24 font-sans col-start-2 row-start-3 flex items-center justify-center"
        onClick={(e) => handleClick(1)}
      >
        1
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-dafoe font-bold text-xl py-6 px-2 border-2 border-gray-400 rounded shadow-xl drop-shadow-lg col-start-4 w-16 h-24 font-sans row-start-3 flex items-center justify-center"
        onClick={(e) => handleClick(2)}
      >
        2
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-dafoe font-bold text-xl py-6 px-2 border-2 border-gray-400 rounded shadow-xl drop-shadow-lg col-start-6 w-16 h-24 font-sans row-start-3 flex items-center justify-center"
        onClick={(e) => handleClick(3)}
      >
        3
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-dafoe font-bold text-xl py-6 px-2 border-2 border-gray-400 rounded shadow-xl drop-shadow-lg col-start-3 w-16 h-24 font-sans row-start-4 flex items-center justify-center"
        onClick={(e) => handleClick(4)}
      >
        4
      </button>
      <button
        className="bg-gradient-to-br from-purple-100 to-white text-gray-800 font-dafoe font-bold text-xl py-6 px-2 border-2 border-gray-400 rounded shadow-xl drop-shadow-lg col-start-5 w-16 h-24 font-sans row-start-4 flex items-center justify-center"
        onClick={(e) => handleClick(5)}
      >
        5
      </button>
    </div>
  );
};

export default PlayerSelect;
