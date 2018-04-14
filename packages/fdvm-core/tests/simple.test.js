var spy = jest.spyOn(console, 'log')
const simple = require('../imports/simple');
const wabt = require("wabt");
const FDVM = require('fdvm-core')

test('calls console log', () => {
    var wat = `
    (module
        (func $log (import "env" "log") (param i32))
        (func $main
            i32.const 42
            (call $log)
        )
        (start $main)
    )
    `
    var buffer = wabt.parseWat("test.wat", wat).toBinary({ log: false }).buffer
    return FDVM.runWasm(buffer, {}).then(() => {
        expect(spy).toHaveBeenCalledWith(42)
        spy.mockRestore()
    })
});