/**
 * Takes in a cat object and returns its species.
 * @param {Object} catObj
 * @param {string} catObj.species - The species of the cat.
 * @returns {string} - species
 */

const catSpecies = (catObj) => {
  return catObj.species
};

/**
 * Takes in a cat object and a color. Add the key
 * color to the object pointing to the color passed in.
 * @param {Object} catObj
 * @param {string} color
 * @returns {Object} catObj
 */

const giveCatColor = (catObj, color) => {
  catObj.color = color
  return catObj
};

/**
 * Takes in a cat object and returns its 'texture', if it has that property.
 * If it does not have the 'texture' property "throw Error('Does not have texture property')"
 * @param {Object} catObj
 * @returns {string} Texture or throws error.
 * @throws {Error} 'Does not have texture property'
 */

const catTexture = (catObj) => {
  if(catObj.texture){
    return catObj.texture
  } else {
    throw Error('Does not have texture property')
  }
};

/**
 * Takes in an object and returns all its keys as an array.
 * Does not use Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */
const objKeys = (Object) => {
  let newArr = []
  for(let key in Object){
    newArr.push(key)
  }
  return newArr
};

/**
 * Takes in an object and returns all its keys as an array.
 * Uses Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */

const objKeys2 = (obj) => {
  let arr = Object.keys(obj)
  return arr
};

/**
 * Takes in an object and returns all the values as an array.
 * Does not use Object.values in its implementation.
 * @param {Object}
 * @returns {*[]} All the values from the object
 */
const objValues = (obj) => {
  let arr = []
  for(let key in obj){
    arr.push(obj[key])
  }
  return arr
};

/**
 * Takes in an object and returns all the values as an array.
 * Uses use Object.values in its implementation.
 * @param {Object}
 * @returns {*[]} All the values from the object
 */

const objValues2 = (obj) => {
  let arr = Object.values(obj)
  return arr
};

/**
 * Takes in an array of film objects and
 * returns a new array with only the directors listed.
 * @param {Object[]} films
 * @param {string} films[].director - The director of the film.
 * @returns {string[]} Only the directors
 */

const findDirectors = (films) => {
  let arr = []
  for(let i = 0; i < films.length; i++){
    arr.push(films[i].director)
  }
  return arr
};

/**
 * Takes in an array of people objects with with properties
 * firstName and lastName. Return a new array that has
 * everybody's full name.
 * firstName and lastName should be separated by one space only.
 * @param {Object[]} people - Array of person objects.
 * @param {string} people[].firstName - The person's first name.
 * @param {string} people[].lastName - The person's last name.
 * @returns {string[]} The full names of all people.
 */

const fullNames = (people) => {
  let arr = []
  for(let i = 0; i < people.length; i++){
    arr.push(`${people[i].firstName} ${people[i].lastName}`)
  }
  return arr
};

/**
 * Takes in an object which maps a persons name to an array
 * of deposits that have been made to their account.
 *
 * Return the name and total amount of money deposited
 * of the person who received the most money.
 *
 * @param {Object} depositsByPerson
 * @returns {string} A string describing the largest earner in the form: "Davies made $4876"
 *
 * Exp Input:
 *  {
 *     Williams: [300, 270, 24, 52, 99],
 *     Cooper: [200, 55, 600, 305, 410, 35],
 *     Davies: [4008, 568, 300],
 *     Clark: [555, 457, 995, 806, 569, 46, 265],
 *     Johnson: [126, 300, 640, 255, 268],
 *  };
 */
const largestEarner = (depositsByPerson) => {
  let sum
  let name
  let largest = 0
  for(let key in depositsByPerson){
    sum = 0
    for(let i = 0; i < depositsByPerson[key].length; i++){
      sum += depositsByPerson[key][i]
    }
    if(largest < sum){
      largest = sum
      name = key
    }
  }
  return `${name} made $${largest}`
};

/**
 * Takes in an object and returns and array where
 * each key and value pair are together but separated by " & "
 * Exp Input: {"Peanut Butter": "Jelly"}
 * Output: ["Peanut Butter & Jelly"]
 * @param {Object} groups
 * @returns {string[]}
 */

const pairs = (groups) => {
  let arr = []
  for(let key in groups){
    arr.push(`${key} & ${groups[key]}`)
  }
  return arr
};

/**
 * Takes in an array of films, where each film has the following
 * properites: title, director, watched (a boolean)
 *
 * Return an array where each element tells the user if they've watched the film or not.
 *
 * Exp Output:
 * [
 * 'You already watched "Wonder Woman" directed by Patty Jenkins.',
 * 'You still need to watch "Jaws" by director Steven Spielberg.'
 * ]
 *
 * @param {Object[]} films - Array of film objects.
 * @param {string} films[].director - The director of the film.
 * @param {string} films[].title - The title of the film.
 * @param {boolean} films[].watched - Whether or not the film has been watched by the user.
 * @returns {string[]} Array of sentences about films
 */
const movieList = (films) => {
  let arr = []
  for(let i = 0; i < films.length; i++){
    if(films[i].watched){
      arr.push(`You already watched \"${films[i].title}\" directed by ${films[i].director}.`)
    } else {
      arr.push(`You still need to watch \"${films[i].title}\" by director ${films[i].director}.`)
    }
  }
  return arr
};

/**
 * Takes in a sentence and returns the most
 * frequent word that is longer than 5 characters.
 * @param {string} sentence A sentence or passage
 * @returns {string} The most frequent word longer than 5 characters
 */

const mostFreqWordGreaterThanFive = (sentence) => {
  let newArr = sentence.split(" ")
  let word = ""
  let maxCount = 0
  let counting = 0
  if(sentence.length === 0){
    return ""
  }
  for(let i = 0; i < newArr.length; i ++){
    if(newArr[i].length > 5){
      counting = 1
      for(let j = i+1; j < newArr.length - 1; j++){
        if(newArr[i] === newArr[j]){
          counting++
        }
      }
      if(counting > maxCount){
        maxCount = counting
        word = newArr[i]
      }
    }
  }
  return word
};
/**
 * Takes in a sentence and a length.
 * Returns the most frequent word that is longer than the length.
 * @param {string} sentence - Sentence or passage
 * @param {number} length
 * @returns {string} The most frequent word longer than length
 */

const mostFreqWordGreaterThanLength = (sentence, length) => {
  let newArr = sentence.split(" ")
  let word = ""
  let maxCount = 0
  let counting = 0
  for(let i = 0; i < newArr.length; i ++){
    if(newArr[i].length > length){
      counting = 1
      for(let j = i+1; j < newArr.length - 1; j++){
        if(newArr[i].toLocaleUpperCase() === newArr[j].toLocaleUpperCase()){
          counting++
        }
      }
      if(counting > maxCount){
        maxCount = counting
        word = newArr[i].toLowerCase()
      }
    }
  }
  return word
  //pass the test, but not in a complete sentence with a period
};

/**
 * Takes in a sentence and returns the second most common letter
 * used from the English alphabet.
 * @param {string} sentence
 * @returns {string} The second most used letter.
 */

const secondMostFrequentLetter = (sentence) => {
  let str = "abcdefghijklmnopqrstuvwxyz"
  let highest = 0
  let high = 0
  let count = 0
  let highestLetter = ""
  let highLetter = ""
  if(sentence.length !== 0){
    for(let i = 0; i < str.length; i++){
      count = 0
      for(let j = 0; j < sentence.length; j++){
        if(str.charAt(i) === sentence.charAt(j).toLowerCase()){
          count++
        }
      }
      if(count > highest){
        high = highest
        highLetter = highestLetter
        highest = count
        highestLetter = str.charAt(i)
      } else if(count > high){
        high = count
        highLetter = str.charAt(i)
      }
    }
  }
  return highLetter
};

// Consider the following question: 
// What will the code below log?  Explain why.
// const p1 = {
//   name: 'Joe'
// }

// const p2 = {
//   name: 'Joe'
// }

// console.log(p1 === p2)

//Answer: Object is just like array, it is passed by reference, even they have same exact values, they don't
//        have same reference, which is the address of the memory they are stored in. That will log false.

module.exports = {
  catSpecies,
  giveCatColor,
  catTexture,
  objKeys,
  objKeys2,
  objValues,
  objValues2,
  findDirectors,
  fullNames,
  largestEarner,
  pairs,
  movieList,
  mostFreqWordGreaterThanFive,
  mostFreqWordGreaterThanLength,
  secondMostFrequentLetter,
};
