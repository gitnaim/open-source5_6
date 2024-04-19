window.addEventListener("load", function(){
  $(function(){
    $("nav > ul > li").hover(
      function(){
        $("nav > ul").addClass("active");  // nav > ul.active {height: 264px;}
      },
      function(){
        $("nav > ul").removeClass("active");
      }
    );
  
    // $("nav > ul > li:first-child > a").focusin(function(){
    // 	$("nav > ul").addClass("active");
    // });
  
    $("nav > ul > li > a").focusin(function(){
      $(this).parent().addClass("active");
  
      // 첫 번째 요건일 경우 : 0 // nav > ul > li:first-child > a
      if($(this).parent().index() == 0){
        $("nav > ul").addClass("active");
      }
  
    });
  
    // $("nav li:last-child li:last-child").focusout(function(){
    // 	$("nav > ul").removeClass("active");
    // });
  
    $("nav li li:last-child").focusout(function(){
      $(this).parent().parent().removeClass("active");
  
  
      // 마지막 요건일 경우 : length-1
      // length
      // console.log($("nav > ul > li").length-1);
      if($(this).parent().parent().index() == $("nav > ul > li").length-1) {
        $("nav > ul").removeClass("active");
      }
    });
    /*
      nav > ul.active { height: 264px; }
      nav > ul > li.active::after {content:" ";}
    */
    
  });
});
