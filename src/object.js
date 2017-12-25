/**
 * Checks if an object is empty
 * Do note that an empty object in javascript is a truthy value,
 * so we have to use this function to check for an empty object
 * @link https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
 * @param obj
 * @returns boolean
 */
export const isEmptyObject = (obj) => {
  let surelyObj = obj;

  if (typeof obj === 'string') {
    surelyObj = JSON.parse(obj);
  }

  return Object.keys(surelyObj).length === 0;
};

/**
 * Duck-typing to check if a key is trying to access a nested value
 * @param {string} key
 * @return {boolean}
 */
export const isNestedKey = key => key.indexOf('.') > -1;

/**
 * Key-path accessor to get value from nested object
 * @link https://stackoverflow.com/questions/8750362/using-variables-with-nested-javascript-object
 * @param {{}} obj - the nested objected
 * @param {string} path - @example 'foo.bar'
 * @returns {*}
 */
export const getNestedObjectValue = (obj, path) => {
  const paths = path.split('.');
  let res = obj;
  for (let i = 0; i < paths.length; i += 1) {
    // exit if key does not exist on the object
    if (!res) {
      return res;
    }
    res = res[paths[i]];
  }
  return res;
};

/**
 * Check if a key exists in an object
 * Note; if key exist, but value is null, returns true.
 * @param {{}} obj
 * @param {string} key
 * @return {Boolean}
 */
export const objectHasKey = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

/**
 * Access a node object with an undetermined nested or single key
 * @param {{}} node
 * @param {string} key
 * @return {*}
 */
export const getNodeValue = (node, key) => {
  if (isNestedKey(key)) {
    return getNestedObjectValue(node, key);
  }
  return node[key];
};


/**
 * Check if a variable is an Object
 * @link https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
 * @param {*} v
 * @return {boolean}
 */
export const isObject = v => v !== null && typeof v === 'object';

/**
 * Check if a variable is a function
 * @link https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
 * @param {*} v
 * @return {boolean}
 */
export const isFunction = v => typeof v === 'function';


/**
 * Get object from JSON string
 * @param {string} json
 * @return {{}}
 */
export const getObjectFromJSON = json => JSON.parse(json);


/**
 * Get JSON string from object
 * @param {{}} obj
 * @return {string}
 */
export const getJSONFromObject = obj => JSON.stringify(obj);


/**
 * Get JSON From key and value
 * @param {*} k
 * @param {*} v
 * @return {string}
 */
export const getJSONFromKeyValue = (k, v) => getJSONFromObject({ [k]: v });
