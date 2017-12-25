# nod

[![NPM version](https://img.shields.io/npm/v/generator-nod.svg?style=flat-square)](https://npmjs.org/package/ggenerator-nod)
[![Build Status](https://img.shields.io/travis/diegohaz/nod/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/nod) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/nod/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/nod/branch/master)

NodeJS module generator/boilerplate.

<p align="center"><img src="https://cloud.githubusercontent.com/assets/3068563/21958520/77e4f45e-da97-11e6-9685-fe380a9cce3d.gif"></p>

## Features

-   [**Babel**](https://babeljs.io/) - Write next generation JavaScript today;
-   [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook;
-   [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code;
-   [**Flow**](https://flowtype.org/) - A static type checker for JavaScript used heavily within Facebook;
-   [**Travis CI**](https://travis-ci.org) - Automate tests and linting for every push or pull request;
-   [**Documentation**](http://documentation.js.org/) - A documentation system so good, you'll actually write documentation.

## Install

The easiest way to use **nod** is through the Yeoman Generator.

```sh
$ npm install -g yo generator-nod
$ yo nod
```

If you don't want to use the generator, you can also download or `git clone` this repo

```sh
$ git clone https://github.com/diegohaz/nod my-module
$ cd my-module
$ rm -rf .git
$ npm install # or yarn
```

Just make sure to edit `package.json`, `README.md` and `LICENSE` files accordingly with your module's info.

## Commands

```sh
$ npm test # run tests with Jest
$ npm run coverage # run tests with coverage and open it on browser
$ npm run lint # lint code
$ npm run docs # generate docs
$ npm run build # generate docs and transpile code
$ npm run watch # watch code changes and run scripts automatically
$ npm run patch # bump patch version and publish to npm e.g. 0.0.1
$ npm run minor # bump minor version and publish to npm e.g. 0.1.0
$ npm run major # bump major version and publish to npm e.g. 1.0.0
```

## Built with Nod

_You can use those modules as a reference when creating yours. If you have built something with Nod, send a PR (try to write a helpful description for Nod users)._

-   [**styled-tools**](https://github.com/diegohaz/styled-tools) - Module using `flow-typed`, targeted to browser.
-   [**styled-theme**](https://github.com/diegohaz/styled-theme) - Module with `gh-pages`, targeted to browser.
-   [**webpack-blocks-happypack**](https://github.com/diegohaz/webpack-blocks-happypack) - Uses Jest snapshots.
-   [**webpack-blocks-split-vendor**](https://github.com/diegohaz/webpack-blocks-split-vendor) - Has peer dependencies.

[More examples](https://github.com/search?l=Markdown&q=generator-nod-2196F3&type=Code)

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### isArray

Check if a variable is an array

**Parameters**

-   `variable` **any** 

### isEqualArrays

Shallow check if two arrays are equal not just in content but also in order

**Parameters**

-   `arr1` **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
-   `arr2` **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### findValueInArrayOfObjects

Find a value in an array of objects

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of the specific key to search
-   `value` **any** the value you need to find
-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** the array of objects

Returns **{}** 

### findValueInArrayOfNodeObjects

Find a value in an array of node objects

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of the specific key to search
-   `value` **any** the value you need to find
-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** the array of objects

Returns **({} | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \| [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean))** 

### findPkInArrayOfNodeObjects

Helper function with shorter syntax with type coercion

**Parameters**

-   `key` **any** 
-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **{}** 

### findIndexInArrayOfNodeObjects

Find an index in an array of node objects

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of the specific key to search
-   `value` **any** the value you need to find
-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** the array of objects

Returns **([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

### findIndexInArrayOfObjects

Find the index of a value in an array of objects

**Parameters**

-   `value` **any** 
-   `arr` **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

### isValueInArray

Check if value is in array

**Parameters**

-   `value` **any** 
-   `arr` **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### intersectArray

Get the intersection data from two primitive arrays

**Parameters**

-   `arr1` **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
-   `arr2` **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### findKeyInArray

Return index of array otherwise false

**Parameters**

-   `value` **any** 
-   `arr` **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | bool)** 

### uniqueArray

Make an array unique

**Parameters**

-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** arr

### countArrayLessUndefinedItems

Returns the length of array, skips `undefined` type from the count

**Parameters**

-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

### sayHello

This function says hello.

**Parameters**

-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Some name to say hello for.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The hello.

### isEmptyObject

Checks if an object is empty
Do note that an empty object in javascript is a truthy value,
so we have to use this function to check for an empty object

**Parameters**

-   `obj`  

Returns **any** boolean

### isNestedKey

Duck-typing to check if a key is trying to access a nested value

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### getNestedObjectValue

Key-path accessor to get value from nested object

**Parameters**

-   `obj` **{}** the nested objected
-   `path` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** @example 'foo.bar'

Returns **any** 

### objectHasKey

Check if a key exists in an object
Note; if key exist, but value is null, returns true.

**Parameters**

-   `obj` **{}** 
-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### getNodeValue

Access a node object with an undetermined nested or single key

**Parameters**

-   `node` **{}** 
-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **any** 

### isObject

Check if a variable is an Object

**Parameters**

-   `v` **any** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isFunction

Check if a variable is a function

**Parameters**

-   `v` **any** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### getObjectFromJSON

Get object from JSON string

**Parameters**

-   `json` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **{}** 

### getJSONFromObject

Get JSON string from object

**Parameters**

-   `obj` **{}** 

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### getJSONFromKeyValue

Get JSON From key and value

**Parameters**

-   `k` **any** 
-   `v` **any** 

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### getSubstringBetweenTwoCharacters

Returns a substring between a set of start and end characters

**Parameters**

-   `str` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `start` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `end` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### getSubstringBeforeCharacter

Returns a substring before the last occurence of a character

**Parameters**

-   `str` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `char` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### getSubstringAfterCharacter

Returns a substring after the last occurence of a character

**Parameters**

-   `str` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `char` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### convertUnderscoreToSpace

Converts underscores to spaces

**Parameters**

-   `str` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### capitalizeFirstLetter

Capitalize the first letter of a string

**Parameters**

-   `str` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### convertCamelToSentenceCase

Convert camel case to sentence

**Parameters**

-   `str` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## License

MIT © [Diego Haz](https://github.com/diegohaz)
