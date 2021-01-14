# Ywasm

> Wasm bindings of the [Yrs](https://github.com/yjs/yrs/) CRDT

### 🛠️ Build with `wasm-pack build`

```sh
wasm-pack build
```

Then open the demo application:

```sh
cd www
npm i
npm start
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```sh
wasm-pack test --headless --firefox
```

### 🎁 Publish to NPM with `wasm-pack publish`

```sh
wasm-pack publish
```

### Advantages over Yjs


* Manual garbage collection. I.e. doesn't track every character as a separate object.
* Uses wee_alloc as a minimal memory management library.
* Small bundle size.


### Todo

* Switch to monorepo.
* Reimplement classes from Yrs to export information custom to the web.

