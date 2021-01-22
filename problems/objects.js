/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {Object} appleCountByName
 * @returns {number} The number of apples Eve has.
 */

const eveAppleCount = (appleCountByName) => {
return appleCountByName.Eve
} 


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

}

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
  appleCountByName["Eve"] = appleCount
  return appleCountByName

}

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
  appleCountByName[name] = newAppleCount
  return appleCountByName

};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Should return the total number of apples for Adam and Eve.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Sum of Adam and Eve's apples.
 *
 */

const adamAndEveApples = (appleCountByName) => {
  let sum = appleCountByName.Eve + appleCountByName.Adam
  return sum
  
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Returns the sum of all apples
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Total number of all apples
 *
 */

const appleSum = (appleCountByName) => {
  let total = 0 
  for(let key in appleCountByName){
    total += appleCountByName[key]
  }
return total

};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Reset all the apple values to 0 and return the object.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {Object} Object with values set to zero.
 *
 */

const appleSetToZero = (appleCountByName) => {
   for(let key in appleCountByName) {
     appleCountByName[key] = 0
   }
   return appleCountByName
};

/**
 * Takes in an object of countries and their capitals.
 * Return the capital of Russia.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {string} Capital of Russia
 */

const russiaCapital = (capitalByCountry) => {
  return capitalByCountry.Russia

};

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

/**
 * Takes an array of arrays. First element of inner array is authorName, second element
 * of inner array is score.
 * Return an object where the keys are the authorNames and
 * the values are the scores.
 * @param {Array[]} authors - array of arrays [["Mark Twain", 8.9], ["Nathaniel Hawthorne", 5.1]]
 * @returns {Object} {"Mark Twain": 8.9, "Nathaniel Hawthorne": 5.1}
 */

const authorScores = (authors) => {
  let object = {}
for(let i = 0; i < authors.length; i++){
  let name = authors[i][0]
  console.log(name)
  let score = authors[i][1]
  console.log(score)
  object[name]=score
}
 return object
  // (authors[0].authorname) (authors[1].score)
  }

  console.log(authorScores([
    ["Mark Twain", 8.9],
    ["Nathaniel Hawthorne", 5.1],
    ["John Steinbeck", 2.3],
    ["C.S. Lewis", 9.9],
    ["Jon Krakauer", 6.1],
  ]))

/**
 * You are given an array of objects.
 * Each object in the array describes a submission with a firstName, lastName, and score.
 * Find the person with the best score and return their full name.
 * @param {Object[]} submissions - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} The full name of person with best score.
 */

const bestScore = (submissions) => {
  let high = 0
  let name = ""
  for(let i =0; i < submissions.length; i++){
    if(submissions[i].score >= high){
      high = submissions[i].score
    name =submissions[i].firstName + " " + submissions[i].lastName}
  }
return name
};


/*
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {Object} {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = () => {
  let obj = {}
  for(let i=1; i <=20; i++){
    obj[1 *i] = i**3
  }
  return obj
};


/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's contained in the string
 * @param {string} str - "A good snake"
 * @returns {Object} Counts of e and a. {a: 2, e: 1}
 */

const countAandE = (str) => {
  let obj = {
    a:0,
    e:0
  }
  let lowerLetter = ""
  for(let letter of str) {
    lowerLetter = letter.toLowerCase()
    if(lowerLetter === "a"){
      obj["a"] +=1
    }else if (lowerLetter === "e"){
      obj["e"] = obj["e"]+1
  }
  }
  return obj
};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} str -  "A good snake"
 * @returns {Object} Counts of all characters: {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = (str) => {
  let obj = {}
  for(let letter of str) {
    let lowerLetter = letter.toLowerCase()
    obj[lowerLetter] = (obj[lowerLetter]
 || 0) + 1  }
 return obj
};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} str - "A good snake"
 * @returns {Object} Counts all characters except spaces  {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 */

const countOccuranceNoSpaces = (str) => {
  let obj = {}
  for(let letter of str) {
    let lowerLetter = letter.toLowerCase()
    if (lowerLetter != " "){
      obj[lowerLetter] = (obj[lowerLetter] || 0) + 1
    }
  }
  return obj
};

/**
 * Takes in an array and returns the most common element.
 * @param {Array} array - array of elements
 * @returns {(number|string)} Most common element
 */

const mostCommonElement = (array) => {
  let obj = {}
for (let value of array){
  obj[value] = (obj[value] || 0) + 1
}
let max = array[0]
let maxCount = 0
for (let value of array){
  if(obj[value] > maxCount){
  max = value
  maxCount = obj[value]
  }
}return max

  }

  //takes in array
  //creates an empty object to collect values
  //iterate through the arrray
  //store each new value into the new object
  //iterate through the new object, which has one of each new values
  //each value from orignal array is now a key in the new object, with a value of zero
  //iterate through orignal array
  //every time we come across a key from new object, we increment by 1
  //need to find object with highest number
  //when we come across property with higher value while going through loop, we add it to common element
  //return
//   let newObject = {}
//   for (element of array) {
//     newObject[element] = 0
//   }for (element of arra) {
//     newObject[element] = newObject[element] + 1
//   }
//   for(element of newObject) {
//     commonElement = newObject[element]
//     if(commonElement > elememt){
//       commonElement = newObject[element]
//     }
//   }
//   console.log(newObject)

// };


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
 for(let i=0; i < arr.length; i++){
   let artists = arr[i]
   if(pairs[artists]){
     newArr.push(pairs[artists])
   }else {
     newArr.push(artists)
   }
   }return newArr

};
// const musToInstrument = {"Ed Sheeran": "guitar", "Ray Charles": "piano"}
// const musicians = ["Ed Sheeran", "John Lennon", "Ray Charles"]
// console.log(updateLIst(musToInstrument, musicians))//

/**
 * Takes in an object and a key.
 * It should delete the key value pair from the object and
 * return the changed object.
 * @param {Object}
 * @param {string} key
 * @returns {Object} The Object without the key.
 */

 const deleteKey = (object,key) => {
   delete object[key]
   return object

 };


 /**
  * Takes in an object and returns the number of
  * properties it has.
  * @param {Object} obj
  * @returns {number} Number of properties.
  */
 const propertyCount = (obj) => {
   let number = Object.values(obj)
   return number.length
 };

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
