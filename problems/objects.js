/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {Object} appleCountByName
 * @returns {number} The number of apples Eve has.
 */

const eveAppleCount = (appleCountByName) => {
  return appleCountByName.Eve
};

console.log(eveAppleCount({
  Adam: 3,
  Beth: 5,
  Cal: 3,
  Dan: 5,
  Eve: 4,
}))

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name. Return the number
 * of apples that the person passed in has.
 * If the person does not exist in the object it should return 0.
 * @param {Object} appleCountByName
 * @param {string} name - name of person
 * @returns {number} The number of apples name has.
 *
 * Is there a difference between using string notation vs
 * bracket notation? Try them both.
 */

const appleCount = (appleCountByName, name) => {
  return appleCountByName[name]
};
//appleCountByName is the object with different key/value pairs
//name is the second argument, which is "Corey" in the console.log after the object

console.log(appleCount({
  Celine: 3,
  Corey: 5,
  Jimmy: 3,
  Ben: 5,
  Eve: 7,
}, "Corey"))

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Also takes in a new number of apples for Eve.
 * Reassign her number of apples to the new value and then return
 * the original object.
 *
 * @param {Object} appleCountByName
 * @param {number} appleCount - new number of apples
 * @returns {Object} The updated object.
 */

const eveAppleSet = (appleCountByName, appleCount) => {
  let newAppleCountByName = appleCountByName
  newAppleCountByName.Eve = appleCount
  return newAppleCountByName
};

console.log(eveAppleSet({
  Celine: 3,
  Corey: 5,
  Jimmy: 3,
  Ben: 5,
  Eve: 7,
}, 1))

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name, and the argument newAppleCount.
 * Update the object to have the name pointing to the newAppleCount
 * @param {Object} appleCountByName - apple object with names and numbers
 * @param {string} name - name of person
 * @param {number} newAppleCount - number of apples
 * @returns {Object} The updated object.
 *
 */

const appleSet = (appleCountByName, name, newAppleCount) => {
  let newAppleObject = appleCountByName
  newAppleObject[name] = newAppleCount
  return newAppleObject
};

console.log(appleSet({
  Celine: 3,
  Corey: 5,
  Jimmy: 3,
  Ben: 5,
  Eve: 7,
},
"Jimmy", 10))



/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Should return the total number of apples for Adam and Eve.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Sum of Adam and Eve's apples.
 *
 */

const adamAndEveApples = (appleCountByName) => {
  let sum = appleCountByName.Adam + appleCountByName.Eve
  return sum
};

console.log(adamAndEveApples({
  Adam: 3,
  Beth: 5,
  Cal: 3,
  Dan: 5,
  Eve: 4,
}))

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Returns the sum of all apples
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Total number of all apples
 *
 */

const appleSum = (appleCountByName) => {
  let sum = 0
  for (let value in appleCountByName) {
    sum = appleCountByName[value] + sum
  }
  return sum
};

console.log(appleSum({
  Adam: 19,
  Beth: 5,
  Cal: 3,
  Dan: 5,
  Eve: 21,
}
  
)) 

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Reset all the apple values to 0 and return the object.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {Object} Object with values set to zero.
 *
 */

const appleSetToZero = (appleCountByName) => {
  // let newObject = {}
  for (let value in appleCountByName) {
    appleCountByName[value] = 0
  }
  return appleCountByName
  
};

console.log(appleSetToZero({
  Adam: 19,
  Beth: 5,
  Cal: 3,
  Dan: 5,
  Eve: 21,
}))

/**
 * Takes in an object of countries and their capitals.
 * Return the capital of Russia.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {string} Capital of Russia
 */

const russiaCapital = (capitalByCountry) => {
  return capitalByCountry["Russia"]
};

console.log(russiaCapital({
  Afghanistan: "Kabul",
  Russia: "Moscow",
  Iceland: "Reykjavik",
}))

/**
 * Takes in an object of countries and their capitals.
 * Takes in a country
 * Return the capital of country given.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @param {string} country
 * @returns {string} Capital of country
 */

const getCapital = (capitalByCountry, country) => {
return capitalByCountry[country]
};

console.log(getCapital({
  Afghanistan: "Kabul",
  Russia: "Moscow",
  Iceland: "Reykjavik",
}, "Iceland"))

/**
 * Takes in an object of countries and their capitals
 * and adds the key value pair "Jamaica" and "Kingston"
 * Return the original object.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {Object} countriesAndCapitals now with Jamaica
 */

const addsJamaica = (capitalByCountry) => {
  capitalByCountry.Jamaica = "Kingston"
  return capitalByCountry
};

console.log(addsJamaica({
  Afghanistan: "Kabul",
  Russia: "Moscow",
  Iceland: "Reykjavik",
}))

/**
 * Takes in an object of countries and their capitals
 * and a country and capital. The country and capital should be
 * added to the object.
 * Return the original object.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @param {string} country
 * @param {string} capital
 * @returns {Object} countriesAndCapitals
 */

const addsCountry = (capitalByCountry, country, capital) => {
  capitalByCountry[country] = capital
  return capitalByCountry
};

console.log(addsCountry({
  Afghanistan: "Kabul",
  Iceland: "Reykjavik",
  Russia: "Moscow",
  Jamaica: "Kingston",
}, "Dominican Republic", "Santo Domingo"))

/**
 * Takes an array of arrays. First element of inner array is authorName, second element
 * of inner array is score.
 * Return an object where the keys are the authorNames and
 * the values are the scores.
 * @param {Array[]} authors - array of arrays [["Mark Twain", 8.9], ["Nathaniel Hawthorne", 5.1]]
 * @returns {Object} {"Mark Twain": 8.9, "Nathaniel Hawthorne": 5.1}
 */

const authorScores = (authors) => {
  let newObject = {}

  for (let i = 0; i <= authors.length-1; i++) {
    let name = authors[i][0]
    console.log(name)
    let score = authors[i][1]
    console.log(score)
    newObject[name] = score
  }
  return newObject
};

console.log(authorScores([
  ["Mark Twain", 8.9],
  ["Nathaniel Hawthorne", 5.1],
  ["John Steinbeck", 2.3],
  ["C.S. Lewis", 9.9],
  ["Jon Krakauer", 6.1],
]))

  // let newObject = {}
  // 
// for (let i = 0; i < authors.length; i++)  {
  //   let name = authors[i][0]
  //   //the first ["Mark Twain", 8.9] array is authors[i], then we access the first element inside which is [0]
  //   console.log(name) //this prints so I can see what I'm doing, implement into problem-solving workflow
  //   let score = authors[i][1]
  //   console.log(score)
  //   newObject[name] = score
  // }
  // return newObject


/**
 * You are given an array of objects.
 * Each object in the array describes a submission with a firstName, lastName, and score.
 * Find the person with the best score and return their full name.
 * @param {Object[]} submissions - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} The full name of person with best score.
 */

const bestScore = (submissions) => {
  let highestScore = -Infinity
  let highestUser
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].score > highestScore) {
      highestScore = submissions[i].score
      highestUser = submissions[i].firstName + " " + submissions[i].lastName
    }
  }
  return highestUser
};

console.log(bestScore([
  {
    firstName: "Calvin",
    lastName: "Newton",
    score: 13,
  },
  {
    firstName: "Garry",
    lastName: "Mckenzie",
    score: 23,
  },
  {
    firstName: "Leah",
    lastName: "Rivera",
    score: 10,
  },
  {
    firstName: "Sonja",
    lastName: "Moreno",
    score: 3,
  },
  {
    firstName: "Noel",
    lastName: "Bowen",
    score: 16,
  }
]))

  // let i = 0
  // let highestScore = 0
  // let person
  // while (i < submissions.length) { 
  //   if (submissions[i].score > highestScore) {
  //     highestScore = submissions[i].score
  //   }
  //   i++
  // }
  // let j = 0
  // while (j < submissions.length) {
  //   if (highestScore === submissions[j].score) {
  //     person = submissions[j].firstName + " " + submissions[j].lastName
  //   }
  //   j++
  // }
  // return person

/**
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {Object} {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = () => {
let num = 1
let newObject = {}
for (let i = 1; i <= 20; i++) {
  newObject[i] = num ** 3;
  num++
}

return newObject
};

console.log(cubeObj())

  // let object = {}
  // let goal = 20
  // for (let i = 1; i <= goal; i++) {
  //   object[i] = i ** 3
  // }
  // return object


/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's contained in the string
 * @param {string} str - "A good snake"
 * @returns {Object} Counts of e and a. {a: 2, e: 1}
 */

const countAandE = (str) => {
  let a = 0
  let e = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "a".toUpperCase()) {
      a = a + 1;
    }
    else if (str[i] === "e" || str[i] === "e".toUpperCase()) {
      e++
    }
  }
  let newObject = {a, e}
  return newObject
};

console.log(countAandE("A good snakeee"))
console.log(countAandE("BE a big Dreamer!"))
console.log(countAandE("cats"))


/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} str -  "A good snake"
 * @returns {Object} Counts of all characters: {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = (str) => {
  let newObject = {}
  let newStr = str.toLowerCase()
  let letter
  
  for (letter of newStr) {
    newObject[letter] = 0
  }
  for (letter of newStr) {
    newObject[letter] = newObject[letter] + 1
  }

  return newObject
};

console.log(countOccurance("A good snake"))
console.log(countOccurance("HELLO world"))

console.log("")

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} str - "A good snake"
 * @returns {Object} Counts all characters except spaces  {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 */

const countOccuranceNoSpaces = (str) => {
  let newObject = {}
  newStr = str.toLowerCase()

  // for (let letter in newStr) {
  //   if (letter === ' ') {
  //     newStr.pop()
  //   }
  // }
  for (letter of newStr) {
    newObject[letter] = 0
  }
  for (letter of newStr) {
    newObject[letter] = newObject[letter] + 1
  }
  let space = ' '
  delete newObject[space] //is there a better way to do this? 
//  I tried an if statement inside for loop:
//  if (newObject[letter] === ' ') {delete newObject[letter]}
//  and this would move the ' ' property to the end of the object in console.log, and display ' ': NaN
//  Seemed like assigning a space variable and using delete was the only way.

  return newObject

};

console.log(countOccuranceNoSpaces("A good snake"))

/**
 * Takes in an array and returns the most common element.
 * @param {Array} array - array of elements
 * @returns {(number|string)} Most common element
 */

const mostCommonElement = (array) => {
  // Take in an array
  // Create an empty object to collect values
  // Iterate through the array
  // Store each new value into the newObject
  // Each value from original array is now a key in the newObject, with a value of 0
  // Iterate through the original array again
  // Every time we come across a key from newObject, we increment by +1
  // Loop through the pairs in object to find the property with highest value
  // Element is going to be added to commonElement
  // When we come across a property with a higher value while looping, we add to commonElement
  // return
  let newObject = {}
  let commonElement = 0
  let objectKey = ""

  for (element of array) {
    newObject[element] = 0
  }
  for (element of array) {
    newObject[element] = newObject[element] + 1
  }
  for (element in newObject) {
    
    if (commonElement < newObject[element]) {
      commonElement = newObject[element]
      objectKey = element
    }
  }

  // if the objectKey is a number, and we don't want that number returned as a string, 
  // we need to change the type with a type constructor
  if (typeof objectKey !== typeof array[0]) {
    return Number(objectKey)
  }

  return objectKey
  console.log(newObject)
};

console.log(mostCommonElement(["bird", "cat", "cat"]))
console.log(mostCommonElement([2, 1, 1, 1, 3, 2]))

console.log('')

/**
 * Takes in an object and an array.
 * Returns a new array.
 * If the element in the array is a key in the object, the new
 * array should have its value in its place. Otherwise it should use the array element.
 *
 * Exp Input:
 * {"Ed Sheeran": "guitar", "Ray Charles": "piano"}
 * ["Ed Sheeran", "John Lennon", "Ray Charles"]
 *
 * Output:
 * ["guitar", "John Lennon", "piano"]
 *
 * @param {Object} pairs
 * @param {string[]} arr
 * @returns {string[]} Elements or their pair values.
 */

const updateList = (pairs, arr) => {
  let newArr = []
  let values = Object.values(pairs)
  let j = 0
  let i = 0

  while (i < arr.length) {
    if (pairs.hasOwnProperty(arr[i])) {
      newArr[i] = values[j]
      j++   //increments the iteration for values within the object
    }
    else {
      newArr.push(arr[i])
    }
    i++     //increments the iteration for items within the array
  }
  return newArr
}

//THIS EXERCISE WAS PARAMOUNT TO HELPING ME UNDERSTAND SITUATIONS WHERE I SHOULD ITERATE THROUGH
//TWO SEPERATE ITEMS WITHIN THE SAME LOOP, WITH DIFFERENT VARIABLES, WHILE INCREMENTING THE VALUES 
//AT DIFFERENT TIMES UNDER DIFFERENT CONDITIONS

console.log(updateList({ "Ed Sheeran": "guitar", "Ray Charles": "piano" }, 
[
  "Ed Sheeran",
  "John Lennon",
  "Ray Charles",
]))

/**
 * Takes in an object and a key.
 * It should delete the key value pair from the object and
 * return the changed object.
 * @param {Object}
 * @param {string} key
 * @returns {Object} The Object without the key.
 */

let tracks = {decapitated : "Spheres of Madness", necrophagist : "Mutilate the Stillborn"}

const deleteKey = (obj, key) => {
  delete obj[key]
  return obj
};

console.log(deleteKey(tracks, "decapitated"))


 /**
  * Takes in an object and returns the number of
  * properties it has.
  * @param {Object} obj
  * @returns {number} Number of properties.
  */
 const propertyCount = (obj) => {
   let numOfProps = Object.keys(obj)
   return numOfProps.length
 };

console.log(propertyCount({name: "Ivan", ethnicity: "hispanic", Sex: "male"}))

module.exports = {
  eveAppleCount,
  appleCount,
  eveAppleSet,
  appleSet,
  adamAndEveApples,
  appleSum,
  appleSetToZero,
  russiaCapital,
  getCapital,
  addsJamaica,
  addsCountry,
  authorScores,
  bestScore,
  cubeObj,
  countAandE,
  countOccurance,
  countOccuranceNoSpaces,
  mostCommonElement,
  updateList,
  deleteKey,
  propertyCount,
};
