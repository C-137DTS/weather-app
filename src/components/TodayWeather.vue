<template>
  <section class="highlights">
    <div class="actions">
      <button @click="$emit('open')">Search for places</button>
      <button @click="$emit('currentWeather')" class="current-weather">
        <img class="target" src="assets/target.svg" alt="target" />
      </button>
    </div>
    <div class="highlights-details">
      <img
        :src="`assets/${weather.consolidated_weather[0].weather_state_name.replace(
          ' ',
          ''
        )}.png`"
        alt="weather image"
        class="weather-img"
      />
      <p class="white temp">
        {{ weather.consolidated_weather[0].the_temp.toFixed(0)
        }}<span class="magnitude">{{ celsius ? "°C" : "°F" }}</span>
      </p>
      <h3 class="small-text">
        {{ weather.consolidated_weather[0].weather_state_name }}
      </h3>
      <p class="small-text">
        Today • {{ weather.consolidated_weather[0].applicable_date | date }}
      </p>
      <p class="small-text" id="location">
        {{ weather.title }}
        <span class="location-logo"></span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TodayWeather",
  props: {
    weather: {
      type: Object,
      default: () => {},
    },
    celsius: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  font-family: raleway;
}
.small-text {
  font-size: 1.4rem;
  color: #a09fb1;
  margin-top: 70px;
}
.white {
  color: #e7e7eb;
}

.highlights {
  width: 100%;
  height: 100vh;
  background-color: #1e213a;
  position: relative;
}
.highlights-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weather-img {
  width: 100px;
  height: 115px;
  margin-top: 54px;
}
.temp {
  margin-top: 50px;
  font-size: 5.8rem;
}
.magnitude {
  font-size: 2rem;
  color: #a09fb1;
}
#location {
  font-weight: 600;
  margin-top: 12px;
}
.location-logo {
  background-size: cover;
  display: inline-block;
  width: 1rem;
  height: 1rem;
}
button {
  width: 120px;
  height: 30px;
  background-color: #6e707a;
  border: 0px;
  cursor: pointer;
  padding: 5px;
  color: #e7e7eb;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 80%;
  margin: 0 auto;
  padding: 48px 0 0 0;
}
.current-weather {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}
.target {
  width: 20px;
  height: 20px;
}
</style>
