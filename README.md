https://mbebenita.github.io/WasmExplorer/
web tool wat file to wasm file




#text format#
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    get_local $lhs
    get_local $rhs
    i32.add)
  (export "add" (func $add))
)

to 

#wasm module#
0061 736d 0100 0000 0187 8080 8000 0160
027f 7f01 7f03 8280 8080 0001 0006 8180
8080 0000 0787 8080 8000 0103 6164 6400
000a 8d80 8080 0001 8780 8080 0000 2000
2001 6a0b 
