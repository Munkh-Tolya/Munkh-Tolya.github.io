window.onload = function(){
    "use strict";
    /* Exercise 6 */
    const count = (function(){
        let counter = 0;
        return{
            add: function(){
                counter++;
            },
            reset:function(){
                counter = 0;
            },
            value:function(){
                return counter;
            }
        }
    })();

    count.add();
    count.add();
    console.log("After add in 2 times:"+count.value());
    count.reset();
    console.log("After reset:"+count.value());

    /* Exercise 8 */
    const make_adder = function(inc) {
        let counter = 0;
        return function() {
            return counter+=inc;
        }
    }

    const add5 = make_adder(5);
    console.log("After add5 value is " + add5());
    console.log("After add5 value is " + add5());
    console.log("After add5 value is " + add5());

    const add7 = make_adder(7);
    console.log("After add7 value is " + add7());
    console.log("After add7 value is " + add7());
    console.log("After add7 value is " + add7());

    /* Exercise 10*/
    const Employee = (function(){
        let name,age,salary;
        const setAge = function(val){
            age = val;
        }
        const setSalary = function(val){
            salary = val;
        }
        const setName = function(val){
            name = val;
        }
        const getAge = function(){
            return age;
        }
        const getSalary = function(){
            return salary;
        }
        const getName = function(){
            return name;
        }
        const increaseSalary = function(percentage){
            const sal = getSalary();
            this.setSalary(sal * (100+percentage)/100);
        }
        const incrementAge = function(){
            this.setAge(getAge() + 1);
        }
        const printInfo = function(){
            console.log("Name: " + getName());
            console.log("Age: " + getAge());
            console.log("Salary: " + getSalary());
        }
        return{
            setAge:setAge,
            setSalary:setSalary,
            setName:setName,
            increaseSalary:increaseSalary,
            incrementAge:incrementAge,
            printInfo:printInfo
        }
    })();

    // Exercise 11
    Employee.extension = function(){
        const setAddress = function(){
            console.log("gg");
        }
    }
    Employee.setAge(22);
    Employee.setSalary(100000);
    Employee.setName("Munkh");

    Employee.increaseSalary(30);
    Employee.incrementAge();
    Employee.printInfo();

    // Exercise 12
    Employee.setAddress = function(val){
        this.address = val;
    }
    Employee.getAddress = function(){
        return this.address;
    }
    Employee.setAddress("Walnut creek, California, US");
    console.log(Employee.getAddress());
}

