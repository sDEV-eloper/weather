import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { TbTemperature } from "react-icons/tb";
import { weatherConditions } from "./constant";
import { useEffect, useState } from "react";

function App() {
  const [cityName, setCityName] = useState("Delhi");
  const [city, setCity] = useState("");
  const [temperatureCelsius, setTemperatureCelsius] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [country, setCounty] = useState("");
  const [iconCode, setIconCode] = useState();
  const [description, setDescription] = useState();
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    fetchWeatherDataByCity(cityName);
  }, [city]);

  async function fetchWeatherDataByCity(cityName) {
    try {
      const apiKey = "fe5e19968b594460c23f65cc6456e885";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      const celsius = data.main.temp - 273.15;

      setTemperatureCelsius(celsius.toFixed(2));
      setHumidity(data.main.humidity);
      setWindSpeed(Math.round(data.wind.speed * 3.6));
      setCounty(data.sys.country);
      setCity(data.name);
      setIconCode(data.weather[0].icon);
      setDescription(data.weather[0].description.toUpperCase());
      setImageURL(getImageUrlByCode(iconCode));

      console.log("img", getImageUrlByCode(iconCode));
    } catch (error) {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    }
  }
  const handleSearch = async () => {
    await fetchWeatherDataByCity(cityName);
  };

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    handleSearch();
  };



// Filter method to find the image URL for a specific condition code
function getImageUrlByCode(conditionCode) {
  const condition = weatherConditions.find(item => item.code === conditionCode);
  return condition ? condition.imageUrl : null;
}






  return (
    <>
      <div className="text-gray-600 body-font bg-cover  bg-gradient-to-r from-slate-900 to-slate-700 px-16  p-28">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center  bg-white rounded-xl  ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {city}, {country}
            </h1>
            <div className="flex  items-center justify-start gap-2 mb-4">
              <img
                src={`http://openweathermap.org/img/w/${iconCode}.png`}
                alt="Weather Icon"
                className="rounded-lg bg-gray-200"
                width="40"
              />
              <p className=" text-lg font-medium text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex w-full md:justify-start justify-center items-end mb-8">
              {/* <Search/> */}
              <form
                onSubmit={handleSubmit}
                className="flex w-full md:justify-start justify-center items-end"
              >
                <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                  <input
                    type="text"
                    placeholder="City Name"
                    onChange={handleInputChange}
                    value={cityName}
                    name="hero-field"
                    className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="flex lg:flex-row md:flex-col gap-4">
              
              
              <div className="text-white inline-flex py-3 px-5 rounded-lg bg-blue-500">
                <span className="flex items-center flex-col leading-none">
                  <span className="flex font-medium mb-4 text-center ">
                <TbTemperature size={25} />
                    Temperature
                  </span>
                  <span className="text-4xl font-medium">
                    {temperatureCelsius}
                    <span className="text-xl">°C</span>
                  </span>
                </span>
              </div>

              <div className="bg-yellow-300 inline-flex py-3 px-5 rounded-lg i">
                
                <span className="flex flex-col items-center justify-center ">
                  <span className=" flex font-medium mb-2 text-center"><WiHumidity size={25} />Humidity</span>
                  <span className="text-4xl font-medium">
                    {humidity}
                    <span className="text-lg">%</span>
                  </span>
                </span>
              </div>
              <div className="bg-green-100 inline-flex py-3 px-5 rounded-lg ">
                <span className="flex flex-col items-center justify-center ">
                  <span className=" flex font-medium mb-2 text-center">
                <FiWind  size={20} />
                    {" "}Wind Speed
                  </span>
                  <span className="text-4xl font-medium">
                    {windSpeed}
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
              src={imageURL}
            />
          </div>
        
        </div>
      </div>
    </>
  );
}

export default App;
