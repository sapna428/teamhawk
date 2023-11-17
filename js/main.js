$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('.header').css('background-color', 'White');
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('hidden');
        } else {
            $('.header').removeClass('hidden');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        function showDropdown() {
            document.getElementById("services-dropdown").style.display = "block";
        }

        function hideDropdown() {
            document.getElementById("services-dropdown").style.display = "none";
        }
    });



//     const counters = document.querySelectorAll('.counter');
//     const speed = 120;
//     counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;
// 		const inc = target / speed;
// 		if (count < target) {
// 			counter.innerText = count + inc;
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};
// 	  updateCount();
//    });





       
const counters = document.querySelectorAll('.counter');
        const speed = 40;

        const updateCount = () => {
            counters.forEach((counter) => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            });
        };

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        };

        const handleScroll = () => {
            counters.forEach((counter) => {
                if (isElementInViewport(counter)) {
                    updateCount();
                }
            });
        };

        // Add a scroll event listener to trigger animations when counters come into view
        window.addEventListener('scroll', handleScroll);





   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    var accordionBody = $(this).next('.accordion-body');
    var icon = $(this).find('span');
    
    accordionBody.slideToggle(500, function(){
        icon.text(accordionBody.is(':visible') ? '-' : '+');
    });
});



});
