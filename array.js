// remove duplicates from array

function removeduplicates(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// console.log(removeduplicates([1, 2, 3, 4, 5, 6, 6, 7, 8]));

// [1,2,3,4,5,6,7,8];

function reverse(array, k) {
  let result = [];
  for (let i = k; i >= 0; i--) {
    result.push(array[i]);
  }
  for (let j = k + 1; j < array.length; j++) {
    result.push(array[j]);
  }

  return result;
}

// console.log(reverse([1,2,3,4,5,6,7,8], 4));

/// check contains duplicate

function checkduplicates(array) {
  let unique = new Set();
  for (let arr of array) {
    if (unique.has(arr)) {
      return true;
    } else {
      unique.add(arr);
    }
  }
  return false;
}

// console.log((checkduplicates([1,2,3,4,5,6,6,6])));

/// find one number

function singlenumber(array) {
  let seen = {};
  for (let i = 0; i < array.length; i++) {
    let arr = array[i];
    seen[arr] = (seen[arr] || 0) + 1;
  }
  for (let i = 0; i < array.length; i++) {
    let arr = array[i];
    if (seen[arr] === 1) {
      return arr;
    }
  }
  return -1;
}

// console.log(singlenumber([1,2,1]));

// check intersection of arrays

function intersection(arr1, arr2) {
  let arr3 = new Set(arr1);
  let arr4 = new Set(arr2);
  let result = [];
  for (let arr of arr4) {
    if (arr3.has(arr)) {
      result.push(arr);
    }
  }
  return result;
}

// console.log(intersection([4,9,5], [9,4,9,8,4]))

// reverse a string

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

// largest element in an array

function largestelement(array) {
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

// console.log(largestelement([2,5,1,3,0]));

//check array is sorted or not

function checksortedor(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(checksortedor([1,2,6,4,5]));

// Linear Search in C

function indexedinthearray(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}

// console.log(indexedinthearray([1,2,3,4,5], 3))

// Left Rotate the Array by One

function reverseExcept(array) {
  let temp = array[0];
  let newArray = [];
  for (let i = array.length - 1; i >= 1; i--) {
    newArray.push(array[i]);
  }
}

// console.log(reverseExcept([1,2,3,4,5,6]))

// maximum one's

function checkMaximumOnes(array) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

// console.log(checkMaximumOnes([1, 0, 1, 1, 0, 1]));

function moveZeroes(array) {
  let result = [];
  let zeroCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      result.push(array[i]);
    } else {
      zeroCount++;
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  return result;
}

// console.log(moveZeroes([1, 0, 2, 3, 0, 4, 0, 1]));

//rotate an array

function usingshorted(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      result.push(array[i]);
    }
  }
  return result;
}

// console.log(usingshorted([1,1,2,2,2,3,3]));

//find missing number in an array

function twoSumProblem(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// console.log(twoSumProblem([2,6,5,8,11], 14));

function intersectionofArrays(arr1, arr2) {
  let map = {};
  let result = [];
  for (let num of arr1) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let num of arr2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }
  return result;
}

console.log(intersectionofArrays([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
