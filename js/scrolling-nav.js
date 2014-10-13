//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".img_container").addClass("top-nav-collapse");
		$(".navbar-fixed-top").addClass("shrink_nav");
        $("#test").addClass("shrink_profile");
    } else {
        $(".img_container").removeClass("top-nav-collapse");
		$(".custom_header").removeClass("shrink_nav");
		$(".navbar-fixed-top").removeClass("shrink_nav");
        $("#test").removeClass("shrink_profile");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
