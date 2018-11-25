<template>
  <div id="app" class="container">
    <Selector selected=""/>
  </div>
</template>

<script>
import Selector from './components/Selector.vue'

export default {
  name: 'app',
  components: {
    Selector
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
