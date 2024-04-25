import { useState, useEffect } from "react";
import { weatherConditions } from "./constant";

function useWeatherData(cityName) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const celsius = data.main.temp - 273.15;
        const weatherInfo = {
          city: data.name,
          country: data.sys.country,
          temperatureCelsius: celsius.toFixed(2),
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6),
          iconCode: data.weather[0].icon,
          description: data.weather[0].description.toUpperCase(),
          imageURL: getImageUrlByCode(data.weather[0].icon)
        };
        setWeatherData(weatherInfo);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchWeatherData();

    // Cleanup function
    return () => {
      setWeatherData(null);
    };
  }, [cityName]);

  // Filter method to find the image URL for a specific condition code
  function getImageUrlByCode(conditionCode) {
    const condition = weatherConditions.find(item => item.code === conditionCode);
    return condition ? condition.imageUrl : null;
  }

  return weatherData;
}

export default useWeatherData;
