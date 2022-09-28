import axios from "axios";
import { useEffect, useReducer } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import reducer from "./reducer";

const initialState = {
  loading: false,
  error: false,
  info: {},
  city: "London",
  userInput: "",
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&units=metric&appid=0e4969833248eae95ad1adefa79c63b3`;

  const fetchData = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const { data } = await axios.get(url);
      const {
        main: { humidity, pressure, temp, temp_max, temp_min, feels_like },
        name,
        sys: { country },
        wind,
        weather,
      } = data;
      dispatch({
        type: "DATA_SUCCESS",
        payload: {
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
        },
      });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const handleChange = (e) => {
    dispatch({ type: "UPDATE_USERINPUT", payload: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
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
        city={state.userInput}
      />
      <Main info={state.info} loading={state.loading} error={state.error} />
      <Footer />
    </div>
  );
};

export default App;
