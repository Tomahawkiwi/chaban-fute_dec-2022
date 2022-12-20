import React from "react";
import ClosingCard from "./ClosingCard";

function ClosingList({ allClosings, fakeTodayDate, reasonFilter }) {
  const getfilterReason = (each) => {
    if (reasonFilter === "") {
      return "";
    }
    if (
      each.fields.bateau !== "MAINTENANCE" &&
      each.fields.bateau !== "FETE DU VIN"
    ) {
      return "boat";
    }
    if (each.fields.bateau === "MAINTENANCE") {
      return "maintenance";
    }
    if (each.fields.bateau === "FETE DU VIN") {
      return "event";
    }
  };

  return (
    <div
      className="w-11/12 h-full mt-9 mb-10 relative flex justify-end
    md:mt-14"
    >
      <div className="absolute top-0 left-0 w-20 min-h-full bg-primary-blue-gradient rounded-full shadow-general" />
      <div className="w-[97%] h-full relative mt-2">
        {allClosings
          //   .filter((each) => {
          //     const dateToVerify = new Date(
          //       each.fields.date_passage
          //     ).toLocaleDateString("fr");
          //     dateToVerify >= fakeTodayDate;
          //     console.log(dateToVerify, fakeTodayDate);
          //   })
          .filter((each) => reasonFilter === getfilterReason(each))
          .map((closing) => (
            <ClosingCard
              key={closing.recordid}
              closingDetails={closing.fields}
            />
          ))}
      </div>
    </div>
  );
}

export default ClosingList;
