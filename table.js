const data = require('./map')
const fs = require('fs')

const keys = Object.keys(data)

let readme = `## List of ISO 639-1 codes
### List of language names ordered by code
|  #  |  Code  |  Name  |  Native  |  Dir  |
|-----|--------|--------|----------|-------|
`
let i = 0
keys.forEach((key) => {
  i++
  readme += `| ${i} | ${key} | ${data[key].name} | ${data[key].native} | ${(Number(data[key].dir) === 1) ? 'ltr' : 'rtl'} |\n`
})

fs.writeFile('languages-list.md', readme, () => {
  console.log('Save file languages-list.md')
})

console.log(readme)
