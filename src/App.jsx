import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ClosingList from "./components/body/closings/ClosingList";
import InputDate from "./components/body/filters/InputDate";
import SelectReason from "./components/body/filters/SelectReason";
import PresentationText from "./components/body/generals/PresentationText";
import ImageAndTimer from "./components/header/ImageAndTimer";
import LogoBlocDesktop from "./components/header/LogoBlocDesktop";
import LogoBlocMobile from "./components/header/LogoBlocMobile";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allClosings, setAllClosings] = useState([]);
  const [reasonFilter, setReasonFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const screenWidth = useWindowSize().width;

  const getAllClosings = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=75"
    );
    setAllClosings(data.records);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllClosings();
  }, []);

  if (isLoading)
    return (
      <div className="h-screen w-screen flex-all-center bg-primary-blue-gradient font-bold text-mob-md md:text-desk-md">
        Chargement
      </div>
    );

  return (
    <div className="h-fit md:h-screen w-screen md:flex">
      {screenWidth < 768 && <LogoBlocMobile />}
      <div className="md:h-screen md:flex md:flex-col md: overflow-hidden">
        <ImageAndTimer allClosings={allClosings} />
      </div>
      <div
        className="flex-x-center bg-primary-blue-gradient h-full min-h-[400px] shadow-general
      md:w-[530px] md:z-30"
      >
        {screenWidth >= 768 && <LogoBlocDesktop />}
        <PresentationText />
        <div className="flex justify-between space-x-5">
          <SelectReason setReasonFilter={setReasonFilter} />
          <InputDate setDateFilter={setDateFilter} dateFilter={dateFilter} />
        </div>
        <ClosingList
          allClosings={allClosings}
          reasonFilter={reasonFilter}
          dateFilter={dateFilter}
        />
      </div>
    </div>
  );
}

export default App;
