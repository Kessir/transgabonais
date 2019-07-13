<template>
  <div id="app" class="bg-gray-100">
    <div id="nav">
      <!-- <router-link to="/">Francais</router-link> | -->
      <!-- <router-link to="/en">English</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  padding-top: 1rem; 
}

</style>
