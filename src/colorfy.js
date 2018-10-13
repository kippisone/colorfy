'use strict'

const color = require('./colors')

class Colorfy {
  constructor () {
    this.lines = []
    this.curLine = {
      values: [],
      indention: 0
    }

    this.__config = {
      autoJoin: false,
      indention: 0
    }

    this.__indention = 0
    this.trimLeft = true
    this.isTTY = process.stdout.isTTY
  }

  config (conf) {
    Object.assign(this.__config, conf)
    if (conf.indention) {
      this.__indention = this.__config.indention
      if (this.lines.length === 0) {
        this.curLine.indention = this.__config.indention
      }
    }
    return this
  }

  indent (size) {
    if (size) {
      this.__indention += size
    }

    if (this.lines.length === 0) {
      this.curLine.indention = size
    }

    return this.nl()
  }

  reset () {
    this.__indention = 0
    return this.nl()
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
      this.addTextItem(this.getColorCode(color.RED, styles), text)
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
      this.addTextItem(this.getColorCode(color.DRED, styles), text)
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
      this.addTextItem(this.getColorCode(color.YELLOW, styles), text)
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
      this.addTextItem(this.getColorCode(color.GREEN, styles), text)
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
      this.addTextItem(this.getColorCode(color.DGREEN, styles), text)
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
      this.addTextItem(this.getColorCode(color.BLUE, styles), text)
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
      this.addTextItem(this.getColorCode(color.DBLUE, styles), text)
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
      this.addTextItem(this.getColorCode(color.FIRE, styles), text)
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
      this.addTextItem(this.getColorCode(color.ORANGE, styles), text)
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
      this.addTextItem(this.getColorCode(color.AZURE, styles), text)
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
      this.addTextItem(this.getColorCode(color.LIME, styles), text)
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
      this.addTextItem(this.getColorCode(color.PINK, styles), text)
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
      this.addTextItem(this.getColorCode(color.PLUM, styles), text)
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
      this.addTextItem(this.getColorCode(color.TURQ, styles), text)
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
      this.addTextItem(this.getColorCode(color.ORED, styles), text)
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
      this.addTextItem(this.getColorCode(color.GREY, styles), text)
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
      this.addTextItem(this.getColorCode(color.DGREY, styles), text)
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
      this.addTextItem(this.getColorCode(color.DDGREY, styles), text)
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
      this.addTextItem(this.getColorCode(color.LGREY, styles), text)
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
      this.addTextItem(this.getColorCode(color.BLACK, styles), text)
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
      this.addTextItem(this.getColorCode(color.WHITE, styles), text)
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
      this.addTextItem(this.getColorCode(color.LLGREY, styles), text)
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
      this.addTextItem(this.getColorCode(color.LBROWN, styles), text)
    }

    return this
  }

  /**
   * Draws brown text
   *
   * @method brown
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @chainable
   * @return {object}        Returns this value
   */
  brown (text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(color.BROWN, styles), text)
    }

    return this
  }

  /**
   * Draws text in an 256 ansi color
   *
   * @method ansi
   * @chainable
   * @param  {Number} colorCode   Ansi color code. Must be a range between 0 and 256
   * @param  {String} text   Text to be colorfied
   * @param  {String} styles Text styles (bold underlined)
   * @return {Object}        Returns this value
   */
  ansi (colorCode, text, styles) {
    if (text) {
      this.addTextItem(this.getColorCode(colorCode, styles), text)
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
    this.lines.push(this.curLine)

    if (num) {
      this.lines.push({
        values: [['', num >= 1 ? '\n'.repeat(num - 1) : '']],
        indention: 0
      })
    }

    this.curLine = {
      values: [],
      indention: this.__indention
    }

    return this
  }

  /**
   * Returns a coloried String
   *
   * @return {String} Returns a colorfied string
   */
  colorfy (printColors) {
    return this.flush(typeof printColors === 'boolean' ? printColors : this.isTTY)
  }

  getColorCode (colorCode, styles) {
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
          case 'bgred' : style += ';48;5;' + color.RED; break
          case 'bgdred' : style += ';48;5;' + color.DRED; break
          case 'bgyellow' : style += ';48;5;' + color.YELLOW; break
          case 'bgdgreen' : style += ';48;5;' + color.DGREEN; break
          case 'bggreen' : style += ';48;5;' + color.GREEN; break
          case 'bgblue' : style += ';48;5;' + color.BLUE; break
          case 'bgdblue' : style += ';48;5;' + color.DBLUE; break
          case 'bgfire' : style += ';48;5;' + color.FIRE; break
          case 'bgorange' : style += ';48;5;' + color.ORANGE; break
          case 'bgazure' : style += ';48;5;' + color.AZURE; break
          case 'bglime' : style += ';48;5;' + color.LIME; break
          case 'bgpink' : style += ';48;5;' + color.PINK; break
          case 'bgplum' : style += ';48;5;' + color.PLUM; break
          case 'bgturq' : style += ';48;5;' + color.TURQ; break
          case 'bgored' : style += ';48;5;' + color.ORED; break
          case 'bggrey' : style += ';48;5;' + color.GREY; break
          case 'bgdgrey' : style += ';48;5;' + color.DGREY; break
          case 'bgddgrey' : style += ';48;5;' + color.DDGREY; break
          case 'bglgrey' : style += ';48;5;' + color.LGREY; break
          case 'bgllgrey' : style += ';48;5;' + color.LLGREY; break
          case 'bglbrown' : style += ';48;5;' + color.LBROWN; break
          case 'bgbrown' : style += ';48;5;' + color.BROWN; break
          case 'bgblack' : style += ';48;5;' + color.BLACK; break
          case 'bgwhite' : style += ';48;5;' + color.WHITE; break

          case 'trim':
            this.trimLeft = true
            this.trimRight = true
            break
          default: style += ';' + curStyle; break
        }
      })
    }

    if (colorCode) {
      colorCode = '38;5;' + colorCode
    }

    if (!colorCode && !style) {
      return ''
    }

    return `\u001b[${colorCode}${style}m`
  }

  addTextItem (styles, text) {
    if (!this.trimLeft && this.__config.autoJoin === true) {
      styles = ' ' + styles
    }

    if (!text) {
      return
    }

    text = Array.isArray(text) ? text[2] === 1 ? String(text[0]) : String(text[1]) : String(text)

    const chunks = text.split(/\n/g)
    const firstLine = chunks.shift()
    this.curLine.values.push([styles, firstLine])
    if (chunks !== null) {
      chunks.forEach((line) => {
        this.lines.push(this.curLine)
        this.curLine = {
          values: [[styles, line]],
          indention: this.__indention
        }
      })
    }

    this.trimLeft = this.trimRight
    this.trimRight = false
  }

  getValue (txt) {
    return txt[0] ? txt[0] + txt[1] + '\u001b[m' : txt[1]
  }

  flush (printColors) {
    this.lines.push(this.curLine)
    this.curLine = {
      values: [],
      indention: this.__indention
    }

    const lines = this.lines.map((line) => {
      const indentionStr = line.indention ? ' '.repeat(line.indention) : ''
      return indentionStr + line.values.map((chunk) => {
        if (!printColors) {
          return chunk[1]
        }

        return chunk[0] ? chunk[0] + chunk[1] + '\u001b[m' : chunk[1]
      }).join('')
    }).join('\n')

    this.lines = []
    return lines
  }

  toString () {
    return this.flush()
  }

  /**
   * Prints a colorfied string to the console
   * @param  {Boolean} printColors Set this to false to disable colorfied output
   */
  print (printColors) {
    console.log(this.flush(typeof printColors === 'boolean' ? printColors : this.isTTY))
  }
}

module.exports = function (text, styles) {
  let colorfy = new Colorfy()
  if (text && typeof text === 'object') {
    colorfy.config(text)
    text = null
    styles = null
  }

  if (text) {
    colorfy.txt(text, styles)
  }

  return colorfy
}

module.exports.Colorfy = Colorfy

/**
 * Colorize input in any ansi
 *
 * @static
 * @method ansi
 * @param {str} colorCode Color code
 * @param {str} text Input string
 * @returns {str} Returns a colorized string
 */
module.exports.ansi = (colorCode, text, styles) => {
  const colorfy = new Colorfy()
  return colorfy.ansi(colorCode, text, styles).colorfy(true)
}

/**
 * Colorize input in a color
 *
 * @static
 * @method [color]
 * @param {str} text Input string
 * @returns {str} Returns a colorized string
 */

color.colorMethods.forEach((col) => {
  module.exports[col.name] = (text, styles) => {
    const colorfy = new Colorfy()
    return colorfy.ansi(col.color, text, styles).colorfy(true)
  }
})
