function getWeather(woeid) {
  const API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`;

  return fetch(API)
    .then((response) => response.json())
    .then((data) => {
      return {
        ...data.consolidated_weather[0],
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

function getLocationWoeid(location) {
  const API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com//api/location/search/?query=${location}`;

  return fetch(API)
    .then((response) => response.json())
    .then((data) => data[0].woeid);
}

export default {
  getWeather,
  getWoeid,
  getLocationWoeid,
};
