
const swiperComment = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1920: {
            slidesPerView: 5
        }
    }
}

const swiperPortfolio = {
    loop: true,
    navigation: {
        prevEl: ".workshop__portfolio-prev",
        nextEl: ".workshop__portfolio-next",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 60,
        },
        769: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    },
    className: "workshop__portfolio-swiper"
}

const swiperMedia = {
    spaceBetween: 30,
    breakpoints: {
        375: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
    }
}

const settingSwiper = {
    "swiperComment": swiperComment,
    "swiperPortfolio": swiperPortfolio,
    "swiperMedia": swiperMedia,
}

export default settingSwiper;


