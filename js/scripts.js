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

function romanNumeral(userNumber) {
  var roman = getSymbol(parseInt(userNumber));
  return roman;
};

// Front-End
$(function() {
  $("#romanForm").submit(function() {
    event.preventDefault();

    var inputNumber = $("#inputNumber").val();
    var result = romanNumeral(inputNumber);
    $(".result").text(result);
  });
});
