import React from "react";

const Month = ({ month, days }) => {
  return (
    <div key={month} className="border p-4">
      <h1 className="text-lg font-semibold mb-2">{month}</h1>

      <div className="grid grid-cols-5 gap-1 text-gray-200">
        {Array.from({ length: days }, (_, i) => {
          let color = "";

          if (month === "August") {
            if (i >= 11) {
              //index start at 0
              color = i % 2 === 0 ? "bg-red-700" : "bg-green-700";
            }
          } else if (month === "akhri maheena hai ab to parhlo") {
            if (i <= 11) {
              color = i % 2 === 0 ? "bg-red-700" : "bg-green-700";
            }
          } else {
            color = i % 2 === 0 ? "bg-red-700" : "bg-green-700";
          }

          return (
            <span key={i} className={`border p-2  ${color}`} c>
              {i + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
