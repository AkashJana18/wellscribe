const Grid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-4">
      <div className="col-span-2 row-span-1 flex justify-center items-center bg-indigo-500">item </div>
      <div className="col-span-1 row-span-1 flex justify-center items-center bg-indigo-500">item </div>
      <div className="col-span-1 row-span-1 flex justify-center items-center bg-indigo-500">item </div>
      <div className="col-span-2 row-span-1 flex justify-center items-center bg-indigo-500">item </div>
    </div>
  );
};

export default Grid;
