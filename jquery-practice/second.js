$(document).ready(function(){
    $(".content-box").click(function(){
        $(".content-box").animate({
            width: '500px',
            height: '100px'//adding to default value
        }, 1000);
        $(".content-after").show().animate({opacity: "1"}, 3000).fadeOut();

    });

    $("button").click(function(){
        $(".content-box").stop(true, true);
    })
});

// $(document).ready(function(){

//     var page_url = window.location.href;
//     var page_id = page_url.substring(page_url.lastIndexOf("#")+1);
//     if(page_id == "section3"){
//         $("html, body").animate({
//             scrollTop: $("#scroll-" + page_id).offset().top - 20
//         }, 1000);
//     }else if(page_id=="post"){
//         $("html, body").animate({
//             scrollTop: $("#scroll-" + page_id).offset().top
//         }, 1000);
//     }

// });