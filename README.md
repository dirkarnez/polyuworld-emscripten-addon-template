polyuworld-emscripten-addon-template
====================================
```js
new CopyWebpackPlugin({
    patterns: [
        {
            from: "node_modules/three/examples/jsm/loaders/ifc/web-ifc.wasm",
            to: "assets/wasm/web-ifc.wasm"
        }
    ]
}),
```