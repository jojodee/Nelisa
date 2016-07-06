var assert = require("assert");
var readFile = require("../readFile");


describe('sales data', function() {

  it('should return the length of week 1-4 sales', function() {

    assert.equal(105, readFile.weekSales('./CSV_files/week1.csv').length);
    assert.equal(117, readFile.weekSales('./CSV_files/week2.csv').length);
    assert.equal(104, readFile.weekSales('./CSV_files/week3.csv').length);
    assert.equal(119, readFile.weekSales('./CSV_files/week4.csv').length);

  })
})




describe('products ', function() {

  it('should return the specific quantity of each product sold each week', function() {

    var proQuantitySold = {
      "Apples - loose": 36,
      "Bananas - loose": 47,
      "Bread": 45,
      "Chakalaka Can": 23,
      "Coke 500ml": 54,
      "Cream Soda 500ml": 22,
      "Fanta 500ml": 33,
      "Gold Dish Vegetable Curry Can": 17,
      "Imasi": 30,
      "Iwisa Pap 5kg": 17,
      "Milk 1l": 39,
      "Mixed Sweets 5s": 49,
      "Shampoo 1 litre": 3,
      "Soap Bar": 12,
      "Top Class Soy Mince": 22,
    }


    assert.deepEqual(proQuantitySold, readFile.processor('./CSV_files/week1.csv', 'utf8'));
  })
});



describe('products', function(){

  it('return the most popular product for each week', function(){


    assert.equal("Coke 500ml:54", readFile.mostPopular('./CSV_files/week1.csv', 'utf8'))
    assert.equal("Mixed Sweets 5s:54", readFile.mostPopular('./CSV_files/week2.csv', 'utf8'))
    assert.equal("Mixed Sweets 5s:29", readFile.mostPopular('./CSV_files/week3.csv', 'utf8'))
    assert.equal("Coke 500ml:45", readFile.mostPopular('./CSV_files/week4.csv', 'utf8'))
  })
})




describe('products', function(){

  it('return the least popular product for each week', function(){


    assert.equal("Shampoo 1 litre:3", readFile.leastPopular('./CSV_files/week1.csv', 'utf8'))
    assert.equal("Soap Bar:5", readFile.leastPopular('./CSV_files/week2.csv', 'utf8'))
    assert.equal("Shampoo 1 litre:4", readFile.leastPopular('./CSV_files/week3.csv', 'utf8'))
    assert.equal("Shampoo 1 litre:13", readFile.leastPopular('./CSV_files/week4.csv', 'utf8'))
  })
})



describe('products catergories', function(){
  it('should return the most popular category', function(){


    assert.equal("drinks:109", readFile.mostPopularCat('./CSV_files/week1.csv', 'utf8'))
    assert.equal("drinks:87", readFile.mostPopularCat('./CSV_files/week2.csv', 'utf8'))
    assert.equal("dairy:53", readFile.mostPopularCat('./CSV_files/week3.csv', 'utf8'))
    assert.equal("drinks:88", readFile.mostPopularCat('./CSV_files/week4.csv', 'utf8'))
  })
})


describe('products catergories', function(){
  it('should return the least popular category', function(){


    assert.equal("toiletries:15", readFile.leastPopularCat('./CSV_files/week1.csv', 'utf8'))
    assert.equal("toiletries:11", readFile.leastPopularCat('./CSV_files/week2.csv', 'utf8'))
    assert.equal("toiletries:12", readFile.leastPopularCat('./CSV_files/week3.csv', 'utf8'))
    assert.equal("bakery:33", readFile.leastPopularCat('./CSV_files/week4.csv', 'utf8'))
  })
})


describe('purchases', function(){
  it('should return the length of purchases', function(){

    assert.equal(153, readFile.reader('./CSV_files/purchases.csv', 'utf8').length)
  })
})
