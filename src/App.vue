<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- HelloWorld Component -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

// Export defaullt component with name App
export default {
  name: 'App',
  // Include other components
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
