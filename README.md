# FuncDef VM

WASM runtime to develop server-side WebAssembly applications.

# Try
`git clone `
`cd fdvm/packages/fdvm-cli`
`npm install -g`
`fdvm example.wasm`

## Goals
- Provide a common interface for developing server side applications for languages targeting wasm (E.g. C, C++, Rust, AssemblyScript, Kotlin, Crystal)
- Aim to be interface compatible with multitenant execution for FaaS/PaaS runtimes

## Testing
Tested on node v9.11.1