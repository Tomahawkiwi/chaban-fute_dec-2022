import React, { useState } from "react";

function InputDate() {
  return (
    <form>
      <input
        name="date"
        id="dateInput"
        type="date"
        value=""
        className="mt-6 appearance-none focus:outline-none bg-cta-orange py-3 px-4 rounded-full shadow-cta
          text-mob-md font-oswald font-bold
          md:hover:scale-105 md:hover:bg-header-white md:hover:text-custom-orange md:mt-14 md:text-desk-md"
      />
    </form>
  );
}

export default InputDate;
