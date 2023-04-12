import { createContext, useState } from "react";

const CalculateContext = createContext();

export const CalculateContextProvider = ({ children }) => {
  const [data, setData] = useState({
    tool: "",
    output: 0,
    minutes: 0,
  });
  const [elv, setElv] = useState(0);
  const [eav, setEav] = useState(0);
  const [points, setPoints] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const calculateELVandEAV = () => {
    const points = 400;
    const pointsEav = 100;
    const elv = data.output * data.output * 2;
    const elvPerHour = (points / elv).toFixed(1);
    const eavPerHour = (pointsEav / elv).toFixed(1);
    setElv(elvPerHour);
    setEav(eavPerHour);
    const usedPoints = (elv * (data.minutes / 60)).toFixed();
    setPoints(usedPoints);
    const percentage = ((usedPoints / 400) * 100).toFixed();
    setPercentage(percentage);
  };

  return (
    <CalculateContext.Provider
      value={{
        data: data,
        setData: setData,
        calculateELVandEAV: calculateELVandEAV,
        elv: elv,
        eav: eav,
        points: points,
        percentage: percentage,
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateContext;
