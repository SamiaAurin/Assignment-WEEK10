// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
function calculateDifference(num1, num2) {
    return num1 - num2;
}

console.log("Difference:", calculateDifference(10, 4)); 
//////////////////////////

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(number) {
    return number % 2 !== 0;
}

console.log("Is 7 odd?", isOdd(7)); 
console.log("Is 4 odd?", isOdd(4)); 
//////////////////////////

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
function findMin(numbers) {
    return Math.min(...numbers);
}

console.log("Minimum value:", findMin([5, 3, 9, 1, 7])); 
////////////////////////////

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log("Even numbers:", filterEvenNumbers([5, 3, 10, 6, 7])); 
////////////////////////////

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

console.log("Sorted array (descending):", sortArrayDescending([5, 3, 9, 1, 7])); 
/////////////////////////////

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; 
    return str[0].toLowerCase() + str.slice(1);
}

console.log("Lowercased first letter:", lowercaseFirstLetter("Hello World")); 
/////////////////////////////

// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}

console.log("Number of vowels:", countVowels("Hello World")); 
//////////////////////////////

// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    return sum / numbers.length; 
}

console.log("Average value:", findAverage([10, 20, 30, 40, 50])); 



 
