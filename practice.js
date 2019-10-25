// // var applesObj = {
// //     Adam: 3,
// //     Beth: 5,
// //     Cal: 3,
// //     Dan: 5,
// //     Eve: 4
// // }
// // for (let key in applesObj) {
// //     applesObj[key]= 0
// // }
// // console.log(applesObj)
// // var citiesObj = {
// //     Afghanistan: "Kabul",
// //     Russia: "Moscow",
// //     Iceland: "Reykjavik"
// // }
// // let russiaCapital = citiesObj.Russia
// // // console.log(russiaCapital)
// // citiesObj['Jamaica'] = "kingston"
// // console.log(citiesObj)

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
// for (i = 0; i < peopleWithScores.length; i+= 1) {
//     highestScoringName += peopleWithScores[i]['name']
// } if (peopleWithScores )
// let fruits = ['apple', 'orange', 'pear']
// fruits.push('clementine')
// let fruitObj = {
//     0: 'apple',
//     1: 'orange',
//     2: 'pear'
// }
// fruitObj[1] = "clementine"
// fruitObj[7] = "cherries"
// console.log(fruitObj)
//console.table(fruitObj)
//console.log(fruitObj[1])
//console.log(fruits)

let films = [
    {
      name: "Psycho",
      director: "Alfred Hitchcock",
      released: 1960,
    },
    {
      name: "Citizen Kane",
      director: "Orson Welles",
      released: 1941,
    },
    {
      name: "The Usual Suspects",
      director: "Bryan Singer",
      released: 1995,
    },
   ];
//for (i = 0; i < films.length; i+=1) {
    //console.log(films[i]['name'])
    let sum = 0;
    for (i = 0; i < films.length; i+=1) {
      sum += films[i]['released']     
    }
    console.log(Math.floor(sum / films.length))
    