import React from "react";

const Header = () => {
  const banday = {
    Qasim : "bg-green-700",
    Wahab: "bg-red-700",
  };
  return (
    <div className="m-12">
      <h1 className="text-2xl font-bold text-white">Ultimate Prep Calendar</h1>
      {Object.entries(banday).map(([k, v]) => (
        <div className="flex gap-x-4 m-3">
          <p>{k}</p>
          <div className={`border h-6 w-24 ${v}`}></div>
        </div>
      ))}
    </div>
  );
};

export default Header;
