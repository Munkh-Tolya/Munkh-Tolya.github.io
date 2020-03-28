/**
 * Author: Munkh-Erdene Tolya
 * Description: Exercise #14 of Assignment 4
 */

"use strict";

function onSubmitForm1(){
    const website = document.getElementById("website");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const checkme = document.getElementById("checkme");
    console.log("Website: " + website.value);
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);
    console.log("Check me: " + checkme.value);
    return false;
}
function onSubmitForm2(){
    let result = "";
    var elements = document.getElementById("product-form").elements;
        for (var i = 0, element; element = elements[i++];) {
            if (element.tagName === "INPUT")
                result += "[" + element.name + " : " + element.value + "]";
    }
    alert(result);
    return false;
}