# FuncDef VM

WASM runtime to develop server-side WebAssembly applications.

## Goals
- Provide a common interface for developing server side applications for languages targeting wasm (E.g. C, C++, Rust, AssemblyScript, Kotlin, Crystal)
- Aim to be interface compatible with multitenant execution for FaaS/PaaS runtimes


# Try

`git clone https://github.com/funcdef/fdvm.git`

`cd fdvm/packages/fdvm-cli`

`npm install -g`

Convert the following to wasm using `wat2wasm`:
```
(module
    (func $log (import "env" "log") (param i32))
    (func $main
        i32.const 42
        (call $log)
    )
    (start $main)
)
```

```
$fdvm example.wasm
42
```


## Feature Requests/Issues/Suggestions
Please open a Github Issue

## Testing

Run `lerna run test` to run jest tests.

Tested on node v9.11.1