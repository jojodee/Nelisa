var assert = require("assert");
var readFile = require("../readFile");


describe('sales data', function(){

  it('should return the length of week 1-4 sales', function(){

    assert.equal(105, readFile.weekSales('./CSV_files/week1.csv').length);
    assert.equal(117, readFile.weekSales('./CSV_files/week2.csv').length);
    assert.equal(104, readFile.weekSales('./CSV_files/week3.csv').length);
    assert.equal(119, readFile.weekSales('./CSV_files/week4.csv').length);

  })
})




describe('products popularity', function(){

  it('should return the specific quantity of each product sold each week', function(){



var epectedResult =  {
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




    assert.deepEqual(epectedResult, readFile.processor('./CSV_files/week1.csv', 'utf8'));
  })
})


// var saleObject = readFile.weekSales('./CSV_files/week1.csv');
//
//
// describe('weekly sales data', function() {
//
//   it(' should return length of sales array for week1', function() {
//
//     var result = readFile.weekSales('./CSV_files/week1.csv').length;
//
//     assert.deepEqual(result, 105);
//
//
//   })
//   it(' should return length of sales array for week2', function() {
//
//     var result = readFile.weekSales('./CSV_files/week2.csv').length;
//
//     assert.deepEqual(result, 117);
//
//
//
//   })
//   it(' should return length of sales array for week3', function() {
//
//     var result = readFile.weekSales('./CSV_files/week3.csv').length;
//
//     assert.deepEqual(result, 104);
//
//
//   })
//   it(' should return length of sales array for week4', function() {
//
//     var result = readFile.weekSales('./CSV_files/week4.csv').length;
//
//     assert.deepEqual(result, 119);
//   })
//
// })
//
//
// describe('sales data', function(){
//
//   it('should return most popular product for week1', function(){
//
//     var saleObject = [{
//       Product: 'Milo',
//       Quantity: 7,
//     },{
//       Product: 'Peanuts',
//       Quantity: 15,
//     }, {
//       Product: 'Milo',
//       Quantity: 15,
//     }];
//
//     var result = readFile.processor(saleObject)
//
//     assert.deepEqual(result, {
//       Milo : 22,
//       Peanuts : 15
//     })
//   })
//
// })
