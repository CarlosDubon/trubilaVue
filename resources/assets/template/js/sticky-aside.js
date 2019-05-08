$(window).scroll(function () { 
    var original = $('#limit-sticky').offset().top + $('#limit-sticky').outerHeight()
    if($(window).scrollTop() > ($('#limit-sticky').offset().top + $('#limit-sticky').outerHeight())){
        $(".sticky-efect").animate({
            top:'0',
            height:'100vh'
        },0)
    }
    if($(window).scrollTop() <= ($('#limit-sticky').offset().top + $('#limit-sticky').outerHeight())){
        $(".sticky-efect").animate({
            top:original,
            
        },0)
    }
});
