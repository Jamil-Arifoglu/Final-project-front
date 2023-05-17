window.addEventListener("load", function () {
  document.getElementById("loading").style.display = "none";
});

var $owl = $(".owl-carousel");

$owl.owlCarousel({
  center: true,
  loop: true,

  items: 5,
  nav: true,
  navText: ["<", ">"],
  //autoplay: true
  responsive: {
    0: {
      items: 1,
      margin: 1,
    },
    640: {
      items: 2,
      margin: 3,
    },
    820: {
      items: 2,
      margin: 2,
    },
    1000: {
      items: 3,
      margin: 3,
    },
  },
});
var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  on: {
    init: function () {
      var index = this.activeIndex;

      var target = $(".product-slider__item").eq(index).data("target");

      console.log(target);

      $(".product-img__item").removeClass("active");
      $(".product-img__item#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".product-slider__item").eq(index).data("target");

  console.log(target);

  $(".product-img__item").removeClass("active");
  $(".product-img__item#" + target).addClass("active");

  if (swiper.isEnd) {
    $(".prev").removeClass("disabled");
    $(".next").addClass("disabled");
  } else {
    $(".next").removeClass("disabled");
  }

  if (swiper.isBeginning) {
    $(".prev").addClass("disabled");
  } else {
    $(".prev").removeClass("disabled");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".second-header").addClass("active");
  } else {
    $(".second-header").removeClass("active");
  }
});

const wishlistBtn = document.querySelector('.wishlist-button');
wishlistBtn.addEventListener('click', addToWishlist);

function addToWishlist() {
  const product = {
    name: "Nintendo Switch Lite - Turquoise",
    price: 458.56,
    image: "./assets/images/Products/1_50862e3f-4e56-4d7c-9220-04cde28aca6d_258x258-ss.webp"
  };

  const existingWishlist = localStorage.getItem('wishlist');
  if (!existingWishlist) {
    localStorage.setItem('wishlist', JSON.stringify([product]));
  } else {
    const wishlist = JSON.parse(existingWishlist);
    const productIndex = wishlist.findIndex((item) => item.name === product.name);
    if (productIndex === -1) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } else {
      alert('Bu ürün zaten istek listesine eklenmiş!');
    }
  }
  const wishlistCountElement = document.getElementById('wishlist-count');
  const existingCount = parseInt(wishlistCountElement.innerText);
  if (isNaN(existingCount)) {
    wishlistCountElement.innerText = '1';
  } else {
    wishlistCountElement.innerText = (existingCount + 1).toString();
  }

  // Wishlist sayfasına yönlendirme
  window.location.href = 'wishlist.html';
}



$(".Gaming").mouseover(function () {
  $(".drone-text-second").addClass("active");
});

$(".Gaming").mouseout(function () {
  $(".drone-text-second").removeClass("active");
});




$(".gaming").mouseover(function () {
  $(".drone-text-seconds").addClass("active");
});

$(".gaming").mouseout(function () {
  $(".drone-text-seconds").removeClass("active");
});


$(".pages").mouseover(function () {
  $(".drone-text").addClass("active");
});

$(".pages").mouseout(function () {
  $(".drone-text").removeClass("active");
});

$(".Pages").mouseover(function () {
  $(".page-text").addClass("active");
});

$(".Pages").mouseout(function () {
  $(".page-text").removeClass("active");
});

$(".basket").click(function () {
  $(".basket-menu-exit").addClass("active");
  document.querySelector('body').style.overflow="hidden"
  
});
$(".exit").click(function (e) {
  e.stopPropagation()
  
  $(".basket-menu-exit").removeClass("active");
  document.querySelector('body').style.overflow="scroll"

});