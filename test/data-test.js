var assert = require("assert");
var readFile = require("../readFile");


var saleObject = readFile.weekSales('./CSV_files/week1.csv');


describe('weekly sales data', function() {

  it(' should return length of sales array for week1', function() {

    var result = readFile.weekSales('./CSV_files/week1.csv').length;

    assert.deepEqual(result, 105);


  })
  it(' should return length of sales array for week2', function() {

    var result = readFile.weekSales('./CSV_files/week2.csv').length;

    assert.deepEqual(result, 117);



  })
  it(' should return length of sales array for week3', function() {

    var result = readFile.weekSales('./CSV_files/week3.csv').length;

    assert.deepEqual(result, 104);


  })
  it(' should return length of sales array for week4', function() {

    var result = readFile.weekSales('./CSV_files/week4.csv').length;

    assert.deepEqual(result, 119);
  })

})


describe('sales data', function(){

  it('should return most popular product for week1', function(){

    var saleObject = [{
      Product: 'Milo',
      Quantity: 7,
    },{
      Product: 'Peanuts',
      Quantity: 15,
    }, {
      Product: 'Milo',
      Quantity: 15,
    }];

    var result = readFile.processor(saleObject)

    assert.deepEqual(result, {
      Milo : 22,
      Peanuts : 15
    })
  })

})
