import Month from "../components/Month";
import Header from "../components/Header";

const Main = () => {
  const month = {
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

  return (
    <div className="p-3 md:p-12">
      <Header />
      {Object.entries(month).map(([k, v]) => {
        return <Month month={k} days={v} />;
      })}
    </div>
  );
};

export default Main;
