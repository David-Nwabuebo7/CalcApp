/**
 * @file myMath.js
 * @module myMath
 * @description Implements the math functions.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */

// Internal imports

// External imports
let path = require('path');
let baseFileName = path.basename(__filename, path.extname(__filename));
let namespacePrefix = `application.${baseFileName}.`;

/**
 * @function add
 * @description Adds two numbers together and returns the result.
 * @param {integer} data1 The first number to be added together.
 * @param {integer} data2 The second number to be added together.
 * @returns {integer} The sum of the two input numbers.
 * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */
function add(data1, data2) {
  let functionName = add.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 + data2;
  }
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function subtract
 * @description Subtract two numbers one from another and returns the result.
 * @param {integer} data1 The first number to be subtracted from.
 * @param {integer} data2 The second number to be subtracted.
 * @return {integer} The difference of the two input numbers.
 * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */
function subtract(data1, data2) {
  let functionName = subtract.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 - data2;
  }
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function multiply
 * @description Multiplies two numbers together and returns the result.
 * @param {integer} data1 The first number to be multiplied.
 * @param {integer} data2 The second number to be multiplied.
 * @returns {integer} The multiplication result of the two input numbers.
  * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */
function multiply(data1, data2) {
  let functionName = multiply.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 * data2;
  }
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function divide
 * @description Divides two numbers one by another and returns the result.
 * @param {integer} data1 The first number to be divided.
 * @param {integer} data2 The divisor.
 * @returns {integer} The division result of teh two input numbers.
  * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */
function divide(data1, data2) {
  let functionName = divide.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 / data2;
  }
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function factorial
 * @description Computes the factorial of a number using recursion and returns teh result.
 * @param {integer} data The number to compute factorial for.
 * @returns {integer} The factorial result.
 * @author Nwabuebo David
 * @date 2025/02/23
 * @copyright Copyright © 2025-… by Nwabuebo david. All rights reserved
 */
function factorial(data) {
  let functionName = factorial.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data is: ${data}`);
  let returnData = 0;
  // fail fast technique
  if (data === 0) {
    returnData = 1;
  } else {
    // recursion condition
    returnData = data * factorial(data - 1);
  }
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

module.exports = {
 ['add']: (data1, data2) => add(data1, data2),
  ['subtract']: (data1, data2) => subtract(data1, data2),
  ['multiply']: (data1, data2) => multiply(data1, data2),
  ['divide']: (data1, data2) => divide(data1, data2),
  ['factorial']: (data) => factorial(data)
}