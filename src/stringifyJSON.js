// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "string") {
    return ('\"' + obj + '\"');
  }

  if (obj === null)
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

  if (typeof obj === "object") {
    if (_.isEmpty(obj))
      return '{}';

    var newObj = '{';
    var propIndex = 0;

    for (var prop in obj) {
      if (obj[prop] === undefined || typeof obj[prop] === "function")
        return '{}';  
      newObj += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]) + ',';
    }
    return (newObj.substring(0, (newObj.length - 1)) + '}');
  }
  return String(obj);
};
