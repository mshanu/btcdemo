const mongoose = require('./mongoose');
let blockSchema = new mongoose.Schema({
  number: {type: Number,unique: true, required: true},
  transactions: [],
  prevHash: Number,
  currentHash: Number,
  nonce: {type: Number, required: true}
})

module.exports = mongoose.model('Block', blockSchema)
