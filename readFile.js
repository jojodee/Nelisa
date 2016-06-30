var fs = require('fs');

exports.weekSales = function(filePath) {
  var data = fs.readFileSync(filePath, 'utf8');


  var rawData = data.split('\n').splice(1).filter(Boolean);

  var dataObj = [];

  for (var i = 0; i < rawData.length; i++) {
    rawData[i] = rawData[i].split(',');

    dataObj.push({
      Day: rawData[i][0],
      Date: rawData[i][1] + '-2016',
      Product: rawData[i][2],
      Quantity: Number(rawData[i][3]),
      Price: parseInt(rawData[i][4]
        .replace(/R/, ""))
    });
  }

 // console.log(dataObj);
  return dataObj;
};

exports.processor = function(anObject) {
  var productsWeeklySales = {};
  var dataObj = exports.weekSales(anObject)
  // console.log(dataObj);
  dataObj.forEach(function(obj) {
    var product = obj.Product;
    var quantity = Number(obj.Quantity);

    if (productsWeeklySales[product] === undefined) {
      productsWeeklySales[product] = quantity;
    }else{
    productsWeeklySales[product] += quantity;
    }
  });
  // console.log(productsWeeklySales);

   return productsWeeklySales;


}
