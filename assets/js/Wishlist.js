
const wishlistBtns = document.querySelectorAll('.wishlist-button');
wishlistBtns.forEach((btn) => {
  btn.addEventListener('click', addToWishlist);
});

document.addEventListener('DOMContentLoaded', () => {

  ShowTotalCount();
});

function ShowTotalCount() {
    const existingWishlist = localStorage.getItem('wishlist');
    if (existingWishlist) {
      const wishlist = JSON.parse(existingWishlist);
      const wishlistCountElements = document.getElementsByClassName('wishlist-count');
  
      for (let i = 0; i < wishlistCountElements.length; i++) {
        const wishlistCountElement = wishlistCountElements[i];
        wishlistCountElement.innerText = wishlist.length.toString();
      }
    }
  }

  document.addEventListener('DOMContentLoaded', showWishlist);

  function showWishlist() {
    const existingWishlist = localStorage.getItem('wishlist');
    if (existingWishlist) {
      const wishlist = JSON.parse(existingWishlist);
      const wishlistContainer = document.getElementById('wishlist-container');
      wishlistContainer.innerHTML = ''; 
  
      wishlist.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('wishlist-product', 'col-lg-3','col-md-4','col-12');
  
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
  
        const productName = document.createElement('h4');
        productName.textContent = product.name;
  
        const productPrice = document.createElement('span');
        productPrice.textContent = product.price + ' USD';
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
          removeFromWishlist(product.id);
          showWishlist();
        });
  
        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(deleteButton);
  
        wishlistContainer.appendChild(productDiv);
      });
    }
  }
  
  function removeFromWishlist(productId) {
    const existingWishlist = localStorage.getItem('wishlist');
    if (existingWishlist) {
      const wishlist = JSON.parse(existingWishlist);
      const updatedWishlist = wishlist.filter((product) => product.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  }

function addToWishlist(event) {
  event.preventDefault();
  const productElement = event.target.closest('.item');
  const productId = productElement.dataset.id;

  const product = {
    id: productId,
    name: "Nintendo Switch Lite - Turquoise",
    price: 458.56,
    image: "./assets/images/Products/1_50862e3f-4e56-4d7c-9220-04cde28aca6d_258x258-ss.webp"
  };

  const existingWishlist = localStorage.getItem('wishlist');
  if (!existingWishlist) {
    localStorage.setItem('wishlist', JSON.stringify([product]));
  } else {
    const wishlist = JSON.parse(existingWishlist);
    const productIndex = wishlist.findIndex((item) => item.id === productId);
    if (productIndex === -1) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } else {
      wishlist.splice(productIndex, 1); 
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }

  ShowTotalCount();
  showWishlist(); 


}