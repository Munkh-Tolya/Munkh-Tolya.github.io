/**
 * @Author:Munkh-Erdene Tolya
 * Description: Task 3-4 of mid term exam
 */


// task 2.1
const Car = {
    "make":"default",
    "model":"default",
    "color":"default",
    "drive":function(speed){
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`);
    },
    "stop":function(name){
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`);
    }
}
const redHondaAccord = Object.create(Car);
redHondaAccord.color = 'red';
redHondaAccord.make = 'Honda';
redHondaAccord.model = 'Accord';

// redHondaAccord.drive(200);


// task 2.2
function CarFunction(){
    this.make = "";
    this.model = "";
    this.default = "";
    this.drive = function(speed){
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`);
    }
    this.stop = function(){
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`);
    }
}
const RedHondaAccord = new CarFunction();

RedHondaAccord.color = 'red';
RedHondaAccord.make = 'Honda';
RedHondaAccord.model = 'Accord';

RedHondaAccord.drive(300);


// task 3
const arrayUtils = (function(){
    return{
        multiplesCount: function(nums,b){
            return nums.filter(elem => elem % b === 0).length;
        },
        reverseInPlace: function(nums){
            return nums.slice().reverse();
        },
    }
})();

console.log(arrayUtils.multiplesCount([1,2,3,4,5,6], 3));
console.log(arrayUtils.multiplesCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));
console.log(arrayUtils.reverseInPlace ([1,2,3,4,5,6]));

// task 4
Array.prototype.printTheName = function(str){
    console.log(str);
}
const array = []; 
array.printTheName("Anna H. Smith");
array.printTheName("Bob J. Harrison"); 