
$(document).ready(function (){
  var setMenuHeight = function(){
    $(".menuWrapper").slimscroll({
      height: document.documentElement.clientHeight - 56
    });
  };

  setMenuHeight();
  $(window).resize(function (){
    setMenuHeight();
  });

  $(".trigger").on("click",function(){
    $(".menucontainer").toggleClass("active");
  });
});