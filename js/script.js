var swiper = new Swiper(".mySwiper", {

    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 'auto',
            spaceBetween: 32,
        },

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


$(() => {

    $(() => {

        $(window).mousemove(function (e) {

            $('a').on('mouseenter', function () {

                $('.cursor2').addClass('active');

            });

        });

        $(window).mousemove(function (e) {

            $('a').on('mouseleave', function () {

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

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    grabCursor: true
});


document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
		--move-x: ${e.clientX}px;
		--move-y: ${e.clientY}px;
		`
    })
})
