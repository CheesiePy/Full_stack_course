// DOM - Document Object Model

// DOM methods

// 1. getElementById() - returns the element that has the ID attribute with the specified value
let element = document.getElementById("id").innerHTML;
console.log(element);

// // 2. getElementsByClassName() - returns a collection of all elements in the document with the specified class name, as a NodeList object
let elements = document.getElementsByClassName("class");
console.log(elements);

// 3. getElementsByTagName() - returns a collection of all elements in the document with the specified tag name, as a NodeList object
let elements2 = document.getElementsByTagName("p");
console.log(elements2);

// 4. querySelector() - returns the first element that matches a specified CSS selector(s) in the document
let element3 = document.querySelector(".myClass");
console.log(element3);

// 5. querySelectorAll() - returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object
let elements4 = document.querySelectorAll(".myClass");
console.log(elements4);

// 6. createElement() - creates an Element Node with the specified name
let element5 = document.createElement("p");
element3.textContent = "Hello World";
body.appendChild(element5);

// 7. createTextNode() - creates a Text Node with the specified text
let text = document.createTextNode("Hello World");

// 8. appendChild() - adds a node to the end of the list of children of a specified parent node
let element6 = document.createElement("p");
element6.textContent = "Hello World";
body.appendChild(element6);

// 9. removeChild() - removes a child node from the DOM and returns the removed node
let element7 = document.createElement("p");
element7.textContent = "Hello World";
body.appendChild(element7);
body.removeChild(element7);

// 10. replaceChild() - replaces a child node in the DOM and returns the replaced node
let element8 = document.createElement("p");
element8.textContent = "Hello World";
body.appendChild(element8);
let element9 = document.createElement("p");
element9.textContent = "World Hello";
body.replaceChild(element9, element8);

// 11. insertBefore() - inserts a node before the reference node as a child of a specified parent node
let element10 = document.createElement("p");
element10.textContent = "Hello World";
body.appendChild(element10);
let element11 = document.createElement("p");
element11.textContent = "World Hello";
body.insertBefore(element11, element10);



