var shoppingBasket = require("../shopping_basket.js");
var assert = require("assert");

describe("Shopping Basket", function() {
  
  it("should be able to add items to the basket", function() {
    shoppingBasket.add({ name: "pizza", price: 2.00 });
    assert.equal(2, shoppingBasket.currentBasket.length)
  })

  it("should be able to get total price of all items in the basket", function() {
    assert.equal(4.00, shoppingBasket.total())
  })

  it("should be able to delete items from the basket", function() {
    shoppingBasket.deleteLast()
    assert.equal(1, shoppingBasket.currentBasket.length)
  })
  
  it("should apply 5 percent discount with loyalty card", function() {
    shoppingBasket.loyaltyCardHolder();
    assert.equal(1.90, shoppingBasket.total())
  })
  
  it("should apply 10 percent discount on baskets over £20", function() {
    shoppingBasket.add({ name: "playstation 4", price: 200 });
    assert.equal(172.71, shoppingBasket.total())
  })

})