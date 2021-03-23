module.exports = (res) => ({
  sendResult : (obj) => res.send(obj),
  onError : (error) => res.status(500).send(error)
})
