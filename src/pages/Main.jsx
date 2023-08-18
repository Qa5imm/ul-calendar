import React, { useState } from "react";
import Month from "../components/Month";
import Header from "../components/Header";
import Shaskay from "../components/Shaskay";

const Main = () => {
  const [text, setText] = useState("shashkay");
  const month = {
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
    Janunary: 30,
    Feburary: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    "paisay poray, baat khatam": 31,
  };

  return (
    <div className="w-100vw bg-black">
      <button
        className=" p-2 border-2 border-yellow-500 bg-white text-black m-4 mb-0 rounded-lg "
        onClick={() => {
          console.log("here");
          return text === "shashkay" ? setText("calendar") : setText("shashkay");
        }}
      >
        Switch to {text} g
      </button>
      {!(text === "shashkay") ? (
        <Shaskay />
      ) : (
        <div className="p-12">
          <Header />
          {Object.entries(month).map(([k, v]) => {
            return <Month month={k} days={v} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
