import React from "react";

function CoupleTimepart({ value, timepart }) {
  const changeSignValue = () => {
    if (value < 0) {
      return (value = value * -1);
    }
    if (value === 0) {
      return (value = "0");
    }
  };

  return (
    <div className="flex items-end space-x-1">
      <p className="text-mob-xl font-oswald md:text-desk-xl">
        {changeSignValue(value)}
      </p>
      <p className="md:text-desk-md">{timepart}</p>
    </div>
  );
}

export default CoupleTimepart;
