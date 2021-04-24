$(document).ready(function(){


    $("#add-li").click(function(){
        $("ol").append($('<li></li>').text($("input").val()));
        $("input").val('')
    });

    $("#change-it").click(function() { 
        if ($(this).text() == "ON") { 
            $(this).text("OFF"); 
        } else { 
            $(this).text("ON"); 
        }; 
    });
})