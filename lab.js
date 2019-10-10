let assert = require('assert');

// // Uncomment the "assert" lines for each problem when you have a solution, and run the playground to test.  When you have uncommented out the assert lines, no error messages or print statements means that your code is working correctly.
// // Question 1
// var applesObj = {
//     Adam: 3,
//     Beth: 5,
//     Cal: 3,
//     Dan: 5,
//     Eve: 4
// }

// // a. Set eveAppleCount equal to the number of apples that Eve has

// let eveAppleCount = applesObj["Eve"]/* = Your code here */

// // assert(eveAppleCount === 4)

// // b. Change the number of apples that Adam  has to 4

// applesObj["Adam"] = 4

// // assert(applesObj["Adam"] === 4)

// // c. Set calAndDanAppleCount equal to how many apples Cal and Dan have combined

// let calAndDanAppleCount = applesObj["Cal"] + applesObj["Dan"]/*= Your code here */

// // assert(calAndDanAppleCount === 8)

// // d. Set all the values in applesObj to 0

// // for (let key in applesObj){
// //     applesObj[key] = 0
// // }

// // for (let key in applesObj) {
// //     applesObj[key] = 0
// //   assert(applesObj[key] === 0)
// // }

// // console.log(applesObj)

// // Question Two
// var citiesObj = {
//     Afghanistan: "Kabul",
//     Russia: "Moscow",
//     Iceland: "Reykjavik"
// }

// // a. Set russiaCapital equal to Russia's capital using citiesObj

// // let russiaCapital = citiesObj["Russia"] /* = Your code here (Replace "" with your solution)*/
// // assert(russiaCapital === "Moscow")
    
// // b. Add a new key value pair "Jamaica" and its capital "Kingston"
// // citiesObj.Jamaica = "Kingston"

// // assert(citiesObj["Jamaica"] === "Kingston")

// // c. Add a new key value pair "Indonesia" and its capital "Jakarta"

// // citiesObj.Indonesia = "Jakarta"

// // assert(citiesObj["Indonesia"] === "Jakarta")

// // Question 3

// // a. Create a object that represents the table below listing an authors name and their comprehensibility score.
// /*
// | Author Name |    Score |
// | :--: | :--: |
// | Mark Twain |    8.9 |
// | Nathaniel Hawthorne    | 5.1 |
// | John Steinbeck    | 2.3 |
// | C.S. Lewis | 9.9 |
// | Jon Krakauer | 6.1 |
// */

// var authorScores = {

//     "Mark Twain" : 8.9,
//     "Nathaniel Hawthorne": 5.1, 
//     "John Steinbeck": 2.3, 
//     "C.S. Lewis": 9.9, 
//     "Jon Krakauer" : 6.1,

//     // "Author Name" : ["Mark Twain", "Nathaniel Hawthorne", "John Steinbeck", " C.S. Lewis ", " Jon Krakauer ",],
//     // "Score" : [8.9, 5.1, 2.3, 9.9, 6.1]
// }

// // Your code here
// console.table(authorScores)
// // console.log(authorScores)
// // assert(authorScores["Mark Twain"] === 8.9)
// // assert(authorScores["Nathaniel Hawthorne"] === 5.1)
// // assert(authorScores["John Steinbeck"] === 2.3)
// // assert(authorScores["C.S. Lewis"] === 9.9)
// // assert(authorScores["Jon Krakauer"] === 6.1)


// // b. Add an additional author named “Erik Larson” with an assigned score of 9.2.

// authorScores["Erik Larson" ] = 9.2 

// // assert(authorScores["Erik Larson"] === 9.2)

// // Question Four
// // You are given an array of objects. Each object in the array describes the score of a person. Find the person with the best score and print his full name.

// var peopleWithScores = [
//     {
//         firstName: "Calvin",
//         lastName: "Newton",
//         score: 13
//     },
//     {
//         firstName: "Garry",
//         lastName: "Mckenzie",
//         score: 23
//     },
//     {
//         firstName: "Leah",
//         lastName: "Rivera",
//         score: 10
//     },
//     {
//         firstName: "Sonja",
//         lastName: "Moreno",
//         score: 3
//     },
//     {
//         firstName: "Noel",
//         lastName: "Bowen",
//         score: 16
//     }
// ]

// var highestScoringName = ""
// let highScore = 0

// for(let i =0; i<peopleWithScores.length; i++){
//     if(peopleWithScores[i]["score"] > highScore){
//         highScore = peopleWithScores[i]["score"]
//         highestScoringName = peopleWithScores[i]["firstName"] +" " + peopleWithScores[i]["lastName"]
//     }
 
 
 
    // if(highScore >= peopleWithScores[i]["score"]){
    //     highestScoringName += peopleWithScores[i]["firstName"+ "lastName"]
    // } else {
    //     console.log(highestScoringName + " Score "+ highScore)
    // }
    
// } console.log(highestScoringName)
// console.log(highScore);

// assert(highestScoringName === "Garry Mckenzie")

// Question Five

// Write code below such that cubeObj maps the numbers between 1 and 20 inclusive to their cubes.  A number's cube is that number multiplied by itself twice:
// 2 ^ 3 = 2 * 2 * 2 = 8

// var cubeObj = {
//     1: Math.pow(1,3), //Math.pow(cubeObj["1"],3),
//     2: Math.pow(2,3),
//     3: Math.pow(3,3),
//     4: Math.pow(4,3),
//     5: Math.pow(5,3),
//     6: Math.pow(6,3),
//     7: Math.pow(7,3),
//     8: Math.pow(8,3),
//     9: Math.pow(9,3),
//     10: Math.pow(10,3),
//     11: Math.pow(11,3),
//     12: Math.pow(12,3),
//     13: Math.pow(13,3),
//     14: Math.pow(14,3),
//     15: Math.pow(15,3),
//     16: Math.pow(16,3),
//     17: Math.pow(17,3),
//     18: Math.pow(18,3),
//     19: Math.pow(19,3),
//     20: Math.pow(20,3),
// }

// console.table(cubeObj)
// Your code here

// assert(Object.keys(cubeObj).length === 20)
// assert(cubeObj[1] === 1)
// assert(cubeObj[2] === 8)
// assert(cubeObj[3] === 27)
// assert(cubeObj[14] === 2744)
// assert(cubeObj[20] === 8000)

// Question Six

// Find the most common letter in the string below.  Use an object to generate your solution that maps a character to the number of times it appears in the string.  Ignore whitespaces and capitalization.
 var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."

 var frequencyObj = {};
//  frequencyObj = {"score" :0}
//   console.log(myString.toLowerCase().split(""));
//  console.table(frequencyObj)
//  console.log(frequencyObj["letter"][0])
//  console.log(myString.length)

var mostFrequentChar = " ";


for(let i =0; i < myString.length; i++){
    if ((frequencyObj[myString[i]])){
        frequencyObj[myString[i]] += 1;
    } else {
        frequencyObj[myString[i]] = 1;
    }
        let letter = myString[i]
        if (mostFrequentChar === " " || frequencyObj[myString[i]] > frequencyObj[mostFrequentChar]){
        mostFrequentChar = letter;    
        // console.log(letter)
    }
}
console.table(frequencyObj);
console.log(mostFrequentChar)
//  for(let key in frequencyObj){
    //     if(frequencyObj[key] === Object.keys(frequencyObj)[i]){
//         frequencyObj[myString[i]] ++;
    
// }


 // Your code here
// for(let i = 1; i <myString.length; i++){
//     console.log(frequencyObj);
// }


// console.log(frequencyObj);
// console.log(name)
// console.table(name)
// console.log(Object.keys(frequencyObj["W"]))
// frequencyObj = myString.
// console.log(frequencyObj[myString])
// console.log(myString[]);


// frequencyObj[myString[j]] = count
     
//  if(Object.keys(frequencyObj[j] === myString[j])){
//     frequencyObj[myString[j]] +=1
//  }







//  for(let i = 0; i < myString.length; i++){
//      for(let j = 0; j < frequencyObj["letter"].length; j++){
//         if(frequencyObj["letter"][j] === myString.toLowerCase().split("")[i]){
//             dup += 1
//             // frequencyObj.score = 1
//             console.log(frequencyObj["letter"][j]+ " Letter J" + "score = "+ dup)
//         } else if(frequencyObj["letter"][j] !== myString.toLowerCase().split("")[i]){
//             dup =0
//         }

//      }

//      if(dup >1){
//          mostFrequentChar = frequencyObj["letter"][i]
//      }
//  }
//  console.log(mostFrequentChar + " = Most Freq")

assert(mostFrequentChar === "e")

console.log("Ran with 0 errors")


