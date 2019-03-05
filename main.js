// C is for cookie exercise

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// let y = 1

// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// C is for cookie exercise end





// Conjunction function exercise

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     return conjoinedWord
// }

// const fix = conjunction("Master", "Card")
// console.log(fix)

// Conjunction function exercise end



// Mod Squad exercise

// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     for (let i = 0; i < ModSquad.members.length; i++){
//         HTMLRepresentation += `<div>${ModSquad.members[i]}</div>`
//         document.querySelector(".show-info").innerHTML = HTMLRepresentation
//     }

    
// }

// Mod Squad exercise end



// Simon Says exercise

// const locations = [[1,1], [5,2], [1,3], [3,1], [2,2], [2,3]]

// let invalid = 0;

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//         invalid += 1;
//         console.log("This location is invalid")
//     }


// }
// console.log(`There were ${invalid} invalid locations`)

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/


// Simon says exercise ends





// const llamaNamer = function () {
//     const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//     const randomizer = Math.floor(Math.random() * 8)
//         const suffix = " the Llama"
//         const name = possibleNames[randomizer]
//         return name + suffix
//     }
    
// nameMaker = llamaNamer()
// console.log(nameMaker)



const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * possibleNames.length)
    
    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }
    
    return namer
}

nameMaker = llamaNamer()()
console.log(nameMaker)