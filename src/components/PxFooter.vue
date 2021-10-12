<template>
  <footer class="footer">
    <p>
      created by
      <a href="https://github.com/C-137DTS" target="blank">C-137DTS</a> -
      devChallenges.io
    </p>
  </footer>
</template>

<script>
export default {
  name: "PxFooter",
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
.footer {
  font-size: 1.2rem;
  text-align: center;
  color: #a09fb1;
  margin: 80px 0 20px 0;
}
.footer a {
  font-weight: 700;
  color: #e7e7eb;
}
</style>
