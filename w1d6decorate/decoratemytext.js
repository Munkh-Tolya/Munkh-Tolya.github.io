/**
 * Author: Munkh-Erdene Tolya
 * Description: Assigment 7, W2D1
 */
window.onload = function(){
    "use strict";

    var buttonDec = this.document.getElementById("buttonDec"); 
    var buttonPigLatin = this.document.getElementById("buttonPigLatin"); 
    var buttonMalkovitch = this.document.getElementById("buttonMalkovitch");
    var checkBoxBling = this.document.getElementById("checkBoxBling");

    buttonDec.onclick = startDecorate;
    checkBoxBling.onchange = bling;
    buttonPigLatin.onclick = convertPigLatin;
    buttonMalkovitch.onclick = convertMalkovitch;

    function startDecorate(){
        setInterval(decorate,2000);
    }
    function decorate(){
        const textField = document.querySelector("#text");
        const size = parseInt(window.getComputedStyle(textField, null).fontSize) + 2;
        textField.style.fontSize = size + "px"; 
    }
    function bling(){
        "use strict";
        let textFieldStyle = document.getElementById("text").style;
        if(checkBoxBling.checked){
            document.body.style.backgroundImage = "url('source/hundred-dollar-bill.jpg')";
            textFieldStyle.fontWeight = "bold";
            textFieldStyle.color = "green";
            textFieldStyle.textDecoration = "underline";
        }else{
            document.body.style.backgroundImage = "";
            textFieldStyle.fontWeight = "";
            textFieldStyle.color = "";
            textFieldStyle.textDecoration = "";
        }
    }
    function convertPigLatin(){
        const textArea = document.getElementById('text');
        let array = textArea.value.split(" ");
        array = array.map(word => toPigLatin(word));
        textArea.value = array.join(" ");
    }
    function toPigLatin(word){
        let index = -1;
        for(let i = 0; i < word.length; i++){
            if(isVowel(word[i])){
                index = i;
                break;
            }
        }
        if(index === -1) return " ";
        else 
            return word.charAt(index).toUpperCase() 
                + (word.substr(index + 1) + word.substr(0,index) + "ay").toLowerCase();
    }
    function isVowel(x){
        if(x.length != 1)
            return false;
        else 
            return 'aeiou'.indexOf(x.toLowerCase()) !== -1;
    }

    function convertMalkovitch(){
        const textArea = document.getElementById('text');
        let array = textArea.value.split(" ");
        array = array.map(word => word.length >= 5 ? "Malkovich" : word);
        textArea.value = array.join(" ");
    }
}