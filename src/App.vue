<template>
  <div id="app">
    <test msg='Hello im a computed component'></test>
  </div>
</template>

<script>
import Test from './components/Test';

// Export defaullt component with name App
export default {
  name: 'App',
  // Include other components
  components: {
    Test
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
