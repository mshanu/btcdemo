<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <b-alert show>Previous Hash: <span class="spaced"> {{ this.previousBlock.hash || '000000' }}</span> </b-alert> 
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <b-card header="Transactions" class="mb-2"> 
          <div class="row">
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[0].from" type="number" placeholder="From account"/>
            </div>
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[0].to" type="number" placeholder="To account"/>
            </div>
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[0].amount" type="number" placeholder="Amount"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[1].from" type="number" placeholder="From account"/>
            </div>
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[1].to" type="number" placeholder="To account"/>
            </div>
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[1].amount" type="number" placeholder="Amount"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[2].from" type="number" placeholder="From account"/>
            </div>
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[2].to" type="number" placeholder="To account"/>
            </div>
            <div class="col-md-4">
              <b-form-input v-model="block.transactions[2].amount" type="number" placeholder="Amount"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">Prev Hash + Sum of numbers in Tx = {{getPrevHashPlusTxs()}} </div>
          </div>
              </b-card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <b-form-input v-model="block.nonce" type="number" placeholder="nonce"/>
      </div>
      <div class="col-md-4">
        <label>Computation: Prev Hash + Sum of numbers in Txs / nonce </label>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <b-form-input v-model="currentHash" type="number" placeholder="hash" readonly class="spaced"/>
      </div>
      <div class="col-md-4" v-if="validBlock()">
        <b-button size="md" variant="success" @click="saveBlock">Valid - Save </b-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
let emptyTransaction = () => ({from: undefined, to: undefined, amount: undefined})
let validHash = function (hash) {
  let hashString = hash.toString()
  let slicedHashString = hashString.slice(1, hashString.length)
  return slicedHashString.indexOf('00') > -1
}
export default {
  data () {
    return {
      previousBlock: {},
      block: { transactions: [emptyTransaction(), emptyTransaction(), emptyTransaction()], nonce: undefined, hash: undefined }
    }
  },
  created () {
    this.refresh()
  },
  methods: {
    getPrevHashPlusTxs () {
      let previousBlackHash = this.previousBlock.currentHash || 0
      let sumOfTransactions = this.block.transactions.filter(trans => trans.from && trans.to && trans.amount)
        .reduce((sum, transaction) => sum + Number(transaction.from) + Number(transaction.to) + Number(transaction.amount), 0)
      return sumOfTransactions + previousBlackHash
    },
    saveBlock () {
      axios.post('/api/blocks', this.block)
        .then(this.refresh).catch(console.log)
    },
    refresh () {
      axios.get('/api/blocks/last')
        .then((res) => { this.previousBlock = res.data })
        .catch(console.log)
    },
    validBlock () {
      return this.block.hash && validHash(this.block.hash)
    }
  },
  computed: {
    currentHash: {
      get () {
        if (this.block.nonce < 101) {
          this.block.hash = null
          return this.block.hash
        }
        let prevHashPlusTx = this.getPrevHashPlusTxs()
        let nonce = this.block.nonce
        this.block.hash = Math.trunc((prevHashPlusTx / nonce) % 1 * 10000000)
        return this.block.hash
      }
    }
  }
}
</script>
<style scoped>
.spaced {
  letter-spacing: 4px;
}
</style>
