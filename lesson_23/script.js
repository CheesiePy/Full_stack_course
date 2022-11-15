// JSON - JavaScript Object Notation
// JSON is a syntax for storing and exchanging data
// JSON is text, written with JavaScript object notation


let json = fetch("people.json")
    .then(response => response.json())
    .then(data => console.log(data))
console.log(json)