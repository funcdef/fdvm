const rustEnv = require('./imports/rust')
const simpleEnv = require('./imports/simple')
const assemblyScriptEnv = require('./imports/assemblyscript')

module.exports = {
    runWasm: function (buffer, options) {
        options = Object.assign({ imports: 'simple' }, options)
        var imports = {}
        var env
        switch (options.imports) {
            case 'simple':
                env = simpleEnv
                break
            case 'rust':
                env = rustEnv
                break
            case 'asc':
                env = assemblyScriptEnv
                break
            default:
                throw new Error('unknown imports: ' + options.imports)
        }
        imports.env = env.env
        return WebAssembly.instantiate(buffer, imports).then(result => {
            env.setMemory(result.instance.exports.memory)
            return result
        });
    }
}
