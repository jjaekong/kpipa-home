window.addEventListener('load', function() {
    
    // 출간 예정 스와이퍼
    const upcomingBookSwiper = new Swiper('#upcoming-book-tab .swiper', {
        // loop: true,
        preloadImages: true,
        speed: 750,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        grabCursor: true,
        threshold: 15,
        autoplay: {
            delay: 5000
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlidesBounds: true,
        breakpoints: {
            576: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },
            768: {
                slidesPerGroup: 4,
                slidesPerView: 4,
            },
            992: {
                slidesPerGroup: 5,
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 48,
                slidesPerGroup: 6,
            }
        },
        on: {
            imagesReady: function() {
                this.$el[0].classList.add('show')
            },
            init: function() {
                const button = document.createElement('button')
                button.setAttribute('title', '일시정지')
                button.classList.add('btn', 'btn-link', 'p-0', 'border-0', 'shadow-none', 'btn-play')
                button.innerHTML = '<i class="bi bi-pause-fill"></i>'
                this.$el[0].querySelector('.swiper-pagination').before(button)
                button.addEventListener('click', () => {
                    if (this.autoplay.running) {
                        this.autoplay.stop();
                        button.setAttribute('title', '재생')
                        button.innerHTML = '<i class="bi bi-play-fill"></i>'
                    } else {
                        this.autoplay.start();
                        button.setAttribute('title', '일시정지')
                        button.innerHTML = '<i class="bi bi-pause-fill"></i>'
                    }
                })
            }
        },
    });

    // 신간 도서 스와이퍼
    const newBookSwiper = new Swiper('#new-book-tab .swiper', {
        preloadImages: true,
        speed: 750,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        grabCursor: true,
        threshold: 15,
        autoplay: {
            delay: 5000
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlidesBounds: true,
        breakpoints: {
            576: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },
            768: {
                slidesPerGroup: 4,
                slidesPerView: 4,
            },
            992: {
                slidesPerGroup: 5,
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 48,
                slidesPerGroup: 6,
            }
        },
        on: {
            imagesReady: function() {
                this.$el[0].classList.add('show')
            },
            init: function() {
                const button = document.createElement('button')
                button.setAttribute('title', '일시정지')
                button.classList.add('btn', 'btn-link', 'p-0', 'border-0', 'shadow-none', 'btn-play')
                button.innerHTML = '<i class="bi bi-pause-fill"></i>'
                this.$el[0].querySelector('.swiper-pagination').before(button)
                button.addEventListener('click', () => {
                    if (this.autoplay.running) {
                        this.autoplay.stop();
                        button.setAttribute('title', '재생')
                        button.innerHTML = '<i class="bi bi-play-fill"></i>'
                    } else {
                        this.autoplay.start();
                        button.setAttribute('title', '일시정지')
                        button.innerHTML = '<i class="bi bi-pause-fill"></i>'
                    }
                })
            }
        }
    });

    // 도서 등록현황 스와이퍼
    const registrationSwiper = new Swiper('.status .registration .swiper', {
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function() {
                this.$el[0].classList.add('show')
            }
        }
    });

    // 캠페인 스와이퍼
    const campaignSwiper = new Swiper('.community .campaign .swiper', {
        loop: false, // 캠페인이 하나 일 경우, false로 설정
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 750,
        autoplay: {
            delay: 5000
        },
        on: {
            imagesReady: function() {
                this.$el[0].classList.add('show')
            },
            init: function() {
                if (this.slides.length > 1) {
                    const button = document.createElement('button')
                    button.setAttribute('title', '일시정지')
                    button.classList.add('btn', 'btn-link', 'p-0', 'border-0', 'shadow-none', 'btn-play')
                    button.innerHTML = '<i class="bi bi-pause-fill"></i>'
                    this.$el[0].querySelector('.swiper-pagination').before(button)
                    button.addEventListener('click', () => {
                        if (this.autoplay.running) {
                            this.autoplay.stop();
                            button.setAttribute('title', '재생')
                            button.innerHTML = '<i class="bi bi-play-fill"></i>'
                        } else {
                            this.autoplay.start();
                            button.setAttribute('title', '일시정지')
                            button.innerHTML = '<i class="bi bi-pause-fill"></i>'
                        }
                    })
                }
            }
        }
    });
})
