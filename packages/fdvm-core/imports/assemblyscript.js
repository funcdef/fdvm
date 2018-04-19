const TextDecoder = require('util').TextDecoder

var memory

module.exports = {
    setMemory: function (mem) {
        memory = mem
    },
    env: {
        log: function (ptr, len) {
            const m = new Uint8Array(memory.buffer)
            const buf = new TextDecoder('utf-16le').decode(m.slice(ptr + 4, ptr + 4 + (len * 2)))
            console.log(buf)
        }
    }

}
