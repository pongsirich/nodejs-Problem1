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
