//Reverse a String: Write a function that reverses a given string.
function reverseString(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed = reversed + string[i];
    }
    return reversed;
}
console.log(reverseString("hello how can i help you ?")); 
//Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count++;
    }
    return count;
}
console.log(countCharacters("hello how can i help you ?")); 
//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("hello how can i help you ?")); 
//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    var max = arr[0];
    for (var i=1;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i];}
        }
        return max;
    }
    console.log(findMax([1,2,3,4,5,6,7,8,9,10]));
    
function findMin(arr) { var min = arr[0];
    for (var i=1;i<arr.length;i++){
        if (arr[i]<min){
            min=arr[i];}
        }
        return min;
    }
    console.log(findMin([1,2,3,4,5,6,7,8,9,10]));
    //Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));
//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    var filteredArr = [];
    for (var i=0;i<arr.length;i++){
        if (condition(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(filterArray([1,2,3,4,5,6,7,8,9,10], (x) => x > 5));
//Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    } 
    return true;
}
console.log(isPrime(7));
//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci.
