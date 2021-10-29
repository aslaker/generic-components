import React from "react";

interface SimpleComponentProps {
  toggleItems: string[];
}

const SimpleComponent: React.FC<SimpleComponentProps> = ({ toggleItems }) => {
  return (
    <div className="flex-center bg-gray-200">
      <div className="flex justify-around items-center bg-white rounded-full w-96">
        {toggleItems.map((item) => (
          <div className="flex-center flex-1 p-5">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleComponent;
