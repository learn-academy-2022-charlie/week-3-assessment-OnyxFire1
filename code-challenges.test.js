// ASSESSMENT 3: Coding Practical Questions with Jest

// const { sequenceExpression } = require("@babel/types")
// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Pesudo Code: A number > 2 returns an array of numbers in the Fibonacci sequence.
//The Fibonacci sequence adds the two previous numbers to get the next number in the sequence.
// Run the test to get a good fail.
// To get the good fail first invoke describe, it, and expect methods.
// Describe will run the nested method, it will test the nested method, and expect will call the function.
// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//describe ("fibSeq", () => {
//         const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
//         const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    
//it("takes in a number > 2 and returns an array that length containing the numbers of the Fibonacci sequence", () => {
//         expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//         expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// })
// })
    
//Good fail-ReferenceError: fibSeq is not defined
//Peusodo Code

// Will use array prototype .push to add one or more elements to   the end of the array.
// The recursion sequece will alllow for the code to go back two numbers in the sequenceExpression.
// const fibSeqLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibSeqLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.



// const fibSeq = (length) => {
//     let newArray = [1,1]
//     for (let i=2; i<length; i++){
//         newArray.push(newArray[i-2]+newArray[i-1])
//     }
//     return newArray

// }
// //PASS ./code-challenges.test.js



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// Peusdocode: Take in an array and return a new array with odd numbers from least to greatest.
// Run the test to get a good fail.
// To get the good fail first invoke describe, it, and expect methods.
// Describe will run the nested method, it will test the nested method, and expect will call the function.

    describe ("fullA1", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
   //  Expect output: [-9, 7, 9, 199]
   const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
   //  Expect output: [-823, 7, 23]

    it("return a new array of odd numbers from least to greatest", () => {
    expect(fullA1(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(fullA1(fullArr2)).toEqual([-823, 7, 23,])
    })
    })

//Good fail- ReferenceError: fullA1 is not defined

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// expect output: [-9, 7, 9, 199]
// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// expect output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//Peusodo Code:
// Declare a function that takes in an array and returns only odd numbers
// sort from least to greatest using .sort
// use the .filter method to filter out everything but odd numbers

const fullA1 = (logi) => {
    return logi.filter(value => value % 2 !== 0 && typeof value === "number").sort ((a, b) => (a-b))

    
}

// fullA1
//     ✓ return a new array of odd numbers from least to greatest (1 ms)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Peusdocode: Return the array with the accumulatin sum, empty array should be empty.

// Run the test to get a good fail.
// To get the good fail first invoke describe, it, and expect methods.
// Describe will run the nested method, it will test the nested method, and expect will call the function.
// a) Create a test with expect statements for each of the variables provided.

describe("emptyArr", () => {

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]
    
const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

    it("return a new array of odd numbers from least to greatest", () => {
    expect(emptyArr(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(emptyArr(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(emptyArr(numbersToAdd3)).toEqual([])
    })
    })


// Create a function that returns only accumulating sum.
// Empty array should return empty.

//Good fail -  ReferenceError: emptyArr is not defined

// b) Create the function that makes the test pass.


// PuesdoCode

// Requires a function to run for each element.
// Call a function once for each element using .map
//Add the value of and assign the result to the variable
//Sum will return 0 value because the array is empty
// Return a new array.

// I'm not sure if this makes sense, trying to explain it the best way I can. I did get help from my tutor.



const emptyArr = (arr) => {
    return arr.map((sum => value => sum += value)(0));
}

// emptyArr
//     ✓ return a new array of odd numbers from least to greatest (1 ms)