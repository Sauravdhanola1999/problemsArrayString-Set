// print upto nth term fibonacci

function fibonacci(n) {
  const series = [];
  if (n <= 0) return series;
  series.push(0);
  if (n <= 1) return series;
  series.push(1);
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}

// console.log(fibonacci(5));

// check wrather a number is fibannoci

function checkFibonacci(num, a = 0, b = 1) {
  if (a === num || b === num) return true;
  if (b > num) return false;
  return checkFibonacci(num, b, a + b);
}

// console.log(checkFibonacci(21));

// anagram

function areAnagrams(str1, str2) {
  let charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "olelh")); // true
console.log(areAnagrams("a gentleman", "elegant man")); // true
console.log(areAnagrams("test", "taste")); // false

// check palindrome

function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(checkPalindrome("madas"));

//Write code to Calculate frequency of characters in a string

function frequency(str) {
  let fre = {};
  for (let char of str) {
    fre[char] = (fre[char] || 0) + 1;
  }
  for (let char in fre) {
    console.log(`${char} frequency is ${fre[char]}`);
  }
}

// frequency("saurav");

// non-repeating characters

function nonrepeatingCharacters(str){
  let result = {};
  let newStr= "";
  for(let char of str){
    result[char] = (result[char] || 0) +1;
  }

  for(let char of str){
    if(result[char]===1){
      newStr+=char;
    }
  }
  return newStr;
}

// console.log(nonrepeatingCharacters("saurav"));


function firstNonRepeating(str){
  let result = {};
  for(let char of str){
    result[char] = (result[char] || 0) +1;
  }

  for(let char of str){
    if(result[char]===1){
      return char;
    }
  }
  return null;
}

// console.log(firstNonRepeating("saurav"));


// Write a code to find non-repeating elements in an array.

function nonrepeatingCharactersArray(array){
  let result = {};
  let newArray= [];
  for(let char of array){
    result[char] = (result[char] || 0) +1;
  }

  for(let char of array){
    if(result[char]===1){
      newArray.push(char);
  }
}
  return newArray;
}

// console.log(nonrepeatingCharactersArray(['s', 'a', 'u', 'r', 'a', 'v']));

// code to Print the smallest element of the array

function smallestElement(array){
  let n = array.length;
  let smallest = array[0];
  for(let i=1; i<n; i++){
    if(array[i]<smallest){
      smallest = array[i]
    }
  }
  return smallest;
}

// console.log(smallestElement([5,6,7,1,2,3]))


// largest element in an array

function largestElementInanArray(array){
  let largest = array[0];
  for(let i=1; i<array.length; i++){
    if(array[i]>largest){
      largest = array[i];
    }
  }
  return largest;
}

// console.log(largestElementInanArray([5,6,7,1,2,3]));

// armstrong number

function armstrongNumber(num){
  let digits = num.toString().split('');
  let power = digits.length;
  const armNumber = digits.reduce((acc, digit)=>{
    return acc + Math.pow(Number(digit), power);
  })

  return armNumber === num;
}

// factorial of number

 function factorial(n){
  if (n < 0) return undefined;
    if(n===0 || n===1) return 1;
    return n*factorial(n-1);
 }

//  console.log(factorial(5));


// quickSort

function quickSort(array) {
  if(array.length<=1) return array;
  let pivot = array[array.length-1];
  let left = [];
  let right = [];
  for(let i=0; i<array.length-1; i++){
    if(array[i]<pivot){
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort([5, 2, 6, 4, 1, 3]));

// bubble sort

function bubbleSort(array) {
  let n = array.length;
  for(let i=0; i<n-1; i++){
    for(let j=0; j<n-i-1; j++){
      if(array[j]<array[j+1]){
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}
// console.log(bubbleSort([5, 2, 6, 4, 1, 3]));

// selection sort 

function selectionSort(array){
  let n= array.length;
  for(let i=0; i<n-1; i++){
    let smallestIndex = i;
    for(let j=i+1; j<n; j++){
      if(array[j]<array[smallestIndex]){
        smallestIndex = j;
      }
    }
    if(smallestIndex!==i){
      [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
    }
  }
  return array
}

// console.log(selectionSort([5, 2, 6, 4, 1, 3]));




