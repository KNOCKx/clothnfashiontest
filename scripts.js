    $(document).ready(function() {
        $('.carousel').carousel()
        $('.logo_carousel_first').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            dotsClass: $('.dots'),
            prevArrow: false,
            nextArrow: false
        });
        $('.product_capousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: $('.fa-chevron-left'),
            nextArrow: $('.fa-chevron-right'),
            responsive: [{
                    breakpoint: 1284,
                    settings: {
                        centerMode: true,
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 4,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true
                    }
                }

            ]
        });
        $('.galery_carousel').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            prevArrow: false,
            nextArrow: false,
            responsive: [{
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 350,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.usa_gallery_carousel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            responsive: [{
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 350,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1
                    }
                }


            ]
        });
        $(window).on('load resize', function() {
            if ($(window).width() <= 600) {
                $('.logo_carousel').insertAfter('header')
            }
        });
    });