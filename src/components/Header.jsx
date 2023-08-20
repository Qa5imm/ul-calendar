import React from "react";

const Header = () => {
  const banday = {
    Wahab: "bg-blue-700",
    Qasim: "bg-purple-700",
  };
  return (
    <div className="m-8">
      <h1 className="text-4xl font-bold w-100vw text-center ">
        Ultimate Prep Calendar
      </h1>
      {Object.entries(banday).map(([k, v]) => (
        <div className="flex gap-x-4 m-3 " key={k}>
          <p>{k}</p>
          <div className={`border h-6 w-24 ${v}`}></div>
        </div>
      ))}
    </div>
  );
};

export default Header;
