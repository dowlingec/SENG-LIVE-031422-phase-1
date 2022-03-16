//function nameOfFunction(){
    //body of the function
//}

function loadPage(){
    console.log("page has loaded, run the program")
    return "this is a return value"
}


//funcion needs to be invoked to run
//loadPage()

//function can be invoked before it has been declared AKA HOISTED
//return value is some end value associated with end goal of the function, is we can use this value elsewhere
// anything after return statement will not run, place carefully as last line of function
const returnVal = loadPage()
console.log (returnVal)

//GLOBAL SCOPE anything defined in the outer scope is accesible in the file, not inside of a function not inside of block global is top level and can be pulled down into block or local
//BLOCK cannot be pushed up to global, but can be pulled down to local defind inside of a condition inside a function
//LOCAL local only to the function, eg a variable reassigned in a function will only be accesed if function is invoked cannot be used in block or global

//let x = 0 // global variable
//function loadPage(){
//    let x = 5 // local function
//    console.log("page has loaded, run the program")
//    return "this is a return value"
//}

// let globalScope = "I'm global"
// function localNblock (){
//    let localScope = "I can be acessed below but not outside my function"
//    if {
//        let blockScope = "I can only be called here deep nested in the block"
//    }
//}

function increaseNum(num){
    //the num parameter will be used inside this function (multiple can be used, any data type, but make sure function is written correctly for data type you are using)
    return num+num
}
//(num) here is the PARAMETER/placeholder
 increaseNum(5)
 increaseNum(10)
 // here (5) and (10) are ARGUMENTS and ACTUAL tangible value 

function renderPokemon(character){
    console.log(`Rendering ${character}`)
}
renderPokemon("pikachu")

//invoking vs reference
// referencing can be used to pass function somewhere to be used, aka referencing definition (i.e.product of function)
//console.log(renderPokemon) is a REFERENCE
//renderPokemon() is INVOKING function
//invoking calld function to actually EXECUTE

//fist class functions
//functions can be treated as a value- we can assign function variable like a value, we can pass function as argument to another function AKA CALLBACK function
//function can be return value of another function

//function expression keyword declaration
//namless functions as below are called anonymous functions
const renderDigimon = function(){
    console.log('renderDigimon')
}
renderDigimon()
//cannot call function before it has been initialised
//const and assigning function to a variable stops accidental chaning of function later

//ARROW FUNCTION SYNTAX
//replace function with const, = bewteen name and () then => {}
const renderPokemon = (character) => console.log(`Rendering ${character}`)
// if fn only has one return/line of code we can condense is using the above arrow syntax
//if fn only has one paramter you can remove the parentheses also
//const renderPokeomn = character => console.log(`Rendering ${character}`)
//can be invoked same way as regular function
//if used for a single liner you do not need the return word if you are simply returning info as. More than one line needs curly braces and return keyword
//onst renderPokeomn = character => {console.log(character)return `Rendering ${character}`}
//HIGHLY READABLE

//CALLBACK FUNCTIONS Passing a function as argument in value form to another function
// pass only a reference of the function
// setTimeout (functiion(){
//    console.log("this is the setTimeout()")
//}, 5000)

//setTimeout(() => console.log("this is the setTimeout()"), 5000);

// pass only a reference of the function
// const fun = () => console.log("this is the setTimeout()")
//setTimeout(fun, 5000);
//if you pass with parentheses ie setTimeout (fun(), 5000) invokes funtion immediately as opposed to using it WITH the code where you are calling back rather than running referenced fn, then adding new function usability

//function can be returned by another function