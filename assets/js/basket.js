

let basketHTML = document.querySelector(".basket-menu .producct");

document.addEventListener("DOMContentLoaded", function () {
  let basketStr = localStorage.getItem("basket");
  let basket = JSON.parse(basketStr);

  if (!basket || !basket.length) {
    localStorage.setItem("basket", JSON.stringify([]));
  } else {
    ShowProductCount(basket);

    basket.forEach((product) => {
      AddToBasket(product);
    });
    ShowTotalPrice(basket);
  }
});

let buttons = document.querySelectorAll(".buy");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = JSON.parse(localStorage.getItem("basket"));
    }
    let product = GetProductDatas(this);

    let existedProduct = basket.find((pro) => {
      return pro.id == product.id;
    });
    if (!existedProduct) {
      basket.push(product);
    } else {
      existedProduct.count++;
    }
    ShowProductCount(basket);

    AddToBasket(product);

    let basketStr = JSON.stringify(basket);
    localStorage.setItem("basket", basketStr);
  });
});

function GetProductDatas(product) {
  let parent = product.parentElement.parentElement;
  let id = parent.getAttribute("data-id");
  let price = parent.querySelector(".prices").innerText;
  let title = parent.querySelector(".title").innerText;

  let src = parent.querySelector("img").src;
  let result = { id, price, title, src, count: 1 };
  return result;
}

function ShowProductCount(basket) {
  let basketCount = document.querySelectorAll(".basket-count");
 basketCount.forEach(count=>{
  count.innerText = basket.reduce((total, product) => {
    return (total += product.count);
  }, 0);
 })
}

function ShowTotalPrice(basket) {
  let total = document.querySelectorAll(".price");
  total.forEach(tt=>{
    tt.innerText = basket.reduce((total, product) => {
      return (total += parseInt(product.price) * product.count);
    }, 0);
  })
}

function AddToBasket(product) {
  let id = product.id;
  let basketItem = basketHTML.querySelector(`[data-id="${id}"]`);

  if (basketItem) {
    let count = basketItem.getAttribute("data-count");
    count++;
    basketItem.setAttribute("data-count", count);
    basketItem.querySelector(".count").innerText = count;
  } else {
    let div = document.createElement("div");
    let image = document.createElement("img");
    let price = document.createElement("span");
    let count = document.createElement("span");
    let title = document.createElement("h5");
    let closeBtn = document.createElement("button");

    closeBtn.className = "btn btn-danger";
    closeBtn.innerText = "X";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "10px";
    div.className = "basket-item col-lg-2";
    div.style.position = "relative";
    div.setAttribute("data-id", product.id);
    div.setAttribute("data-count", 1);
    div.style.width = "398px";
    div.style.marginBottom = "10px";
    title.innerText = product.title;
    image.src = product.src;
    image.style.width = "100px";
    price.innerText = product.price;
    count.innerText = 1;
    count.className = "count";
    div.append(image, price, title, count, closeBtn);
    basketHTML.append(div);
    closeBtn.addEventListener("click", function () {
      let basket = JSON.parse(localStorage.getItem("basket"));
      if (!basket) {
        localStorage.setItem("basket", JSON.stringify([]));
        basket = JSON.parse(localStorage.getItem("basket"));
      }
      let id = this.parentElement.getAttribute("data-id");
      let index = basket.findIndex((element) => {
        return element.id == id;
      });
      delete basket[index];
basket = basket.filter(Boolean);
ShowProductCount(basket);
      
      let basketStr = JSON.stringify(basket);
      localStorage.setItem("basket", basketStr);
      this.parentElement.remove();
      ShowTotalPrice(basket);
     
    });
  }
}




// let basketHTML = document.querySelector(".basket-menu .producct");

// document.addEventListener("DOMContentLoaded", function () {
//   let basketStr = localStorage.getItem("basket");
//   let basket = JSON.parse(basketStr);

//   if (!basket || !basket.length) {
//     localStorage.setItem("basket", JSON.stringify([]));
//   } else {
//     ShowProductCount(basket);

//     basket.forEach((product) => {
//       AddToBasket(product);
//     });
//     ShowTotalPrice(basket);
//   }
// });

// let buttons = document.querySelectorAll(".buyy");

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     let basket = JSON.parse(localStorage.getItem("basket"));
//     if (!basket) {
//       localStorage.setItem("basket", JSON.stringify([]));
//       basket = JSON.parse(localStorage.getItem("basket"));
//     }
//     let product = GetProductDatas(this);

//     let existedProduct = basket.find((pro) => {
//       return pro.id == product.id;
//     });
//     if (!existedProduct) {
//       basket.push(product);
//     } else {
//       existedProduct.count++;
//     }
//     ShowProductCount(basket);

//     AddToBasket(product);

//     let basketStr = JSON.stringify(basket);
//     localStorage.setItem("basket", basketStr);
//   });
// });

// function GetProductDatas(product) {
//   let parent = product.parentElement.parentElement.parentElement;
//   let id = parent.getAttribute("data-id");
//   let price = parent.querySelector(".prices").innerText;
//   let title = parent.querySelector(".title").innerText;

//   let src = parent.querySelector("img").src;
//   let result = { id, price, title, src, count: 1 };
//   return result;
// }

// function ShowProductCount(basket) {
//   let basketCount = document.querySelectorAll(".basket-count");
//  basketCount.forEach(count=>{
//   count.innerText = basket.reduce((total, product) => {
//     return (total += product.count);
//   }, 0);
//  })
// }

// function ShowTotalPrice(basket) {
//   let total = document.querySelectorAll(".price");
//   total.forEach(tt=>{
//     tt.innerText = basket.reduce((total, product) => {
//       return (total += parseInt(product.price) * product.count);
//     }, 0);
//   })
// }

// function AddToBasket(product) {
//   let id = product.id;
//   let basketItem = basketHTML.querySelector(`[data-id="${id}"]`);

//   if (basketItem) {
//     let count = basketItem.getAttribute("data-count");
//     count++;
//     basketItem.setAttribute("data-count", count);
//     basketItem.querySelector(".count").innerText = count;
//   } else {
//     let div = document.createElement("div");
//     let image = document.createElement("img");
//     let price = document.createElement("span");
//     let count = document.createElement("span");
//     let title = document.createElement("h5");
//     let closeBtn = document.createElement("button");

//     closeBtn.className = "btn btn-danger";
//     closeBtn.innerText = "X";
//     closeBtn.style.position = "absolute";
//     closeBtn.style.right = "10px";
//     div.className = "basket-item col-lg-2";
//     div.style.position = "relative";
//     div.setAttribute("data-id", product.id);
//     div.setAttribute("data-count", 1);
//     div.style.width = "398px";
//     div.style.marginBottom = "10px";
//     title.innerText = product.title;
//     image.src = product.src;
//     image.style.width = "100px";
//     price.innerText = product.price;
//     count.innerText = 1;
//     count.className = "count";
//     div.append(image, price, title, count, closeBtn);
//     basketHTML.append(div);
//     closeBtn.addEventListener("click", function () {
//       let basket = JSON.parse(localStorage.getItem("basket"));
//       if (!basket) {
//         localStorage.setItem("basket", JSON.stringify([]));
//         basket = JSON.parse(localStorage.getItem("basket"));
//       }
//       let id = this.parentElement.getAttribute("data-id");
//       let index = basket.findIndex((element) => {
//         return element.id == id;
//       });
//       delete basket[index];
//       basket = basket.filter(Object);
//       ShowProductCount(basket);
      

//       let basketStr = JSON.stringify(basket);
//       localStorage.setItem("basket", basketStr);
//       this.parentElement.remove();
//       ShowTotalPrice(basket);
//     });
//   }
// }


$(".basket").click(function () {
  $(".basket-menu-exit").addClass("active");
  document.querySelector('body').style.overflow="hidden"
});
$(".exit").click(function (e) {
  e.stopPropagation()
 
  $(".basket-menu-exit").removeClass("active");
  document.querySelector('body').style.overflow="scroll"
});



$(".Pages").mouseover(function () {
  $(".page-text").addClass("active");
});

$(".Pages").mouseout(function () {
  $(".page-text").removeClass("active");
});



$(".pages").mouseover(function () {
  $(".drone-text").addClass("active");
});

$(".pages").mouseout(function () {
  $(".drone-text").removeClass("active");
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