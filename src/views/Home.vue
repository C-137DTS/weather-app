<template>
  <div class="app" v-if="loading === false">
    <today-weather :data="weatherInfo" />
    <main>
      <h2 class="title">Today's Highlights</h2>
      <div class="today-highlights">
        <wind-status :wind-speed="weatherInfo.wind_speed" />
        <humidity :humidity="weatherInfo.humidity" />
        <basic-card
          name="Visibility"
          :number="weatherInfo.visibility"
          magnitude="miles"
        />
        <basic-card
          name="Air Pressure"
          :number="weatherInfo.air_pressure"
          magnitude="mb"
        />
      </div>
      <px-footer />
    </main>
  </div>
</template>

<script>
import TodayWeather from "@/components/TodayWeather";
import WindStatus from "@/components/WindStatus";
import Humidity from "@/components/Humidity";
import PxFooter from "@/components/PxFooter";
import BasicCard from "@/components/BasicCard";
import api from "@/api.js";

export default {
  name: "Home",
  components: { TodayWeather, WindStatus, Humidity, PxFooter, BasicCard },
  data() {
    return {
      loading: true,
      weatherInfo: {},
    };
  },

  methods: {
    success(pos) {
      const crd = pos.coords;
      api
        .getWoeid(crd.latitude, crd.longitude)
        .then((woeid) => api.getWeather(woeid))
        .then((currentWeather) => (this.weatherInfo = { ...currentWeather }));
    },
    error(err) {
      console.warn(err);
    },
  },

  created() {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
    this.loading = false;
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  width: 80%;
  height: 100vh;
  background-color: #100e1d;
  overflow-y: scroll;
}
.app {
  width: 100%;
  height: auto;
  display: flex;
}
.today-highlights {
  width: 70%;
  margin: 0 auto 20px auto;
  display: grid;
  grid-template-columns: repeat(2, 329px);
  grid-template-rows: repeat(2, auto);
  grid-gap: 40px 100px;
}
.title {
  font-size: 2.2rem;
  color: #e7e7eb;
  margin: 20px 0 0 160px;
}
</style>
