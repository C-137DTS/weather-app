<template>
  <today-weather :data="weatherInfo" v-if="weatherInfo" />
</template>

<script>
import TodayWeather from "@/components/TodayWeather";
import api from "@/api.js";

export default {
  name: "Home",
  components: { TodayWeather },
  data() {
    return {
      weatherInfo: {
        temp: undefined,
        weatherStateName: undefined,
        img: undefined,
      },
    };
  },

  created() {
    api.getWoeid().then((weather) => {
      this.weatherInfo.temp = weather.the_temp;
      this.weatherInfo.weatherStateName = weather.weather_state_name;
      this.weatherInfo.img = `${weather.weather_state_name.replace(" ", "")}`
    });
  },
};
</script>
