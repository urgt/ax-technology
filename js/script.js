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

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    grabCursor: true
});