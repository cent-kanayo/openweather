import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Header = () => {
  const { totalAmount } = useGlobalContext();

  const currentTime = new Date().toLocaleString();
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    const time = setInterval(() => {
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(time);
  });
  return (
    <div className="mx-auto flex justify-between px-20 bg-slate-900 text-white py-4 mb-8">
      <h1>Welcome to The Shop App</h1>
      <h6>{time}</h6>
      <h6>{totalAmount}</h6>
    </div>
  );
};

export default Header;
