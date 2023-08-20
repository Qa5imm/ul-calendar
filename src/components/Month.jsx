import React from "react";

const Month = ({ month, color }) => {
  // console.log("given ", color);
  let todaysColor = "";
  const mapper = {
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
    Janunary: 30,
    Feburary: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    "paisay poray, baat khatam": 31,
  };
  const colorChanger = () => {
    if (color === "blue") {
      color = "purple";
    } else {
      color = "blue";
    }
  };
  return (
    <div key={month} className="border-4 border-black  m-6 p-4">
      <h1 className="m-4 text-3xl font-semibold w-100vw text-center">
        {month}
      </h1>

      <div className="grid grid-cols-5 gap-1 ">
        {Array.from({ length: mapper[month] }, (_, i) => {
          // current date
          let today = new Date();
          let currMonth = today.toLocaleString("default", {
            month: "long",
          });

          if (currMonth === month && today.getDate() - 1 === i) {
            todaysColor = "bg-yellow-500";
            colorChanger();
          } else {
            //  in case todaysColor was resetting it to make condition in tailwind false
            if (todaysColor) {
              todaysColor = "";
            }
            if (month === "August") {
              // to make aug white before 12
              if (i >= 11) {
                colorChanger();
              } else {
                color = "";
              }
            } else if (month === "paisay poray, baat khatam") {
              // to make last month white after 12
              if (i <= 11) {
                colorChanger();
              } else {
                color = "";
              }
            } else {
              colorChanger();
            }
          }
          return (
            <span
              key={i}
              className={`border p-2  ${
                todaysColor ? todaysColor : `bg-${color}-700`
              }  text-center `}
            >
              {i + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
