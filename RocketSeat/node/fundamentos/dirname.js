const meta = import.meta
console.log('meta',meta)
const dirname = import.meta.dirname
console.log('dirname',dirname)
const fileName = import.meta.filename
console.log('fileName',fileName)
const resolve = import.meta.resolve(fileName)
console.log('resolve',resolve)

const url = new URL(import.meta.url)

console.log('url',url)