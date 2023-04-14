$(window).on('load', function () {
    var sliders = [
        {
            target: $('.slick_slider'),
            config: {
                arrow: true,
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            },
            instance: null,
        },
    ]
    sliders.forEach(function (slider) {
        slider.instance = slider.target.slick(slider.config)
        $(window).on('resize', function () {
            if (!slider.instance.hasClass('slick-initialized')) {
                slider.target.slick(slider.config)
            }
        })
    })
})