<template>
  <div class="container">
    <p class="normal-text font-white">Humidity</p>
    <p class="humidity font-white">
      {{ humidity }}<span class="humidity-percentage-symbol">%</span>
    </p>
    <div class="percentage-scale">
      <p>0</p>
      <p>50</p>
      <p>100</p>
    </div>
    <div class="humidity-percentage-container">
      <div
        class="humidity-percentage"
        :style="'width: ' + humidity + '%'"
      ></div>
    </div>
    <p class="percentage-symbol">%</p>
  </div>
</template>

<script>
export default {
  name: "Humidity",
  props: {
    humidity: {
      type: Number,
      default: 0,
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
.container {
  background-color: #1e213a;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px 0;
}
.font-white {
  color: #e7e7eb;
}
.normal-text {
  font-size: 1.6rem;
}
.humidity {
  font-weight: 700;
  font-size: 6.4rem;
  margin-top: 8px;
}
.humidity-percentage-symbol {
  font-size: 2.4rem;
  font-weight: 500;
}
.humidity-percentage {
  background-color: #ffec65;
  height: 100%;
  border-radius: 8px;
}
.percentage-scale {
  display: flex;
  justify-content: space-between;
  width: 229px;
  color: #a09fb1;
  margin: 20px 0 2px 0;
}
.percentage-symbol {
  color: #a09fb1;
  align-self: flex-end;
  margin-right: 50px;
  margin-top: 2px;
}
.humidity-percentage-container {
  width: 229px;
  height: 8px;
  border-radius: 8px;
  background-color: #e7e7eb;
}
</style>
