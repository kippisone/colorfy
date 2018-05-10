const inspect = require('inspect.js')
const tb = require('testberry')
const sinon = require('sinon')
inspect.useSinon(sinon)

const colorfy = require('../../')
const color = require('../../src/colors')

const stylings = [
  { name: 'bold', value: ';1' },
  { name: 'italic', value: ';3' },
  { name: 'underline', value: ';4' },
  { name: 'blink', value: ';5' },
  { name: 'invert', value: ';7' },
  { name: 'bgred', value: `;48;5;${color.RED}` },
  { name: 'bgdred', value: `;48;5;${color.DRED}` },
  { name: 'bgyellow', value: `;48;5;${color.YELLOW}` },
  { name: 'bggreen', value: `;48;5;${color.GREEN}` },
  { name: 'bgdgreen', value: `;48;5;${color.DGREEN}` },
  { name: 'bgblue', value: `;48;5;${color.BLUE}` },
  { name: 'bgdblue', value: `;48;5;${color.DBLUE}` },
  { name: 'bgfire', value: `;48;5;${color.FIRE}` },
  { name: 'bgorange', value: `;48;5;${color.ORANGE}` },
  { name: 'bgazure', value: `;48;5;${color.AZURE}` },
  { name: 'bglime', value: `;48;5;${color.LIME}` },
  { name: 'bgpink', value: `;48;5;${color.PINK}` },
  { name: 'bgplum', value: `;48;5;${color.PLUM}` },
  { name: 'bgturq', value: `;48;5;${color.TURQ}` },
  { name: 'bgored', value: `;48;5;${color.ORED}` },
  { name: 'bggrey', value: `;48;5;${color.GREY}` },
  { name: 'bgdgrey', value: `;48;5;${color.DGREY}` },
  { name: 'bgddgrey', value: `;48;5;${color.DDGREY}` },
  { name: 'bglgrey', value: `;48;5;${color.LGREY}` },
  { name: 'bgllgrey', value: `;48;5;${color.LLGREY}` },
  { name: 'bglbrown', value: `;48;5;${color.LBROWN}` }
]

describe('Colorfy', () => {
  tb.define('first-line', () => {
    const cf = colorfy()
    cf.addTextItem('\u001b[;1m', 'Hello World')
    return cf
  })

  tb.define('first-line-indent', () => {
    const cf = colorfy({ indention: 1 })
    cf.addTextItem('\u001b[;1m', 'Hello World')
    return cf
  })

  tb.define('second-line', (cf) => {
    cf.nl()
    cf.addTextItem('', 'everything is awesome')
    return cf
  })

  tb.define('third-line', (cf) => {
    cf.addTextItem('\u001b[38;5;34;m', '...\nabsolutely\neverything')
    return cf
  })

  describe('colorfy()', () => {
    it('Returns a colorfy object', () => {
      const cf = colorfy()
      inspect(cf).isObject()
      inspect(cf).hasMethod('txt')
      inspect(cf).hasMethod('colorfy')
      inspect(cf).hasKey('lines')
      inspect(cf.lines).isArray()
    })

    it('creates a plain text item without any formating', () => {
      const cf = colorfy('Hello World!')
      inspect(cf.lines).hasLength(0)
      inspect(cf.curLine).isEql({
        indention: 0,
        values: [[
          '',
          'Hello World!'
        ]]})
    })

    it('renders a plain text string without any formating, colors disabled', () => {
      const cf = colorfy('Hello World!')
      const str = cf.colorfy(false)
      inspect(str).isEql('Hello World!')
    })

    it('renders a plain text string without any formating, colors enabled', () => {
      const cf = colorfy('Hello World!')
      const str = cf.colorfy(true)
      inspect(str).isEql('Hello World!')
    })
  })

  describe('txt()', () => {
    it('Creates a plain text item without any colorizing', () => {
      const cf = colorfy()
      cf.txt('Hello World!')
      inspect(cf.curLine).isEql({
        indention: 0,
        values: [[
          '',
          'Hello World!'
        ]]})
    })

    it('renders a plain text string without any formating, colors disabled', () => {
      const cf = colorfy('Hello World!')
      const str = cf.colorfy(false)
      inspect(str).isEql('Hello World!')
    })

    it('renders a plain text string without any formating, colors enabled', () => {
      const cf = colorfy('Hello World!')
      const str = cf.colorfy(true)
      inspect(str).isEql('Hello World!')
    })
  })

  describe('ansi()', () => {
    it('Creates a colorized text item without any colorizing', () => {
      const cf = colorfy()
      cf.ansi(123, 'Hello World!')
      inspect(cf.curLine).isEql({
        indention: 0,
        values: [[
          '\u001b[38;5;123m',
          'Hello World!'
        ]]})
    })

    it('renders a colorized text string without any formating, colors disabled', () => {
      const cf = colorfy()
      cf.ansi(123, 'Hello World!')
      const str = cf.colorfy(false)
      inspect(str).isEql('Hello World!')
    })

    it('renders a colorized text string without any formating, colors enabled', () => {
      const cf = colorfy()
      cf.ansi(123, 'Hello World!')
      const str = cf.colorfy(true)
      inspect(str).isEql('\u001b[38;5;123mHello World!\u001b[m')
    })
  })

  color.colorMethods.forEach((test) => {
    describe(`${test.name}()`, () => {
      it('Creates a colorized text item without any colorizing', () => {
        const cf = colorfy()
        cf[test.name]('Hello World!')
        inspect(cf.curLine).isEql({
          indention: 0,
          values: [[
            `\u001b[38;5;${test.color}m`,
            'Hello World!'
          ]]})
      })

      it('renders a colorized text string, colors disabled', () => {
        const cf = colorfy()
        cf.ansi(test.color, 'Hello World!')
        const str = cf.colorfy(false)
        inspect(str).isEql('Hello World!')
      })

      it('renders a colorized text string, colors enabled', () => {
        const cf = colorfy()
        cf.ansi(test.color, 'Hello World!')
        const str = cf.colorfy(true)
        inspect(str).isEql(`\u001b[38;5;${test.color}mHello World!\u001b[m`)
      })

      stylings.forEach((style) => {
        it(`renders a colorized ${style.name} text string (#${test.color})`, () => {
          const cf = colorfy()
          cf.ansi(test.color, 'Hello World!', style.name)
          const str = cf.colorfy(true)
          inspect(str).isEql(`\u001b[38;5;${test.color}${style.value}mHello World!\u001b[m`)
        })
      })
    })
  })

  describe('addTextItem()', () => {
    it('has a curLine property', () => {
      const cf = tb.run(['first-line'])
      inspect(cf.curLine).isEql({
        values: [['\u001b[;1m', 'Hello World']],
        indention: 0
      })

      inspect(cf.lines).isArray().hasLength(0)
    })

    it('push styled lines into the buffer', () => {
      const cf = tb.run(['first-line', 'second-line'])

      inspect(cf.curLine).isEql({
        values: [
          ['', 'everything is awesome']
        ],
        indention: 0
      })

      inspect(cf.lines).isArray().hasLength(1)
    })

    it('push more lines', () => {
      const cf = tb.run(['first-line', 'second-line', 'third-line'])

      inspect(cf.curLine).isEql({
        values: [
          ['\u001b[38;5;34;m', 'everything']

        ],
        indention: 0
      })

      inspect(cf.lines).isArray().hasLength(3)
    })

    it('lines is an array of line items', () => {
      const cf = tb.run(['first-line', 'second-line', 'third-line'])

      inspect(cf.lines).isEql([
        { indention: 0, values: [ ['\u001b[;1m', 'Hello World'] ] },
        { indention: 0, values: [ ['', 'everything is awesome'], ['\u001b[38;5;34;m', '...'] ] },
        { indention: 0, values: [ ['\u001b[38;5;34;m', 'absolutely'] ] }
      ])
    })
  })

  describe('flush()', () => {
    it('Flushes all buffered lines and returns it as a string', () => {
      const cf = tb.run(['first-line', 'second-line', 'third-line'])
      const str = cf.flush(true)
      inspect(str).isEql(
        '\u001b[;1mHello World\u001b[m\n' +
        'everything is awesome\u001b[38;5;34;m...\u001b[m\n' +
        '\u001b[38;5;34;mabsolutely\u001b[m\n' +
        '\u001b[38;5;34;meverything\u001b[m'
      )
    })

    it('Flushes all buffered lines and returns it as a string, with an indention of 1', () => {
      const cf = tb.run(['first-line-indent', 'second-line', 'third-line'])
      const str = cf.flush(true)
      inspect(str).isEql(
        ' \u001b[;1mHello World\u001b[m\n' +
        ' everything is awesome\u001b[38;5;34;m...\u001b[m\n' +
        ' \u001b[38;5;34;mabsolutely\u001b[m\n' +
        ' \u001b[38;5;34;meverything\u001b[m'
      )
    })
  })

  describe('Static methods', () => {
    color.colorMethods.forEach((method) => {
      it(`${method.name}() is a static method`, () => {
        inspect(colorfy).hasMethod(method.name)
      })

      it(`${method.name}() returns a colorized string`, () => {
        const str = colorfy[method.name]('colorized')
        inspect(str).isEql(`\u001b[38;5;${method.color}mcolorized\u001b[m`)
      })
    })

    it(`ansi() is a static method`, () => {
      inspect(colorfy).hasMethod('ansi')
    })

    it(`ansi() returns a colorized string`, () => {
      const str = colorfy.ansi(color.RED, 'colorized')
      inspect(str).isEql(`\u001b[38;5;${color.RED}mcolorized\u001b[m`)
    })
  })
})
