var cwiczeniaJS = new (function() {

  var a = 0.1,
      b = 0.2,
      c;

  function writeConsole(){
    c = +(a + b).toFixed(1); //Here the numbers are added together, returning the erroneous floating number, it is then set using toFixed as a string "0.3". Finally the + symbol casts the string back to a valid Number so that it can be worked with again.
    console.log(c)
  }

  this.init = function () {
    writeConsole();
  }
});


$(document).ready(function () {
cwiczeniaJS.init();
});