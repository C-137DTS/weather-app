<template>
  <div>
    <today-weather :data="weatherInfo" v-if="weatherInfo" />
    <wind-status :wind-speed="weatherInfo.windSpeed" />
  </div>
</template>

<script>
import TodayWeather from "@/components/TodayWeather";
import WindStatus from "@/components/WindStatus";
import api from "@/api.js";

export default {
  name: "Home",
  components: { TodayWeather, WindStatus },
  data() {
    return {
      weatherInfo: {
        temp: undefined,
        weatherStateName: undefined,
        img: undefined,
        windSpeed: undefined,
      },
    };
  },

  created() {
    api.getWoeid().then((weather) => {
      this.weatherInfo.temp = weather.the_temp;
      this.weatherInfo.weatherStateName = weather.weather_state_name;
      this.weatherInfo.img = `${weather.weather_state_name.replace(" ", "")}`;
      this.weatherInfo.windSpeed = weather.wind_speed;
    });
  },
};
</script>
