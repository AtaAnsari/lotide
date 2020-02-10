# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ataansari/lotide`

**Require it:**

`const _ = require('@ataansari/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Will compare two arrays for equivalence & will print whether the assertion(that they are equal) has passed or not.  
* `assertEqual`: Will compare two primitive values for equivalence & will print whether the assertion (that they are equal) has passed or not.  
* `assertObjectsEqual`: Will compare two objects for equivalence & will print whether the assertion (that they are equal) has passed or not.  
* `countLetters`: Will count the number of letters in a string.
* `countOnly`: Will take two arguments, the first will be an object which will specify which items need to be counted. The second will be an array of items from which only the items of interest will be counted. 
* `eqArrays`: Will compare two arrays for equivalence
* `eqObjects`: Will compare two objects for equivalence
* `findKey`: Will take an object and will identify the key that corresponds to a value that is evaluated by a callback function(second argument).
* `findKeyByValue`: Will take an object and will identify the key that corresponds to a given value in a key- value pair. 
* `flatten`: Takes an array of nested arrays, and returns an array with no nesting. 
* `head`: Takes an array and returns the item at index 0.
* `letterPositions`: Takes a string and returns an object where each letter and its position are represented as key value pairs. 
* `map`: Will iterate through an array, creating a new array of items in which the items of the original array are changed accrording to some function. The original array will not be mutated.  
* `middle`: Will take an array and will return the middle item(s)
* `tail`: Will take an array and return another array with all items of the original except for the item at index 0. 
* `takeUntil`: Will iterate over an array and will return a new array which will contain all the items from the original until some condition (as defined by a function-passed as an argument) is met. 
* `without`: Will take two arrays and will only return those items from the first array which are not found in the second array. 
