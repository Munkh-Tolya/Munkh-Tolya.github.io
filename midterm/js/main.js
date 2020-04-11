/**
 * @Author:Munkh-Erdene Tolya
 * Description: 2nd task of midterm
 */

// "use strict";
$(function(){
    $('#form').on('submit',function(event){
        event.preventDefault();
        let obj = {};
        $(this).find("input").each(function(){
            obj[$(this).attr("name")] = $(this).val();
        });
        $('#infoTable > tbody').append('<tr>');
        $('#infoTable > tbody').after($("<td>",{
            "text":obj['fname']
        })); 
        $('#infoTable > tbody').after($("<td>",{
            "text":obj['fname']
        })); 
        $('#infoTable > tbody').append('</tr>');
 
    });
    showTime();
});
function showTime() {
    let current_datetime = new Date()
    $('#timeSpan').text(current_datetime.toUTCString());
    var t = setTimeout(showTime, 500);
}
 function addZero(n){
    if(n <= 9) return "0" + n;
    return n
}
