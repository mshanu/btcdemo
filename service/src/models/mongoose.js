const mongoose = require('mongoose');
mongoose.Promise = global.promise
mongoose.connection.on('error', console.error.bind(console,'connection_error:'))
const DB_URL = process.env.NODE_ENV === 'test' ? "mongodb://localhost/test": "mongodb://localhost/btcdemo"
mongoose.connect(DB_URL)
console.log('DB Connect')
module.exports = mongoose
