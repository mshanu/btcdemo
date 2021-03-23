const mongoose = require('mongoose');
const db = require('./db');

let CounterSchema = new mongoose.Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});
let Counter= db.model('Counter', CounterSchema);
new Counter({_id:'height'}).save();

let blockSchema = new mongoose.Schema({
  height: {type: Number,unique: true},
  transactions: [],
  prevHash: Number,
  hash: Number,
  nonce: {type: Number, required: true}
})

blockSchema.pre('save', function(next) {
  var doc = this;
  Counter.findByIdAndUpdate('height', {$inc: { seq: 1} },{new: true}, function(error, counter)   {
    console.log(arguments);
    if(error) {
      console.log(error)
      return next(error);
    }
    doc.height = counter.seq;
    next();
  });
});

module.exports = db.model('Block', blockSchema)
