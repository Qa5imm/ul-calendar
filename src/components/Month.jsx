import React from "react";

const Month = ({ month, days }) => {
  const mapper = {
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
    Janunary: 1,
    Feburary: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    "paisay poray, baat khatam": 8,
  };
  return (
    <div key={month} className="border-4 border-black  m-6 p-4">
      <h1 className="m-4 text-3xl font-semibold w-100vw text-center">
        {month}
      </h1>

      <div className="grid grid-cols-5 gap-1 ">
        {Array.from({ length: days }, (_, i) => {
          let color = "";
          // current date
          let today = new Date();
          if (
            today.getMonth() + 1 === mapper[month] &&
            today.getDate() - 1 === i
          ) {
            color = "bg-yellow-500";
          } else {
            if (month === "August") {
              if (i >= 11) {
                //index start at 0
                color = i % 2 === 0 ? "bg-blue-700" : "bg-purple-700";
              }
            } else if (month === "paisay poray, baat khatam") {
              if (i <= 11) {
                color = i % 2 === 0 ? "bg-blue-700" : "bg-purple-700";
              }
            } else {
              color = i % 2 === 0 ? "bg-blue-700" : "bg-purple-700";
            }
          }

          return (
            <span key={i} className={`border p-2  ${color}  text-center `} >
              {i + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
