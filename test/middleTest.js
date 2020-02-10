// const assertArraysEqual = require('../assertArraysEqual');
const middleIdentifier = require('../middle')

// assertArraysEqual(middleIdentifier([1,2,3,4,5,6,7]), [4])

// assertArraysEqual(middleIdentifier([1,2,3,4,5,6,7,8]), [4,5])

const assert = require('chai').assert;

describe("#middle", () => {
  it("Returns the middle item(s)", () => {
    const result = middleIdentifier([1,2,3,4,5,6,7]);
    assert.deepEqual(result, [4])
  })
})