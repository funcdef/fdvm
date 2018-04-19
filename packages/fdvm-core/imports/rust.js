
var memory
module.exports = {
  setMemory: function (mem) {
    memory = mem
  },
  env: {
    log: function (x) {
      console.log(x)
    }
  }
}
