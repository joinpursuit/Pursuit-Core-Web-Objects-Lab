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
  catObj["color"] = color
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
  if (!catObj.texture) throw "Does not have texture property"
  return catObj.texture
};

/**
 * Takes in an object and returns all its keys as an array.
 * Does not use Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */
const objKeys = (obj) => {
  let arr = []
  for (let key in obj) {
    arr.push(key)
  }
  return arr
};

/**
 * Takes in an object and returns all its keys as an array.
 * Uses Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */

const objKeys2 = (obj) => {
  return Object.keys(obj)
};

/**
 * Takes in an object and returns all the values as an array.
 * Does not use Object.values in its implementation.
 * @param {Object}
 * @returns {*[]} All the values from the object
 */
const objValues = (obj) => {
  let arr = []
  for (let key in obj) {
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
  return Object.values(obj)
};

/**
 * Takes in an array of film objects and
 * returns a new array with only the directors listed.
 * @param {Object[]} films
 * @param {string} films[].director - The director of the film.
 * @returns {string[]} Only the directors
 */

const findDirectors = (films) => {
  return films.map(obj => obj.director)
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
  return people.map(person => person.firstName + " " + person.lastName)
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
  const earners = Object.entries(depositsByPerson)
                          .map(([name, deposits]) => {
                            return {
                              name: name,
                              total: deposits.reduce((accum, val) => accum + val)
                            }
                          })
  let max = {name: "", total: 0}
  for (let earner of earners) {
    if (earner.total > max.total) {
      max = earner
    }
  }
  return max.name + " made $" + max.total
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
  return Object.entries(groups).map(([key, value]) => key + " & " + value)
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
  return films.map((film) => {
    if (film.watched) {
      return "You " + "already watched " + "\"" + film.title + "\"" + " directed by " + film.director + "."
    } else {
      return "You " + "still need to watch " + "\"" + film.title + "\"" + " by director " + film.director + "."
    }
  })
};

/**
 * Takes in a sentence and returns the most
 * frequent word that is longer than 5 characters.
 * @param {string} sentence A sentence or passage
 * @returns {string} The most frequent word longer than 5 characters
 */

const mostFreqWordGreaterThanFive = (sentence) => {
  let obj = {}
  for (let word of sentence.split(' ')) {
    if (word.length > 5) {
      const lowerCasedWord = word.toLowerCase()
      obj[lowerCasedWord] = (obj[lowerCasedWord] || 0) + 1
    }
  }
  var mostFrequent = {word: "", count:0}
  for (let key in obj) {
    if (obj[key] > mostFrequent.count) {
      mostFrequent = {word: key, count: obj[key]}
    }
  }
  return mostFrequent.word
};

/**
 * Takes in a sentence and a length.
 * Returns the most frequent word that is longer than the length.
 * @param {string} sentence - Sentence or passage
 * @param {number} length
 * @returns {string} The most frequent word longer than length
 */

const mostFreqWordGreaterThanLength = (sentence, length) => {
  let obj = {}
  for (let word of sentence.split(' ')) {
    if (word.length > length) {
      const lowerCasedWord = word.toLowerCase()
      obj[lowerCasedWord] = (obj[lowerCasedWord] || 0) + 1
    }
  }
  var mostFrequent = {word: "", count:0}
  for (let key in obj) {
    if (obj[key] > mostFrequent.count) {
      mostFrequent = {word: key, count: obj[key]}
    }
  }
  return mostFrequent.word
};

/**
 * Takes in a sentence and returns the second most common letter
 * used from the English alphabet.
 * @param {string} sentence
 * @returns {string} The second most used letter.
 */

const secondMostFrequentLetter = (sentence) => {
  let obj = {}
  for (let letter of sentence) {
    if (letter.match(/[a-z]/i)) {
      const lowerCasedLetter = letter.toLowerCase()
      obj[lowerCasedLetter] = (obj[lowerCasedLetter] || 0) + 1
    }
  }
  let mostFrequent = {letter:"", count: 0}
  let secondMostFrequent = {letter: "", count: 0}
  for (let letter in obj) {
    const count = obj[letter]
    if (count > mostFrequent.count) {
      secondMostFrequent = mostFrequent
      mostFrequent = {letter, count}
    } else if (count > secondMostFrequent.count) {
      secondMostFrequent = {letter, count}
    }
  }
  return secondMostFrequent.letter
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
