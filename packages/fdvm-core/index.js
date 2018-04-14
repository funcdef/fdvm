module.exports = {
    runWasm: function (buffer) {
        var m = new WebAssembly.Instance(new WebAssembly.Module(buffer));
    }
}