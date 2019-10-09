let assert = require('assert');

// Uncomment the "assert" lines for each problem when you have a solution, and run the playground to test.  When you have uncommented out the assert lines, no error messages or print statements means that your code is working correctly.
// Question 1
var applesObj = {
    Adam: 3,
    Beth: 5,
    Cal: 3,
    Dan: 5,
    Eve: 4
}

// a. Set eveAppleCount equal to the number of apples that Eve has

let eveAppleCount = applesObj["Eve"]

//assert(eveAppleCount === 4)

// b. Change the number of apples that Adam  has to 4

applesObj["Adam"] = 4

//assert(applesObj["Adam"] === 4)

// c. Set calAndDanAppleCount equal to how many apples Cal and Dan have combined

//let calAndDanAppleCount = applesObj["Cal"] + applesObj["Dan"]

//assert(calAndDanAppleCount === 8)

// d. Set all the values in applesObj to 0

for (let key in applesObj) {
    (applesObj[key] = 0)
  }

for (let key in applesObj) {
  assert(applesObj[key] === 0)
}


// Question Two
var citiesObj = {
    Afghanistan: "Kabul",
    Russia: "Moscow",
    Iceland: "Reykjavik"
}

// a. Set russiaCapital equal to Russia's capital using citiesObj

let russiaCapital /* = Your code here (Replace "" with your solution)*/
//assert(russiaCapital === "Moscow")
    
// b. Add a new key value pair "Jamaica" and its capital "Kingston"

// Your code here

//assert(citiesObj["Jamaica"] === "Kingston")

// c. Add a new key value pair "Indonesia" and its capital "Jakarta"

// Your code here

//assert(citiesObj["Indonesia"] === "Jakarta")

// Question 3

// a. Create a object that represents the table below listing an authors name and their comprehensibility score.
/*
| Author Name |    Score |
| :--: | :--: |
| Mark Twain |    8.9 |
| Nathaniel Hawthorne    | 5.1 |
| John Steinbeck    | 2.3 |
| C.S. Lewis | 9.9 |
| Jon Krakauer | 6.1 |
*/

var authorScores = {}

// Your code here

//assert(authorScores["Mark Twain"] === 8.9)
//assert(authorScores["Nathaniel Hawthorne"] === 5.1)
//assert(authorScores["John Steinbeck"] === 2.3)
//assert(authorScores["C.S. Lewis"] === 9.9)
//assert(authorScores["Jon Krakauer"] === 6.1)


// b. Add an additional author named “Erik Larson” with an assigned score of 9.2.

// Your code here

//assert(authorScores["Erik Larson"] === 9.2)

// Question Four
// You are given an array of objects. Each object in the array describes the score of a person. Find the person with the best score and print his full name.

var peopleWithScores = [
    {
        firstName: "Calvin",
        lastName: "Newton",
        score: 13
    },
    {
        firstName: "Garry",
        lastName: "Mckenzie",
        score: 23
    },
    {
        firstName: "Leah",
        lastName: "Rivera",
        score: 10
    },
    {
        firstName: "Sonja",
        lastName: "Moreno",
        score: 3
    },
    {
        firstName: "Noel",
        lastName: "Bowen",
        score: 16
    }
]

var highestScoringName = ""

// Your code here

//assert(highestScoringName === "Garry Mckenzie")

// Question Five

// Write code below such that cubeObj maps the numbers between 1 and 20 inclusive to their cubes.  A number's cube is that number multiplied by itself twice:
// 2 ^ 3 = 2 * 2 * 2 = 8

var cubeObj = {}

// Your code here

//assert(Object.keys(cubeObj).length === 20)
//assert(cubeObj[1] === 1)
//assert(cubeObj[2] === 8)
//assert(cubeObj[3] === 27)
//assert(cubeObj[14] === 2744)
//assert(cubeObj[20] === 8000)

// Question Six

// Find the most common letter in the string below.  Use an object to generate your solution that maps a character to the number of times it appears in the string.  Ignore whitespaces and capitalization.
 var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."

var frequencyObj = {}

var mostFrequentChar

// Your code here

//assert(mostFrequentChar === "e")

console.log("Ran with 0 errors")
