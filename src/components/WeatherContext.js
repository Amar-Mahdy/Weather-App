import { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const KEY = "ff7e9b79da159cf2601abe1fbd29d6e0"
  const URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${KEY}`;

  const getWeather = async (e) => {
    setIsLoading(true);

    try {
      const response = await fetch(URL);
      const weather = await response.json();
      if (response.status !== 200 || !response.ok) {
        setErrMsg(weather.message);
        throw new Error(weather.message);
      } else {
        setIsLoading(true);

        setData([...data, weather]);
        setErrMsg(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setCityName("");
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        setData,
        cityName,
        setCityName,
        getWeather,
        isLoading,
        setIsLoading,
        errMsg,
        setErrMsg,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
