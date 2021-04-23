
/// $("#test") SELECTOR




// $(document).ready(function(){
//     $("#test").click(function(){
//         alert("hello world")
//     });
// });


// $(document).ready(function(){
//   $("#test").click(function(){
//       $(this).hide()
//   });
// });

// $(document).ready(function(){
// //selet paragraph (p) with test class
//   $("p.test").click(function(){
//       $(this).hide()
//   });
// });

// $(document).ready(function(){
  
//   $("#test").click(function(){
//           $(this).hide()
//       });

//   $('#p1').hover(function(){
//     $(this).hide();
//   });

//   $('#p2').click(function(){
//     $(this).hide();
//   });

//   $('#p3').dblclick(function(){
//     $(this).hide();
//   });

//   $('#p4').mouseout(function(){
//     $(this).hide();
//   });

//   var menuTrigger = false;
//   $(document).keypress(function(e){
//     if(e.which ==13){
//       if(menuTrigger === false){
//         $('nav').fadeIn(500);
//         menuTrigger = true;
//       }
//     }else if (menuTrigger === true){
//       $('nav').fadeOut(500);
//       menuTrigger = false;
//     }

//   });

// })



// $(document).ready(function(){
//   $("#menu-toggle").click(function(){
//     $("#side-nav").toggle(1000, function(){
//       alert("Hi there")
//     });
//   });
// })


$(document).ready(function(){

  $("#menu-toggle").click(function(){
    $("#side-nav").slideToggle(1000);
  });

  $(".info-title").click(function(){
    $(".info-content").slideToggle("slow", function(){
      alert("Hi there");
    })
  })
})

$(document).ready(function(){

  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#")+1);
  if(page_id == "section3"){
      $("html, body").animate({
          scrollTop: $("#scroll-" + page_id).offset().top - 20
      }, 1000);
  }else if(page_id=="post"){
      $("html, body").animate({
          scrollTop: $("#scroll-" + page_id).offset().top
      }, 1000);
  }

});