// string methods

// 1. charAt() - returns the character at the specified index (position)
let a = "Hello";
let b = a.charAt(0);
console.log(b);

// 2. charCodeAt() - returns the Unicode of the character at the specified index
let c = a.charCodeAt(0);
console.log(c);

// 3. concat() - joins two or more strings, and returns a new joined strings
let d = a.concat(" World");
console.log(d);

// 4. endsWith() - checks whether a string ends with specified string/characters
let e = a.endsWith("llo");
console.log(e);

// 5. fromCharCode() - converts Unicode values to characters
let f = String.fromCharCode(72, 101, 108, 108, 111);
console.log(f);

// 6. includes() - checks whether a string contains the specified string/characters
let g = a.includes("llo");
console.log(g);

// 7. indexOf() - returns the position of the first found occurrence of a specified value in a string
let h = a.indexOf("l");
console.log(h);

// 8. lastIndexOf() - returns the position of the last found occurrence of a specified value in a string
let i = a.lastIndexOf("l");
console.log(i);

// 9. split() - splits a string into an array of substrings
let j = a.split("");
console.log(j);

// 10. startsWith() - checks whether a string begins with specified characters
let k = a.startsWith("He");
console.log(k);

// 11. substr() - extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters
let l = a.substr(1, 3); // this code is deprecated! don't use it!
console.log(l);


// 12. substring() - extracts the characters from a string, between two specified indices
let m = a.substring(1, 4);
console.log(m);

// 13. toLowerCase() - converts a string to lowercase letters
let n = a.toLowerCase();
console.log(n);

// 14. toUpperCase() - converts a string to uppercase letters
let o = a.toUpperCase();
console.log(o);

// 15. trim() - removes whitespace from both sides of a string
let p = " Hello World ";
let q = p.trim();
console.log(q);

// 16. valueOf() - returns the primitive value of a string

// 17. length - returns the length of a string
let r = a.length;
console.log(r);

// 18. search() - searches a string for a specified value, and returns the position of the match
let s = a.search("l");
console.log(s);

// 19. replace() - searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
let t = a.replace("l", "L");
console.log(t);

// 20. match() - searches a string for a specified value, or a regular expression, and returns the matches
let u = a.match("l");
console.log(u); 





