const rustEnv = require("./imports/rust");
const simpleEnv = require("./imports/simple");

module.exports = {
    runWasm: function (buffer, options) {
        var options = Object.assign({ imports: "simple" }, options);
        var imports = {};
        switch (options.imports) {
            case 'simple':
                imports.env = simpleEnv;
                break;
            case 'rust':
                imports.env = rustEnv;
                break;
            default:
                throw new Error("unknown imports: " + options.imports)
        }
        return WebAssembly.instantiate(buffer, imports)
    }
}