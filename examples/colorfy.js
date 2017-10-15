'use strict'

let cf = require('../src/colorfy')

console.log(cf().txt('This text should be coloryfied in').red('fantastic red').colorfy())
console.log(cf().txt('This text should be coloryfied in').dred('fantastic dark red').colorfy())
console.log(cf().txt('This text should be coloryfied in').yellow('fantastic yellow').colorfy())
console.log(cf().txt('This text should be coloryfied in').green('fantastic green').colorfy())
console.log(cf().txt('This text should be coloryfied in').dgreen('fantastic dark green').colorfy())
console.log(cf().txt('This text should be coloryfied in').blue('fantastic blue').colorfy())
console.log(cf().txt('This text should be coloryfied in').dblue('fantastic dark blue').colorfy())
console.log(cf().txt('This text should be coloryfied in').fire('fantastic fire').colorfy())
console.log(cf().txt('This text should be coloryfied in').orange('fantastic orange').colorfy())
console.log(cf().txt('This text should be coloryfied in').azure('fantastic azure').colorfy())
console.log(cf().txt('This text should be coloryfied in').lime('fantastic lime').colorfy())
console.log(cf().txt('This text should be coloryfied in').pink('fantastic pink').colorfy())
console.log(cf().txt('This text should be coloryfied in').plum('fantastic plum').colorfy())
console.log(cf().txt('This text should be coloryfied in').turq('fantastic turq').colorfy())
console.log(cf().txt('This text should be coloryfied in').ored('fantastic ored').colorfy())
console.log(cf().txt('This text should be coloryfied in').grey('fantastic grey').colorfy())
console.log(cf().txt('This text should be coloryfied in').dgrey('fantastic dgrey').colorfy())
console.log(cf().txt('This text should be coloryfied in').ddgrey('fantastic ddgrey').colorfy())
console.log(cf().txt('This text should be coloryfied in').lgrey('fantastic lgrey').colorfy())
console.log(cf().txt('This text should be coloryfied in').llgrey('fantastic llgrey').colorfy())

console.log(cf().txt('This text background should be coloryfied in').txt('fantastic red', 'bgred').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic dark red', 'bgdred').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic yellow', 'bgyellow').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic green', 'bggreen').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic dark green', 'bgdgreen').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic blue', 'bgblue').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic dark blue', 'bgdblue').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic fire', 'bgfire').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic orange', 'bgorange').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic azure', 'bgazure').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic lime', 'bglime').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic pink', 'bgpink').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic plum', 'bgplum').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic turq', 'bgturq').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic ored', 'bgored').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic grey', 'bggrey').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic dgrey', 'bgdgrey').colorfy())
console.log(cf().txt('This text background should be coloryfied in').txt('fantastic ddgrey', 'bgddgrey').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic lgrey', 'bglgrey').colorfy())
console.log(cf().txt('This text background should be coloryfied in').black('fantastic llgrey', 'bgllgrey').colorfy())

for (var i = 0; i < 256; i++) {
  console.log(cf().txt('Ansi color code ' + i).ansi(i, 'pretty color code').colorfy())
}

console.log(cf('Auto mode', 'underline').colorfy())

for (var i = 0; i < 100; i++) {
  console.log(cf().auto('Auto color code ' + String.fromCharCode(i + 41)).colorfy())
}

console.log(cf('Font style reset', 'reset').txt('plain').colorfy())
console.log(cf('Font style bold', 'bold').txt('bold').colorfy())
console.log(cf('Font style italic', 'italic').txt('italic').colorfy())
console.log(cf('Font style underline', 'underline').txt('underline').colorfy())
console.log(cf('Font style blink', 'blink').txt('blink').colorfy())
console.log(cf('Font style invert', 'invert').txt('invert').colorfy())

cf().txt('This text should be coloryfied in').red('fantastic red').grey('logged by print()').print()
cf().txt('This text should be coloryfied in').yellow('fantastic yellow').grey('logged by print()').print()
cf().txt('This text should be coloryfied in').green('fantastic green').grey('logged by print()').print()
