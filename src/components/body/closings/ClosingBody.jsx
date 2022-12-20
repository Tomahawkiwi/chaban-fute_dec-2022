import React from "react";
import arrow from "../../../assets/body/pictos/generals/arrow-to_blue.svg";

function ClosingBody({ closingDetails }) {
  const {
    date_passage,
    fermeture_a_la_circulation,
    re_ouverture_a_la_circulation,
  } = closingDetails;

  const formattedDateClosing = new Date(date_passage).toLocaleDateString("fr");

  return (
    <div
      className="h-14 text-custom-blue
    md:flex md:space-x-8"
    >
      <div
        className="flex space-x-2 items-baseline
      md:items-center"
      >
        <p className="text-mob-xs font-semibold md:text-desk-sm">de</p>
        <p className="text-mob-md font-semibold md:text-desk-md">
          {fermeture_a_la_circulation}
        </p>
        <p className="text-mob-xs font-semibold md:text-desk-sm">
          le {formattedDateClosing}
        </p>
      </div>
      <div
        className="flex space-x-2 items-baseline mt-2
      md:mt-0 md:items-center"
      >
        <img src={arrow} alt="arrow to" className="w-3 md:w-4 md:mr-6" />
        <p className="text-mob-md font-semibold md:text-desk-md">
          {re_ouverture_a_la_circulation}
        </p>
        <p className="text-mob-xs font-semibold md:text-desk-sm">
          le {formattedDateClosing}
        </p>
      </div>
    </div>
  );
}

export default ClosingBody;
