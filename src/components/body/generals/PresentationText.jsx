import React from "react";

function PresentationText() {
  return (
    <div className="flex-x-center">
      <h1
        className="w-fit text-mob-lg font-oswald mt-8
      md:text-desk-lg md:mt-10"
      >
        Ne soyez plus surpris
      </h1>
      <p className="w-88 mt-6 md:mt-8">
        Toutes les fermetures à la circulation à venir du <br />
        <span className="font-extrabold">Pont Chaban Delmas de Bordeaux</span>.
      </p>
    </div>
  );
}

export default PresentationText;
