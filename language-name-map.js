'use strict';

const languageNameMap = require('./map')

module.exports.getLangNameFromCode = function(langCode) {
  if (typeof langCode !== 'string') return undefined
  const code = langCode.toLowerCase()
  if (!languageNameMap.hasOwnProperty(code)) return undefined
  languageNameMap[code].dir = (parseInt(languageNameMap[code].dir) === 1) ? 'ltr':'rtl';
  return languageNameMap[code]
}

module.exports.getLangCodeList = function() {
  let arr = [];
  Object.keys(languageNameMap).forEach((key) => {
    arr.push(key);
  });
  return arr;
}

module.exports.languageNameMap = languageNameMap