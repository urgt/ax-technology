//slider our projects

var swiper = new Swiper(".mySwiper", {
    draggable: true,
    grabCursor: true,
    allowTouchMove: false,
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
            slidesPerView: '1',
            spaceBetween: 32,
        },
        650: {
            slidesPerView: '2',
            spaceBetween: 32,
        },
        755: {
            slidesPerView: '3',
            spaceBetween: 32,
        },
        1000: {
            slidesPerView: '4',
            spaceBetween: 32,
        },
        1250: {
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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// create the smooth scroller FIRST!


ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
})




if (($(window).width()) > 755) {

    gsap.set(".project_img:not(:first-child)", { yPercent: 101 })

    const animation = gsap.to(".project_img:not(:first-child)", {
        yPercent: 0, duration: 1, stagger: 1
    })

    ScrollTrigger.create({
        trigger: ".projects__inner_desktop",
        start: "top top",
        end: "bottom bottom",
        pin: ".projects_right",
        animation: animation,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
    })
}

const myText = new SplitType('.anim-title')

gsap.to('.char', {
    y: 0,
    stagger: 0.02,
    delay: 0.2,
    duration: .1
})

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

if (($(window).width()) <= 755) {
    $('.header .nav').hide();
    $('.vacation_subtitle').hide();
}

$('.vacation_title').on('click', function () {
    if (($(window).width()) < 755) {
        $('.vacation_subtitle').not($(this).siblings('.vacation_subtitle')).hide('slide');
        $(this).parent().find('.vacation_subtitle').slideToggle('fast');
    }
});


$(window).resize(function () {

    if (($(window).width()) <= 755) {
        $('.header .nav').hide();
        $('.vacation_subtitle').hide();
    } else {
        $('.header .nav').show();
        $('.vacation_subtitle').show();
    }

});


//  Mobile menu toggle

function toggleMenu() {
    $('.header .nav').slideToggle()('fast');
}

let races = document.querySelector(".gallery");

let racess = document.querySelector(".gallery1");
console.log(racess);

if (($(window).width()) >= 755) {

    
    if (typeof (races) != 'undefined' && races != null) {
        function getScrollAmount() {
            let racesWidth = races.scrollWidth;
            return -(racesWidth - window.innerWidth);
        }

        let tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });


        ScrollTrigger.create({
            trigger: ".gallery",
            start: "top 30%",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true
        })
    }


    if (racess) {
        function getScrollAmountt() {
            racesWidth = racess.scrollWidth;
            return -(racesWidth - window.innerWidth);
        }
        tween = gsap.to(racess, {
            x: getScrollAmountt,
            duration: 3,
            ease: "none",
        });


        ScrollTrigger.create({
            trigger: ".gallery1",
            start: "top 30%",
            end: () => `+=${getScrollAmountt() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true
        })
    }
} else {
    let gallery = document.querySelectorAll('.gallery');
    gallery.forEach(elem => {
        elem.style.overflow = 'auto'
    })
}