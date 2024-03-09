import React from "react";

const TimeCounter = () => {
  return (
    <div className="relative w-full p-2 py-4 rounded-xl bg-white dark:bg-black flex items-center justify-evenly gap-2 transition-colors duration-300">
      <div className="block text-center">
        <h5 className="text-xl font-bold mb-1">00</h5>
        <p className="text-sm uppercase">D</p>
      </div>
      <div className="block text-center">
        <h5 className="text-xl font-bold mb-1">00</h5>
        <p className="text-sm uppercase">H</p>
      </div>
      <div className="block text-center">
        <h5 className="text-xl font-bold mb-1">00</h5>
        <p className="text-sm uppercase">M</p>
      </div>
      <div className="block text-center">
        <h5 className="text-xl font-bold mb-1">00</h5>
        <p className="text-sm uppercase">S</p>
      </div>
    </div>
  );
};

export default TimeCounter;
