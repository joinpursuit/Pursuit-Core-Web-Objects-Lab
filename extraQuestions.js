// let cat = {
//     genus: 'Felis',
//     species: 'Catus'
//  }

//  console.log(cat["species"]);
//  cat["color"] = "grey";

//  if(cat.hasOwnProperty("texture")) {
//      console.log(`Cat has texture`);
//  } else {
//      console.log(`Cat does not have texture`);
//  }


//  let p1 = {
//     name: 'Joe'
//   }

//   let p2 = {
//     name: 'Joe'
//   }
//   console.log(p1 === p2)
// It would log false, because the memory points to different points.

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}
let arrSpanNumKey = Object.keys(spanishNumbers);
console.log(arrSpanNumKey);
let arrSpanNumVal = Object.values(spanishNumbers);
console.log(arrSpanNumVal);