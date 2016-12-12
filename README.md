Colorfy
=======

Colorfy your console output with pretty ANSI colors.

Installation
------------

```shell
npm i colorfy --save
```

Usage
-----

```js
let cf = require('colorfy');
console.log(cf().red('Hello').green('colorful').blue('World!').colorfy());
```

Methods
-------

The `cf()` method returns a colorfy instance. All colorize methods are chainable.
Pass `colorfy()` as last method to a chain to get a pretty colorful string  

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
`auto(text, [styles])` Calculates a cross number between 0 and 99 of the input text uses a `color based of this cross number. This feature could be usefull for logging of hash values.  

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
`bggrey` Draws grey background  
`bgdgrey` Draws dark grey background  
`bgddgrey` Draws dark dark grey background  
`bglgrey` Draws light grey background  
`bgllgrey` Draws light light grey background  
`bglbrown` Draws light brown background  

Seperate multiple stylings by a space `cf().red('foo', 'bold underline')`

### Background colors

Background colors can be set as a style. See list above with all supported background styles

```js
cf().black('Black text on yellow background', 'bgyellow');
```


### Trim

All texts are joined by a space character. The trim parameter can be used to avoid joining by spaces.

```js
cf().grey('(').green('20ms').grey(')').colorfy();
```
returns `( 20ms )`


```js
cf().grey('(').green('20ms', 'trim').grey(')').colorfy();
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

### print()

The print method prints a colorfy chain to the console.
The comands below are the same

```js
console.log(cf().red('All colors are beautiful').colorfy());
cf().red('All colors are beautiful').print();
```

### Pluralization

Texts can be pluralized. Add an `[singular, plural, number]` array as a text block and *colorfy* returns the singular version if `number === 1` otherwise the plural.

```js
const passedTests = 35;
const failedTests = 1;
cf().green(passedTests).txt(['test passed', 'tests passed', passedTests]).print());
cf().red(failedTests).txt(['test failed', 'tests failed', failedTests]).print());
```

#### Author

(c) 2016 by Andifeind  
Licensed under MIT license.
