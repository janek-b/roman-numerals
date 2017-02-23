// Back-End
var numerals = [
  {value: 1, symbol: "I"},
  {value: 5, symbol: "V"},
  {value: 10, symbol: "X"},
  {value: 50, symbol: "L"},
  {value: 100, symbol: "C"},
  {value: 500, symbol: "D"},
  {value: 1000, symbol: "M"},
];

function getSymbol(number) {
  var romanSymbol = "";
  numerals.forEach(function(numeral) {
    if (numeral.value === number) {
      romanSymbol = numeral.symbol;
    };
  });
  return romanSymbol;
};

function getNumeral(number) {
  var lesserNumeral = 0;
  var greaterNumeral = 0;
  for (var i = 0; i < numerals.length; i++) {
    if (numerals[i].value <= number) {
      lesserNumeral = numerals[i].value;
    }
    else {
      greaterNumeral = numerals[i].value;
      break;
    }
  }
  return [lesserNumeral, greaterNumeral]

}

function splitNumber(number) {
  var numerals = getNumeral(number);
  var difference = number - numerals[0];
  var diffNumerals = getNumeral(difference);
  var diffNumeralCount = difference / diffNumerals[0];
  var returnArray = [];
  var symbols = "";
  if (difference === 0) {
    returnArray.push(number);
  } else if (diffNumeralCount <= 3) {
    returnArray.push(numerals[0]);
    for (var i = 0; i < diffNumeralCount; i++) {
      returnArray.push(diffNumerals[0]);
    }
  } else {
    for (var i = 0; i < 5-diffNumeralCount; i++) {
      returnArray.push(diffNumerals[0]);
    }
    returnArray.push(numerals[1]);
  }
  returnArray.forEach(function(num) {
    symbols = symbols + getSymbol(num);
  })
  return symbols;
}

function romanNumeral(number) {
  var numberPlaces = [];
  var romanSymbols = "";
  for (var i = 0; i < number.length; i++) {
    if (number.charAt(i) != 0) {
      numberPlaces.push(number.charAt(i)+"0".repeat(number.length-(i+1)));
    }
  };
  numberPlaces.forEach(function(num) {
    romanSymbols = romanSymbols + splitNumber(parseInt(num));
  })
  return romanSymbols;
}

// Front-End
$(function() {
  $("#romanForm").submit(function() {
    event.preventDefault();

    var inputNumber = $("#inputNumber").val();
    var result = romanNumeral(inputNumber);
    $(".result").text(result);
  });
});
