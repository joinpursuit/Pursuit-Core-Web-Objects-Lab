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