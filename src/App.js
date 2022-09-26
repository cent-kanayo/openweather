import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [city, setCity] = useState("London");
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0`;

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      const {
        main: { humidity, pressure, temp, temp_max, temp_min, feels_like },
        name,
        sys: { country },
        wind,
        weather,
      } = data;
      setLoading(false);
      setInfo({
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
        feels_like,
        name,
        country,
        wind,
        weather,
      });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(userInput);
    fetchData(url);
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <div className="">
      <Header />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        city={userInput}
      />
      <Main info={info} loading={loading} error={error} />
      <Footer />
    </div>
  );
};

export default App;
