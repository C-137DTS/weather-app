<template>
  <div class="degrees">
    <button :class="{ activate: celsius }" @click="$emit('celsius')">°C</button>
    <button :class="{ activate: !celsius }" @click="$emit('fahrenheit')">
      °F
    </button>
  </div>
</template>

<script>
export default {
  name: "Degrees",
  props: {
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
  margin: 0;
}

.degrees {
  position: absolute;
  right: 160px;
  margin-top: 25px;
}
button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  color: #e7e7eb;
  background: #585676;
  border: none;
  margin-right: 8px;
  cursor: pointer;
}
.activate {
  color: #110e3c;
  background: #e7e7eb;
}
</style>
