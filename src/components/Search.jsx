import { useState } from "react";

function Search({ onSearch }) {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(cityName);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full justify-start items-end">
      <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
        <input
          type="text"
          placeholder="City Name"
          onChange={(event) => setCityName(event.target.value)}
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
  );
}

export default Search;
