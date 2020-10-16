import * as wasm from 'ywasm'

const start = performance.now()
const doc = new wasm.Doc()
const ytext = doc.getType('type')
const tr = doc.transact()
for (let i = 0; i < 10; i++) {
  const pos = Math.floor(Math.random() * (i + 1))
  ytext.insert(tr, pos, (i % 10).toString())
}

console.log('time preps: ', performance.now() - start)
console.log('text: ', ytext.toString())
const encodedState = doc.encodeStateAsUpdate()
console.log(encodedState)

const doc2 = new wasm.Doc()
const ytext2 = doc.getType('type')

doc2.applyUpdate(encodedState)
console.log(ytext2.toString())
