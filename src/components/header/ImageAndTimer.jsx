import React, { useEffect, useState } from "react";
import bgImage from "../../assets/body/backgrounds/chaban-bridge_ref_john-cameron-9AXyLVpUyKU-unsplash.jpg";
import { fakeTodayDate } from "../../utils/fakeTodayDate";
import CoupleTimepart from "./CoupleTimepart";
import { DateTime } from "luxon";

const todayDate = DateTime.fromJSDate(fakeTodayDate);

function ImageAndTimer({ allClosings }) {
  const [today, setToday] = useState(todayDate);
  const [difference, setDifference] = useState(todayDate);

  const closestClosing = allClosings.filter(
    (each) => fakeTodayDate < new Date(each.fields.date_passage)
  )[0].fields;

  const {
    fermeture_a_la_circulation: timeNextClosing,
    date_passage: dateNextClosing,
  } = closestClosing;

  const getTimeNextClosing = () => {
    const [hours, minutes] = timeNextClosing.split(":");
    const [years, months, days] = dateNextClosing.split("-");
    return new Date(years, months - 1, days, hours, minutes);
  };

  useEffect(() => {
    setTimeout(() => {
      setToday(today.plus({ second: 1 }));
      const date = today.diff(DateTime.fromJSDate(getTimeNextClosing()), [
        "years",
        "months",
        "days",
        "hours",
        "minutes",
        "seconds",
      ]);
      setDifference(date.toObject());
    }, 1000);
  }, [today]);

  return (
    <div
      className="relative z-10 w-full overflow-hidden h-80 sm:h-96
    md:h-screen md:absolute"
    >
      <img
        src={bgImage}
        alt="Pont de Chaban Delmas à Bordeaux"
        className="absolute min-w-[500px] max-h-full left-0 top-0
        sm:w-full sm:max-h-fit sm:min-h-full
        md:min-w-[1120px] md:max-w-[1300px] md:h-fit md:z-30 md:left-[400px] md:bottom-0"
      />
      <p className="absolute right-32 top-4 z-40 text-mob-sm md:left-[600px] md:right-auto md:top-8 md:text-desk-md md:text-start">
        Prochaine fermeture dans
      </p>

      <div className="absolute h-fit right-3 top-3 z-40 md:left-[600px] md:top-20">
        <CoupleTimepart value={difference.days} timepart={"jours"} />
        <CoupleTimepart value={difference.hours} timepart={"heures"} />
        <CoupleTimepart value={difference.minutes} timepart={"minutes"} />
      </div>
    </div>
  );
}

export default ImageAndTimer;
