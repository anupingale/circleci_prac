const assert = require("assert");
const { sum } = require("../sum.js");

describe('sum',()=>{
  it('should add two numbers',()=>{
    assert.deepEqual(sum(2,3),5);
  })
})
