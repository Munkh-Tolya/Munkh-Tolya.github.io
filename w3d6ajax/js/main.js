/**
 * @Author:Munkh-Erdene Tolya
 * description: Lab assignment 15 of CS 472 
 */

"use strict";
$(function(){

    $(document).ajaxStart(function(){  $('#cover-spin').show(0)});
    $(document).ajaxStop(function(){  $('#cover-spin').hide()});

    getBooks();
    $('#bookForm').on('submit',submitBook);
    
});

function getBooks(){
    console.log("done");
    $.get("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", {dataType: "json"})
    .done(function(response) {
            let i = 0;
            $.each(response, function(i, item) {
                var $tr = $('<tr>').append(
                    $('<td>').text(++i),
                    $('<td>').text(item.isbn),
                    $('<td>').text(item.title),
                    $('<td>').text(item.overdueFee),
                    $('<td>').text(item.publisher),
                    $('<td>').text(item.datePublished)
                ).appendTo('#tblBooks > tbody');
                // console.log($tr.wrap('<p>').html());
                
            });
          
      }).fail(function(){   
        alert("Error occured to download data!");
      });
}

function submitBook(event){
    event.preventDefault();
    var formData = {};
    
    $('#bookForm').serializeArray().map(function(x){formData[x.name] = x.value;}); 
    $.ajax("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
        {method:"POST",
        contentType: "application/json",
        dataType:"json",
        data: JSON.stringify(formData)
    })
    .done(function(item){
        var $tr = $('<tr>').append(
            $('<td>').text(parseInt($('#tblBooks tr:last td:first').text()) + 1),
            $('<td>').text(item.isbn),
            $('<td>').text(item.title),
            $('<td>').text(item.overdueFee),
            $('<td>').text(item.publisher),
            $('<td>').text(item.datePublished)
        ).appendTo('#tblBooks > tbody');
        $('#bookForm').trigger("reset");
        $("#bookModal #close").click();
        alert("Book successfully added");
    })
    .fail(function(){
        alert("Failed to save new book!");
    })
}