module.exports = {
    runWasm: function (buffer) {
        var env = { env: { log: console.log } }
        var m = new WebAssembly.Instance(new WebAssembly.Module(buffer), env)
    }
}