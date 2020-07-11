# Nodejs-Problem1
### Problem
- **จงแก้ไขให้โปรแกรมสามารถทำงานได้อย่างถูกต้อง**

> Tips

- Node.js Core Module System
- NPM modules
- Working with JSON

## Installation

- To install a package you need `npm` to get started
```shell
$ npm install
```

## main.js

```javascript
const jsonWriter = require('./jsonWriter')
const jsonReader = require('./jsonReader')

const profile = {
  name: 'Pongsiri Chatkaew',
  age: 24,
  email: 'pongsiri.cha@hotmail.com'
}

jsonWriter.writeJson(profile)
const profileObj = jsonReader.readJson('./profile.json')
console.log(profileObj)

```

## jsonReader.js

```javascript
const validator = require('validator')
const fs = require('fs')

// #1 Read File with JSON
// #2 Convert JSON to JS Object
// #3 Return JS Object

const readJson = jsonFile => {
  // Read file to JSON
  // Convert JSON to JS Object
  return {}
}

module.exports = { readJson }
```


## jsonWriter.js

```javascript
const validator = require('validator')
const fs = require('fs')

// #1 check if profile's email is email with validator
// #2 if it true convert JS Object to JSON
// #3 Write JSON file with JSON

const writeJson = profileObj => {
  if (true) {
    // Convert to JSON
    // Write JSON File
  }
}

module.exports = { writeJson }
```

**Result**
```javascript
{"name":"Pongsiri Chatkaew","age":24,"email":"pongsiri.cha@hotmail.com"}
```


