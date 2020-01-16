# language-name-map

A function to lookup the language name for a given locale code. In data included: english names, native names and directionality.

Inspired by https://github.com/bengourley/currency-symbol-map

## Installation

    npm install language-name-map

## Usage

### Get language english name, native name and directionality from locale code
```js
// ES5
const { getLangNameFromCode, getLangCodeList } = require('language-name-map')

// ES6
import { getLangNameFromCode, getLangCodeList } from 'language-name-map'

console.log(getLangNameFromCode('uk').name); // Ukrainian
console.log(getLangNameFromCode('uk').dir); // ltr
console.log(getLangNameFromCode('uk').native); // Українська
console.log(getLangCodeList()); // Shows all the language codes.
// =>
[
  'aa',      'ab',  'af',  'ak',       'als', 'am',
  'an',      'ang', 'ar',  'arc',      'as',  'ast',
  'av',      'awa', 'ay',  'az',       'ba',  'bar',
  'bat-smg', 'bcl', 'be',  'be-x-old', 'bg',  'bh',
  'bi',      'bm',  'bn',  'bo',       'bpy', 'br',
  'bs',      'bug', 'bxr', 'ca',       'cdo', 'ce',
  'ceb',     'ch',  'cho', 'chr',      'chy', 'co',
  'cr',      'cs',  'csb', 'cu',       'cv',  'cy',
  'da',      'de',  'diq', 'dsb',      'dv',  'dz',
  'ee',      'el',  'en',  'eo',       'es',  'et',
  'eu',      'ext', 'fa',  'ff',       'fi',  'fiu-vro',
  'fj',      'fo',  'fr',  'frp',      'fur', 'fy',
  'ga',      'gan', 'gbm', 'gd',       'gil', 'gl',
  'gn',      'got', 'gu',  'gv',       'ha',  'hak',
  'haw',     'he',  'hi',  'ho',       'hr',  'ht',
  'hu',      'hy',  'hz',  'ia',       'id',  'ie',
  'ig',      'ii',  'ik',  'ilo',
  ... 161 more items
]

```

### Exposed map for other processing
```js
// ES5
const languageNameMap = require('language-name-map/map')

// ES6
import languageNameMap from 'language-name-map/map'

console.log(languageNameMap)
// =>
{
  aa: { name: 'Afar', dir: '1', native: 'Afar' },
  ab: { name: 'Abkhazian', dir: '1', native: 'Аҧсуа' },
  af: { name: 'Afrikaans', dir: '1', native: 'Afrikaans' },
  ak: { name: 'Akan', dir: '1', native: 'Akana' },
  als: { name: 'Alemannic', dir: '1', native: 'Alemannisch' },
  ...
```

## Tests
```bash
npm test
```

## Changelog

### 0.2.4
- Add test;
- Test OK

### 0.2.0
- First release;

## Sources
https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## Many thank's
https://currencyrate.today/