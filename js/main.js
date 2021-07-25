$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        items: 3,
        center: true,
        autoplayHoverPause: true,
    });
  });
  $(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
        $("header").addClass("sticky");
        
    }
    else{
      $("header").removeClass("sticky");
     

    }
})
/*
background-color: #FEF8F1;
    background-image: url("../img/globe.png");
    background-repeat: no-repeat;
    opacity: 0.4;
    background-position: center; 
    background-size: cover;

*/