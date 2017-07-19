const Block = require('./../models/block.js');
const handler = require('./handler');
const create = (req,res) => new Block(req.body).save().then(handler(res).sendResult).catch(handler(res).onError)
const last = (req,res) => Block.findOne({}).sort({height: -1}).then(handler(res).sendResult).catch(handler(res).onError)
module.exports = {
  create: create,
  last: last 
}
