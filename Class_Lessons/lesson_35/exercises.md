
# Exercise 1



    
    
    1. Write a function that takes a string as input and returns the string with all vowels removed. For example, the string "javascript" should return "jvscrpt".

    2. Write a function that takes an array of numbers as input and returns an array of all the even numbers. For example, the array [1, 2, 3, 4, 5] should return [2, 4].

    3. Write a function that takes an array of strings as input and returns an array of all the strings that have more than 5 characters. For example, the array ["apple", "banana", "grape", "pear"] should return ["banana", "grape"].

    4. Write a function that takes an array of objects as input and returns an array of all the objects that have a certain property. For example, given the array [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Eve", age: 35}], the function should return an array of all the objects that have an age property greater than 30.

    5. Write a function that takes a string and a number as input and returns a new string with the original string repeated the number of times specified by the number. For example, the string "hello" and the number 3 should return "hellohellohello".

---

# Exercise 2

Write a function that takes a string as input and returns the longest palindrome contained within the string. A palindrome is a word or phrase that is spelled the same forwards and backwards.

For example, given the string "abcba", the function should return "abcba" because it is the longest palindrome contained within the string.

Here is some pseudocode that outlines the steps for this function:

```js
function longestPalindrome(string) {
  // Initialize a variable to store the longest palindrome
  let longest = "";

  // Loop through the string, starting at each character
  for (let i = 0; i < string.length; i++) {
    // Loop through the string, starting at the end and working backwards
    for (let j = string.length - 1; j >= 0; j--) {
      // If the characters at the current indices are the same
      if (string[i] === string[j]) {
        // Check if the substring between the indices is a palindrome
        if (isPalindrome(string.substring(i, j + 1))) {
          // If the substring is a palindrome and it is longer than the current longest palindrome, update the longest variable
          if (string.substring(i, j + 1).length > longest.length) {
            longest = string.substring(i, j + 1);
          }
        }
      }
    }
  }
```

create the isPalindrome function:

```js
function isPalindrome(string) {
  // Return the longest palindrome
  return longest;
}
```



