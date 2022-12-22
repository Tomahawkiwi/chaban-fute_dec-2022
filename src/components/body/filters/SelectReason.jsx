import React from "react";
import arrow from "../../../assets/body/pictos/generals/arrow-to_white.svg";

function SelectReason({ setReasonFilter }) {
  return (
    <form className="mt-6 relative md:mt-14">
      <select
        name="reasons"
        id="reasons-select"
        onChange={(e) => setReasonFilter(e.target.value)}
        className="appearance-none focus:outline-none bg-cta-orange py-3 pl-4 pr-8 rounded-full shadow-cta
        text-mob-md font-oswald font-bold
        md:hover:scale-105 md:hover:bg-header-white md:hover:text-custom-orange md:text-desk-md"
      >
        <option value="">Raison</option>
        <option value="boat">Bateau</option>
        <option value="event">Évènement</option>
        <option value="maintenance">Maintenance</option>
      </select>
      <img
        src={arrow}
        alt="arrow"
        className="absolute right-3 top-3 rotate-90 md:top-4"
      />
    </form>
  );
}

export default SelectReason;
