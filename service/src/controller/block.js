const block = require('./../models/block.js');
const handler = require('./handler');
const create = (req,res) => block.save(req.body).then(handler(res).onSave).catch(handler(res).onError)
module.exports = {
  create: create
}
