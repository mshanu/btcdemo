<template>
  <div id="app">
    <BlockInput/>
  </div>
</template>

<script>
import BlockInput from './components/BlockInput'
export default {
  name: 'app',
  components: {
    BlockInput
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
