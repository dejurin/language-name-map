# language-name-map

[![Build Status](https://travis-ci.org/dejurin/language-name-map.svg?branch=master)](https://travis-ci.org/dejurin/language-name-map) ![npm](https://img.shields.io/npm/v/language-name-map?style=flat) ![npm](https://img.shields.io/npm/dm/language-name-map.svg?style=flat)

A function to lookup the language name for a given locale ISO 639-1 code. In data included: english names, native names and directionality.

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

getLangNameFromCode('uk').name // Ukrainian
getLangNameFromCode('uk').dir // ltr
getLangNameFromCode('uk').native // Українська
getLangCodeList() // Shows all the language codes.
// =>
[
  'aa', 'ab', 'af', 'ak', 'am', 'an', 'ar', 'as', 'av', 'ay', 'az', 'ba',
  'be', 'bg', 'bh', 'bi', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'ce', 'ch',
  'co', 'cr', 'cs', 'cu', 'cv', 'cy', 'da', 'de', 'dv', 'dz', 'ee', 'el',
  'en', 'eo', 'es', 'et', 'eu', 'fa', 'ff', 'fi', 'fj', 'fo', 'fr', 'fy',
  'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'ho', 'hr', 'ht',
  'hu', 'hy', 'hz', 'ia', 'id', 'ie', 'ig', 'ii', 'ik', 'io', 'is', 'it',
  'iu', 'ja', 'jv', 'ka', 'kg', 'ki', 'kj', 'kk', 'kl', 'km', 'kn', 'ko',
  'kr', 'ks', 'ku', 'kv', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln', 'lo',
  'lt', 'lv', 'mg', 'mh', 'mi', 'mk', 'ml', 'mn', 'mo', 'mr', 'ms', 'mt',
  'my', 'na', 'nd', 'ne', 'ng', 'nl', 'nn', 'no', 'nr', 'nv', 'ny', 'oc',
  'oj', 'om', 'or', 'os', 'pa', 'pi', 'pl', 'ps', 'pt', 'qu', 'rm', 'rn',
  'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sk', 'sl',
  'sm', 'sn', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta', 'te',
  'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw', 'ty',
  'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'wo', 'xh', 'yi', 'yo',
  'za', 'zh', 'zu', 'nb'
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
  aa: { name: 'Afar', dir: 1, native: 'Afar' },
  ab: { name: 'Abkhazian', dir: 1, native: 'Аҧсуа' },
  af: { name: 'Afrikaans', dir: 1, native: 'Afrikaans' },
  ak: { name: 'Akan', dir: 1, native: 'Akana' },
  am: { name: 'Amharic', dir: 1, native: 'አማርኛ' },
  an: { name: 'Aragonese', dir: 1, native: 'Aragonés' },
  ar: { name: 'Arabic', dir: 0, native: 'العربية' },
  as: { name: 'Assamese', dir: 1, native: 'অসমীয়া' },
  av: { name: 'Avar', dir: 1, native: 'Авар' },
  ay: { name: 'Aymara', dir: 1, native: 'Aymar' },
  az: { name: 'Azerbaijani', dir: 1, native: 'Azərbaycanca / آذربايجان' },
  ba: { name: 'Bashkir', dir: 1, native: 'Башҡорт' },
  be: { name: 'Belarusian', dir: 1, native: 'Беларуская' },
  bg: { name: 'Bulgarian', dir: 1, native: 'Български' },
  bh: { name: 'Bihari', dir: 1, native: 'भोजपुरी' },
  bi: { name: 'Bislama', dir: 1, native: 'Bislama' },
  bm: { name: 'Bambara', dir: 1, native: 'Bamanankan' },
  bn: { name: 'Bengali', dir: 1, native: 'বাংলা' },
  bo: { name: 'Tibetan', dir: 1, native: 'བོད་ཡིག / Bod skad' },
  br: { name: 'Breton', dir: 1, native: 'Brezhoneg' },
  bs: { name: 'Bosnian', dir: 1, native: 'Bosanski' },
  ca: { name: 'Catalan', dir: 1, native: 'Català' },
  ce: { name: 'Chechen', dir: 1, native: 'Нохчийн' },
  ch: { name: 'Chamorro', dir: 1, native: 'Chamoru' },
  co: { name: 'Corsican', dir: 1, native: 'Corsu' },
  cr: { name: 'Cree', dir: 1, native: 'Nehiyaw' },
  cs: { name: 'Czech', dir: 1, native: 'Česky' },
  cu: {
    name: 'Old Church Slavonic / Old Bulgarian',
    dir: 1,
    native: 'словѣньскъ / slověnĭskŭ'
  },
  cv: { name: 'Chuvash', dir: 1, native: 'Чăваш' },
  cy: { name: 'Welsh', dir: 1, native: 'Cymraeg' },
  da: { name: 'Danish', dir: 1, native: 'Dansk' },
  de: { name: 'German', dir: 1, native: 'Deutsch' },
  dv: { name: 'Divehi', dir: 0, native: 'ދިވެހިބަސް' },
  dz: { name: 'Dzongkha', dir: 1, native: 'ཇོང་ཁ' },
  ee: { name: 'Ewe', dir: 1, native: 'Ɛʋɛ' },
  el: { name: 'Greek', dir: 1, native: 'Ελληνικά' },
  en: { name: 'English', dir: 1, native: 'English' },
  eo: { name: 'Esperanto', dir: 1, native: 'Esperanto' },
  es: { name: 'Spanish', dir: 1, native: 'Español' },
  et: { name: 'Estonian', dir: 1, native: 'Eesti' },
  eu: { name: 'Basque', dir: 1, native: 'Euskara' },
  fa: { name: 'Persian', dir: 0, native: 'فارسی' },
  ff: { name: 'Peul', dir: 1, native: 'Fulfulde' },
  fi: { name: 'Finnish', dir: 1, native: 'Suomi' },
  fj: { name: 'Fijian', dir: 1, native: 'Na Vosa Vakaviti' },
  fo: { name: 'Faroese', dir: 1, native: 'Føroyskt' },
  fr: { name: 'French', dir: 1, native: 'Français' },
  fy: { name: 'West Frisian', dir: 1, native: 'Frysk' },
  ga: { name: 'Irish', dir: 1, native: 'Gaeilge' },
  gd: { name: 'Scottish Gaelic', dir: 1, native: 'Gàidhlig' },
  gl: { name: 'Galician', dir: 1, native: 'Galego' },
  gn: { name: 'Guarani', dir: 1, native: "Avañe'ẽ" },
  gu: { name: 'Gujarati', dir: 1, native: 'ગુજરાતી' },
  gv: { name: 'Manx', dir: 1, native: 'Gaelg' },
  ha: { name: 'Hausa', dir: 0, native: 'هَوُسَ' },
  he: { name: 'Hebrew', dir: 0, native: 'עברית' },
  hi: { name: 'Hindi', dir: 1, native: 'हिन्दी' },
  ho: { name: 'Hiri Motu', dir: 1, native: 'Hiri Motu' },
  hr: { name: 'Croatian', dir: 1, native: 'Hrvatski' },
  ht: { name: 'Haitian', dir: 1, native: 'Krèyol ayisyen' },
  hu: { name: 'Hungarian', dir: 1, native: 'Magyar' },
  hy: { name: 'Armenian', dir: 1, native: 'Հայերեն' },
  hz: { name: 'Herero', dir: 1, native: 'Otsiherero' },
  ia: { name: 'Interlingua', dir: 1, native: 'Interlingua' },
  id: { name: 'Indonesian', dir: 1, native: 'Bahasa Indonesia' },
  ie: { name: 'Interlingue', dir: 1, native: 'Interlingue' },
  ig: { name: 'Igbo', dir: 1, native: 'Igbo' },
  ii: { name: 'Sichuan Yi', dir: 1, native: 'ꆇꉙ / 四川彝语' },
  ik: { name: 'Inupiak', dir: 1, native: 'Iñupiak' },
  io: { name: 'Ido', dir: 1, native: 'Ido' },
  is: { name: 'Icelandic', dir: 1, native: 'Íslenska' },
  it: { name: 'Italian', dir: 1, native: 'Italiano' },
  iu: { name: 'Inuktitut', dir: 1, native: 'ᐃᓄᒃᑎᑐᑦ' },
  ja: { name: 'Japanese', dir: 1, native: '日本語' },
  jv: { name: 'Javanese', dir: 1, native: 'Basa Jawa' },
  ka: { name: 'Georgian', dir: 1, native: 'ქართული' },
  kg: { name: 'Kongo', dir: 1, native: 'KiKongo' },
  ki: { name: 'Kikuyu', dir: 1, native: 'Gĩkũyũ' },
  kj: { name: 'Kuanyama', dir: 1, native: 'Kuanyama' },
  kk: { name: 'Kazakh', dir: 1, native: 'Қазақша' },
  kl: { name: 'Greenlandic', dir: 1, native: 'Kalaallisut' },
  km: { name: 'Cambodian', dir: 1, native: 'ភាសាខ្មែរ' },
  kn: { name: 'Kannada', dir: 1, native: 'ಕನ್ನಡ' },
  ko: { name: 'Korean', dir: 1, native: '한국어' },
  kr: { name: 'Kanuri', dir: 1, native: 'Kanuri' },
  ks: { name: 'Kashmiri', dir: 0, native: 'कश्मीरी / كشميري' },
  ku: { name: 'Kurdish', dir: 0, native: 'Kurdî / كوردی' },
  kv: { name: 'Komi', dir: 1, native: 'Коми' },
  kw: { name: 'Cornish', dir: 1, native: 'Kernewek' },
  ky: { name: 'Kirghiz', dir: 1, native: 'Kırgızca / Кыргызча' },
  la: { name: 'Latin', dir: 1, native: 'Latina' },
  lb: { name: 'Luxembourgish', dir: 1, native: 'Lëtzebuergesch' },
  lg: { name: 'Ganda', dir: 1, native: 'Luganda' },
  li: { name: 'Limburgian', dir: 1, native: 'Limburgs' },
  ln: { name: 'Lingala', dir: 1, native: 'Lingála' },
  lo: { name: 'Laotian', dir: 1, native: 'ລາວ / Pha xa lao' },
  lt: { name: 'Lithuanian', dir: 1, native: 'Lietuvių' },
  lv: { name: 'Latvian', dir: 1, native: 'Latviešu' },
  mg: { name: 'Malagasy', dir: 1, native: 'Malagasy' },
  mh: { name: 'Marshallese', dir: 1, native: 'Kajin Majel / Ebon' },
  mi: { name: 'Maori', dir: 1, native: 'Māori' },
  mk: { name: 'Macedonian', dir: 1, native: 'Македонски' },
  ml: { name: 'Malayalam', dir: 1, native: 'മലയാളം' },
  mn: { name: 'Mongolian', dir: 1, native: 'Монгол' },
  mo: { name: 'Moldovan', dir: 1, native: 'Moldovenească' },
  mr: { name: 'Marathi', dir: 1, native: 'मराठी' },
  ms: { name: 'Malay', dir: 1, native: 'Bahasa Melayu' },
  mt: { name: 'Maltese', dir: 1, native: 'bil-Malti' },
  my: { name: 'Burmese', dir: 1, native: 'Myanmasa' },
  na: { name: 'Nauruan', dir: 1, native: 'Dorerin Naoero' },
  nd: { name: 'North Ndebele', dir: 1, native: 'Sindebele' },
  ne: { name: 'Nepali', dir: 1, native: 'नेपाली' },
  ng: { name: 'Ndonga', dir: 1, native: 'Oshiwambo' },
  nl: { name: 'Dutch', dir: 1, native: 'Nederlands' },
  nn: { name: 'Norwegian Nynorsk', dir: 1, native: 'Norsk (nynorsk)' },
  no: { name: 'Norwegian', dir: 1, native: 'Norsk (bokmål / riksmål)' },
  nr: { name: 'South Ndebele', dir: 1, native: 'isiNdebele' },
  nv: { name: 'Navajo', dir: 1, native: 'Diné bizaad' },
  ny: { name: 'Chichewa', dir: 1, native: 'Chi-Chewa' },
  oc: { name: 'Occitan', dir: 1, native: 'Occitan' },
  oj: { name: 'Ojibwa', dir: 1, native: 'ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin' },
  om: { name: 'Oromo', dir: 1, native: 'Oromoo' },
  or: { name: 'Oriya', dir: 1, native: 'ଓଡ଼ିଆ' },
  os: { name: 'Ossetian / Ossetic', dir: 1, native: 'Иронау' },
  pa: {
    name: 'Panjabi / Punjabi',
    dir: 1,
    native: 'ਪੰਜਾਬੀ / पंजाबी / پنجابي'
  },
  pi: { name: 'Pali', dir: 1, native: 'Pāli / पाऴि' },
  pl: { name: 'Polish', dir: 1, native: 'Polski' },
  ps: { name: 'Pashto', dir: 0, native: 'پښتو' },
  pt: { name: 'Portuguese', dir: 1, native: 'Português' },
  qu: { name: 'Quechua', dir: 1, native: 'Runa Simi' },
  rm: { name: 'Raeto Romance', dir: 1, native: 'Rumantsch' },
  rn: { name: 'Kirundi', dir: 1, native: 'Kirundi' },
  ro: { name: 'Romanian', dir: 1, native: 'Română' },
  ru: { name: 'Russian', dir: 1, native: 'Русский' },
  rw: { name: 'Rwandi', dir: 1, native: 'Kinyarwandi' },
  sa: { name: 'Sanskrit', dir: 1, native: 'संस्कृतम्' },
  sc: { name: 'Sardinian', dir: 1, native: 'Sardu' },
  sd: { name: 'Sindhi', dir: 1, native: 'सिनधि' },
  se: { name: 'Northern Sami', dir: 1, native: 'Davvisámegiella' },
  sg: { name: 'Sango', dir: 1, native: 'Sängö' },
  sh: {
    name: 'Serbo-Croatian',
    dir: 1,
    native: 'Srpskohrvatski / Српскохрватски'
  },
  si: { name: 'Sinhalese', dir: 1, native: 'සිංහල' },
  sk: { name: 'Slovak', dir: 1, native: 'Slovenčina' },
  sl: { name: 'Slovenian', dir: 1, native: 'Slovenščina' },
  sm: { name: 'Samoan', dir: 1, native: 'Gagana Samoa' },
  sn: { name: 'Shona', dir: 1, native: 'chiShona' },
  so: { name: 'Somalia', dir: 1, native: 'Soomaaliga' },
  sq: { name: 'Albanian', dir: 1, native: 'Shqip' },
  sr: { name: 'Serbian', dir: 1, native: 'Српски' },
  ss: { name: 'Swati', dir: 1, native: 'SiSwati' },
  st: { name: 'Southern Sotho', dir: 1, native: 'Sesotho' },
  su: { name: 'Sundanese', dir: 1, native: 'Basa Sunda' },
  sv: { name: 'Swedish', dir: 1, native: 'Svenska' },
  sw: { name: 'Swahili', dir: 1, native: 'Kiswahili' },
  ta: { name: 'Tamil', dir: 1, native: 'தமிழ்' },
  te: { name: 'Telugu', dir: 1, native: 'తెలుగు' },
  tg: { name: 'Tajik', dir: 1, native: 'Тоҷикӣ' },
  th: { name: 'Thai', dir: 1, native: 'ไทย / Phasa Thai' },
  ti: { name: 'Tigrinya', dir: 1, native: 'ትግርኛ' },
  tk: { name: 'Turkmen', dir: 1, native: 'Туркмен / تركمن' },
  tl: { name: 'Tagalog', dir: 1, native: 'Tagalog' },
  tn: { name: 'Tswana', dir: 1, native: 'Setswana' },
  to: { name: 'Tonga', dir: 1, native: 'Lea Faka-Tonga' },
  tr: { name: 'Turkish', dir: 1, native: 'Türkçe' },
  ts: { name: 'Tsonga', dir: 1, native: 'Xitsonga' },
  tt: { name: 'Tatar', dir: 1, native: 'Tatarça' },
  tw: { name: 'Twi', dir: 1, native: 'Twi' },
  ty: { name: 'Tahitian', dir: 1, native: 'Reo Mā`ohi' },
  ug: { name: 'Uyghur', dir: 1, native: 'Uyƣurqə / ئۇيغۇرچە' },
  uk: { name: 'Ukrainian', dir: 1, native: 'Українська' },
  ur: { name: 'Urdu', dir: 0, native: 'اردو' },
  uz: { name: 'Uzbek', dir: 1, native: 'Ўзбек' },
  ve: { name: 'Venda', dir: 1, native: 'Tshivenḓa' },
  vi: { name: 'Vietnamese', dir: 1, native: 'Việtnam' },
  vo: { name: 'Volapük', dir: 1, native: 'Volapük' },
  wa: { name: 'Walloon', dir: 1, native: 'Walon' },
  wo: { name: 'Wolof', dir: 1, native: 'Wollof' },
  xh: { name: 'Xhosa', dir: 1, native: 'isiXhosa' },
  yi: { name: 'Yiddish', dir: 0, native: 'ייִדיש' },
  yo: { name: 'Yoruba', dir: 1, native: 'Yorùbá' },
  za: { name: 'Zhuang', dir: 1, native: 'Cuengh / Tôô / 壮语' },
  zh: { name: 'Chinese', dir: 1, native: '中文' },
  zu: { name: 'Zulu', dir: 1, native: 'isiZulu' },
  nb: { name: 'Norwegian Bokmål', dir: 1, native: 'Norsk (bokmål)' }
}
```

## Tests
```bash
npm test
```

## List of ISO 639-1 codes
### List of language names ordered by code
|  #  |  Code  |  Name  |  Native  |  Dir  |
|-----|--------|--------|----------|-------|
| 1 | aa | Afar | Afar | ltr |
| 2 | ab | Abkhazian | Аҧсуа | ltr |
| 3 | af | Afrikaans | Afrikaans | ltr |
| 4 | ak | Akan | Akana | ltr |
| 5 | am | Amharic | አማርኛ | ltr |
| 6 | an | Aragonese | Aragonés | ltr |
| 7 | ar | Arabic | العربية | rtl |
| 8 | as | Assamese | অসমীয়া | ltr |
| 9 | av | Avar | Авар | ltr |
| 10 | ay | Aymara | Aymar | ltr |
| 11 | az | Azerbaijani | Azərbaycanca / آذربايجان | ltr |
| 12 | ba | Bashkir | Башҡорт | ltr |
| 13 | be | Belarusian | Беларуская | ltr |
| 14 | bg | Bulgarian | Български | ltr |
| 15 | bh | Bihari | भोजपुरी | ltr |
| 16 | bi | Bislama | Bislama | ltr |
| 17 | bm | Bambara | Bamanankan | ltr |
| 18 | bn | Bengali | বাংলা | ltr |
| 19 | bo | Tibetan | བོད་ཡིག / Bod skad | ltr |
| 20 | br | Breton | Brezhoneg | ltr |
| 21 | bs | Bosnian | Bosanski | ltr |
| 22 | ca | Catalan | Català | ltr |
| 23 | ce | Chechen | Нохчийн | ltr |
| 24 | ch | Chamorro | Chamoru | ltr |
| 25 | co | Corsican | Corsu | ltr |
| 26 | cr | Cree | Nehiyaw | ltr |
| 27 | cs | Czech | Česky | ltr |
| 28 | cu | Old Church Slavonic / Old Bulgarian | словѣньскъ / slověnĭskŭ | ltr |
| 29 | cv | Chuvash | Чăваш | ltr |
| 30 | cy | Welsh | Cymraeg | ltr |
| 31 | da | Danish | Dansk | ltr |
| 32 | de | German | Deutsch | ltr |
| 33 | dv | Divehi | ދިވެހިބަސް | rtl |
| 34 | dz | Dzongkha | ཇོང་ཁ | ltr |
| 35 | ee | Ewe | Ɛʋɛ | ltr |
| 36 | el | Greek | Ελληνικά | ltr |
| 37 | en | English | English | ltr |
| 38 | eo | Esperanto | Esperanto | ltr |
| 39 | es | Spanish | Español | ltr |
| 40 | et | Estonian | Eesti | ltr |
| 41 | eu | Basque | Euskara | ltr |
| 42 | fa | Persian | فارسی | rtl |
| 43 | ff | Peul | Fulfulde | ltr |
| 44 | fi | Finnish | Suomi | ltr |
| 45 | fj | Fijian | Na Vosa Vakaviti | ltr |
| 46 | fo | Faroese | Føroyskt | ltr |
| 47 | fr | French | Français | ltr |
| 48 | fy | West Frisian | Frysk | ltr |
| 49 | ga | Irish | Gaeilge | ltr |
| 50 | gd | Scottish Gaelic | Gàidhlig | ltr |
| 51 | gl | Galician | Galego | ltr |
| 52 | gn | Guarani | Avañe'ẽ | ltr |
| 53 | gu | Gujarati | ગુજરાતી | ltr |
| 54 | gv | Manx | Gaelg | ltr |
| 55 | ha | Hausa | هَوُسَ | rtl |
| 56 | he | Hebrew | עברית | rtl |
| 57 | hi | Hindi | हिन्दी | ltr |
| 58 | ho | Hiri Motu | Hiri Motu | ltr |
| 59 | hr | Croatian | Hrvatski | ltr |
| 60 | ht | Haitian | Krèyol ayisyen | ltr |
| 61 | hu | Hungarian | Magyar | ltr |
| 62 | hy | Armenian | Հայերեն | ltr |
| 63 | hz | Herero | Otsiherero | ltr |
| 64 | ia | Interlingua | Interlingua | ltr |
| 65 | id | Indonesian | Bahasa Indonesia | ltr |
| 66 | ie | Interlingue | Interlingue | ltr |
| 67 | ig | Igbo | Igbo | ltr |
| 68 | ii | Sichuan Yi | ꆇꉙ / 四川彝语 | ltr |
| 69 | ik | Inupiak | Iñupiak | ltr |
| 70 | io | Ido | Ido | ltr |
| 71 | is | Icelandic | Íslenska | ltr |
| 72 | it | Italian | Italiano | ltr |
| 73 | iu | Inuktitut | ᐃᓄᒃᑎᑐᑦ | ltr |
| 74 | ja | Japanese | 日本語 | ltr |
| 75 | jv | Javanese | Basa Jawa | ltr |
| 76 | ka | Georgian | ქართული | ltr |
| 77 | kg | Kongo | KiKongo | ltr |
| 78 | ki | Kikuyu | Gĩkũyũ | ltr |
| 79 | kj | Kuanyama | Kuanyama | ltr |
| 80 | kk | Kazakh | Қазақша | ltr |
| 81 | kl | Greenlandic | Kalaallisut | ltr |
| 82 | km | Cambodian | ភាសាខ្មែរ | ltr |
| 83 | kn | Kannada | ಕನ್ನಡ | ltr |
| 84 | ko | Korean | 한국어 | ltr |
| 85 | kr | Kanuri | Kanuri | ltr |
| 86 | ks | Kashmiri | कश्मीरी / كشميري | rtl |
| 87 | ku | Kurdish | Kurdî / كوردی | rtl |
| 88 | kv | Komi | Коми | ltr |
| 89 | kw | Cornish | Kernewek | ltr |
| 90 | ky | Kirghiz | Kırgızca / Кыргызча | ltr |
| 91 | la | Latin | Latina | ltr |
| 92 | lb | Luxembourgish | Lëtzebuergesch | ltr |
| 93 | lg | Ganda | Luganda | ltr |
| 94 | li | Limburgian | Limburgs | ltr |
| 95 | ln | Lingala | Lingála | ltr |
| 96 | lo | Laotian | ລາວ / Pha xa lao | ltr |
| 97 | lt | Lithuanian | Lietuvių | ltr |
| 98 | lv | Latvian | Latviešu | ltr |
| 99 | mg | Malagasy | Malagasy | ltr |
| 100 | mh | Marshallese | Kajin Majel / Ebon | ltr |
| 101 | mi | Maori | Māori | ltr |
| 102 | mk | Macedonian | Македонски | ltr |
| 103 | ml | Malayalam | മലയാളം | ltr |
| 104 | mn | Mongolian | Монгол | ltr |
| 105 | mo | Moldovan | Moldovenească | ltr |
| 106 | mr | Marathi | मराठी | ltr |
| 107 | ms | Malay | Bahasa Melayu | ltr |
| 108 | mt | Maltese | bil-Malti | ltr |
| 109 | my | Burmese | Myanmasa | ltr |
| 110 | na | Nauruan | Dorerin Naoero | ltr |
| 111 | nd | North Ndebele | Sindebele | ltr |
| 112 | ne | Nepali | नेपाली | ltr |
| 113 | ng | Ndonga | Oshiwambo | ltr |
| 114 | nl | Dutch | Nederlands | ltr |
| 115 | nn | Norwegian Nynorsk | Norsk (nynorsk) | ltr |
| 116 | no | Norwegian | Norsk (bokmål / riksmål) | ltr |
| 117 | nr | South Ndebele | isiNdebele | ltr |
| 118 | nv | Navajo | Diné bizaad | ltr |
| 119 | ny | Chichewa | Chi-Chewa | ltr |
| 120 | oc | Occitan | Occitan | ltr |
| 121 | oj | Ojibwa | ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin | ltr |
| 122 | om | Oromo | Oromoo | ltr |
| 123 | or | Oriya | ଓଡ଼ିଆ | ltr |
| 124 | os | Ossetian / Ossetic | Иронау | ltr |
| 125 | pa | Panjabi / Punjabi | ਪੰਜਾਬੀ / पंजाबी / پنجابي | ltr |
| 126 | pi | Pali | Pāli / पाऴि | ltr |
| 127 | pl | Polish | Polski | ltr |
| 128 | ps | Pashto | پښتو | rtl |
| 129 | pt | Portuguese | Português | ltr |
| 130 | qu | Quechua | Runa Simi | ltr |
| 131 | rm | Raeto Romance | Rumantsch | ltr |
| 132 | rn | Kirundi | Kirundi | ltr |
| 133 | ro | Romanian | Română | ltr |
| 134 | ru | Russian | Русский | ltr |
| 135 | rw | Rwandi | Kinyarwandi | ltr |
| 136 | sa | Sanskrit | संस्कृतम् | ltr |
| 137 | sc | Sardinian | Sardu | ltr |
| 138 | sd | Sindhi | सिनधि | ltr |
| 139 | se | Northern Sami | Davvisámegiella | ltr |
| 140 | sg | Sango | Sängö | ltr |
| 141 | sh | Serbo-Croatian | Srpskohrvatski / Српскохрватски | ltr |
| 142 | si | Sinhalese | සිංහල | ltr |
| 143 | sk | Slovak | Slovenčina | ltr |
| 144 | sl | Slovenian | Slovenščina | ltr |
| 145 | sm | Samoan | Gagana Samoa | ltr |
| 146 | sn | Shona | chiShona | ltr |
| 147 | so | Somalia | Soomaaliga | ltr |
| 148 | sq | Albanian | Shqip | ltr |
| 149 | sr | Serbian | Српски | ltr |
| 150 | ss | Swati | SiSwati | ltr |
| 151 | st | Southern Sotho | Sesotho | ltr |
| 152 | su | Sundanese | Basa Sunda | ltr |
| 153 | sv | Swedish | Svenska | ltr |
| 154 | sw | Swahili | Kiswahili | ltr |
| 155 | ta | Tamil | தமிழ் | ltr |
| 156 | te | Telugu | తెలుగు | ltr |
| 157 | tg | Tajik | Тоҷикӣ | ltr |
| 158 | th | Thai | ไทย / Phasa Thai | ltr |
| 159 | ti | Tigrinya | ትግርኛ | ltr |
| 160 | tk | Turkmen | Туркмен / تركمن | ltr |
| 161 | tl | Tagalog | Tagalog | ltr |
| 162 | tn | Tswana | Setswana | ltr |
| 163 | to | Tonga | Lea Faka-Tonga | ltr |
| 164 | tr | Turkish | Türkçe | ltr |
| 165 | ts | Tsonga | Xitsonga | ltr |
| 166 | tt | Tatar | Tatarça | ltr |
| 167 | tw | Twi | Twi | ltr |
| 168 | ty | Tahitian | Reo Mā`ohi | ltr |
| 169 | ug | Uyghur | Uyƣurqə / ئۇيغۇرچە | ltr |
| 170 | uk | Ukrainian | Українська | ltr |
| 171 | ur | Urdu | اردو | rtl |
| 172 | uz | Uzbek | Ўзбек | ltr |
| 173 | ve | Venda | Tshivenḓa | ltr |
| 174 | vi | Vietnamese | Việtnam | ltr |
| 175 | vo | Volapük | Volapük | ltr |
| 176 | wa | Walloon | Walon | ltr |
| 177 | wo | Wolof | Wollof | ltr |
| 178 | xh | Xhosa | isiXhosa | ltr |
| 179 | yi | Yiddish | ייִדיש | rtl |
| 180 | yo | Yoruba | Yorùbá | ltr |
| 181 | za | Zhuang | Cuengh / Tôô / 壮语 | ltr |
| 182 | zh | Chinese | 中文 | ltr |
| 183 | zu | Zulu | isiZulu | ltr |
| 184 | nb | Norwegian Bokmål | Norsk (bokmål) | ltr |

## Changelog

### 0.3.0
- Add table with language code, names, native and directionality

### 0.2.4
- Add test;
- Test OK

### 0.2.0
- First release;

## Caveat
You can only use the two-letter code ISO 639-1: en, uk, de, fr ...

## Sources
https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code

https://currencyrate.today/

https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

https://fx-w.io/
