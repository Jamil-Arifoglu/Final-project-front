var $owl = $('.owl-carousel');

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 5,
  nav: true,
  navText: ['<', '>'],
  //autoplay: true
  responsive: {
        0: {
          items: 1,
          margin: 1
        },
        640: {
          items: 2,
          margin: 3
        },
        820:{
            items:2,
            margin:2
        },
        1000: {
          items: 3,
          margin: 3
        },
      }
});
var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    on: {
        init: function(){
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);
    
    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');

    if(swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if(swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});


















