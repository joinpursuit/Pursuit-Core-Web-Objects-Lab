/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {Object} appleCountByName
 * @returns {number} The number of apples Eve has.
 */

const eveAppleCount = (appleCountByName) => {
  return appleCountByName.Eve;
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
 *`
 * Is there a difference between using string notation vs
 * bracket notation? Try them both.`
 */

const appleCount = (appleCountByName, name) => {
  // let appleCountByName.name2 = name
  // console.log(appleCountByName.name);
  if (!appleCountByName[name]) {
    return 0;
  } else {
    return appleCountByName[name];
  }
};
// console.log(apple)

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
  // Object.values(appleCountByName)
  let sum = appleCountByName.Adam + appleCountByName.Eve;
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
  for (let key in appleCountByName) {
    sum += appleCountByName[key];
  }
  return sum;
};

// note for Kenia, no need to use Object.value to get the values. You can "access" the value using the above.

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Reset all the apple values to 0 and return the object.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {Object} Object with values set to zero.
 *
 */

const appleSetToZero = (appleCountByName) => {
  // let appleCountByName[name] = 0
  // return appleCountByName

  for (let key in appleCountByName) {
    appleCountByName[key] = 0;
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
  return capitalByCountry.Russia;
};

/**
 * Takes in an object of countries and their capitals.
 * Takes in a country
 * Return the capital of country given.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @param {string} country
 * @returns {string} Capital of country
 *
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
  let object = {};
  for (let i = 0; i < authors.length; i++) {
    let authorName = authors[i];
    object[authorName[0]] = authorName[1];
  }
  return object;
};

/**
 * You are given an array of objects.
 * Each object in the array describes a submission with a firstName, lastName, and score.
 * Find the person with the best score and return their full name.
 * @param {Object[]} submissions - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} The full name of person with best score.
 */

const bestScore = (submissions) => {
  highestScore = -Infinity;
  bestScoreName = "";
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].score > highestScore) {
      highestScore = submissions[i].score;
      bestScoreName = submissions[i].firstName + " " + submissions[i].lastName;
    }
  }
  return bestScoreName;
};

/**
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {Object} {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = () => {
  newObject = {};
  for (let i = 1; i <= 20; i++) {
    newObject[i] = i ** 3;
  }
  return newObject;
};

/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's contained in the string
 * @param {string} str - "A good snake"
 * @returns {Object} Counts of e and a. {a: 2, e: 1}
 */

const countAandE = (str) => {
  let charCountObject = { a: 0, e: 0 };
  let charArray = str.toLocaleLowerCase();

  // let aCount = 0;
  // let eCount = 0;

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === "a") {
      charCountObject.a += 1;
    } else if (charArray[i] === "e") {
      charCountObject.e += 1;
    }
  }
  // charCountObject.a = aCount;
  // charCountObject.e = eCount;

  return charCountObject;
};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} str -  "A good snake"
 * @returns {Object} Counts of all characters: {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = (str) => {
  let characterObject = {};
  let strArray = str.toLowerCase();

  for (let i = 0; i < strArray.length; i++) {
    if (characterObject[strArray[i]]) {
      characterObject[strArray[i]] += 1;
    } else {
      characterObject[strArray[i]] = 1;
    }
  }

  return characterObject;
};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} str - "A good snake"
 * @returns {Object} Counts all characters except spaces  {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 */

const countOccuranceNoSpaces = (str) => {
  let characterObject = {};
  let strArray = str.toLowerCase();
  strArray = strArray.split(" ").join("");
  // console.log("This is the array: " + strArray);

  for (let i = 0; i < strArray.length; i++) {
    if (characterObject[strArray[i]]) {
      characterObject[strArray[i]] += 1;
    } else {
      characterObject[strArray[i]] = 1;
    }
  }

  return characterObject;
};

/**
 * Takes in an array and returns the most common element.
 * @param {Array} array - array of elements
 * @returns {(number|string)} Most common element
 */

const mostCommonElement = (array) => {
  let counts = array.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  let mostFrequent = Object.keys(counts).filter((k) => counts[k] === maxCount);
  if (parseInt(mostFrequent)) {
    return parseInt(mostFrequent);
  } else {
    return mostFrequent.join("");
  }
  //
  // let obj = {};
  // console.log("this is the array: " + array);
  // for (let el of array) {
  // console.log("This is the index: " + array[i]);
  // let el = array[i];
  // console.log("This is el: " + el);
  // if (obj[el]) {
  //   obj[el]++;
  // } else {
  //   obj[el] = 1;
  // }
  // }
  // console.log("this are the obj keys: " + Object.keys(obj));
  // console.log("this is the object: " + Object.values(obj));
  // let mostCommon = -Infinity;
  // let commonElement;
  // for (let key in obj) {
  //   if (obj[key] > mostCommon) {
  //     mostCommon = obj[key];
  //     key = commonElement;
  //     console.log("This is most common: " + mostCommon);
  //     console.log("This is the key: " + key);
  //     console.log("This is the common element: " + commonElement);
  //   }
  // }
  // return commonElement;
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
  newArray = [];

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (pairs[arr[i]]) {
      newArr.push(pairs[arr[i]]);
    } else newArr.push(arr[i]);
  }
  return newArr;

  //     // newArray.push(el);
  //   }
  //   console.log("This is the array: " + arr);
  //   console.log(pairs);
  //   console.log("This is the new array: " + newArray);

  //   return newArray;
};

/**
 * Takes in an object and a key.
 * It should delete the key value pair from the object and
 * return the changed object.
 * @param {Object}
 * @param {string} key
 * @returns {Object} The Object without the key.
 */

const deleteKey = (obj, key) => {
  delete obj[key];
  return obj;
};

/**
 * Takes in an object and returns the number of
 * properties it has.
 * @param {Object} obj
 * @returns {number} Number of properties.
 */
const propertyCount = (obj) => {
  return Object.keys(obj).length;
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
