// //PROBLEM 1
// // let cat = {
// //     genus: 'Felis',
// //     species: 'Catus'
// //  }

// //  console.log(cat["species"]);
// //  cat["color"] = "grey";

// //  if(cat.hasOwnProperty("texture")) {
// //      console.log(`Cat has texture`);
// //  } else {
// //      console.log(`Cat does not have texture`);
// //  }

// //PROBLEM 2
// //  let p1 = {
// //     name: 'Joe'
// //   }

// //   let p2 = {
// //     name: 'Joe'
// //   }
// //   console.log(p1 === p2)
// // It would log false, because the memory points to different points.


// //PROBLEM 3
// // let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}
// // let arrSpanNumKey = Object.keys(spanishNumbers);
// // console.log(arrSpanNumKey);
// // let arrSpanNumVal = Object.values(spanishNumbers);
// // console.log(arrSpanNumVal);


// //PROBLEM 4
// // let obj = {
// //     1: 1,
// //     2: 2,
// //     3: 3
// // };
// // let numOfProperties = 0;
// // for(let key in obj) {
// //     numOfProperties += 1;
// // }
// // console.log(numOfProperties);

// // Question 5
// // Loop through the following object and log all of the directors.

// let films = [
//  {
//    name: 'Psycho',
//    director: 'Alfred Hitchcock',
//    released: 1960
//  }, {
//    name: 'Citizen Kane',
//    director: 'Orson Welles',
//    released: 1941
//  }, {
//    name: 'The Usual Suspects',
//    director: 'Bryan Singer',
//    released: 1995
//  }
// ]

// //logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'

// for(let key in films){
//     console.log(films[key]['director'])
// }

// // Question 6
// // You are given an array of objects. Each object in the array contains exactly 2 keys “firstName” and “lastName”

// let people = [
//     {
//         "firstName": "Calvin",
//         "lastName": "Newton"
//     },
//     {
//         "firstName": "Garry",
//         "lastName": "Mckenzie"
//     },
//     {
//         "firstName": "Leah",
//         "lastName": "Rivera"
//     },
//     {
//         "firstName": "Sonja",
//         "lastName": "Moreno"
//     },
//     {
//         "firstName": "Noel",
//         "lastName": "Bowen"
//     }
// ]
// // a. Create an array of strings called firstNames that contains only the values for “firstName” from each object.

// // b. Create an array of strings called fullNames that contains the values for “firstName” and “lastName” from the object separated by a space.

// let firstNames = []
// let fullNames = []
// let currentName

// for( let index in people){
//     firstNames.push(people[index]["firstName"])
// }
// console.log(firstNames)

// for( let index in people){
//     currentName = people[index]["firstName"] + " " + people[index]["lastName"]
//     fullNames.push(currentName)
// }
// console.log(fullNames)

// Question 7
// You are given the object deposits, which maps a persons name to an array of deposits that have been made to their account.

// a) Write code to to print the name and total amount deposited of the person who received the most money.

// b) Create an array called stolenCents, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the stolenCents array and round down the value in the original object.

// c) How much money did you steal?