import React from "react";
import bgImage from "../../assets/body/backgrounds/chaban-bridge_ref_john-cameron-9AXyLVpUyKU-unsplash.jpg";
import CoupleTimepart from "./CoupleTimepart";

function ImageAndTimer() {
  return (
    <div className="relative w-full overflow-hidden h-80 sm:h-96">
      <img
        src={bgImage}
        alt="Pont de Chaban Delmas à Bordeaux"
        className="absolute min-w-[500px] max-h-full right-0 top-0 sm:w-full sm:max-h-fit sm:min-h-full"
      />
      <p className="absolute right-32 top-4 text-mob-sm">
        Prochaine fermeture dans
      </p>
      <div className="absolute h-fit right-3 top-3">
        <CoupleTimepart value={"00"} timepart={"jours"} />
        <CoupleTimepart value={"00"} timepart={"heures"} />
        <CoupleTimepart value={"00"} timepart={"minutes"} />
      </div>
    </div>
  );
}

export default ImageAndTimer;
