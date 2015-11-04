// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  /*
  var stringJSON = {};
  for (var property in obj) {
    if (obj[property] === undefined || typeof obj[property] === "function")
      continue;

    var propertyName = "\"" + property + "\"";

    if (obj[property] != null && typeof obj[property] === "object") {
      stringJSON[propertyName] = stringifyJSON(obj[property]);
    }
    else {
      stringJSON[propertyName] = obj[property];
    }
  }
  return stringJSON;
  */
  if (obj === undefined || typeof obj === "function" || obj === null)
    return 'null';

  if (Array.isArray(obj)) {
    if (obj.length === 0)
      return '[]';
    var arrayString = '[';
    obj.forEach(function(element) {
      arrayString += stringifyJSON(element);
      if (obj.indexOf(element) != (obj.length - 1))
        arrayString += ",";
    });
    arrayString += ']';
    return arrayString;
  }

  if (typeof obj === "string") {
    return ('\"' + obj + '\"');
  }

  if (typeof obj === "object") {
  }

  return String(obj);
};
