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
let russiaCapital = citiesObj["Russia"];
console.log(russiaCapital)

citiesObj["Jamaica"] = "Kingston"

console.log(citiesObj)
citiesObj["Indonesia"] = "Jakarta"
console.log(citiesObj)

var authorScores = {
    "Mark Twain" : 8.9,
    "Nathaniel Hawthorne" : 5.1,
    "John Steinbeck" : 2.3,
    "C.S. Lewis" : 9.9,
    "Jon Krakauer" : 6.1
};

console.table(authorScores);

authorScores["Erik Larson"] = 9.2;

console.table(authorScores);