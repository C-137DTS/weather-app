<template>
  <div class="container">
    <p class="normal-text">Wind status</p>
    <p class="wind-status" id="windStatus">
      {{ windSpeed.toFixed(1) }}<span class="magnitude">mph</span>
    </p>
    <p class="normal-text">WSW</p>
  </div>
</template>

<script>
export default {
  name: "WindStatus",
  props: {
    windSpeed: {
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
  min-width: 280px;
}
.normal-text {
  font-size: 1.6rem;
  color: #e7e7eb;
}
.wind-status {
  font-weight: 700;
  font-size: 6.4rem;
  color: #e7e7eb;
  margin-top: 8px;
  margin-bottom: 20px;
}
.magnitude {
  font-size: 2.4rem;
  font-weight: 500;
}
</style>
