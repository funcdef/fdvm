const TextDecoder = require('util').TextDecoder

var memory

module.exports = {
    setMemory: function (mem) {
        memory = mem
    },
    env: {
        log: function (ptr) {
            const m = new Uint8Array(memory.buffer)
            var uint32view = new Uint32Array(memory.buffer)
            var len = uint32view[ptr >> 2];
            const buf = new TextDecoder('utf-16le').decode(m.slice(ptr + 4, ptr + 4 + (len * 2)))
            console.log(buf)
        }
    }

}
