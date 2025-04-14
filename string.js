

// remove duplicates from an string 

let string = "Hello World";

function removeduplicates(string){
    let result = "";
    for(let i=0; i<string.length; i++){
        if(!result.includes(string[i])){
            result+=string[i];
        }
    }
     return result;
}

// console.log(removeduplicates(string));


// only unique characters 

function uniqueCharacters(string){
    let freq = {}
    for(let i=0; i<string.length; i++){
         let char = string[i];
         freq[char] = (freq[char] || 0) + 1;
    }
    let result = '';
    for(let i=0; i<string.length; i++){
        let char = string[i];
        if(freq[char]===1){
            result+=char;
        }
    }
    return result;
}

// console.log(uniqueCharacters(string));

// first index check unique character

function firstuniqueCharacter(string){
    let newStr = new Map();
    for(let char of string){
        newStr.set(char, (newStr.get(char) || 0) + 1);
    }
    for(let i=0; i<string.length; i++){
        if(newStr.get(string[i])===1){
            return i;
        }
    }
    return -1;
}

// console.log(firstuniqueCharacter("loveleetcode"));

//  plaindrome 

function plaindrome(str){
    let left = 0;
    let right = str.length-1;
    while(left<right){
        if(str[left].toLowerCase()!==str[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// console.log(plaindrome("madam"));

function removeConsecutiveDuplicates(inputData) {
    let output = "";
    for(let i=0; i<inputData.length; i++){
        if(inputData[i]!==inputData[i+1]){
            output+=inputData[i];
        }
    }
    return output;
}

console.log(removeConsecutiveDuplicates("geeks for geeks"));


//  non - repeating characters 

function nonrepeatingCharacter(str){
    let seen = {};
    for(let i=0; i<str.length; i++){
        let char = str[i];
        seen[char] = (seen[char] || 0) +1
    }

    let result = "";
    for(let i=0; i<str.length; i++){
        let value = str[i];
        if(seen[value]===1){
            result+=value;
        }
    }
    return result;
}

console.log(nonrepeatingCharacter("geeksforgeeks"));

// 



