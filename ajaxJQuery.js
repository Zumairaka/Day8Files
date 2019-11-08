$(document).ready(function(){
    $.ajax({
        method : "GET",
        url : "http://www.randomtext.me/api/lorem/ul-5/5-15",
        success : function(result){
            $("input").click(function(){
                $("p").html(result.text_out); //textout was available
            });
        }
    });
});