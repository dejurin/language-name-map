const test = require('tape')

const {
  getLangNameFromCode,
  getLangCodeList
} = require('./')

const languageNameMap = require('./map')

test('getLangNameFromCode(): valid params with ltr', t => {
  t.equal('Ukrainian', getLangNameFromCode('uk').name, 'should return Ukrainian')
  t.equal('Українська', getLangNameFromCode('uk').native, 'should return Українська')
  t.equal('ltr', getLangNameFromCode('uk').dir, 'should return ltr')
  t.equal('Ukrainian', getLangNameFromCode('UK').name, 'should return Ukrainian')
  t.equal('Українська', getLangNameFromCode('UK').native, 'should return Українська')
  t.equal('ltr', getLangNameFromCode('UK').dir, 'should return ltr')
  t.equal(undefined, getLangNameFromCode('NON-EXISTENT-CODE'), 'should return undefined when code is non-existent')
  t.end()
})

test('getLangNameFromCode(): valid params with rtl', t => {
  t.equal('Arabic', getLangNameFromCode('ar').name, 'should return Arabic')
  t.equal('العربية', getLangNameFromCode('ar').native, 'should return العربية')
  t.equal('rtl', getLangNameFromCode('ar').dir, 'should return rtl')
  t.equal('Arabic', getLangNameFromCode('AR').name, 'should return Arabic')
  t.equal('العربية', getLangNameFromCode('AR').native, 'should return العربية')
  t.equal('rtl', getLangNameFromCode('AR').dir, 'should return rtl')
  t.equal(undefined, getLangNameFromCode('NON-EXISTENT-CODE'), 'should return undefined when code is non-existent')
  t.end()
})

test('getLangNameFromCode(): invalid params', t => {
  t.equal(undefined, getLangNameFromCode(1), 'should return undefined when param is not a string')
  t.equal(undefined, getLangNameFromCode(null), 'should return undefined when param is null')
  t.equal(undefined, getLangNameFromCode(false), 'should return undefined when param is false')
  t.equal(undefined, getLangNameFromCode(), 'should return undefined when param is undefined')
  t.end()
})

test('getLangCodeList: sanity check every value in map', t => {
  getLangCodeList().forEach(code => {
    t.ok(getLangNameFromCode(code).name, 'name OK - ' + code)
    t.ok(getLangNameFromCode(code).native, 'native OK - ' + code)
    t.ok(getLangNameFromCode(code).dir, 'dir OK - ' + code)
  })
  t.end()
})

test('language-name-map: sanity check every value in map', t => {
  const currencies = Object.keys(languageNameMap)
  const obj = {}
  currencies.forEach(code => {
    obj[code] = {
      name: getLangNameFromCode(code).name,
      dir: (getLangNameFromCode(code).dir === 'ltr') ? 1 : 0,
      native: getLangNameFromCode(code).native
    }
  })
  t.deepEqual(obj, languageNameMap)
  t.end()
})
