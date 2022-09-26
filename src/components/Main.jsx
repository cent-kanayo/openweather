import React from "react";

const Main = ({ loading, error, info }) => {
  //   const time = new Date.getT.toLocaleDateString();
  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <h1>Oops! We Couldn't find the city you are looking for</h1>;
  const {
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
  } = info;
  console.log(weather);
  return (
    <main className="main px-20 py-4">
      <article>
        <h4>
          {name}, {country}
        </h4>
        <div>
          {weather?.map((it) => (
            <article key={it.id}>
              <h3>
                Feels Like{feels_like}
                <sup>0</sup>C. {it.main}
                {it.description}.
              </h3>
              <img
                src={`http://openweathermap.org/img/wn/${it.icon}@2x.png`}
                alt=""
              />
            </article>
          ))}
        </div>

        <p>
          Temperature {temp}
          <sup>0</sup>C
        </p>
        <p>Humidity {humidity}</p>
        <p>Min Temperature {temp_min}</p>
        <p>Max Temperature {temp_max}</p>
        <p>Pressure {pressure}</p>
        <p>Wind Speed {wind?.speed}</p>
        <p>Wind Deg {wind?.deg}</p>
      </article>
    </main>
  );
};

export default Main;
