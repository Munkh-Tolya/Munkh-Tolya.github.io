/**
 * Author: Munkh-Erdene Tolya
 * Description: JavaScript exercise of CS 472
 */

"use strict";

function max(x, y){
    if(x>y) return x;
    else return y;
}

function maxOfThree(x,y,z){
    return max(max(x,y),z);
}

function isVowel(x){
    if(x.length != 1)
        return false;
    else 
        return 'aeiou'.indexOf(x.toLowerCase()) !== -1;
}

function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
// function 
console.log("1. Max of (4,5) is " + max(4,5));
console.log("2. Max of Three (4,5,6) is " + maxOfThree(10,5,6));
console.log("3. Is char 'a' vowel - " + isVowel("a"));
console.log();
console.log();





