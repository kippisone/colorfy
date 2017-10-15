'use strict'

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

class Colorfy {
  constructor () {
    this.text = []
  }

  /**
   * Draws red text
   *
   * @method red
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  red (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_RED, styles), text)
    }
    return this
  }

  /**
   * Draws dark red text
   *
   * @method dred
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  dred (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_DRED, styles), text)
    }
    return this
  }

  /**
   * Draws yellow text
   *
   * @method yellow
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  yellow (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_YELLOW, styles), text)
    }

    return this
  }

  /**
   * Draws green text
   *
   * @method green
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  green (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_GREEN, styles), text)
    }

    return this
  }

  /**
   * Draws dark green text
   *
   * @method dgreen
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  dgreen (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_DGREEN, styles), text)
    }

    return this
  }

  /**
   * Draws blue text
   *
   * @method blue
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  blue (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_BLUE, styles), text)
    }

    return this
  }

  /**
   * Draws dark blue text
   *
   * @method dblue
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  dblue (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_DBLUE, styles), text)
    }

    return this
  }

  /**
   * Draws fire text
   *
   * @method fire
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  fire (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_FIRE, styles), text)
    }

    return this
  }

  /**
   * Draws orange text
   *
   * @method orange
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  orange (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_ORANGE, styles), text)
    }

    return this
  }

  /**
   * Draws azure text
   *
   * @method azure
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  azure (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_AZURE, styles), text)
    }

    return this
  }

  /**
   * Draws lime text
   *
   * @method lime
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  lime (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_LIME, styles), text)
    }

    return this
  }

  /**
   * Draws pink text
   *
   * @method pink
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  pink (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_PINK, styles), text)
    }

    return this
  }

  /**
   * Draws plum text
   *
   * @method plum
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  plum (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_PLUM, styles), text)
    }

    return this
  }

  /**
   * Draws turq text
   *
   * @method turq
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  turq (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_TURQ, styles), text)
    }

    return this
  }

  /**
   * Draws ored text
   *
   * @method ored
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  ored (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_ORED, styles), text)
    }

    return this
  }

  /**
   * Draws grey text
   *
   * @method grey
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  grey (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_GREY, styles), text)
    }

    return this
  }

  /**
   * Draws dgrey text
   *
   * @method dgrey
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  dgrey (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_DGREY, styles), text)
    }

    return this
  }

  /**
   * Draws ddgrey text
   *
   * @method ddgrey
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  ddgrey (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_DDGREY, styles), text)
    }

    return this
  }

  /**
   * Draws lgrey text
   *
   * @method lgrey
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  lgrey (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_LGREY, styles), text)
    }

    return this
  }

  /**
   * Draws black text
   *
   * @method black
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  black (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_BLACK, styles), text)
    }

    return this
  }

  /**
   * Draws white text
   *
   * @method white
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  white (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_WHITE, styles), text)
    }

    return this
  }

  /**
   * Draws llgrey text
   *
   * @method llgrey
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  llgrey (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_LLGREY, styles), text)
    }

    return this
  }

  /**
   * Draws lbrown text
   *
   * @method lbrown
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  lbrown (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(COLOR_LBROWN, styles), text)
    }

    return this
  }

  /**
   * Draws text in an 256 ansi color
   *
   * @method ansi
   * @chainable
   * @param  {Number} color   Ansi color code. Must be a range between 0 and 256
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @return {Object}        Returns this value
   */
  ansi (color, text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(color, styles), text)
    }

    return this
  }

  /**
   * Colorfies a text depending on a checksum
   *
   * @chainable
   * @param  {String} text   Test to be colorfied
   * @param  {String} styles Test styles (bold, underlined)
   * @return {object}        Returns this value
   */
  auto (text, styles) {
    if (text) {
      let startCode = 30
      let sum = 0
      for (let i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i)
      }

      let colorCode = startCode + parseInt(String(sum).substr(-2)) * 2
      let color = this.getColorCode(colorCode, styles)
      this.addTextItem(color, text)
    }

    return this
  }

  txt (text, styles) {
    if (text) {
      let style = styles ? this.getColorCode('', styles) : ''
      this.addTextItem(style, text)
    }

    return this
  }

  nl (num) {
    this.text.push([null, '\n'.repeat(num || 1)])
    return this
  }

  /**
   * Returns a coloried String
   *
   * @return {String} Returns a colorfied string
   */
  colorfy (printColors) {
    if (printColors === false) {
      return this.text.map(txt => txt[1]).join('')
    }

    let colorfied = this.text.map(txt => {
      if (!txt[0]) {
        return txt[1]
      }
      return txt[0] + txt[1] + '\u001b[m'
    }).join('')

    this.text = []
    return colorfied
  }

  getColorCode (color, styles) {
    let style = ''

    if (styles) {
      styles.split(' ').forEach(curStyle => {
        switch (curStyle) {
          case 'reset': style += ';0'; break
          case 'bold': style += ';1'; break
          case 'italic': style += ';3'; break
          case 'underline': style += ';4'; break
          case 'blink': style += ';5'; break
          case 'invert': style += ';7'; break
          case 'ltrim': this.trimLeft = true; break
          case 'rtrim': this.trimRight = true; break
          case 'bgred' : style += ';48;5;' + COLOR_RED; break
          case 'bgdred' : style += ';48;5;' + COLOR_DRED; break
          case 'bgyellow' : style += ';48;5;' + COLOR_YELLOW; break
          case 'bggreen' : style += ';48;5;' + COLOR_GREEN; break
          case 'bgdgreen' : style += ';48;5;' + COLOR_DGREEN; break
          case 'bgblue' : style += ';48;5;' + COLOR_BLUE; break
          case 'bgdblue' : style += ';48;5;' + COLOR_DBLUE; break
          case 'bgfire' : style += ';48;5;' + COLOR_FIRE; break
          case 'bgorange' : style += ';48;5;' + COLOR_ORANGE; break
          case 'bgazure' : style += ';48;5;' + COLOR_AZURE; break
          case 'bglime' : style += ';48;5;' + COLOR_LIME; break
          case 'bgpink' : style += ';48;5;' + COLOR_PINK; break
          case 'bgplum' : style += ';48;5;' + COLOR_PLUM; break
          case 'bgturq' : style += ';48;5;' + COLOR_TURQ; break
          case 'bgored' : style += ';48;5;' + COLOR_ORED; break
          case 'bggrey' : style += ';48;5;' + COLOR_GREY; break
          case 'bgdgrey' : style += ';48;5;' + COLOR_DGREY; break
          case 'bgddgrey' : style += ';48;5;' + COLOR_DDGREY; break
          case 'bglgrey' : style += ';48;5;' + COLOR_LGREY; break
          case 'bgllgrey' : style += ';48;5;' + COLOR_LLGREY; break
          case 'bglbrown' : style += ';48;5;' + COLOR_LBROWN; break

          case 'trim':
            this.trimLeft = true
            this.trimRight = true
            break
          default: style += ';' + curStyle; break
        }
      })
    }

    if (color || color === 0) {
      color = '38;5;' + color
    }

    return `\u001b[${color}${style}m`
  }

  addTextItem (styles, text) {
    if (!this.trimLeft && styles) {
      styles = ' ' + styles
    }

    if (Array.isArray(text)) {
      text = this.pluralize(text[0], text[1], text[2])
    }

    this.text.push([styles.replace(/^ /, ''), text])
    this.trimLeft = this.trimRight
    this.trimRight = false
  }

  toString () {
    return this.text.map(txt => txt[1]).join(' ').substr(1)
  }

  /**
   * Prints a colorfied string to the console
   * @param  {Boolean} printColors Set this to false to disable colorfied output
   */
  print (printColors) {
    console.log(this.colorfy(printColors))
  }

  pluralize (singular, plural, num) {
    if (num === 1) {
      return singular
    }

    return plural
  }
}

module.exports = function (text, styles) {
  let colorfy = new Colorfy()
  if (text) {
    colorfy.txt(text, styles)
  }

  return colorfy
}

module.exports.Colorfy = Colorfy
