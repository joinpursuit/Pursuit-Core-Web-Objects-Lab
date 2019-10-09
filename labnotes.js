var applesObj = {
    Adam: 3,
    Beth: 5,
    Cal: 3,
    Dan: 5,
    Eve: 4
}

let eveAppleCount = applesObj["Eve"]
console.log(eveAppleCount)

applesObj["Adam"] = 4
console.log(applesObj["Adam"])

let calAndDanAppleCount = applesObj["Cal"] + applesObj["Dan"]                                                            
console.log(calAndDanAppleCount)

for (let key in applesObj) {
    applesObj[key] = 0
}
console.log(applesObj)


var citiesObj = {
    Afghanistan: "Kabul",
    Russia: "Moscow",
    Iceland: "Reykjavik"
}
// let russiaCapital = citiesObj["Russia"];
// console.log(russiaCapital)

citiesObj["Jamaica"] = "Kingston"
console.log(citiesObj)

// c. Add a new key value pair "Indonesia" and its capital "Jakarta"
citiesObj.Inodonesia = "Jakarta"
console.log(citiesObj)

// var authorScores =[ 
//     {
//     Name: "Mark Twain",
//     Score: 8.9,
//     }, 
//     {
//     Name: "Nathaniel Hawthrone",
//     Score: 5.1,
//     },
//     {
//     Name: "John Steinback",
//     Score: 2.3,
//     },
//     {
//     Name: "C.S Lewis",
//     Score: 9.9,
//     },
//     {
//     Name: "John Krakauer",
//     Score: 6.1,
//     }
// ]
// console.log(authorScores)

// authorScores.name = 
//      "Erik Larson"
    // Score: 9.2,



// console.log(authorScores)

var authorScores = 
    {
    // {
    Name: "Mark Twain",
    Score: "8.9", 
    // }, 
    // {
    Name: "Nathaniel Hawthrone",
    Score: "5.1",
    // },
    // {
    Name: "John Steinback",
    Score: "2.3",
    // },
    // {
    Name: "C.S Lewis",
    Score: "9.9", 
    // },
    // {
    Name: "John Krakauer",
    Score: "6.1",
    // }
}
  
console.log(authorScores)