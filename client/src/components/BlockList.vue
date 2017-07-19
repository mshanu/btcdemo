<template>
  <div>
    <h3> Block List </h3>
    <div class="row" v-for="block in blocks">
      <div class="col-md-6">
        <label> Previous Hash: </label>
        <label> Transactions : </label>
        <label> Nonce: </label>
        <b-card header="Block Number {{block.number}}" show-footer>
          <small slot="footer" class="text-muted">Hash:  </small>
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
  }
  created: {
    this.refresh()
  },
  methods: {
    refresh () {
      axios.get('/block').then(blocks => this.blocks = blocks).catch(error => console.log(error));
    }
  }
}
</script>
