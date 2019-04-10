<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">HomeDefault</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/home">Home</router-link>
    </div>-->
    <Navigation/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'navigation',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
