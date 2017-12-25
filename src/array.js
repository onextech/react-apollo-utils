import { isNestedKey, getNestedObjectValue } from './object';


/**
 * Check if a variable is an array
 * @link https://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript
 * @param {*} variable
 */
export const isArray = variable => variable.constructor === Array;


/**
 * Shallow check if two arrays are equal not just in content but also in order
 * @link https://stackoverflow.com/questions/4025893/how-to-check-identical-array-in-most-efficient-way
 * @param {array} arr1
 * @param {array} arr2
 * @returns {boolean}
 */
export const isEqualArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = arr1.length; i >= 0; i -= 1) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
};


/**
 * Find a value in an array of objects
 * @link https://stackoverflow.com/a/38500417/3532313
 * @param {string} key - the name of the specific key to search
 * @param {*} value - the value you need to find
 * @param {Array} arr - the array of objects
 * @return {{}}
 */
export const findValueInArrayOfObjects = (key, value, arr) => {
  arr.find((x) => {
    if (isArray(x[key]) && isArray(value)) {
      return isEqualArrays(x[key], value);
    }
    return x[key] === value;
  });
};


/**
 * Find a value in an array of node objects
 * @link https://stackoverflow.com/a/38500417/3532313
 * @param {string} key - the name of the specific key to search
 * @param {*} value - the value you need to find
 * @param {Array} arr - the array of objects
 * @return {{}|undefined|boolean}
 */
export const findValueInArrayOfNodeObjects = (key, value, arr) => {
  const foundObject = (arr.find(({ node }) => {
    const findKey = isNestedKey(key) ? getNestedObjectValue(node, key) : node[key];
    return findKey === value;
  }));
  if (foundObject) {
    return foundObject.node;
  }
  return false;
};


/**
 * Helper function with shorter syntax with type coercion
 * @param {*} key
 * @param {Array} arr
 * @return {{}}
 */
export const findPkInArrayOfNodeObjects = (key, arr) => findValueInArrayOfNodeObjects('pk', parseInt(key, 10), arr);


/**
 * Find an index in an array of node objects
 * @link https://stackoverflow.com/a/38500417/3532313
 * @param {string} key - the name of the specific key to search
 * @param {*} value - the value you need to find
 * @param {Array} arr - the array of objects
 * @return {number|undefined}
 */
export const findIndexInArrayOfNodeObjects = (key, value, arr) => {
  const foundIndex = (arr.findIndex(({ node }) => {
    const findKey = isNestedKey(key) ? getNestedObjectValue(node, key) : node[key];
    return findKey === value;
  }));
  if (foundIndex > -1) {
    return foundIndex;
  }
  return false;
};


/**
 * Find the index of a value in an array of objects
 * @param {*} value
 * @param {array} arr
 * @return {number}
 */
export const findIndexInArrayOfObjects = (value, arr) => {
  const keys = Object.keys(arr);
  return keys.filter(key => arr[key] === value)[0];
};

/**
 * Check if value is in array
 * @link https://stackoverflow.com/questions/1181575/determine-whether-an-array-contains-a-value
 * @param {*} value
 * @param {array} arr
 * @return {boolean}
 */
export const isValueInArray = (value, arr) => arr.indexOf(value) > -1;


/**
 * Get the intersection data from two primitive arrays
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 */
export const intersectArray = (arr1, arr2) => arr1.filter(value => arr2.indexOf(value) > -1);


/**
 * Return index of array otherwise false
 * @param {*} value
 * @param {array} arr
 * @return {number|bool}
 */
export const findKeyInArray = (value, arr) => {
  if (arr.indexOf(value) > -1) {
    return arr.indexOf(value);
  }
  return false;
};


/**
 * Make an array unique
 * @link https://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
 * @param {Array} arr
 * @return {Array} arr
 */
export const uniqueArray = arr => Array.from(new Set(arr));


/**
 * Returns the length of array, skips `undefined` type from the count
 * @link https://stackoverflow.com/questions/9901950/count-of-defined-array-elements
 * @param {Array} arr
 * @return {Number}
 */
export const countArrayLessUndefinedItems = arr => arr.filter(value => value !== undefined).length;
