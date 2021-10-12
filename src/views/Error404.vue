<template>
  <div>
    <h1>Oops... Error 404</h1>
    <p>Sorry, the location you're searching dosen't exist.</p>
    <router-link class="back-to-home" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style scoped>
h1 {
  color: #e7e7eb;
  margin-bottom: 8px;
}
p {
  color: #a09fb1;
  font-size: 1.4rem;
}
div {
  width: 100vw;
  height: 100vh;
  background: #100e1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.back-to-home {
  height: 40px;
  width: 150px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #e7e7eb;
  background: #1e213a;
}
</style>
