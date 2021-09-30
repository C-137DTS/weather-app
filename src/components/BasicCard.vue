<template>
  <div class="container">
    <p class="name">{{ name }}</p>
    <p class="weather">
      {{ number > 999 ? number.toFixed(0) : number.toFixed(1)
      }}<span class="magnitude"> {{ magnitude }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "basic card",
  props: {
    name: {
      type: String,
      default: "",
    },
    number: {
      type: Number,
      default: 0,
    },
    magnitude: {
      type: String,
      default: "",
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
  width: 328px;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px 0;
}
.name {
  font-size: 1.6rem;
  color: #e7e7eb;
}
.weather {
  font-weight: 700;
  font-size: 6.4rem;
  color: #e7e7eb;
  margin-top: 8px;
}
.magnitude {
  font-size: 2rem;
  color: #a09fb1;
}
</style>
