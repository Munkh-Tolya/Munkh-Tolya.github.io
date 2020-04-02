"use strict";
// task 1
const person = {
    "name":"",
    "dateOfBirth":"",
    "getName":function(){
        return this.name;
    },
    "setName":function(name){
        this.name = name;
    }
}

const john = Object.create(person);
john.setName("john");
john.dateOfBirth = "1998-12-10";

console.log("The person's name is " + john.getName());
console.log(john.getName() + " was born on " + john.dateOfBirth);    


// task 2
const employee = Object.create(person);
employee.salary = 0;
employee.hireDate = new Date();
employee.doJob = function(jobTitle){
    console.log(this.name + " is a " + jobTitle + " who earns " + formatter.format(this.salary));
}
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

const employee1 = Object.create(employee);
employee1.setName("Anna");
employee1.salary = 249995.50;
employee1.doJob("Programmer");


// task 3
function Person(){
    this.name = "";
    this.dateOfBirth = "";
    this.setName = function(name){
        this.name = name;
    }
    this.getName = function(){
        return this.name;
    }
    this.toString = function(){
        console.log("Name:" + this.name + ", DateOfBirth:" + this.dateOfBirth);
    }
}

const person1 = new Person();
person1.setName("Peter");
person1.dateOfBirth = "1998-12-10";
person1.toString();


$(function(){
    
    $('#loginForm').submit(function( event ) {
        event.preventDefault();
        var fieldPair = {};
        $(this).find("input").each(function(){
            fieldPair[$(this).attr("name")] = $(this).val();
        });
        console.log(fieldPair);
    });
    $('#productForm').submit(function( event ) {
        event.preventDefault();
        let fieldPair = "";
        $(this).find("input").each(function(){
            fieldPair += $(this).attr("name") + " : " + $(this).val() + "<br/>";
        });
        $(this).after($("<div>",{
            "class":"alert alert-success",
            "html":fieldPair
        }));    
    });
});

