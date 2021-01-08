let objct = {
  mostRepeatedKey:function(array){
    if(array.length == 0){
      return null;
    }
  
    let recursionCounter = 1;
    let objCounter = {};
    let mostRecurringKey = array[0];
    let key;
    let i = 0;
    while(i <= array.length-1){
      key = array[i]
      
      if(objCounter[key] == undefined)
        objCounter[key] = 1;
      else
        objCounter[key] += 1;
  
      if(objCounter[key] > recursionCounter){
        mostRecurringKey = key
        recursionCounter = objCounter[key]
      }
      i += 1;
    }
    return mostRecurringKey
  },
  clearString:function(sentence){
    let strArray = sentence.split(" ");
    let newSentence = ""
    let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
      'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
      for(let i = 0; i <= strArray.length-1; i += 1){
        for(let j = 0; j <= strArray[i].length-1; j += 1){
          if(alphabetArray.includes(strArray[i][j].toLowerCase()) || strArray[i][j] === " "){
            newSentence += strArray[i][j].toLowerCase()
          }
        }
      }
      return newSentence;
  },

  secondMostFrequent:(string) => {
    const strArray = string.split('');
  
    const mapping = strArray.reduce((accumulator, value) => {
  
       if(accumulator.has(value)){
        accumulator.set(value, accumulator.get(value) + 1);
       }else{
        accumulator.set(value, 1);
       };
  
       return accumulator;
    }, new Map);
  
    const frequencyArray = Array.from(mapping);
  
    return frequencyArray.sort((element1, element2) => {
       return element2[1] - element1[1];
    })[1][0];
  
  }
  }
/**
 * Takes in a cat object and returns its species.
 * @param {Object} catObj
 * @param {string} catObj.species - The species of the cat.
 * @returns {string} - species
 */

const catSpecies = (catObj) => {
  return catObj['species'];
};

/**
 * Takes in a cat object and a color. Add the key
 * color to the object pointing to the color passed in.
 * @param {Object} catObj
 * @param {string} color
 * @returns {Object} catObj
 */

const giveCatColor = (catObj, color) => {
  catObj['color'] = color;
  return catObj;
};

/**
 * Takes in a cat object and returns its 'texture', if it has that property.
 * If it does not have the 'texture' property "throw Error('Does not have texture property')"
 * @param {Object} catObj
 * @returns {string} Texture or throws error.
 * @throws {Error} 'Does not have texture property'
 */

const catTexture = (catObj, texture) => {
  if(catObj['texture'] !== undefined){
    return catObj['texture'];
  }else{
    throw Error('Does not have texture property')
  }
};

/**
 * Takes in an object and returns all its keys as an array.
 * Does not use Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */
const objKeys = (obj) => {
  let objKeysArray = [];
  for(let key in obj){
    objKeysArray.push(key);
  }
  return objKeysArray;
};

/**
 * Takes in an object and returns all its keys as an array.
 * Uses Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */

const objKeys2 = (obj) => {
  let objKeysArray = Object.keys(obj);
  return objKeysArray;
};

/**
 * Takes in an object and returns all the values as an array.
 * Does not use Object.values in its implementation.
 * @param {Object}
 * @returns {*[]} All the values from the object
 */
const objValues = (obj) => {
  let objValuesArray = [];
  for(let key in obj){
    objValuesArray.push(obj[key]);
  }
  return objValuesArray;
};

/**
 * Takes in an object and returns all the values as an array.
 * Uses use Object.values in its implementation.
 * @param {Object}
 * @returns {*[]} All the values from the object
 */

const objValues2 = (obj) => {
  let objValuesArray = Object.values(obj);
  return objValuesArray;
};

/**
 * Takes in an array of film objects and
 * returns a new array with only the directors listed.
 * @param {Object[]} films
 * @param {string} films[].director - The director of the film.
 * @returns {string[]} Only the directors
 */

const findDirectors = (films) => {
  let directorsArray = [];
  
  for(let i=0; i <= films.length-1; i += 1){
    directorsArray.push(films[i]['director'])
  }

  return directorsArray;
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
  let fullNamesArray = [];

  for(let i=0; i <= people.length-1; i += 1){
    fullNamesArray.push(`${people[i][`firstName`]} ${people[i][`lastName`]}`);
  }

  return fullNamesArray;
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
  let earner = "";
  let mostEarnedAmount = 0;
  let totalAmount;

  for(let key in depositsByPerson){
    totalAmount = 0;

    for(let i = 0; i <= depositsByPerson[key].length-1; i += 1){
      totalAmount += depositsByPerson[key][i];
    }

    if(mostEarnedAmount <= totalAmount){
      mostEarnedAmount = totalAmount;
      earner = key
    }
  }

  return `${earner} made $${mostEarnedAmount}`
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
  let strArray = [];

  for(let key in groups){
    strArray.push(`${key} & ${groups[key]}`)
  }

  return strArray;
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
  let strArray = [];

  for(let i=0; i<= films.length-1; i+= 1){

    if(films[i][`watched`] === true){
      strArray.push(`You already watched \"${films[i][`title`]}\" directed by ${films[i][`director`]}.`)
    }else{
      strArray.push(`You still need to watch \"${films[i][`title`]}\" by director ${films[i][`director`]}.`)
    }
  }

  return strArray;
};

/**
 * Takes in a sentence and returns the most
 * frequent word that is longer than 5 characters.
 * @param {string} sentence A sentence or passage
 * @returns {string} The most frequent word longer than 5 characters
 */

const mostFreqWordGreaterThanFive = (sentence) => {
  let strArray = sentence.split(" ");
  let longerWordsArray = [];

  for(let i = 0; i <= strArray.length-1; i += 1){
  
    if(strArray[i].length > 5){
      longerWordsArray.push(strArray[i])
    }
  }

  if(longerWordsArray.length > 0){
    return objct.mostRepeatedKey(longerWordsArray)
  }else{
    return ""
  }
};

/**
 * Takes in a sentence and a length.
 * Returns the most frequent word that is longer than the length.
 * @param {string} sentence - Sentence or passage
 * @param {number} length
 * @returns {string} The most frequent word longer than length
 */

const mostFreqWordGreaterThanLength = (sentence, length) => {
  let strArray = sentence.split(" ");
  let longerWordsArray = [];

  for(let i = 0; i <= strArray.length-1; i += 1){
    if(strArray[i].length > length){
      longerWordsArray.push(strArray[i].toLowerCase())
    }
  }

  if(longerWordsArray.length > 0){
    return objct.mostRepeatedKey(longerWordsArray)
  }else{
    return ""
  }
};

/**
 * Takes in a sentence and returns the second most common letter
 * used from the English alphabet.
 * @param {string} sentence
 * @returns {string} The second most used letter.
 */

const secondMostFrequentLetter = (sentence) => {

return  objct.secondMostFrequent(objct.clearString(sentence))

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
