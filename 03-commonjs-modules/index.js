const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports')
const greeting = require('./my-modules/single-export')
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import')

console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)

myHobbies.push('climbing')

greeting(myName)
greeting(myOtherName)
greeting(myFriendsName)

console.log(myGreatHobbies)
