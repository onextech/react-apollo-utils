/**
 * Returns a substring between a set of start and end characters
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @return {string}
 */
export const getSubstringBetweenTwoCharacters = (str, start, end) => {
  str.substring(str.lastIndexOf(start) + 1, str.lastIndexOf(end));
};

/**
 * Returns a substring before the last occurence of a character
 * @param {string} str
 * @param {string} char
 * @return {string}
 */
export const getSubstringBeforeCharacter = (str, char) => str.substr(0, str.indexOf(char));

/**
 * Returns a substring after the last occurence of a character
 * @param {string} str
 * @param {string} char
 * @return {string}
 */
export const getSubstringAfterCharacter = (str, char) => str.split(char).pop();

/**
 * Converts underscores to spaces
 * @param {string} str
 * @return {string}
 */
export const convertUnderscoreToSpace = str => str.replace(/_/g, ' ');

/**
 * Capitalize the first letter of a string
 * @link https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 * @param {string} str
 */
export const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Convert camel case to sentence
 * @link https://stackoverflow.com/questions/13720256/javascript-regex-camelcase-to-sentence
 * @param {string} str
 */
export const convertCamelToSentenceCase = (str) => {
  str.replace(/^[a-z]|[A-Z]/g, (v, i) => {
    let result = ` ${v.toLowerCase()}`;
    if (i === 0) {
      result = v.toUpperCase();
    }
    return result;
  });
};
