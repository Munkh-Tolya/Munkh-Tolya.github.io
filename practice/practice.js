// "use strict";
$(function(){
    $('#form').on('submit',function(event){
        event.preventDefault();
        alert("WP");
    });
    $("body, div, p, em").click(hello);
});
function hello(){
    alert("You clicked on the " + this.nodeName);
    event.stopPropagation();
}

console.log(1);
const b = setTimeout(function(){console.log(3);}, 0);
const a = setTimeout(function(){console.log(2);}, 1000);
console.log(4);