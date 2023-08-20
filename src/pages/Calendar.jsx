import Month from "../components/Month";
import Header from "../components/Header";

const Calendar = () => {
  const month = [
    {
      month: "August",
      color: "blue",
    },
    {
      month: "September",
      color: "purple",
    },
    {
      month: "October",
      color: "purple",
    },
    {
      month: "November",
      color: "blue",
    },
    {
      month: "December",
      color: "blue",
    },
    {
      month: "Janunary",
      color: "purple",
    },
    {
      month: "Feburary",
      color: "purple",
    },
    {
      month: "March",
      color: "blue",
    },
    {
      month: "April",
      color: "purple",
    },
    {
      month: "May",
      color: "purple",
    },
    {
      month: "June",
      color: "blue",
    },
    {
      month: "July",
      color: "blue",
    },
    {
      month: "paisay poray, baat khatam",
      color: "purple",
    },
  ];

  return (
    <div className="p-3 md:p-12">
      <Header />
      {month.map((elem, key) => {
        return <Month month={elem.month} key={key} color={elem.color} />;
      })}
    </div>
  );
};

export default Calendar;
