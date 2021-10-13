<template>
  <div class="futureWeather__card">
    <p class="futureWeather__card--day" v-if="aplicable_date == 'Tomorrow'">
      {{ aplicable_date }}
    </p>
    <p class="futureWeather__card--day" v-else>{{ aplicable_date | date }}</p>
    <img
      :src="`assets/${img.replace(' ', '')}.png`"
      alt="weather"
      class="futureWeather__card--img"
    />
    <div class="temps">
      <p class="futureWeather__card--temperature">
        {{ min.toFixed(1) }}<span>{{ celsius ? "°C" : "°F" }}</span>
      </p>
      <p class="futureWeather__card--temperature max-temp">
        {{ max.toFixed(1) }}<span>{{ celsius ? "°C" : "°F" }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: "",
    },
    aplicable_date: {
      type: String,
      default: "",
    },
    max: {
      type: Number,
      default: 0,
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
}
.futureWeather__card {
  width: 125px;
  height: auto;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.futureWeather__card--day {
  color: #e7e7eb;
  font-size: 20px;
  margin-top: 18px;
}
.futureWeather__card--img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-top: 18px;
  margin-bottom: 31px;
}
.futureWeather__card--temperature {
  font-size: 14px;
  color: #e7e7eb;
  margin-bottom: 18px;
}
.temps {
  width: 125px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
}
.max-temp {
  color: #a09fb1;
}
</style>
