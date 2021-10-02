<template>
  <section class="search" :style="left ? 'left: 0' : 'left: -327px'">
    <button @click="close" class="closeButton">X</button>
    <div class="search__actions">
      <input type="text" placeholder="🔍 Search location" v-model="query" />
      <button @click="search" class="button">Search</button>
    </div>
    <history-item
      v-for="(location, i) in history"
      :name="location"
      :key="i"
      @searchLocation="searchLocation"
    />
  </section>
</template>

<script>
import HistoryItem from "@/components/HistoryItem";
export default {
  name: "browser",
  components: { HistoryItem },
  props: {
    left: {
      type: Boolean,
      default: false,
    },
    history: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.query);
      this.query = "";
    },
    searchLocation(location) {
      this.$emit("search", location);
      this.query = "";
    },
    close() {
      this.$emit("close");
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
.search {
  background-color: #1e213a;
  height: 100vh;
  width: 273px;
  position: absolute;
  left: 0;
  z-index: 2;
  transition: all 0.5s ease;
}
.closeButton {
  background-color: #1e213a;
  color: white;
  cursor: pointer;
  float: right;
  border: 0px;
  margin: 10px 20px 0 0;
}
.search__actions {
  display: flex;
  width: 80%;
  height: 50px;
  margin: 80px auto 8px auto;
}
.search__actions input {
  border: 1px solid #e7e7eb;
  background-color: #1e213a;
  color: #616475;
  width: 160px;
  height: 30px;
  padding: 8px 8px;
  outline: none;
}
.button {
  height: 30px;
  color: white;
  background-color: #3c47e9;
  border: 0px;
  margin-left: 10px;
  padding: 8px 5px;
  cursor: pointer;
}
</style>
