var fs = require('fs');

var nwArr = [];
var myData = fs.readFile("week1.csv", "utf8", function(error, data) {
  var linesInFile = data;

  nwArr.push(linesInFile);

  nwArr.forEach(function(line){
  var splitLines =  line.split('\n');

    console.log(splitLines);
  })


});
