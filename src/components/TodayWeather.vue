<template>
  <section class="highlights">
    <button @click="$emit('open')">Search for places</button>
    <div class="highlights-details">
      <img
        :src="`assets/${weather.weather_state_name.replace(' ', '')}.png`"
        alt="weather image"
        class="weather-img"
      />
      <p class="white temp">
        {{ weather.the_temp.toFixed(0) }}<span class="magnitude">°C</span>
      </p>
      <h3 class="small-text">
        {{ weather.weather_state_name }}
      </h3>
      <p class="small-text">Today • {{ weather.applicable_date | date }}</p>
      <p class="small-text" id="location">
        {{ weather.location }}
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
  margin: 42px 0 0 42px;
  cursor: pointer;
  padding: 5px;
  color: #e7e7eb;
}
</style>
