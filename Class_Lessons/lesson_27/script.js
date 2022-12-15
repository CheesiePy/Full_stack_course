// we are not allowed to use the built-in sort method, sum, max, min, average, median, mode, range, variance methods


let mySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// example mySum function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(mySum(arr)); -> 55

let myMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// example myMax function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMax(arr)); -> 10

let myMin = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

// example myMin function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMin(arr)); -> 1


let myAverage = (arr) => {      
    return mySum(arr) / arr.length;
    // if you want to use the mySum function you have to write it above the myAverage function

};
// example myAverage function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myAverage(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myAverage(arr2)); -> 4.25



let myMedian = (arr) => {
    let median = 0;
    let sortedArr = mySort(arr); // if you want to use the mySort function you have to write it
    if (sortedArr.length % 2 === 0) {
        median = (sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) / 2;
    } else {
        median = sortedArr[(sortedArr.length - 1) / 2];
    }
    return median;
}; // median is the middle value of an array

// example myMedian function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMedian(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myMedian(arr2)); -> 3.5



let myMode = (arr) => {
    let mode = 0;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mode = arr[i];
        }
    }
    return mode;

}; // mode is the most common value of an array

let myRange = (arr) => {
    let range = myMax(arr) - myMin(arr);
    return range;
}; // range is the difference between the largest and smallest values of an array

let myVariance = (arr) => {
    let variance = 0;
    let average = myAverage(arr);
    for (let i = 0; i < arr.length; i++) {
        variance += (arr[i] - average) ** 2;
    }
    variance = variance / arr.length;
    return variance;
}; // variance is the average of the squared differences from the Mean


let mySort = (arr) => { // sort an array from smallest to largest
    let sortedArr = [];
    let min = myMin(arr);
    let max = myMax(arr);
    for (let i = min; i <= max; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == i) {
                sortedArr.push(arr[j]);
            }
        }
    }
    return sortedArr;
    // this is a very bad way to sort an array, but it works! 
}; // sort an array from smallest to largest 
