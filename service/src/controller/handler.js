module.exports = (res) => ({
  onSave : (obj) => res.send(obj),
  onError : (error) => res.status(500).send(error)
})
