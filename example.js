'use strict';

// ES6
// import { getLangNameFromCode, getLangCodeList } from 'language-name-map';
// import { languageNameMap } from 'language-name-map/map';

// ES5
const { getLangNameFromCode, getLangCodeList } = require('language-name-map')
const languageNameMap = require('language-name-map/map')

console.log(getLangNameFromCode('uk').name);
console.log(getLangNameFromCode('uk').dir);
console.log(getLangNameFromCode('uk').native);
console.log(getLangCodeList());
console.log(languageNameMap);