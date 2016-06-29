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

exports.processor = function(dataObj) {
  var  mostPopProd = {};
  console.log(dataObj);
  dataObj.forEach(function(obj) {
    var product = obj.Product;
    var quantity = Number(obj.Quantity);

    if (mostPopProd[product] === undefined) {
      mostPopProd[product] = quantity;
    }else{
      mostPopProd[product] += quantity;
    }
  });
  console.log(mostPopProd);

   return mostPopProd;


}
