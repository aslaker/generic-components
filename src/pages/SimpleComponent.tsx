import React from "react";

const SimpleComponent = () => {
  return (
    <div className="flex-center bg-gray-200">
      <div className="flex justify-around items-center bg-white rounded-full w-96">
        <div className="flex-center flex-1 p-5 bg-blue-800 rounded-full text-white">
          <span>Commissions</span>
        </div>
        <div className="flex-center flex-1 p-5">
          <span>Reserves</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleComponent;
