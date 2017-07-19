<template>
  <div>
    <div class="row" v-for="block in blocks">
      <div class="col-md-6">
        <b-card :header="'Hash: '+ block.hash" show-footer>
          <label> Transactions : {{block.transactions.length}} </label>
          <label> Nonce: {{block.nonce}} </label>
          <small slot="footer" class="text-muted">Height: {{block.height}}  </small>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      blocks: []
    }
  },
  created () {
    this.refresh()
  },
  methods: {
    refresh () {
      axios.get('/api/blocks').then(blocks => { this.blocks = blocks.data }).catch(error => console.log(error))
    },
    showHash (block) {
      return block.hash
    }
  }
}
</script>
