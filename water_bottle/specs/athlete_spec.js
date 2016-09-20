var athlete = require('../athlete.js')
var waterBottle = require('../water_bottle.js')
var assert = require("assert");

describe("Athlete", function() {

it("hydration should start at 100", function() {
    assert.equal(100, athlete.hydration);
  })

it("distance should start at 0", function() {
    assert.equal(0, athlete.distance);
  })

  it("distance increase by 10, hydration decrease by 10", function() {
    athlete.increaseDistance();
    assert.equal(10, athlete.distance);
    assert.equal(90, athlete.hydration);
  })


  it("distance cannot increase unless hydration is above 10", function() {
    athlete.hydrationEmpty();
    assert.equal(10, athlete.distance);
  })
  
   it("drink function puts hydration to 100", function() {
     waterBottle.fillUp();
     athlete.drinkWaterBottle();
     assert.equal(100, athlete.hydration);
     assert.equal(90, waterBottle.volume);
   })
})