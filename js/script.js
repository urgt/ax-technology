
//slider our projects

var swiper = new Swiper(".mySwiper", {
    draggable: true,
    grabCursor: true,
    allowTouchMove:false,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000,
    // mousewheel: {
    //     sensitivity: 1,
    //     releaseOnEdges: true,
    // },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: true,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: '6',
            spaceBetween: 32,
        },

    },

});


//slider our team

var swiper = new Swiper(".mySwiper2", {
    draggable: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// custom cursor hovers

$(() => {

    $(() => {

        $(window).mousemove(function (e) {

            $('a').on('mouseenter', function () {

                $('.cursor2').addClass('active');

            });
            $('.portfolio').on('mouseenter', function () {

                $('.cursor2').addClass('active');

            });

            $('.form_submit').on('mouseenter', function () {

                $('.cursor2').addClass('active');

            });

        });

        $(window).mousemove(function (e) {

            $('a').on('mouseleave', function () {

                $('.cursor2').removeClass('active');

            });
            $('.portfolio').on('mouseleave', function () {

                $('.cursor2').removeClass('active');

            });

            $('.form_submit').on('mouseleave', function () {

                $('.cursor2').removeClass('active');

            });

        });
    });

    $(window).mousemove(function (e) {

        $('a',).on('mouseenter', function () {

            $('.cursor2').addClass('active');

        });

        $('.swiper-wrapper',).on('mouseenter', function () {

            $('.cursor2').addClass('active').css({


            });

        });

        $('.swiper-button-next').on('mouseenter', function () {

            $('.cursor2').addClass('active');

        });
        $('.swiper-button-prev').on('mouseenter', function () {

            $('.cursor2').addClass('active');

        });

    });

    $(window).mousemove(function (e) {

        $('a').on('mouseleave', function () {

            $('.cursor2').removeClass('active');

        });

        $('.swiper-button-next').on('mouseleave', function () {

            $('.cursor2').removeClass('active');

        });

        $('.swiper-button-prev').on('mouseleave', function () {

            $('.cursor2').removeClass('active');

        });

        $('.swiper-wrapper',).on('mouseleave', function () {

            $('.cursor2').removeClass('active');

        });

    });



});


// custom cursor 

(function () {
    const cursor = document.querySelector('.cursor2');
    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });
    document.addEventListener('pointermove', movecursor);
    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.3,
            x: e.clientX,
            y: e.clientY,
        });
    }
})();
