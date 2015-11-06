// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var classElements = [];
  if (document.body.classList.contains(className))
    classElements.push(document.body);
  checkChildren(document.body.childNodes);

  return classElements;

  function checkChildren(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].classList != undefined) {
        if (nodes[i].classList.contains(className))
          classElements.push(nodes[i]);
        
      }
      checkChildren(nodes[i].childNodes);
    }
  };
};
