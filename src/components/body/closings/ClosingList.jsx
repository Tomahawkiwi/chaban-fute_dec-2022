import React from "react";
import { fakeTodayDate } from "../../../utils/fakeTodayDate";
import ClosingCard from "./ClosingCard";

function ClosingList({ allClosings, reasonFilter, dateFilter }) {
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
      className="w-11/12 z-50 h-full mt-9 mb-10 relative flex justify-end
    md:mt-14"
    >
      <div className="absolute top-0 left-0 w-20 min-h-full bg-primary-blue-gradient rounded-full shadow-general" />
      <div className="w-[97%] z-50 md:absolute left-0 h-full mt-2 md:h-[380px] md:overflow-y-scroll overflow-x-visible md:w-[730px]">
        {allClosings
          .filter((each) => fakeTodayDate < new Date(each.fields.date_passage))
          .filter((each) => {
            return dateFilter
              ? new Date(dateFilter).toISOString() ===
                  new Date(each.fields.date_passage).toISOString()
              : true;
          })
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
