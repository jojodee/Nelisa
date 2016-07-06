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
  //console.log(dataObj);
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
    } else {
      productsWeeklySales[product] += quantity;
    }
  });
  // console.log(productsWeeklySales);

  return productsWeeklySales;


}



exports.mostPopular = function(product) {

  var weeklyData = exports.processor(product)
  var prodQty = [];
  for (var name in weeklyData) {
    prodQty.push(weeklyData[name]);
  }
  var mostPop = Math.max.apply(null, prodQty);
  //  console.log(mostPop);
  var popProduct = {};

  for (var name in weeklyData) {

    if (weeklyData[name] == mostPop) {
      popProduct = name + ':' + weeklyData[name];
    }
  }
  // console.log(popProduct);
  return popProduct;


}




exports.leastPopular = function(product) {

  var weeklyData = exports.processor(product)
  var prodQty = [];
  for (var name in weeklyData) {
    prodQty.push(weeklyData[name]);
  }
  var leastPop = Math.min.apply(null, prodQty);
  // console.log(mostPopular);
  var popProduct = {};

  for (var name in weeklyData) {

    if (weeklyData[name] == leastPop) {
      leastPopularProduct = name + ':' + weeklyData[name];
    }
  }
  // console.log(leastPopProduct);
  return leastPopularProduct;


}



exports.mostPopularCat = function(product) {

  var obj = exports.processor(product)

  var cat = {
    'Milk 1l': 'dairy',
    'Imasi': 'dairy',
    'Bread': 'bakery',
    'Chakalaka Can': 'tinned-food',
    'Gold Dish Vegetable Curry Can': 'tinned-food',
    'Fanta 500ml': 'drinks',
    'Coke 500ml': 'drinks',
    'Cream Soda 500ml': 'drinks',
    'Iwisa Pap 5kg': 'grains',
    'Top Class Soy Mince': 'grains',
    'Shampoo 1 litre': 'toiletries',
    'Soap Bar': 'toiletries',
    'Bananas - loose': 'fruits',
    'Apples - loose': 'fruits',
    'Mixed Sweets 5s': 'snacks'
  };

  categories = [];
  for (var val in cat) {

    for (var key in obj) {
      if (key === val) {


        categories.push(cat[val] + ':' + obj[key]);
      }
    }

  }
  spCat = [];
  // console.log(categories);
  categories.forEach(function(arr) {
    spCat.push(arr.split(':'));
  });
  //console.log(spCat);
  var totCat = {};

  spCat.forEach(function(arr) {
    var cat = arr[0];
    var quantity = Number(arr[1]);
    if (totCat[cat] === undefined) {
      totCat[cat] = quantity;
    } else {
      totCat[cat] += quantity;
    }

  });

  var prodQty = [];
  for (var name in totCat) {
    prodQty.push(totCat[name]);
  }
  var mostPop = Math.max.apply(null, prodQty);

  var popCat = {};

  for (var name in totCat) {

    if (totCat[name] == mostPop) {
      popCat = name + ':' + totCat[name];
    }
  }
  //  console.log(popCat);
  return popCat;


}


exports.leastPopularCat = function(product) {

  var obj = exports.processor(product)

  var cat = {
    'Milk 1l': 'dairy',
    'Imasi': 'dairy',
    'Bread': 'bakery',
    'Chakalaka Can': 'tinned-food',
    'Gold Dish Vegetable Curry Can': 'tinned-food',
    'Fanta 500ml': 'drinks',
    'Coke 500ml': 'drinks',
    'Cream Soda 500ml': 'drinks',
    'Iwisa Pap 5kg': 'grains',
    'Top Class Soy Mince': 'grains',
    'Shampoo 1 litre': 'toiletries',
    'Soap Bar': 'toiletries',
    'Bananas - loose': 'fruits',
    'Apples - loose': 'fruits',
    'Mixed Sweets 5s': 'snacks'
  };

  categories = [];
  for (var val in cat) {

    for (var key in obj) {
      if (key === val) {


        categories.push(cat[val] + ':' + obj[key]);
      }
    }

  }
  spCat = [];
  // console.log(categories);
  categories.forEach(function(arr) {
    spCat.push(arr.split(':'));
  });
  //console.log(spCat);
  var totCat = {};

  spCat.forEach(function(arr) {
    var cat = arr[0];
    var quantity = Number(arr[1]);
    if (totCat[cat] === undefined) {
      totCat[cat] = quantity;
    } else {
      totCat[cat] += quantity;
    }

  });

  var prodQty = [];
  for (var name in totCat) {
    prodQty.push(totCat[name]);
  }
  var leastPop = Math.min.apply(null, prodQty);

  var popCat = {};

  for (var name in totCat) {

    if (totCat[name] == leastPop) {
      leastPopCat = name + ':' + totCat[name];
    }
  }
  //  console.log(popCat);
  return leastPopCat;


}

exports.reader = function(filePath) {
  var purData = fs.readFileSync(filePath, 'utf8');


  var rawData = purData.split('\n').splice(1).filter(Boolean);
// console.log(rawData);
  var purObj = [];

  for (var i = 0; i < rawData.length; i++) {
    rawData[i] = rawData[i].split(';');

    purObj.push({
    Supplier: rawData[i][0],
      Date: rawData[i][1] + '-2016',
      Product: rawData[i][2],
      Quantity: Number(rawData[i][3]),
      Price: parseInt(rawData[i][4]
        .replace(/R/, "")),
      TotalCost: parseInt(rawData[i][5]
        .replace(/R/, ""))

        
    });
  }
  // console.log(purObj);
  return purObj;
};
































// exports.reader = function(filePath) {
//   var purchasesData = fs.readFileSync(filePath, 'utf8');
//
// // console.log(purchasesData);
//
// rawPurData = purchasesData.split('\n').splice(1).filter(Boolean);
//
//
// var purObj = [];
//
// for (var i = 0; i < rawPurData.length; i++) {
//   rawPurData[i] = rawPurData[i].split(',');
// // console.log(rawPurData);
//   purObj.push({
//     Supplier: rawPurData[i][0],
//     Date: rawPurData[i][1] + '-2016',
//     Product: rawPurData[i][2],
//     Quantity: Number(rawPurData[i][3]),
//     Cost: parseInt(rawPurData[i][4].replace(/R/,'')),
//     TotalCost: parseInt(rawPurData[i][5].replace(/R/,''))
//
//   });
//   //console.log(purObj);
// }
//
//
// //console.log(purObj);
// return purObj;
// };
//
//
//
// // return purchases;
