const test = require('tape')

const { getLangNameFromCode, getLangCodeList } = require('./')
const currencySymbolMap = require('./map')

test('getLangNameFromCode(): valid params', t => {
  t.equal('Ukrainian', getLangNameFromCode('uk').name, 'should return Ukrainian')
  t.equal('ltr', getLangNameFromCode('uk').dir, 'should return ltr')
  t.equal('Українська', getLangNameFromCode('uk').native, 'should return Українська')
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