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
function multiply(array){
    let result = 1;
    while(array.length > 0){
        result *= array[array.length-1];
        array.pop();
    }
    return result;
}

function reverse(x){
    if(x === "")
        return "";
    else 
        return reverse(x.substr(1)) + x.charAt(0);
}

function findLongestWord(array){
    return array.reduce(function(longest, current){
        return longest.length > current.length ? longest: current;
    });
}
function filterLongWords(array, i) {
    return array.filter(function(elem){
        return elem.length > i;
    });
}
function computeSumOfSquares(array){
    return array.reduce(function(prev,elem,i){
        if(i === 1) prev = prev * prev;
        return prev + elem * elem;
    });
}
function printOddNumbersOnly(array){
    return array.map(function(elem){
        elem = parseInt(elem);
        if(elem%2 === 1) console.log("   Odd:" + elem + " ");
    });
}
function computeSumOfSquaresOfEvensOnly(array){
    return computeSumOfSquares(array.filter(function (elem){
        if(elem%2 === 0) return elem;
    }));
}
function sumReduce(array){
    return array.reduce(function(prev, elem){
        return parseInt(prev) + parseInt(elem);
    });
}
function multiplyReduce(array){
    return array.reduce(function(prev, elem){
        return parseInt(prev) * parseInt(elem);
    });
}
const findSecondBiggest = function(array){
    let biggest = findBiggest(array)
    array.splice(array.indexOf(biggest),1);
    return findBiggest(array);
};
const findBiggest = function(array){
    return array.reduce(function(max, elem){
        return elem > max ? elem : max;
    });
};
function printFibo(n, a, b){
    let result = [a,b];
    for(let i = 2; i < n; i++){
        result.push(
            parseInt(result[i-2]) + parseInt(result[i-1])
        );
    }
    console.log("13. Fibonacci number of length 6 is " + result.slice(0,n));
}

console.log("1. Max of (4,5) is " + max(4,5));
console.log("2. Max of Three (4,5,6) is " + maxOfThree(10,5,6));
console.log("3. Is char 'a' vowel - " + isVowel("a"));
console.log("4. Sum of the array [1,2,3] is " + sum([1,2,3]));
console.log("4. Multiplication of the array [1,2,3,4] is " + multiply([1,2,3,4]));
console.log("5. Reverse of word 'TEST' is " + reverse("TEST"));
console.log("6. Max length of words in array ['TEST','Maharishi','472'] is " + findLongestWord(['TEST','Maharishi','472']));
console.log("7. Words ['Johny','Doe','World'] that have longer length than i are " + filterLongWords(['Johny','Doe','World'],4));
console.log("8. Sum of squares of [1,2,3] is " + computeSumOfSquares([1,2,3]));
console.log("9. Print Odd Numbers of [4,2,9,12,3,15] is "); printOddNumbersOnly([4,2,9,12,3,15]);
console.log("10. Sum of squares of even numbers [1,2,3,4,5] is " + computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));
console.log("11. Refined sum of the array [1,2,3] is " + sumReduce([1,2,3]));
console.log("11. Refined multiplication of the array [1,2,3,4] is " + multiplyReduce([1,2,3,4]));
console.log("12. Second biggest of array [19,9,11,0,12] is " + findSecondBiggest([19,9,11,0,12]));
printFibo(6,0,1);


function startTime() {
  
    let current_datetime = new Date()
    console.log(current_datetime.toString());
    let formatted_date = current_datetime.getFullYear() + 
            "-" + addZero(current_datetime.getMonth() + 1) + 
            "-" + addZero(current_datetime.getDate()) +
            " " + addZero(current_datetime.getHours()) + 
            ":" + addZero(current_datetime.getMinutes()) + 
            ":" + addZero(current_datetime.getSeconds());
    document.getElementById('clock').innerHTML = formatted_date;
    var t = setTimeout(startTime, 500);
}
 function addZero(n){
    if(n <= 9) return "0" + n;
    return n
}









