const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const DB_URL = process.env.NODE_ENV === 'test' ? "mongodb://localhost/test": "mongodb://localhost/btcdemo"
const db = mongoose.createConnection(DB_URL)
db.on('error', console.error.bind(console,'connection_error:'))
console.log('DB Connect to ' + DB_URL)
module.exports = db 
