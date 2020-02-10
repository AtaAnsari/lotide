const assertArraysEqual = require('../assertArraysEqual');
const middleIdentifier = require('../middle')

assertArraysEqual(middleIdentifier([1,2,3,4,5,6,7]), [4])

assertArraysEqual(middleIdentifier([1,2,3,4,5,6,7,8]), [4,5])