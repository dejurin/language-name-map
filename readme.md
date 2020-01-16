# language-name-map

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
|  Code  |  Name  |  Native  |  Dir  |
|--------|--------|----------|-------|
| aa | Afar | Afar | ltr |
| ab | Abkhazian | Аҧсуа | ltr |
| af | Afrikaans | Afrikaans | ltr |
| ak | Akan | Akana | ltr |
| am | Amharic | አማርኛ | ltr |
| an | Aragonese | Aragonés | ltr |
| ar | Arabic | العربية | rtl |
| as | Assamese | অসমীয়া | ltr |
| av | Avar | Авар | ltr |
| ay | Aymara | Aymar | ltr |
| az | Azerbaijani | Azərbaycanca / آذربايجان | ltr |
| ba | Bashkir | Башҡорт | ltr |
| be | Belarusian | Беларуская | ltr |
| bg | Bulgarian | Български | ltr |
| bh | Bihari | भोजपुरी | ltr |
| bi | Bislama | Bislama | ltr |
| bm | Bambara | Bamanankan | ltr |
| bn | Bengali | বাংলা | ltr |
| bo | Tibetan | བོད་ཡིག / Bod skad | ltr |
| br | Breton | Brezhoneg | ltr |
| bs | Bosnian | Bosanski | ltr |
| ca | Catalan | Català | ltr |
| ce | Chechen | Нохчийн | ltr |
| ch | Chamorro | Chamoru | ltr |
| co | Corsican | Corsu | ltr |
| cr | Cree | Nehiyaw | ltr |
| cs | Czech | Česky | ltr |
| cu | Old Church Slavonic / Old Bulgarian | словѣньскъ / slověnĭskŭ | ltr |
| cv | Chuvash | Чăваш | ltr |
| cy | Welsh | Cymraeg | ltr |
| da | Danish | Dansk | ltr |
| de | German | Deutsch | ltr |
| dv | Divehi | ދިވެހިބަސް | rtl |
| dz | Dzongkha | ཇོང་ཁ | ltr |
| ee | Ewe | Ɛʋɛ | ltr |
| el | Greek | Ελληνικά | ltr |
| en | English | English | ltr |
| eo | Esperanto | Esperanto | ltr |
| es | Spanish | Español | ltr |
| et | Estonian | Eesti | ltr |
| eu | Basque | Euskara | ltr |
| fa | Persian | فارسی | rtl |
| ff | Peul | Fulfulde | ltr |
| fi | Finnish | Suomi | ltr |
| fj | Fijian | Na Vosa Vakaviti | ltr |
| fo | Faroese | Føroyskt | ltr |
| fr | French | Français | ltr |
| fy | West Frisian | Frysk | ltr |
| ga | Irish | Gaeilge | ltr |
| gd | Scottish Gaelic | Gàidhlig | ltr |
| gl | Galician | Galego | ltr |
| gn | Guarani | Avañe'ẽ | ltr |
| gu | Gujarati | ગુજરાતી | ltr |
| gv | Manx | Gaelg | ltr |
| ha | Hausa | هَوُسَ | rtl |
| he | Hebrew | עברית | rtl |
| hi | Hindi | हिन्दी | ltr |
| ho | Hiri Motu | Hiri Motu | ltr |
| hr | Croatian | Hrvatski | ltr |
| ht | Haitian | Krèyol ayisyen | ltr |
| hu | Hungarian | Magyar | ltr |
| hy | Armenian | Հայերեն | ltr |
| hz | Herero | Otsiherero | ltr |
| ia | Interlingua | Interlingua | ltr |
| id | Indonesian | Bahasa Indonesia | ltr |
| ie | Interlingue | Interlingue | ltr |
| ig | Igbo | Igbo | ltr |
| ii | Sichuan Yi | ꆇꉙ / 四川彝语 | ltr |
| ik | Inupiak | Iñupiak | ltr |
| io | Ido | Ido | ltr |
| is | Icelandic | Íslenska | ltr |
| it | Italian | Italiano | ltr |
| iu | Inuktitut | ᐃᓄᒃᑎᑐᑦ | ltr |
| ja | Japanese | 日本語 | ltr |
| jv | Javanese | Basa Jawa | ltr |
| ka | Georgian | ქართული | ltr |
| kg | Kongo | KiKongo | ltr |
| ki | Kikuyu | Gĩkũyũ | ltr |
| kj | Kuanyama | Kuanyama | ltr |
| kk | Kazakh | Қазақша | ltr |
| kl | Greenlandic | Kalaallisut | ltr |
| km | Cambodian | ភាសាខ្មែរ | ltr |
| kn | Kannada | ಕನ್ನಡ | ltr |
| ko | Korean | 한국어 | ltr |
| kr | Kanuri | Kanuri | ltr |
| ks | Kashmiri | कश्मीरी / كشميري | rtl |
| ku | Kurdish | Kurdî / كوردی | rtl |
| kv | Komi | Коми | ltr |
| kw | Cornish | Kernewek | ltr |
| ky | Kirghiz | Kırgızca / Кыргызча | ltr |
| la | Latin | Latina | ltr |
| lb | Luxembourgish | Lëtzebuergesch | ltr |
| lg | Ganda | Luganda | ltr |
| li | Limburgian | Limburgs | ltr |
| ln | Lingala | Lingála | ltr |
| lo | Laotian | ລາວ / Pha xa lao | ltr |
| lt | Lithuanian | Lietuvių | ltr |
| lv | Latvian | Latviešu | ltr |
| mg | Malagasy | Malagasy | ltr |
| mh | Marshallese | Kajin Majel / Ebon | ltr |
| mi | Maori | Māori | ltr |
| mk | Macedonian | Македонски | ltr |
| ml | Malayalam | മലയാളം | ltr |
| mn | Mongolian | Монгол | ltr |
| mo | Moldovan | Moldovenească | ltr |
| mr | Marathi | मराठी | ltr |
| ms | Malay | Bahasa Melayu | ltr |
| mt | Maltese | bil-Malti | ltr |
| my | Burmese | Myanmasa | ltr |
| na | Nauruan | Dorerin Naoero | ltr |
| nd | North Ndebele | Sindebele | ltr |
| ne | Nepali | नेपाली | ltr |
| ng | Ndonga | Oshiwambo | ltr |
| nl | Dutch | Nederlands | ltr |
| nn | Norwegian Nynorsk | Norsk (nynorsk) | ltr |
| no | Norwegian | Norsk (bokmål / riksmål) | ltr |
| nr | South Ndebele | isiNdebele | ltr |
| nv | Navajo | Diné bizaad | ltr |
| ny | Chichewa | Chi-Chewa | ltr |
| oc | Occitan | Occitan | ltr |
| oj | Ojibwa | ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin | ltr |
| om | Oromo | Oromoo | ltr |
| or | Oriya | ଓଡ଼ିଆ | ltr |
| os | Ossetian / Ossetic | Иронау | ltr |
| pa | Panjabi / Punjabi | ਪੰਜਾਬੀ / पंजाबी / پنجابي | ltr |
| pi | Pali | Pāli / पाऴि | ltr |
| pl | Polish | Polski | ltr |
| ps | Pashto | پښتو | rtl |
| pt | Portuguese | Português | ltr |
| qu | Quechua | Runa Simi | ltr |
| rm | Raeto Romance | Rumantsch | ltr |
| rn | Kirundi | Kirundi | ltr |
| ro | Romanian | Română | ltr |
| ru | Russian | Русский | ltr |
| rw | Rwandi | Kinyarwandi | ltr |
| sa | Sanskrit | संस्कृतम् | ltr |
| sc | Sardinian | Sardu | ltr |
| sd | Sindhi | सिनधि | ltr |
| se | Northern Sami | Davvisámegiella | ltr |
| sg | Sango | Sängö | ltr |
| sh | Serbo-Croatian | Srpskohrvatski / Српскохрватски | ltr |
| si | Sinhalese | සිංහල | ltr |
| sk | Slovak | Slovenčina | ltr |
| sl | Slovenian | Slovenščina | ltr |
| sm | Samoan | Gagana Samoa | ltr |
| sn | Shona | chiShona | ltr |
| so | Somalia | Soomaaliga | ltr |
| sq | Albanian | Shqip | ltr |
| sr | Serbian | Српски | ltr |
| ss | Swati | SiSwati | ltr |
| st | Southern Sotho | Sesotho | ltr |
| su | Sundanese | Basa Sunda | ltr |
| sv | Swedish | Svenska | ltr |
| sw | Swahili | Kiswahili | ltr |
| ta | Tamil | தமிழ் | ltr |
| te | Telugu | తెలుగు | ltr |
| tg | Tajik | Тоҷикӣ | ltr |
| th | Thai | ไทย / Phasa Thai | ltr |
| ti | Tigrinya | ትግርኛ | ltr |
| tk | Turkmen | Туркмен / تركمن | ltr |
| tl | Tagalog | Tagalog | ltr |
| tn | Tswana | Setswana | ltr |
| to | Tonga | Lea Faka-Tonga | ltr |
| tr | Turkish | Türkçe | ltr |
| ts | Tsonga | Xitsonga | ltr |
| tt | Tatar | Tatarça | ltr |
| tw | Twi | Twi | ltr |
| ty | Tahitian | Reo Mā`ohi | ltr |
| ug | Uyghur | Uyƣurqə / ئۇيغۇرچە | ltr |
| uk | Ukrainian | Українська | ltr |
| ur | Urdu | اردو | rtl |
| uz | Uzbek | Ўзбек | ltr |
| ve | Venda | Tshivenḓa | ltr |
| vi | Vietnamese | Việtnam | ltr |
| vo | Volapük | Volapük | ltr |
| wa | Walloon | Walon | ltr |
| wo | Wolof | Wollof | ltr |
| xh | Xhosa | isiXhosa | ltr |
| yi | Yiddish | ייִדיש | rtl |
| yo | Yoruba | Yorùbá | ltr |
| za | Zhuang | Cuengh / Tôô / 壮语 | ltr |
| zh | Chinese | 中文 | ltr |
| zu | Zulu | isiZulu | ltr |
| nb | Norwegian Bokmål | Norsk (bokmål) | ltr |

## Changelog

### 0.2.5
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