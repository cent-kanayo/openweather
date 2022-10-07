import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

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
      <Link to="/">Welcome to The Shop App</Link>
      <h6>{time}</h6>
      <ul className="flex gap-2">
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
      </ul>
      <h6>{totalAmount}</h6>
    </div>
  );
};

export default Header;
