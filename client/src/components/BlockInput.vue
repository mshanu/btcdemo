<template>
  <b-card header="Block" class="mb-2" title="Block Minning"> 
    <div class="row">
      <div class="col-md-6">
        <label>Previous Hash</label>
        <b-badge>12312312312312</b-badge> 
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Transactions</h4>
        <div class="row">
          <div class="col-md-6">
            <b-form-input v-model="block.transactions[0].from" type="number" placeholder="From account"/>
          </div>
          <div class="col-md-6">
            <b-form-input v-model="block.transactions[0].to" type="number" placeholder="To account"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <b-form-input v-model="block.transactions[0].from" type="number" placeholder="From account"/>
          </div>
          <div class="col-md-6">
            <b-form-input v-model="block.transactions[0].to" type="number" placeholder="To account"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <b-form-input v-model="block.transactions[0].from" type="number" placeholder="From account"/>
          </div>
          <div class="col-md-6">
            <b-form-input v-model="block.transactions[0].to" type="number" placeholder="To account"/>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <b-form-input v-model="block.nonce" type="number" placeholder="nonce"/>
      </div>
    </div>

        </b-card>
</template>
<script>
export default {
  data () {
    return {
      block: { transactions: [{}] }
    }
  }
}
</script>
