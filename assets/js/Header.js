
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".second-header").addClass("active");
    } else {
      $(".second-header").removeClass("active");
    }
  });
  
  $(document).ready(function() {
    let $btn = $(".close");
    let $lorem = $(".lorem");
    let isOpened = [false, false, false, false, false];
  
    let styl = {
      padding: "10px",
    };
    let style = {
      width: "100%",
      height: "50px",
    };
    $btn.css(style);
    $lorem.css(styl);
  
    $btn.each(function(index) {
      let $icon = $(this).find("i");
      if (!isOpened[index]) {
        $icon.removeClass("active");
        $(this).next().hide();
      }
  
      $(this).click(function() {
        $icon.toggleClass("active");
        if (isOpened[index]) {
          $(this).next().slideUp();
          isOpened[index] = false;
        } else {
          $(this).next().slideDown();
          isOpened[index] = true;
        }
      });
    });
  });
  
  
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
  
  
  $(".bars").click(function () {
    $(".bars-menu-exit").addClass("active");
    document.querySelector('body').style.overflow="hidden"
    
  });
  $(".exit").click(function (e) {
    e.stopPropagation()
    
    $(".bars-menu-exit").removeClass("active");
    document.querySelector('body').style.overflow="scroll"
  
  });
  
  
  $(".account").mouseover(function () {
    $(".account-text").addClass("active");
  });
  
  $(".account").mouseout(function () {
    $(".account-text").removeClass("active");
  });