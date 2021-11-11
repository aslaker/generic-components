import React, { useState } from "react";
import classNames from "classnames";

interface SimpleComponentProps {
  toggleItems: string[];
  onToggleChange?: (activeToggleName: string) => any;
}

const SimpleComponent: React.FC<SimpleComponentProps> = ({
  toggleItems = [],
  onToggleChange = () => {},
}) => {
  const [toggles, setToggles] = useState(() => {
    return toggleItems.map((item) => ({
      name: item,
      active: false,
    }));
  });

  const onToggleClick = (toggleName: string) => {
    const newTogglesState = toggles.map((toggle) => {
      if (toggle.name === toggleName) {
        toggle.active = true;
        onToggleChange(toggle.name);
      } else {
        toggle.active = false;
      }
      return toggle;
    });
    setToggles(newTogglesState);
  };

  return (
    <div className="flex-center bg-gray-200">
      <div className="flex justify-around items-center bg-white rounded-full w-96">
        {toggles.map((item) => (
          <div
            className={classNames("flex-center", "flex-1", "p-5", {
              "rounded-full": item.active,
              "bg-blue-800": item.active,
              "text-white": item.active,
            })}
            onClick={() => onToggleClick(item.name)}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleComponent;
