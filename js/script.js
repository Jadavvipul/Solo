$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


//Team

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 100,
        loop: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        //Responsive site
        responsive:{
            //breakpoint from 0 up
            0:{
                items:1
            },
            //breakpoint from 480 up
            480:{
                items:2
            }
        }
    });
});

$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            });
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});



$(window).on('load', function () {

    $("#isotope-container").isotope({

    });

    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });

});

//Magnifier

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});


//Testimonials

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 100,
        loop: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false
    });
});

//stats

$(function(){
   $(".counter").counterUp({
       delay:10,
       time:2000
   });
});


//Clients

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 100,
        loop: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive:{
            //breakpoint from 0 up
            0:{
                items:2
            },
            //breakpoint from 480 up
            480:{
                items:3
            },
            //breakpoint from 768 up
            768:{
                items:6
            }
        }
    });
});


//Navigation
//Show & Hide White Navigation

$(function(){
   
//  show/hide nav on page load
    showhidenav();
    
    $(window).scroll(function(){
        
//      show/hide nav on windows scroll
        showhidenav();
        
    });
    
    function showhidenav(){
        
        if( $(window).scrollTop() > 50 ){
            
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
            
            //show back-to-top button
            $("#back-to-top").fadeIn();
           
        }else{
           
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src","img/logo/logo.png");
            
            //hide back-to-top button
            $("#back-to-top").fadeOut();
        }
        
    }
    
});

//Smooth Scrolling

$(function(){
   
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        //get section id like about services work team contact
        var section_id=$(this).attr("href");
        
        $("html,body").animate({
            scrollTop: $(section_id).offset().top -64
        },1250,"easeInOutExpo");
        
    });
    
});



//Mobile Menu

$(function(){
   
    //show mobile navigation
    $("#mobile-nav-open-btn").click(function(){
       
        $("#mobile-nav").css("height","100%");
        
    });
    
    //hide mobile navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
       
        $("#mobile-nav").css("height","0%");
        
    });
    
    
});



//Animation

//Animation on scorll (active wow plugin)
$(function(){
    new WOW().init();
});


//Home animation on page load
$(window).on('load',function(){
    
   $("#home-heading-1").addClass("animate__fadeInDown"); 
   $("#home-heading-2").addClass("animate__fadeInLeft"); 
   $("#home-text").addClass("animate__zoomIn"); 
   $("#home-btn").addClass("animate__zoomIn"); 
   $("#arrow-down i").addClass("animate__fadeInDown infinite"); 
    
});