/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {Object} appleCountByName
 * @returns {number} The number of apples Eve has.
 */

const eveAppleCount = (appleCountByName) => {
  return appleCountByName["Eve"];
};

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
  return appleCountByName[name];
  //console.table(appleCountByName);
};

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
  appleCountByName["Eve"] = appleCount;
  return appleCountByName;
};

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
  appleCountByName[name] = newAppleCount;
  return appleCountByName;
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
  sum = appleCountByName["Adam"] + appleCountByName["Eve"];
  return sum;
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
  let sum = 0;
  let arrOfValues = Object.values(appleCountByName);
  for (i = 0; i < arrOfValues.length; i++) {
    sum += arrOfValues[i];
  }
  return sum;
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
  for (const value in appleCountByName) {
    appleCountByName[value] = 0;
  }
  return appleCountByName;
};

/**
 * Takes in an object of countries and their capitals.
 * Return the capital of Russia.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {string} Capital of Russia
 */

const russiaCapital = (capitalByCountry) => {
  return capitalByCountry["Russia"];
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
  return capitalByCountry[country];
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
  capitalByCountry["Jamaica"] = "Kingston";
  return capitalByCountry;
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
  capitalByCountry[country] = capital;
  return capitalByCountry;
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
  let objectAuthors = {};
  // index authors[i][0] -- author
  // index authors[i][1] -- score
  for (let i = 0; i < authors.length; i++) {
    objectAuthors[authors[i][0]] = authors[i][1];
  }
  return objectAuthors;
};

/**
 * You are given an array of objects.
 * Each object in the array describes a submission with a firstName, lastName, and score.
 * Find the person with the best score and return their full name.
 * @param {Object[]} submissions - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} The full name of person with best score.
 */

const bestScore = (submissions) => {
  let nameOf = "";
  let highest = -Infinity; // smallest number is - Infinity
  for (i = 0; i < submissions.length; i++) {
    if (submissions[i].score > highest) {
      highest = submissions[i].score;
      nameOf = submissions[i].firstName + " " + submissions[i].lastName;
    }
  }
  return nameOf;
};

/**
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {Object} {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = () => {
  let objectCubed = {};
  for (i = 1; i <= 20; i++) {
    objectCubed[i] = i * i * i;
  }
  return objectCubed;
};

/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's contained in the string
 * @param {string} str - "A good snake"
 * @returns {Object} Counts of e and a. {a: 2, e: 1}
 */

/* https://www.codegrepper.com/code-examples/javascript/how+to+select+specific+keys+in+javascript+object
const object = { a: 5, b: 6, c: 7  };
const picked = (({ a, c }) => ({ a, c }))(object);
console.log(picked); // { a: 5, c: 7 } 
*/
// -- TO COMPARE OBJECTS --
/* var object1 = {name: "humza" , gender : "male", age: 23}
var object2 = {name: "humza" , gender : "male", age: 23}
var result = Object.keys(object1).every((key) =>  object1[key] === object2[key]) 
*/
//const countAandE = (str) => {}
const countAandE = (str) => {
  let objAE = { a: 0, e: 0 };
  let newStr = str.toLowerCase();
  for (let i = 0; i <= newStr.length - 1; i++) {
    if (newStr[i] === "a") {
      objAE[newStr[i]] += 1;
    } else if (newStr[i] === "e") {
      objAE[newStr[i]] += 1;
    }
  }
  return objAE;
};
// I don't understand what is happening here
/*const countAandE = (str) => {
  let objAE = {"a" : 0, "e" : 0 };
   let counter = {};
   (({ a, e }) => ({ a, e }))(counter); // to get a subset of key value pairs
  for (let i = 0; i <= newStr.length - 1; i++)
    let strI = str[i];
    if (counter[strI]) {
      //(counter[str[i]] === "a" || counter[str[i]] === "A") {  //can i even compare this?  hence the undefined error
      counter[strI]++; // why is it not working for counter "a"
      //console.log("string I is " + strI, counter[strI])
    } else {
      counter[strI] = 1;
    }
  }
  //console.log(counter); // why doesn't counter["a", "e"] work? wrong syntax???
  return objAE; // now i'm getting undefined !!!! :(
  //console.log(counter); ==> { A: 1, ' ': 2, g: 1, o: 2, d: 1, s: 1, n: 1, a: 1, k: 1, e: 1 }
  //return objAE; ==> { a: undefined, e: undefined }
}; */

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} str -  "A good snake"
 * @returns {Object} Counts of all characters: {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = (str) => {
  let lowerStr = str.toLowerCase(); 
  let counter = {};
  for (let i = 0; i <= lowerStr.length - 1; i++) {
    let strI = lowerStr[i];
    if (counter[strI]) {
      counter[strI]++;
    } else {
      counter[strI] = 1;
    }
  }
  return counter;
};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} str - "A good snake"
 * @returns {Object} Counts all characters except spaces  {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 * RESEARCH: 
 * .replace(" ", "") only takes out 1 whitespace
 * https://flaviocopes.com/how-to-replace-whitespace-javascript/
 * const name = 'Hi my name is Flavio'
 * name.replace(/\s/g, '') //HimynameisFlavio
 * also works with .replace(/ /g, "")
 * The \s meta character in JavaScript regular expressions matches any whitespace character: spaces, tabs, 
 * newlines and Unicode spaces. And the g flag tells JavaScript to replace it multiple times. If you miss it, it will only replace the first occurrence of the white space.
 */

const countOccuranceNoSpaces = (str) => {
  let lowerStr = str.toLowerCase().replace(/ /g, ""); 
  let counter = {};
  for (let i = 0; i <= lowerStr.length - 1; i++) {
    let strI = lowerStr[i];
    if (counter[strI]) {
      counter[strI]++;
    } else {
      counter[strI] = 1;
    }
  }
  return counter;
};

/**
 * Takes in an array and returns the most common element.
 * @param {Array} array - array of elements
 * @returns {(number|string)} Most common element
 */

const mostCommonElement = (array) => {
  let countObj = {};
  let most = 0;
  let mostName;
  for (i = 0; i < array.length; i++) {
    let element = array[i];
    if (countObj[element]) {
      countObj[element]++;
    } else {
      countObj[element] = 1;
    }
  } 
  for (const key in countObj) {
    if (most < countObj[key]) {
      most = countObj[key];
      mostName = key;
    }
  }
  if(parseInt(mostName)) {
    return parseInt(mostName)
  } else {
    return mostName;
  }
  // if (typeof(mostName) === "number") {
  //   parseInt(mostName)
  // } else {
  //   return mostName;
  // } 
};

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
  let newArr = [];
  let artist;
  for (let i = 0; i <= arr.length - 1; i++) {
    artist = arr[i];
      pairs[artist] ? newArr.push(pairs[artist]) : newArr.push(artist);
  }
  return newArr;
}; 

/**
 * Takes in an object and a key.
 * It should delete the key value pair from the object and
 * return the changed object.
 * @param {Object}
 * @param {string} key
 * @returns {Object} The Object without the key.
 */

const deleteKey = (object, key) => {
  delete object[key];
  return object;
};

/**
 * Takes in an object and returns the number of
 * properties it has.
 * @param {Object} obj
 * @returns {number} Number of properties.
 */
const propertyCount = (obj) => {
  let number = Object.values(obj);
  return number.length;
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
