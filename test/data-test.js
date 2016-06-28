var assert = require("assert");
var readFile = require("../readFile");

describe('weekly sales data', function() {

  it(' should return most popular product  for  week 1', function() {

    var week1MostPopularProduct = {
      'Milk 1l': 39,
      Imasi: 30,
      Bread: 45,
      'Chakalaka Can': 23,
      'Gold Dish Vegetable Curry Can': 17,
      'Fanta 500ml': 33,
      'Coke 500ml': 54,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 17,
      'Top Class Soy Mince': 22,
      'Shampoo 1 litre': 3,
      'Soap Bar': 12,
      'Bananas - loose': 47,
      'Apples - loose': 36,
      'Mixed Sweets 5s': 49
    };

    assert.deepEqual(week1MostPopularProduct, readFile.weekSales('./CSV_files/week1.csv').length);


  })
  it('should return most popular product  for  week 2', function() {

    var week2MostPopularProduct = 'milk';

    assert.deepEqual(week2GroupedSales, readFile.groupedSales('./CSV_files/week2.csv').length);


  })
  it('should return most popular product for  week 3', function() {

    var week3MostPopularProduct = 'milk';

    assert.deepEqual(week3GroupedSales, readFile.groupedSales('./CSV_files/week3.csv').length);


  })
  it('should return most popular product  for  week 4', function() {

    var week4MostPopularProduct = 'milk';

    assert.deepEqual(week4GroupedSales, readFile.groupedSales('./CSV_files/week4.csv').length);


  })




})
