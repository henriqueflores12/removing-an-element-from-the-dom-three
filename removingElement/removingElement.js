//the element to remove.
var removeEl = document.getElementsByTagName("li")[3];

//its contaning element
var containerEl = removeEl.parentNode;

//removing the element
containerEl.removeChild(removeEl);

//here you can go to the dev tools and see that the element it was removed ...
console.log(document);
