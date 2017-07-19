<template>
  <div id="app">
    <b-card no-block>
      <b-tabs small card ref="tabs">
        <b-tab title="Block Input">
          <BlockInput/>
        </b-tab>
        <b-tab title="Blocks"><BlockList/> </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import BlockInput from './components/BlockInput'
import BlockList from './components/BlockList'
export default {
  name: 'app',
  components: {
    BlockInput,
    BlockList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.row {
  padding: 5px; 
}
</style>
