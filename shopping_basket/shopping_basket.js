var shoppingBasket = {
  
  currentBasket: [{ name: "burgers",
    price: 2.00}],
  loyaltyCard: false,
  loyaltyCardHolder: function() {
    if (this.loyaltyCard === false) {
      this.loyaltyCard = true
    }
   },
  add: function(item) {this.currentBasket.push(item)},
  deleteLast: function(item) {this.currentBasket.pop()},
  total: function() {
  
  var totalSum = 0;
  for (var i = 0; i < this.currentBasket.length; i++) {
    totalSum += this.currentBasket[i].price;
    }
  
  if (this.loyaltyCard == true) {
    totalSum -= (totalSum * 0.05);
  }

  if (totalSum > 20) {
    totalSum -= (totalSum * 0.10);
    }

    return totalSum;
  }
} 

module.exports = shoppingBasket;