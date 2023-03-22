// ctrl + / -> single comment (//)
// ctrl + shift + / -> multiple comments(/**/)

/*[SECTION] Statements and Comment

    statements 
        - in programming are instructions 
        that we tell the computer to perform.
        - JS statements usally end with semi-colon
    
    syntax
        - in programming, it is the set of rules that describes
        how statements constructed
    
    comments 
        - are parts of the code that gets ignored by the language

variables
     - it is used as a container of data

Declaring Variables 
    -syntax
        let/const variableName

        ex. let age;

*/
// declaring variable - it tells our devices that a variable name is created and is ready to store data
// declaring a variable without giving it a value will automatically assign it with the value of "undefined,"
// meaning the vairable's value was "not defined"


// console.log() is useful for printing values of variable or certain results of code into the Google Chrome Browser's console.


//trying to print out a value of a variable that has not been declare will return an error of not defined
// the "not defined" error in the console refers to the example, the code refers to the "value" of the variable as not defined.
//console.log(hello);


/* Guides in writing variables JavaScript
    - use the 'let' keyword or 'const' keyword followed by the variable name of your choosing and use the assignment
    assignment operators(=) to assign a value
    -variable names should start with a lowercase character,
    useCamelCase for multiple words.
    - variable names should be indicatve (or descriptive) of the value being stored to avoid confusions.
*/
/* declaring and initializing variables
    - initializing variables 
        -the instance when a variable is given it's 
        initial/starting value

        syntax: 
            let/const variableName = value;
            
            ex:
                let age = 23;
*/



//interest = 4.20;
//console.log(interest)
    
/*
    Reassigning variable values
        - means changing it's or previous value into another value

        syntax: variableName = newValue;

        let variable cannot be re-declared within its scope
            let friend = 'V'
            let friend = 'Suga'
*/



// Reassigning variables vs initializing variables

/*
    declare a variable first
    intialization is done after the variable has been
    declared.
    supplier = "Thonie Smith Tradings"
*/

// this is considered as reassignment because it's initial value was already declared.


// var vs let/const 

/*
    var - is also used in declaring  a variable but var 
    is an ECMASCRIPT(ES1) featured in 1997.

    let/const was introduced as new feature in ES6(2015)

    what make let/const different from var?

    Theer are issues associated with variables declared with var, regarding hosting

    Hoisting is JavaScript's default behavior of moving declarations to the top

*/

// Creating let variables

const favoriteBands = ["5 seconds of summer", "Paramore", "Panic! at the Disco",];

let person = {
    firstName: "Fritz",
    lastName: "Marzan",
    isDeveloper: true,
    hasPortfolio: false,
    age: 20
};

console.log(person); 
console.log(favoriteBands);
