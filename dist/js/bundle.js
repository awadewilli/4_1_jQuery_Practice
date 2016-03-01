console.log("Hello World!");
var $ = require('jquery');



  $(".menu-item-1").click(function() {
  $(".menu-1").slideToggle("slow");
  if($(".menu-3").css("display") == "block"){
    $(".menu-3").slideUp("slow");
    $(".menu-item-3").removeClass('hover-color-perm');
  }
  });


  $(".menu-item-3").click(function() {
  $(".menu-3").slideToggle("slow");
  if($(".menu-1").css("display") == "block"){
    $(".menu-1").slideUp("slow");
    $(".menu-item-1").removeClass('hover-color-perm');
  }
  });

  $(".accordion div").hover(function(){
      $(this).addClass('hover-color');},
      function(){
      $(this).removeClass('hover-color');
      }
  );

  $(".accordion div").click(function(){
      var ifClicked = $(this).hasClass('hover-color-perm');

      if(ifClicked === true){
        $(this).removeClass('hover-color-perm');}
      else{
        $(this).addClass('hover-color-perm');
      }
        console.log(ifClicked);
    });
