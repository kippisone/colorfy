const inspect = require('inspect.js')
const sinon = require('sinon')
inspect.useSinon(sinon)

const colorfy = require('../../')

const COLOR_RED = '160'
const COLOR_DRED = '124'
const COLOR_YELLOW = '226'
const COLOR_GREEN = '34'
const COLOR_DGREEN = '28'
const COLOR_BLUE = '21'
const COLOR_DBLUE = '18'
const COLOR_FIRE = '196'
const COLOR_ORANGE = '208'
const COLOR_AZURE = '33'
const COLOR_LIME = '148'
const COLOR_PINK = '199'
const COLOR_PLUM = '93'
const COLOR_TURQ = '39'
const COLOR_ORED = '202'
const COLOR_GREY = '247'
const COLOR_DGREY = '244'
const COLOR_DDGREY = '241'
const COLOR_LGREY = '250'
const COLOR_LLGREY = '254'
const COLOR_LBROWN = '315'
const COLOR_BLACK = '0'
const COLOR_WHITE = '15'

describe('Colorfy', () => {
  describe('colorfy()', () => {
    it('Returns a colorfy object', () => {
      const cf = colorfy()
      inspect(cf).isObject()
      inspect(cf).hasMethod('txt')
      inspect(cf).hasMethod('colorfy')
      inspect(cf).hasKey('text')
      inspect(cf.text).isArray()
    })

    it('creates a plain text item without any formating', () => {
      const cf = colorfy('Hello World!')
      inspect(cf.text).hasLength(1)
      inspect(cf.text).getItem(0).isArray()
      inspect(cf.text[0]).isEql([
        '',
        'Hello World!'
      ])
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
      inspect(cf.text).hasLength(1)
      inspect(cf.text).getItem(0).isArray()
      inspect(cf.text[0]).isEql([
        '',
        'Hello World!'
      ])
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
      inspect(cf.text).hasLength(1)
      inspect(cf.text).getItem(0).isArray()
      inspect(cf.text[0]).isEql([
        '\u001b[38;5;123m',
        'Hello World!'
      ])
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

  const colorMethods = [
    { name: 'red', color: COLOR_RED },
    { name: 'dred', color: COLOR_DRED },
    { name: 'yellow', color: COLOR_YELLOW },
    { name: 'green', color: COLOR_GREEN },
    { name: 'dgreen', color: COLOR_DGREEN },
    { name: 'blue', color: COLOR_BLUE },
    { name: 'dblue', color: COLOR_DBLUE },
    { name: 'fire', color: COLOR_FIRE },
    { name: 'orange', color: COLOR_ORANGE },
    { name: 'azure', color: COLOR_AZURE },
    { name: 'lime', color: COLOR_LIME },
    { name: 'pink', color: COLOR_PINK },
    { name: 'plum', color: COLOR_PLUM },
    { name: 'turq', color: COLOR_TURQ },
    { name: 'ored', color: COLOR_ORED },
    { name: 'grey', color: COLOR_GREY },
    { name: 'dgrey', color: COLOR_DGREY },
    { name: 'ddgrey', color: COLOR_DDGREY },
    { name: 'lgrey', color: COLOR_LGREY },
    { name: 'llgrey', color: COLOR_LLGREY },
    { name: 'lbrown', color: COLOR_LBROWN },
    { name: 'black', color: COLOR_BLACK },
    { name: 'white', color: COLOR_WHITE }
  ]

  const stylings = [
    { name: 'bold', value: ';1' },
    { name: 'italic', value: ';3' },
    { name: 'underline', value: ';4' },
    { name: 'blink', value: ';5' },
    { name: 'invert', value: ';7' },
    { name: 'bgred', value: `;48;5;${COLOR_RED}` },
    { name: 'bgdred', value: `;48;5;${COLOR_DRED}` },
    { name: 'bgyellow', value: `;48;5;${COLOR_YELLOW}` },
    { name: 'bggreen', value: `;48;5;${COLOR_GREEN}` },
    { name: 'bgdgreen', value: `;48;5;${COLOR_DGREEN}` },
    { name: 'bgblue', value: `;48;5;${COLOR_BLUE}` },
    { name: 'bgdblue', value: `;48;5;${COLOR_DBLUE}` },
    { name: 'bgfire', value: `;48;5;${COLOR_FIRE}` },
    { name: 'bgorange', value: `;48;5;${COLOR_ORANGE}` },
    { name: 'bgazure', value: `;48;5;${COLOR_AZURE}` },
    { name: 'bglime', value: `;48;5;${COLOR_LIME}` },
    { name: 'bgpink', value: `;48;5;${COLOR_PINK}` },
    { name: 'bgplum', value: `;48;5;${COLOR_PLUM}` },
    { name: 'bgturq', value: `;48;5;${COLOR_TURQ}` },
    { name: 'bgored', value: `;48;5;${COLOR_ORED}` },
    { name: 'bggrey', value: `;48;5;${COLOR_GREY}` },
    { name: 'bgdgrey', value: `;48;5;${COLOR_DGREY}` },
    { name: 'bgddgrey', value: `;48;5;${COLOR_DDGREY}` },
    { name: 'bglgrey', value: `;48;5;${COLOR_LGREY}` },
    { name: 'bgllgrey', value: `;48;5;${COLOR_LLGREY}` },
    { name: 'bglbrown', value: `;48;5;${COLOR_LBROWN}` }
  ]

  colorMethods.forEach((test) => {
    describe(`${test.name}()`, () => {
      it('Creates a colorized text item without any colorizing', () => {
        const cf = colorfy()
        cf[test.name]('Hello World!')
        inspect(cf.text).hasLength(1)
        inspect(cf.text).getItem(0).isArray()
        inspect(cf.text[0]).isEql([
          `\u001b[38;5;${test.color}m`,
          'Hello World!'
        ])
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
        it(`renders a colorized ${style.name} text string`, () => {
          const cf = colorfy()
          cf.ansi(test.color, 'Hello World!', style.name)
          const str = cf.colorfy(true)
          inspect(str).isEql(`\u001b[38;5;${test.color}${style.value}mHello World!\u001b[m`)
        })
      })
    })
  })
})
