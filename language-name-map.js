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
