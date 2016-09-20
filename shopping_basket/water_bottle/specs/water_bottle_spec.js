var waterBottle = require("../water_bottle.js")
var assert = require("assert");

describe("Water Bottle", function() {

  it("should be empty,", function() {
    waterBottle.empty();
    assert.equal(0, waterBottle.volume);
  })

  it("should go to 100 when filled,", function() {
    waterBottle.fillUp();
    assert.equal(100, waterBottle.volume);
  })

  it("should go down by 10 when drank", function() {
    waterBottle.fillUp();
    waterBottle.drink();
    assert.equal(90, waterBottle.volume);
  })
  
   it("should be 0 when emptied,", function() {
     waterBottle.fillUp;
     waterBottle.empty();
     assert.equal(0, waterBottle.volume);
   })
  
   it("should not go below 0,", function() {
     waterBottle.fillUp();
     waterBottle.empty();
     waterBottle.drink();
     assert.equal(0, waterBottle.volume);
   })

})