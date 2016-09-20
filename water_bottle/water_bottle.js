var waterBottle = {
  volume: 0,
  fillUp: function(){ this.volume = 100;},
  empty: function() {this.volume = 0;},
  drink: function() {
    if (this.volume >= 10) {
      this.volume -= 10 
    } else {
      this.empty();
    }
  }
}
  
module.exports = waterBottle;