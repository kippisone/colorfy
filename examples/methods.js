const colorfy = require('../')
const colors = require('../src/colors')

const cf = colorfy()
cf.config({
  trim: true
})

colors.colorMethods.forEach((col) => {
  cf[col.name](`Text in ${col.name} `)
    .txt(' '.repeat(12 - col.name.length))
    .ansi(col.fgcolor, ` with bg${col.name} `, `bg${col.name}`)
    .txt(' '.repeat(10 - col.name.length))
    .grey(`(color code #${col.color})`).nl()
})

cf.print()
