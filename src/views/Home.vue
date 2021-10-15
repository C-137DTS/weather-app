<template>
  <div class="app" :style="loading ? 'height: 100vh' : 'height: auto'">
    <dot-loader
      :color="'#e7e7eb'"
      :size="100"
      :loading="loading"
      :margin="'0 8px'"
    >
    </dot-loader>
    <div class="todayWeather-container" v-if="loading === false">
      <browser
        :left="openBrowser"
        :history="history"
        @close="toogleBrowser"
        @search="searchLocation"
      />
      <today-weather
        :weather="weatherInfo"
        :celsius="celsius"
        v-on:open="toogleBrowser"
        @currentWeather="searchCurrentWeather"
      />
    </div>
    <main v-if="loading === false">
      <degrees
        :celsius="celsius"
        @fahrenheit="convertToFahrenheit"
        @celsius="convertToCelsius"
        class="degrees"
      />
      <div class="future-weather">
        <weather-card
          v-for="(day, i) in weatherInfo.consolidated_weather.slice(1)"
          :min="day.min_temp"
          :max="day.max_temp"
          :img="day.weather_state_name"
          :key="day.id"
          :aplicable_date="i === 0 ? 'Tomorrow' : day.applicable_date"
          :celsius="celsius"
          class="future-card"
        />
      </div>
      <h2 class="title">Today's Highlights</h2>
      <div class="today-highlights">
        <wind-status
          :wind-speed="weatherInfo.consolidated_weather[0].wind_speed"
        />
        <humidity :humidity="weatherInfo.consolidated_weather[0].humidity" />
        <basic-card
          name="Visibility"
          :number="weatherInfo.consolidated_weather[0].visibility"
          magnitude="miles"
        />
        <basic-card
          name="Air Pressure"
          :number="weatherInfo.consolidated_weather[0].air_pressure"
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
import WeatherCard from "@/components/WeatherCard";
import Degrees from "@/components/Degrees";
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
    WeatherCard,
    Degrees,
  },
  data() {
    return {
      weatherInfo: {},
      openBrowser: false,
      history: [],
      loading: true,
      celsius: true,
    };
  },

  methods: {
    success(pos) {
      this.loading = true;
      const crd = pos.coords;
      api
        .getWoeid(crd.latitude, crd.longitude)
        .then((woeid) => api.getWeather(woeid))
        .then((currentWeather) => {
          this.weatherInfo = { ...currentWeather };
          this.loading = false;
        });
    },
    error(err) {
      console.warn(err);
    },
    toogleBrowser() {
      this.openBrowser = !this.openBrowser;
    },
    searchLocation(query) {
      this.loading = true;
      this.celsius = true;
      api
        .getLocationWoeid(query.toLowerCase())
        .then((woeid) => api.getWeather(woeid))
        .then((currentWeather) => {
          this.toogleBrowser();
          this.weatherInfo = { ...currentWeather };
          if (!this.history.includes(query)) {
            this.history.push(query);
          }
          this.loading = false;
        })
        .catch((err) => {
          this.$router.push("/error404");
          console.warn(err);
        });
    },
    searchCurrentWeather() {
      this.celsius = true;
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    },
    convertToFahrenheit() {
      if (!this.celsius) return;

      this.weatherInfo.consolidated_weather.map((weather) => {
        weather.the_temp = this.celsiusToFarenheit(weather.the_temp);
        weather.min_temp = this.celsiusToFarenheit(weather.min_temp);
        weather.max_temp = this.celsiusToFarenheit(weather.max_temp);
      });
      this.celsius = false;
    },
    celsiusToFarenheit(n) {
      return n * 1.8 + 32;
    },
    convertToCelsius() {
      if (this.celsius) return;

      this.weatherInfo.consolidated_weather.map((weather) => {
        weather.the_temp = this.fahrenheitToCelsius(weather.the_temp);
        weather.min_temp = this.fahrenheitToCelsius(weather.min_temp);
        weather.max_temp = this.fahrenheitToCelsius(weather.max_temp);
      });
      this.celsius = true;
    },
    fahrenheitToCelsius(n) {
      return (n - 32) / 1.8;
    },
  },

  created() {
    this.searchCurrentWeather();
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
  position: relative;
}
.app {
  width: 100%;
  height: auto;
  display: flex;
  background: #100e1d;
  justify-content: center;
  align-items: center;
}
.today-highlights {
  width: 70%;
  margin: 0 auto 20px auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 40px 100px;
}
.title {
  font-size: 2.2rem;
  color: #e7e7eb;
  margin: 80px 0 0 160px;
}
.todayWeather-container {
  width: 20%;
  height: auto;
}
.future-weather {
  width: 70%;
  margin: 80px auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 1212px) {
  .today-highlights {
    margin: 0 auto;
  }
  .title {
    margin: 80px 0 0 0;
    text-align: center;
  }
}
@media (max-width: 1126px) {
  .future-weather {
    width: 100%;
    padding: 0 80px;
  }
  .degrees {
    right: 80px;
  }
}

@media (max-width: 1027px) {
  .todayWeather-container {
    width: 100vw;
    height: auto;
  }
  .app {
    flex-wrap: wrap;
  }
  main {
    margin-top: 0px;
    width: 100%;
    overflow-y: unset;
  }
  .today-highlights {
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(2, auto);
    justify-content: center;
  }
  .future-weather {
    justify-content: center;
    flex-wrap: wrap;
  }
  .future-card {
    margin-right: 20px;
  }
}

@media (max-width: 725px) {
  .today-highlights {
    grid-template-columns: 300px;
    grid-template-rows: repeat(4, auto);
  }
}
</style>
