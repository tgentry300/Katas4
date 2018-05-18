const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

function makeDiv(content) {
    let div = document.createElement("div")
    div.textContent = content
    document.getElementById("container").appendChild(div)
}

function makeHeader(header) {
    let div = document.createElement("H2")
    div.textContent = header
    document.getElementById("container").appendChild(div)
}
// Kata 1 an array of strings
makeHeader("Kata 1")
const gotCitiesCSVArray = gotCitiesCSV.split(",");
makeDiv(JSON.stringify(gotCitiesCSVArray))

// Kata 2
makeHeader("Kata 2")
const bestThingArray = bestThing.split(" ");
makeDiv(JSON.stringify(bestThingArray));


// Kata 3
makeHeader("Kata 3")
let gotCitiesString = gotCitiesCSV.split(",")
let result = gotCitiesString.join("; ")
makeDiv(result)

// Kata 4
makeHeader("Kata 4")
const lotrCitiesArrayCSV = lotrCitiesArray.join(",")
makeDiv(lotrCitiesArrayCSV)

// Kata 5
makeHeader("Kata 5")
let kata5Result = lotrCitiesArray.slice(0, 5)
makeDiv(kata5Result)

// Kata 6
makeHeader("Kata 6")
let kata6Result = lotrCitiesArray.slice(3, )
makeDiv(kata6Result)

// Kata 7
makeHeader("Kata 7")
let kata7Result = lotrCitiesArray.slice(2, 6)
makeDiv(kata7Result)

// Kata 8
makeHeader("Kata 8")
lotrCitiesArray.splice(2, 1)
makeDiv(JSON.stringify(lotrCitiesArray))

// Kata 9
makeHeader("Kata 9")
lotrCitiesArray.splice(5, 2)
makeDiv(JSON.stringify(lotrCitiesArray))

// Kata 10
makeHeader("Kata 10")
lotrCitiesArray.splice(2, 0, "Rohan")
makeDiv(JSON.stringify(lotrCitiesArray))

// Kata 11
makeHeader("Kata 11")
lotrCitiesArray.splice(5, 1, "Deadest Marshes")
makeDiv(JSON.stringify(lotrCitiesArray))

// Kata 12
makeHeader("Kata 12")
// let kataArray = bestThing.split("")
let kata12result = bestThing.slice(0, 14)
makeDiv(JSON.stringify(kata12result))

// Kata 13
makeHeader("Kata 13")
// let kata13Array = bestThing.split("")
let kata13Result = bestThing.slice(-12, )
makeDiv(JSON.stringify(kata13Result))

// Kata 14
makeHeader("Kata 14")
// let kata14Array = bestThing.split("")
let kata14Result = bestThing.slice(23, 38)
makeDiv(JSON.stringify(kata14Result))

// Kata 15
makeHeader("Kata 15")
let kata15String = bestThing.substring(69, )
makeDiv(JSON.stringify(kata15String))

// Kata 16
makeHeader("Kata 16")
let kata16String = bestThing.substr(23, 15)
makeDiv(kata16String)

// Kata 17
makeHeader("Kata 17")
let kata17Array = bestThing.split(" ")
kata17Result = kata17Array.indexOf("only")
makeDiv(JSON.stringify(kata17Result))

// Kata 18
makeHeader("Kata 18")
let kata18Result = kata17Array.lastIndexOf("bit")
makeDiv(JSON.stringify(kata18Result))

// Kata 19
makeHeader("Kata 19")
let words = [];
gotCitiesCSV.split(",").forEach((word) => {
    if (word.includes("aa") || word.includes("ee") || word.includes("ii") || word.includes("oo") || word.includes("uu")) {
        words.push(word);
        return words
    }
});
makeDiv(JSON.stringify(words))

// Kata 20
makeHeader("Kata 20")
let wordsOfTwenty = [];
lotrCitiesArray.forEach((word) => {
    if (word.endsWith("or")) {
        wordsOfTwenty.push(word);
        return wordsOfTwenty
    }
});
makeDiv(JSON.stringify(wordsOfTwenty))

// Kata 21
makeHeader("Kata 21")
let wordsOfTwentyOne = [];
lotrCitiesArray.forEach((word) => {
    if (word.startsWith("B"))
        wordsOfTwentyOne.push(word)
    return wordsOfTwentyOne
});
makeDiv(JSON.stringify(wordsOfTwentyOne))

// Kata 22
makeHeader("Kata 22")
if (lotrCitiesArray.includes("Mirkwood")){
    makeDiv("yes")}
    else {
        makeDiv("no")
    }

// Kata 23
makeHeader("Kata 23")
if (lotrCitiesArray.includes("Hollywood")){
    makeDiv("yes")}
    else {
        makeDiv("no")
    }

// Kata 24
makeHeader("Kata 24")
kata24Result = lotrCitiesArray.indexOf("Mirkwood")
makeDiv(kata24Result)

// Kata 25
makeHeader("Kata 25")
kata25Array = [];
lotrCitiesArray.forEach((word) => {
    if (word.includes(" ")){
        kata25Array.push(word)
    }
})
makeDiv(JSON.stringify(kata25Array))

// Kata 26
makeHeader("Kata 26")
lotrCitiesArray.reverse();
makeDiv(JSON.stringify(lotrCitiesArray))

// Kata 27
makeHeader("Kata 27")
lotrCitiesArray.sort()
makeDiv(JSON.stringify(lotrCitiesArray))

// Kata 28
makeHeader("Kata 28")
let kata28Result = lotrCitiesArray.sort((a,b)=> {
    if(a.length > b.length){
        return 1
    }else if(a.length < b.length){
        return -1
    }else return 0
    })
    makeDiv(kata28Result)

// Kata 29
makeHeader("Kata 29")
lotrCitiesArray.pop()
makeDiv(lotrCitiesArray)

// Kata 30
makeHeader("Kata 30")
lotrCitiesArray.push("Deadest Marshes")
makeDiv(lotrCitiesArray)

// Kata 31
makeHeader("Kata 31")
lotrCitiesArray.shift()
makeDiv(lotrCitiesArray)

// Kata 32
makeHeader("Kata 32")
lotrCitiesArray.unshift("Rohan")
makeDiv(lotrCitiesArray)