Colorfy
=======

[![Build Status](https://travis-ci.org/Andifeind/colorfy.svg?branch=master)](https://travis-ci.org/Andifeind/colorfy)

Colorfy your console output with pretty ANSI colors.

Supports:
* 256 ANSI color codes
* Pluralization
* Text indention
* Static color methods

![Colorfy in action](https://static.noname-media.com/colorfy/colorfy-in-action.png)

Installation
------------

```shell
npm i colorfy --save
```

Usage
-----

```js
const cf = require('colorfy');
console.log(cf().red('Hello').green('colorful').blue('World!').colorfy());

// static methods
const green = colorfy.green('Green text')
const red = colorfy.red('Red text')
```

Methods
-------

The `cf()` call in the example above returns a colorfy instance. All colorize methods are chainable.
Pass `colorfy()` as last method to a chain to get a pretty colorful string.
Since version `v2.0.0`, colofy returns all color methods as static methods too.

`red(text, [styles])` Draws red text  
`yellow(text, [styles])` Draws yellow text  
`green(text, [styles])` Draws green text  
`blue(text, [styles])` Draws blue text  
`fire(text, [styles])` Draws fire red text  
`orange(text, [styles])` Draws orange text  
`azure(text, [styles])` Draws azure blue text  
`lime(text, [styles])` Draws lime text  
`pink(text, [styles])` Draws pink text  
`plum(text, [styles])` Draws plum text  
`turq(text, [styles])` Draws turquoise text  
`ored(text, [styles])` Draws orangered text  
`dred(text, [styles])` Draws dark red text  
`dgreen(text, [styles])` Draws dark green text  
`dblue(text, [styles])` Draws dark blue text  
`grey(text, [styles])` Draws grey text  
`dgrey(text, [styles])` Draws dark grey text  
`ddgrey(text, [styles])` Draws dark dark grey text  
`lgrey(text, [styles])` Draws light grey text  
`llgrey(text, [styles])` Draws light light grey text  
`lbrown(text, [styles])` Draws light brown text  
`black(text, [styles])` Draws black text  
`white(text, [styles])` Draws white text  
`txt(text, [styles])` Draws text in default color. Without any styling  
`ansi(color, text, [styles])` Draws text in any ansi color. Must be a number between 0 and 255  
`auto(text, [styles])` Calculates a cross number between 0 and 99 of the input and uses a color based on this cross number. This feature could be useful for logging of hash values.  

Run `node examples/colorfy.js` to see colorfy in action. It gives you a list of all ansi color codes.  

The `styles` argument is optional and defines the text style.

`bold` Draws bold text  
`italic` Draws italic text  
`underline` Draws underlined text  
`blink` Draws a flashing text  
`trim` Trims your text on both sides (See **trim** section below)  
`rtrim` Trims your text on its right side (See **trim** section below)  
`ltrim` Trims your text on its left (See **trim** section below)
`bgred` Draws red background  
`bgyellow` Draws yellow background  
`bggreen` Draws green background  
`bgblue` Draws blue background  
`bgfire` Draws fire red background  
`bgorange` Draws orange background  
`bgazure` Draws azure blue background  
`bglime` Draws lime background  
`bgpink` Draws pink background  
`bgplum` Draws plum background  
`bgturq` Draws turquoise background  
`bgored` Draws orangered background  
`bgdred` Draws dark red background  
`bgdgreen` Draws dark green background  
`bgdblue` Draws dark blue background  
`bggrey` Draws grey background  
`bgdgrey` Draws dark grey background  
`bgddgrey` Draws dark dark grey background  
`bglgrey` Draws light grey background  
`bgllgrey` Draws light light grey background  
`bglbrown` Draws light brown background  

Seperate stylings by a space `cf().red('foo', 'bold underline')`

### Background colors

Background colors can be set as a style. See list above with all supported background styles

```js
cf().black('Black text on yellow background', 'bgyellow');
```


### Joining

Since `v2.0.0`, auto joining was disabled by default. To enable joining of text blocks by a space, set the `autoJoin` flag to true.
All texts getting joined by a space character if joining is enabled. The trim parameter can be used to avoid joining for a certain text block.

```js
const cf = colorfy({ autoJoin: true })
cf.grey('(').green('20ms').grey(')').colorfy();
```
returns `( 20ms )`


```js
const cf = colorfy({ autoJoin: true })
cf.grey('(').green('20ms', 'trim').grey(')').colorfy();
```
returns `(20ms)` (No space around the number)

### Output

The `colorfy()` method returns a colorfied string of the colorfy chain. Colorization can be skiped by passing `false` as first argument to `colorfy()`

```js
cf().red('All colors are beautiful').colorfy();      //Returns a colofied string
cf().red('All colors are beautiful').colorfy(false); //Returns a plain string
```

The `cf()` method can be used as a shortcut of `cf().txt()`

```js
cf('Plain text') === cf().txt('Plain text')
```

### print([*bool* colorize])

The print method prints a colorfy chain to stdout.
The comands below are the same

```js
console.log(cf().red('All colors are beautiful').colorfy());
cf().red('All colors are beautiful').print();
```

### indent(*num* size)

Colorfy supports text indention. Indentions itself are always uncolorized.
The indent method sets the indention for the next lines. It expects the indention size as its onliest argument. The size argument increase the current indention size.

`indent(number)`

```js
const cf = colorfy()
cf.txt(' '.repeat(10)).white('WARNING!', 'bgred').nl()
cf.txt(' '.repeat(10)).white('The server is down!', 'bgred')
```
The code with usage of `indent()` is quite smarter.

```js
const cf = colorfy()
cf.indent(10)
cf.white('WARNING!', 'bgred').nl()
cf.white('The server is down!', 'bgred')
```
Please note, a call of `indent()` inserts a line break.

### reset()

Reset the indention and inserts a line break.

### Pluralization

Texts can be pluralized. Add an `[singular, plural, number]` array as a text block and *colorfy* returns the singular version if `number === 1` otherwise the plural.

```js
const passedTests = 35;
const failedTests = 1;
cf().green(passedTests).txt(['test passed', 'tests passed', passedTests]).print());
cf().red(failedTests).txt(['test failed', 'tests failed', failedTests]).print());
```


This example would render a red block

### Config

Preset configurations can be changed by using the `config()` method.

```js
const cf = colorfy()
cf.config({
  trim: true
})

cf.txt('(').green('13ms').txt(')') // Returns (13ms)
```

Preset configurations:

| Property    | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `trim`      | Enable word trimming ( Disabled by default )                      |
| `indention` | Set the default indention for the `indent()` method. Default: `0` |
| `autoJoin`  | Joins text blocks by a space. Default: `false`                    |




#### Author

(c) 2016 by Andi Heinkelein  
Licensed under MIT license.
