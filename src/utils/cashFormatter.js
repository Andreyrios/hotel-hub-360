function reverseString(str, loop) {
  let valueInt = loop === 1 ? Math.ceil(str) : str
  var splitString = valueInt.toString(10).split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function cashFormatter(value) {
  value = value ? reverseString(value.toString(), 1) : "0";

  var finalString = "";

  var indexPoint = 0;
  for (var indexCad = 0; indexCad < value.length; indexCad++) {
    indexPoint++;
    var letter = value[indexCad];
    finalString += letter;
    if (indexPoint === 3 && indexCad !== value.length - 1) {
      indexPoint = 0;
      finalString += ".";
    }
  }
  return `$ ${reverseString(finalString, 2)}`;
}

export default cashFormatter;
