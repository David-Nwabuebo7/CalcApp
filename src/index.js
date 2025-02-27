/**
 * @file index.js
 * @module index
 * @description A small command line calculator application.
 * @requires module:myMath
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */

// Internal imports
const { log } = require('console');
let myMath = require('./myMath');
let prompt = require('./prompt');
// External imports
let path = require('path');
// global in nodejs is like window. in vanilla js
global.appRoot = path.resolve(process.cwd());
let rootPath = '';
// modern js  uses __filename instead of module.filename
let baseFileName = path.basename(__filename, path.extname(__filename));
let namespacePrefix = `application.${baseFileName}.`;
log(baseFileName)
/**
 * @function application
 * @description This is the main program loop, the init for the entire application.
 * @returns {void}
 * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */
function application() {
    let functionName = application.name;
    let argumentDriveInterface = false;
    let commandInput, commandResult;
    let inputDataValue1 = 0;
    let inputDataValue2 = 0;
    console.log(`BEGIN ${namespacePrefix}${functionName} 
        function`);
    console.log('BEGIN main program loop');
    console.log('BEGIN command parser');
    if (!argumentDriveInterface) {
        while (programRunning) {
            commandInput = prompt.prompt('Enter a math operation: ');

            if (commandInput !== undefined) {
                // the trim removes of the  white space after typing the input value
                if (commandInput.toUpperCase().trim() === 'EXIT' ||
                commandInput.toUpperCase().trim() === 'QUIT' ||
                commandInput.toUpperCase().trim() === 'Q' ||
                commandInput.toUpperCase().trim() === 'X') {
                    console.log('END command Parser');
                    programRunning = false;
                    console.log('END main program loop');
                    console.log('Exiting, Good bye, Have a nice day & stay safe!');
                } else if (commandInput.toUpperCase().trim() === 'ADD') {
                    inputDataValue1 = 0;
                    inputDataValue2 = 0;
                    inputDataValue1 = getUserInput('Enter the first number to add: ');
                    inputDataValue2 = getUserInput('Enter the second number to add: ');
                    let addResult = myMath.add(inputDataValue1, inputDataValue2);
                    console.log('sum is: ' + addResult);
                } else if (commandInput.toUpperCase().trim() === 'SUBTRACT') {
                    inputDataValue1 = 0;
                    inputDataValue2 = 0;
                    inputDataValue1 = getUserInput('Enter the first number to subtract: ');
                    inputDataValue2 = getUserInput('Enter the second number to subtract: ');
                    let subtractResult = myMath.subtract(inputDataValue1, inputDataValue2);
                    console.log('difference is: ' + subtractResult);
                } else if (commandInput.toUpperCase().trim() === 'MULTIPLY') {
                    inputDataValue1 = 0;
                    inputDataValue2 = 0;
                    inputDataValue1 = getUserInput('Enter the first number to multiply: ');
                    inputDataValue2 = getUserInput('Enter the second number to multiply: ');
                    let multiplyResult = myMath.multiply(inputDataValue1, inputDataValue2);
                    console.log('multiply result is: ' + multiplyResult);
                } else if (commandInput.toUpperCase().trim() === 'DIVIDE') {
                    inputDataValue1 = 0;
                    inputDataValue2 = 0;
                    inputDataValue1 = getUserInput('Enter the first number to divide: ');
                    inputDataValue2 = getUserInput('Enter the second number to divide: ');
                    let divisionResult = myMath.divide(inputDataValue1, inputDataValue2);
                    console.log('division result is: ' + divisionResult);
                } else if (commandInput.toUpperCase().trim() === 'FACTORIAL') {
                    inputDataValue1 = 0;
                    inputDataValue1 = getUserInput('Enter the number to compute factorial: ');
                    let factorialResult = myMath.factorial(inputDataValue1);
                    console.log('factorial result is: ' + factorialResult);
                }
            } // End-if (commandInput !== undefined)
        } // End-while (programRunning)
    } // End-if (argumentDriveInterface === false)
    console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function getUserInput
 * @description Gets an input number from teh user and validates that it is an integer.
 * @param {string} message The string message to query the user for input.
 * @returns {integer} An integer value converted from the user input.
 * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */
function getUserInput(message) {
    let functionName = getUserInput.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`message is: ${message}`);
    let returnData = 0;
    let inputData;
    let validInputString = false;
    while (!validInputString) {
        inputData = prompt.prompt(message);
        if (!isNaN(parseInt(inputData))) {
            validInputString = true;
            returnData = parseInt(inputData);
        }
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

let programRunning = false;
// bootStrapApplication
programRunning = true;
application();