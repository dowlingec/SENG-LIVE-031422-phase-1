// Understanding arrays

// What are arrays and how do they allow us to structure our data?

// Define a variable 'pokemon' set to an empty array (no quotation marks etc inside square brackets).
//const pokemon = []
// Rewrite the 'pokemon' array with the following elements: 'pikachu', 'bulbasour', 'jigglypuff'
    //const pokemon = ['pikachu', 'bulbasaur', 'jigglypuff']
// Elements: ITEM INSIDE ARRAY as above 'pikachu' is an element

// Return 'bulbasour' from the pokemon array
    //pokemon[1]
//elements can be reached using other moethods like pokemon[pokemon.length-1]
// Modifying elements:


// Add a new element 'mew' to the end of pokemon. There are 2 ways this can be accomplished. Which method is best practice and why?
    //pokemon.push("mew")
//.push() ia destructive way to add to the end of an array

//const newPokemonArray =[...pokemon, 'Mew']
//spread operator makes a shallow copy of array and then modifies, leaving original array untouched to add to beginning or end. Above showsto end, below to beignning
//const newPokemonArray = ['mew', ...pokemon]

// Add a new element 'Gloom' to the beginning of pokemon.
    //pokemon.unshift('Gloom')
//unshift destructive
//spread operator: see notes above
//const newPokemon = ["Gloom", ...pokemon]

//slice - adds to beginning of array in a new copy with arguments (eg certain elements)


// Remove the first element of 'pokemon'
//.pop reomves the last element
    //pokemon.shift(1) removes from the beginnging


// Create a new array, 'favorites', that includes the first 2 elements from pokemon only and the following 2 new elements: 'squirtle', 'turtwig'.

//MY ATTMEPT
    //const newFavourites = [...pokemon.splice, 'squirtle', 'turtwig'] ALMOST, splice was returning the wrong thing from pokemon array
    //SOLUTION
    //const newFavourites = [...pokemon.slice(0, 2), 'squirtle', 'turtwig']
    //non destructive


// For the following exercises, comment in the following array:

const pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// Iteration

// looping methods:
//going over elements in array individually, to check each one against a condition or perform task on

// for loop
// Define a for loop that will log each pokemon character to the console.
    for (let i = 0; i < arr.length; i++) {
        //here we access each element using bracket notation
        //begining of array is always [0] so start here if you want to start at beginning
        console.log(pokemon[i])
    }


// for..of
// Rewrite the previous exercise using a for..of loop

// .forEach

// Use .forEach() to iteratate through the pokemon array and return each character name in large caps

// Searching an array: .find() vs .filter()

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?

// Modifying an elements in an array

// .map()

// Using map, return a new array with all pokemon character names lowercased.


const add = (num1, num2) => {
    return num1 + num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

// const compute = (fun) => {
//     return fun
// }
// my answers, correct code follows below
// compute(add(9, 10))
// compute(sub(8, 3))
// compute(multiply(3, 4))
const compute = (cbFun) => {
    cbFun(6, 10)
}

compute(add)
//9
compute(sub)
//3
compute(multiply)
//18
// the above is passing function deinition