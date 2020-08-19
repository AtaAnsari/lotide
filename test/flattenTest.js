const flatten = require('./../flatten')

const assert = require('chai').assert

describe("#flatten", () => {
  it("returns [1,2,3,4,5,6,7,8] when passed [1,2,3,[4,5,6],7,8]", () => {
    assert.deepEqual(flatten([1,2,3,[4,5,6],7,8]), [1,2,3,4,5,6,7,8]);
  });
});