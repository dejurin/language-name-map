/*!
 * language-name-map v0.2.9
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */

'use strict'

/**
 * @author Yurii Derevych <gkhelloworld@gmail.com>
 * @description A function to lookup the language name for a given locale ISO 639-1 code. In data included: english names, native names and directionality.
 * @example
 *     getLangNameFromCode('uk').name
 *     getLangNameFromCode('uk').native
 *     getLangNameFromCode('uk').dir
 *     getLangCodeList()
 * @public
 * @version 0.2.9
 * @license BSD-2-Clause
 */

const languageNameMap = require('./map')

module.exports.getLangNameFromCode = function (langCode) {
  if (typeof langCode !== 'string') return undefined
  const code = langCode.toLowerCase()
  if (!{}.hasOwnProperty.call(languageNameMap, code)) return undefined
  return {
    name: languageNameMap[code].name,
    native: languageNameMap[code].native,
    dir: (Number(languageNameMap[code].dir) === 1) ? 'ltr' : 'rtl'
  }
}

module.exports.getLangCodeList = function () {
  const arr = []
  Object.keys(languageNameMap).forEach((key) => {
    arr.push(key)
  })
  return arr
}

module.exports.languageNameMap = languageNameMap
