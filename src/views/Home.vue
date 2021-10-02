<template>
  <div class="app">
    <browser
      :left="openBrowser"
      :history="history"
      @close="toogleBrowser"
      @search="searchLocation"
    />
    <today-weather :weather="weatherInfo" v-on:open="toogleBrowser" />
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
import Browser from "@/components/Browser";
import api from "@/api.js";

export default {
  name: "Home",
  components: {
    TodayWeather,
    WindStatus,
    Humidity,
    PxFooter,
    BasicCard,
    Browser,
  },
  data() {
    return {
      loading: true,
      weatherInfo: {},
      openBrowser: false,
      history: [],
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
    toogleBrowser() {
      this.openBrowser = !this.openBrowser;
    },
    searchLocation(query) {
      api
        .getLocationWoeid(query.toLowerCase())
        .then((woeid) => api.getWeather(woeid))
        .then((currentWeather) => {
          this.toogleBrowser();
          this.weatherInfo = { ...currentWeather };
          if (!this.history.includes(query)) {
            this.history.push(query);
          }
        });
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
