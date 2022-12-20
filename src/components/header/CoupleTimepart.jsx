import React from "react";

function CoupleTimepart({ value, timepart }) {
  return (
    <div className="flex items-end space-x-1">
      <p className="text-mob-xl font-oswald">{value}</p>
      <p>{timepart}</p>
    </div>
  );
}

export default CoupleTimepart;
