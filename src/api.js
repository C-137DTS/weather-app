function getWoeid() {
  const API =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/";

  return fetch(API)
    .then((response) => response.json())
    .then((data) => data.consolidated_weather[0]);
}

// const getWeather = async (woeid) => {
//   const API =
//     "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";
//   try {
//     const response = await fetch(`${API}${woeid}`);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error("Fetch error", err);
//   }
// };

export default {
  getWoeid,
};
