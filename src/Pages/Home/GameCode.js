const GameCode = () => {
  return (
    <div className="flex justify-center  items-center w-2/3 pl-5 h-14">
      <input
        type="text"
        placeholder="Enter Game Code Here "
        className="w-2/5 h-full text-center mt-3 rounded-lg shadow-slate-700 shadow-md"
      />
      <h1 className="flex justify-center items-center text-2xl m-4 w-1/5 h-full bg-yellow-300 rounded-lg">
        Game Code
      </h1>
    </div>
  );
};
export default GameCode;
