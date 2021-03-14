window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector('.logo-image').style.width = "10.5rem";
        document.querySelector('.logo-image').style.height = "2.25rem";
        document.querySelector('.header-area-middle').style.padding = ".5rem";
        document.querySelector('.header-shops-text').style.display = "none";
        document.querySelector('.header').style.borderBottom = "0.1rem solid #ccc";
    } else {
        document.querySelector('.logo-image').style.width = "14.8125rem";
        document.querySelector('.logo-image').style.height = "3.1875rem";
        document.querySelector('.header-area-middle').style.padding = "1.2rem .75rem";
        document.querySelector('.header-shops-text').style.display = "inline";
        document.querySelector('.header').style.borderBottom = "none";
    }
}

//  DropDown submenu
let slideDowmTime = 500;

jQuery('.dropdown-gifts').hover(function () {
        $('.dropdown-gifts-content').stop().slideDown(slideDowmTime);
        $('.dropdown-gifts-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-gifts-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-gifts-content').css('border-bottom', 'none');    
});

jQuery('.dropdown-sale').hover(function () {
        $('.dropdown-sale-content').stop().slideDown(slideDowmTime);
        $('.dropdown-sale-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-sale-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-sale-content').css('border-bottom', 'none');
});

jQuery('.dropdown-makeup').hover(function () {
        $('.dropdown-makeup-content').stop().slideDown(slideDowmTime);
        $('.dropdown-makeup-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-makeup-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-makeup-content').css('border-bottom', 'none');
});

jQuery('.dropdown-face').hover(function () {
        $('.dropdown-face-content').stop().slideDown(slideDowmTime);
        $('.dropdown-face-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-face-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-face-content').css('border-bottom', 'none');
});

jQuery('.dropdown-body').hover(function () {
        $('.dropdown-body-content').stop().slideDown(slideDowmTime);
        $('.dropdown-body-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-body-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-body-content').css('border-bottom', 'none');
});

jQuery('.dropdown-aroma').hover(function () {
        $('.dropdown-aroma-content').stop().slideDown(slideDowmTime);
        $('.dropdown-aroma-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-aroma-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-aroma-content').css('border-bottom', 'none');
});

jQuery('.dropdown-men').hover(function () {
        $('.dropdown-men-content').stop().slideDown(slideDowmTime);
        $('.dropdown-men-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-men-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-men-content').css('border-bottom', 'none');
});

jQuery('.dropdown-soap').hover(function () {
        $('.dropdown-soap-content').stop().slideDown(slideDowmTime);
        $('.dropdown-soap-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-soap-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-soap-content').css('border-bottom', 'none');
});

jQuery('.dropdown-baby').hover(function () {
        $('.dropdown-baby-content').stop().slideDown(slideDowmTime);
        $('.dropdown-baby-content').css('border-bottom', '0.1rem solid #ccc');
    }, function() {
        $('.dropdown-baby-content').slideUp(slideDowmTime);
        $('.m-nav').css('height', '');
        $('.dropdown-baby-content').css('border-bottom', 'none');
});



//     item-page Description content check
function check() {
    if (document.querySelector('#about-1').checked) {
        document.querySelector('.about-text-1').style.display = 'flex';
        document.querySelector('.about-text-2').style.display = 'none';
    } else {
        document.querySelector('.about-text-2').style.display = 'flex';
        document.querySelector('.about-text-1').style.display = 'none';
    }
}



















