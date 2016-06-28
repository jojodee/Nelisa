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
      })

      // console.log(dataObj);

    }


    mostPopProd = {};

    dataObj.forEach(function(obj) {
      var product = obj.Product;
      quantity = Number(obj.Quantity);

      if (mostPopProd[product] === undefined) {
        mostPopProd[product] = 0;
      }
      mostPopProd[product] = mostPopProd[product] + quantity;

    });
    console.log(mostPopProd);






    pop = [];
    dataObject.forEach(function(obj) {
      pop.push(obj.Quantity);

    })
    popProd = Math.max.apply(null, pop);
    console.log(popProd);

    //  salesGrouped = {};

    // dataObj.forEach(function(k){
    //   var period = rawData[i][1];
    //   //console.log(period);
    //     var dates = new Date(period);
    //   console.log(dates);
    // })
    //









  }
  //console.log(salesGrouped);
  // return salesGrouped;
