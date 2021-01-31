

//for(const key in object to Iterate) {
//    do this code
//} 

// let person = {
//     firstName: "Andres",
//     LastName: "Ballares",
//     age: 44,
//     weight: 185,
// };

// for(const key in person){

//     console.log(person[key])
// }




// for(const key in person){
//    // console.log(key) // gives us the key
// console.log(person[key])// gives us value
// }


// let variableLastName = "LastName"
// //console.log(person[variableLastName])

// //console.table(person)

// //console.log(person["height"]) // any key that does not have a value returns undifined

// person["firstName"] = "Caliche"
// console.log(person)

// let clothes = {
//     shirts: "bananaRepublic",
//     pants: "levis",
//     hat: "nike",
// };

// console.log(clothes["pants"])

// clothes["pants"] = "seven"
// //console.log(clothes)
// clothes[1] = "gef"
// console.log(clothes)

//objects also have dot notation.

// let car = {
//     model: "T",
//     company: "Ford",
//     year: 1921
//     "nick-name" : "Free-Bird",
// }
// //console.log(car["company"]);
// //console.log(car.company) // get value using dot notation
// car.year = 2021; // set property using dot nottion

// //console.table(car);

// console.log(car["nick-name"])



// let person = {
//     firstName: "Andres",
//     LastName: "Ballares",
//     age: 44,
//     weight: 185,
// };

// const updateAllValuesInObject = (obj) => {
//     for(const key in obj){
//         obj[key] = "***"
//     }
//     return obj;
// }
// console.log(updateAllValuesInObject(person))

// const closet = {
//     winter: {
//         hands: "gloves",
//         head: "beanie",
//     },
//     summer: {
//         hands: "rings",
//         head: "baseball cap",
//     },

// }
// console.log(closet["summer"]["hands"]);
// console.log(closet.summer.hands);

//this is how we get back rings



// to get an array of keys


// let person = {
//     firstName: "Andres",
//     LastName: "Ballares",
//     age: 44,
//     weight: 185,
// };
//let arrOfKeys =[]

//for(const key in person){
    //arrOfKeys.push(key);
// }
// let arrOfKeys = Object.keys(person);
// console.log(arrOfKeys);

// let arrOfValues = Object.values(person); //this is a new array unrelated to the object
// console.log(arrOfValues);




// let person = {
//     firstName: "Andres",
//     LastName: "Ballares",
//     age: 44,
//     weight: 185,
// };

// person["age"] = 34
// person["tall"] = 33
// console.log(person);

// delete person["tall"]// delet ovj[keyToDelete]
// console.log(person);

// const replaceEWithQuestionsMark = (str) => {
//     let output = "";
//     for(let i = 0; i < str.length; i+= 1){
//         const currChar = str[i];
//         if (currChar === "e"){
//             output += "?"
//         } else {
//             output += currChar
//         }
//     } 
    
//         return output;
//     }

// console.log(replaceEWithQuestionsMark("every"));

// const print = () => {
//     let num = i
// while (i <= 10){
//     if(i % 2 === 0)
//    i ++
// }
// return num++
// }
// console.log(print())

let i = 5;

while (i > 3) {
    i += 1
}