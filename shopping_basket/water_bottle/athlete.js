var waterBottle = require("./water_bottle.js");

var athlete = {
  hydration: 100,
  distance: 0,
  increaseDistance: function () {
    if (this.hydration > 10) { 
      this.distance += 10;
      this.hydration -= 10; 
    }
  },
hydrationEmpty: function() {this.hydration = 0},
drinkWaterBottle: function() {
  waterBottle.drink();
  this.hydration = 100;
}

}

module.exports = athlete;