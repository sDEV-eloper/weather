import React, { useState } from "react";
import Search from "./components/Search";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { TbTemperature } from "react-icons/tb";

import useWeatherData from "./useWeatherData";

function App() {
  const [cityName, setCityName] = useState("Delhi");
  const weatherData = useWeatherData(cityName);

  const handleSearch = async (cityName) => {
    setCityName(cityName);
  };

  return (
    <>
      <div className="text-gray-600 body-font bg-cover bg-gradient-to-r from-slate-900 to-slate-700 px-16 p-28">
        {weatherData && (
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center  bg-white rounded-xl  ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {weatherData.city}, {weatherData.country}
              </h1>
              <div className="flex  items-center justify-start gap-2 mb-4">
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.iconCode}.png`}
                  alt="Weather Icon"
                  className="rounded-lg bg-gray-200"
                  width="40"
                />
                <p className=" text-lg font-medium text-gray-400 leading-relaxed">
                  {weatherData.description}
                </p>
              </div>
              <div className="flex w-full md:justify-start justify-center items-end mb-8">
                <Search onSearch={handleSearch} />
              </div>
              <div className="flex lg:flex-row md:flex-col gap-4">
                <div className="text-white inline-flex py-3 px-5 rounded-lg bg-blue-500">
                  <span className="flex items-center flex-col leading-none">
                    <span className="flex font-medium mb-4 text-center ">
                      <TbTemperature size={25} />
                      Temperature
                    </span>
                    <span className="text-4xl font-medium">
                      {weatherData.temperatureCelsius}
                      <span className="text-xl">°C</span>
                    </span>
                  </span>
                </div>
                <div className="bg-yellow-300 inline-flex py-3 px-5 rounded-lg">
                  <span className="flex flex-col items-center justify-center ">
                    <span className=" flex font-medium mb-2 text-center"><WiHumidity size={25} />Humidity</span>
                    <span className="text-4xl font-medium">
                      {weatherData.humidity}
                      <span className="text-lg">%</span>
                    </span>
                  </span>
                </div>
                <div className="bg-green-100 inline-flex py-3 px-5 rounded-lg ">
                  <span className="flex flex-col items-center justify-center ">
                    <span className=" flex font-medium mb-2 text-center">
                      <FiWind size={20} />
                      {" "}Wind Speed
                    </span>
                    <span className="text-4xl font-medium">
                      {weatherData.windSpeed}
                      <span className="text-lg">km/hr</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-2xl h-full m-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={weatherData.imageURL}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
