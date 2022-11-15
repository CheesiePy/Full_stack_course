// first test
// 10 questions total (10 points each), bonus (solve the code in a single line)

// Q1
/** 
The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

sleep_in(False, False) → True
sleep_in(True, False) → False
sleep_in(False, True) → True
 */

function sleep_in(weekday, vacation) {}


// Q2
/**
 * We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble.
 * 
 * monkey_trouble(True, True) → True
 * monkey_trouble(False, False) → True
 * monkey_trouble(True, False) → False
 *  */

function monkey_trouble(a_smile, b_smile) {}

//Q3
/**
 * Given two int values, return their sum. Unless the two values are the same, then return double their sum.
 * 
 * 
 * sum_double(1, 2) → 3
 * sum_double(3, 2) → 5
 * sum_double(2, 2) → 8
 *  */

function sum_double(a, b) {}

//Q4
/**
 * Given a string and a non-negative int n, return a larger string that is n copies of the original string.
 * 
 * string_times('Hi', 2) → 'HiHi'
 * string_times('Hi', 3) → 'HiHiHi'
 * string_times('Hi', 1) → 'Hi'
 *  */

function string_times(str, n) {}


//Q5
/**
 * 
 * Given 3 int values, a b c, return their sum.
 * However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. 
 * So for example, if b is 13, then both b and c do not count.
 * 
 * lucky_sum(1, 2, 3) → 6
 * lucky_sum(1, 2, 13) → 3
 * lucky_sum(1, 13, 3) → 1
 * 
 * 

* */

function lucky_sum(a, b, c) {}


//Q6
/**
 *  We want to make a row of bricks that is goal inches long. 
 *  We have a number of small bricks (1 inch each) and big bricks (5 inches each). 
 *  Return True if it is possible to make the goal by choosing from the given bricks. 
 *  This is a little harder than it looks and can be done without any loops. 
 *  See also: Introduction to MakeBricks
 *
 * make_bricks(3, 1, 8) → True
 * make_bricks(3, 1, 9) → False
 * make_bricks(3, 2, 10) → True
 *  */

function make_bricks(small, big, goal) {}


//Q7
/**
 * Given an array of strings, return the count of the number of strings with the given length.

wordsCount(["a", "bb", "b", "ccc"], 1) → 2
wordsCount(["a", "bb", "b", "ccc"], 3) → 1
wordsCount(["a", "bb", "b", "ccc"], 4) → 0
    *  */

function wordsCount(words, len) {}


//Q8
/**
 * Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit.
 * 
 * has_one(10) → True
 * has_one(22) → False
 * has_one(220) → False
 * */

function has_one(n) {}


//Q9
/*

We have an array of heights, 
representing the altitude along a walking trail. 
Given start/end indexes into the array, 
return the number of "big" steps for a walk starting at the start index and ending at the end index. 
We'll say that step is big if it is 5 or more up or down.
The start end end index will both be valid indexes into the array with start <= end.

bigHeights([5, 3, 6, 7, 2], 2, 4) → 1
bigHeights([5, 3, 6, 7, 2], 0, 1) → 0
bigHeights([5, 3, 6, 7, 2], 0, 4) → 1
*/

function bigHeights(heights, start, end) {}

//Q10
/**
 Given an array of strings, 
 return a new array without the strings that are equal to the target string.
 One approach is to count the occurrences of the target string,
 make a new array of the correct length, 
 and then copy over the correct strings.

wordsWithout(["a", "b", "c", "a"], "a") → ["b", "c"]
wordsWithout(["a", "b", "c", "a"], "b") → ["a", "c", "a"]
wordsWithout(["a", "b", "c", "a"], "c") → ["a", "b", "a"]
*/

function wordsWithout(words, target) {}



