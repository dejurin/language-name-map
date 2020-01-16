# language-name-map
(5,5 kb gzip)

[![Build Status](https://travis-ci.org/dejurin/language-name-map.svg?branch=master)](https://travis-ci.org/dejurin/language-name-map)

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

getLangNameFromCode('uk').name // Ukrainian
getLangNameFromCode('uk').dir // ltr
getLangNameFromCode('uk').native // Українська
getLangCodeList() // Shows all the language codes.
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

### 0.2.6
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
https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## Many thank's
https://currencyrate.today/
