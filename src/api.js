function getWeather(woeid) {
  const API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`;

  return fetch(API)
    .then((response) => response.json())
    .then((data) => {
      return {
        ...data.consolidated_weather[0],
        img: data.consolidated_weather[0].weather_state_name.replace(" ", ""),
        location: data.title,
      };
    });
}

function getWoeid(latitude, longitude) {
  const API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`;

  return fetch(API)
    .then((response) => response.json())
    .then((data) => data[0].woeid);
}

export default {
  getWeather,
  getWoeid,
};
