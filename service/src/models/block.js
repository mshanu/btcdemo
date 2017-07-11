const mongoose = require('./mongoose');
let blockSchema = new mongoose.Schema({
  number: {type: Number,unique: true, required: true},
  transactions: [],
  prevHash: String,
  nonce: {type: Number, required: true}
})

module.exports = mongoose.model('Block', blockSchema)
