// var applesObj = {
//     Adam: 3,
//     Beth: 5,
//     Cal: 3,
//     Dan: 5,
//     Eve: 4
// }

// let eveAppleCount = applesObj["Eve"]
// console.log(eveAppleCount)

// applesObj["Adam"] = 4
// console.log(applesObj["Adam"])

// let calAndDanAppleCount = applesObj["Cal"] + applesObj["Dan"]                                                            
// console.log(calAndDanAppleCount)

// for (let key in applesObj) {
//     applesObj[key] = 0
// }
// console.log(applesObj)


<<<<<<< HEAD
var citiesObj = {
    Afghanistan: "Kabul",
    Russia: "Moscow",
    Iceland: "Reykjavik"
}
=======
// var citiesObj = {
//     Afghanistan: "Kabul",
//     Russia: "Moscow",
//     Iceland: "Reykjavik"
// }
>>>>>>> cbf280d554e127546ea38b4980bf1ff73c6baa28
// let russiaCapital = citiesObj["Russia"];
// console.log(russiaCapital)

// citiesObj["Jamaica"] = "Kingston"

// console.log(citiesObj)
// citiesObj["Indonesia"] = "Jakarta"
// console.log(citiesObj)

// var authorScores = {
//     "Mark Twain" : 8.9,
//     "Nathaniel Hawthorne" : 5.1,
//     "John Steinbeck" : 2.3,
//     "C.S. Lewis" : 9.9,
//     "Jon Krakauer" : 6.1
// };

// console.table(authorScores);

// authorScores["Erik Larson"] = 9.2;
// console.table(authorScores);

<<<<<<< HEAD
console.table(authorScores);
=======

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
   

//var highestScoringName = 
let highestScoringName = " "
let highScore = peopleWithScores[0]["score"]
for(let i = 0; i < peopleWithScores.length; i++) {
    if(peopleWithScores[i]['score'] > highScore) {

        highScore = peopleWithScores[i]["score"] 
        highestScoringName = peopleWithScores[i]["firstName"] + " " + peopleWithScores[i]["lastName"]
} 
} console.log(highestScoringName)
    // peopleWithScores[i] < ['score']
    // console.log(peopleWithScores[i])
    // let largerScore = 0
    // if(largerScore < peopleWithScores[i]["score"])
    //     peopleWithScores += largerScore
    //     console.log(highScore)

//}
>>>>>>> cbf280d554e127546ea38b4980bf1ff73c6baa28
