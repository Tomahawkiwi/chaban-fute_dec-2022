import React, { useEffect, useState } from "react";
import boat from "../../../assets/body/pictos/reasons_closing/boat.svg";
import mainteance from "../../../assets/body/pictos/reasons_closing/maintenance.svg";
import event from "../../../assets/body/pictos/reasons_closing/event.svg";

function TagReason({ reason }) {
  const [reasonClosing, setReasonClosing] = useState({
    type: "",
    picto: "",
  });

  const displayReason = () => {
    if (reason !== "MAINTENANCE" && reason !== "FETE DU VIN") {
      setReasonClosing({
        type: "bateau",
        picto: boat,
      });
    }
    if (reason === "MAINTENANCE") {
      setReasonClosing({
        type: "maintenance",
        picto: mainteance,
      });
    }
    if (reason === "FETE DU VIN") {
      setReasonClosing({
        type: "évènement",
        picto: event,
      });
    }
  };

  useEffect(() => {
    displayReason();
  }, []);

  return (
    <div
      className="w-[75px] h-full rounded-r-full bg-primary-blue-gradient shadow-neumorphism absolute right-0 flex justify-between px-3
    md:w-[100px]"
    >
      <p className="-rotate-90 ml-1 w-fit md:ml-0">raison</p>
      <img
        src={reasonClosing.picto}
        alt={reasonClosing.type}
        className="absolute centered-absolute w-8 ml-2"
      />
      <div className="absolute centered-absolute opacity-0 w-32 h-12 bg-cta-orange rounded-full hover:opacity-100 flex items-center justify-center">
        <p className="align-middle">{reasonClosing.type}</p>
      </div>
    </div>
  );
}

export default TagReason;

<div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
  <p class="text-sm text-white">image hover in text using tailwind css</p>
</div>;
