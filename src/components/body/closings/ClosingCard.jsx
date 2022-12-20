import React from "react";
import TagReason from "./TagReason";
import forbidden from "../../../assets/body/pictos/generals/forbidden.svg";
import ClosingBody from "./ClosingBody";

function ClosingCard({ closingDetails }) {
  const { bateau } = closingDetails;

  return (
    <div
      className="w-full h-28 rounded-full bg-card-lightgrey-backNeumorphism flex-all-center shadow-general mb-5 
    md:h-20 md:w-[730px]"
    >
      <div
        className="h-20 w-11/12 pl-16 pr-20 rounded-full bg-card-lightgrey-frontNeumorphism shadow-neumorphism relative flex items-center justify-center
      md:h-14 md:w-[700px]"
      >
        <img
          src={forbidden}
          alt="forbidden to drive on the bridge"
          className="absolute top-1/2 transform -translate-y-1/2 left-4 w-9"
        />
        <ClosingBody closingDetails={closingDetails} />
        <TagReason reason={bateau} />
      </div>
    </div>
  );
}

export default ClosingCard;
