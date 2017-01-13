$( document ).ready(function() {
  $(".numberOne").addClass("orange");
  $(".pCont2").addClass("closed"); 
  $(".pCont3").addClass("closed"); 
  $(".pCont4").addClass("closed"); 
  $(".pCont5").addClass("closed");
  $(".pCont6").addClass("closed");  
  $(".pCont7").addClass("closed");
  $(".discoveryCall").addClass("connectTab");
  $(".child2").css("background-color", "teal");
});

$(".numberOne").on("click", function(){
  $(".pCont1").removeClass("closed");
  $(".pCont2").addClass("closed");
  $(".pCont3").addClass("closed");
  $(".pCont4").addClass("closed"); 
  $(".pCont5").addClass("closed");
  $(".pCont6").addClass("closed");                       $(".pCont7").addClass("closed");
  
});
$(".numberTwo").on("click", function(){
  $(".pCont1").addClass("closed");
  $(".pCont2").removeClass("closed");
  $(".pCont3").addClass("closed");
  $(".pCont4").addClass("closed");
  $(".pCont5").addClass("closed");
  $(".pCont6").addClass("closed");                       $(".pCont7").addClass("closed");
  
});
$(".numberThree").on("click", function(){
  $(".pCont1").addClass("closed");
  $(".pCont2").addClass("closed");
  $(".pCont3").removeClass("closed");
  $(".pCont4").addClass("closed");
  $(".pCont5").addClass("closed");
  $(".pCont6").addClass("closed");                       $(".pCont7").addClass("closed");
  
});

$(".numberFour").on("click", function(){
  $(".pCont1").addClass("closed");
  $(".pCont2").addClass("closed");
  $(".pCont3").addClass("closed");
  $(".pCont4").removeClass("closed");
  $(".pCont5").addClass("closed");
  $(".pCont6").addClass("closed");                       $(".pCont7").addClass("closed");
  
});

$(".numberFive").on("click", function(){
  $(".pCont1").addClass("closed");
  $(".pCont2").addClass("closed");
  $(".pCont3").addClass("closed");
  $(".pCont4").addClass("closed");
  $(".pCont5").removeClass("closed");
  $(".pCont6").addClass("closed");                       $(".pCont7").addClass("closed");
  
});

$(".numberSix").on("click", function(){
  $(".pCont1").addClass("closed");
  $(".pCont2").addClass("closed");
  $(".pCont3").addClass("closed");
  $(".pCont4").addClass("closed");
  $(".pCont5").addClass("closed");
  $(".pCont6").removeClass("closed");                     $(".pCont7").addClass("closed");
  
});

$(".numberSeven").on("click", function(){
  $(".pCont1").addClass("closed");
  $(".pCont2").addClass("closed");
  $(".pCont3").addClass("closed");
  $(".pCont4").addClass("closed");
  $(".pCont5").addClass("closed");
  $(".pCont6").addClass("closed");                       $(".pCont7").removeClass("closed");
  
});

$('.directive').click(function(){
  var pPassed = $(this);  
  $(pPassed).addClass("closed");
});

$(".topic").on("click", function(){
  $(this).addClass("orange");
});

$(".discoveryCall").on("click", function(){
  $(".discoveryTopic").removeClass("closed");
  $(".headingClass").css("color", "teal");
  $(".child2").css("background-color", "teal");

});

$(".callTypes").on("click", function(){
  $(".callTypes").removeClass("connectTab");
  $(this).toggleClass("connectTab");
});

$(".followUpCall").on("click", function(){
  $(".child2").css("background-color", "#9966ff");
  $(".headingClass").css("color", "#9966ff");
  $(".discoveryTopic").addClass("closed");
});