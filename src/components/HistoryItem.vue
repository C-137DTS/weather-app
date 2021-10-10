<template>
  <button @click="$emit('searchLocation', name)">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "HistoryItem",
  props: {
    name: {
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
button {
  width: 80%;
  height: 40px;
  background: transparent;
  border: none;
  margin: 0 25px;
  text-align: left;
  padding: 0 0 0 8px;
  font-size: 0.8rem;
  color: #e7e7eb;
  cursor: pointer;
  margin-top: 12px;
}
button:hover {
  border: 1px solid #616475;
}
button::first-letter {
  text-transform: uppercase;
}
</style>
