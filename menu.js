// side navigation bar
var sidenavbar = document.querySelector(".side-navbar")

function showNavbar(){
    sidenavbar.style.left = "0"
}

function closeNavbar(){
    sidenavbar.style.left = "-60%"
}

// top scroll button

var btnTop = document.getElementById("btntop")

btnTop.addEventListener("click",function(){
    window.scrollTo(0, 0)
})

var topbtn = document.querySelector(".top-btn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

// add to cart section

var carts = document.querySelector(".cart")

function showCart(){
    carts.style.right = "0"
}

function closeCart(){
    carts.style.right = "-100%"
}

// search bar section

var searchContainer = document.getElementById("menu-container")
var search = document.getElementById("searchbar")
var foodList = searchContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
  var enteredValue = event.target.value.toUpperCase()

  for(count = 0; count < foodList.length ; count = count+1)
  {
    var foodName = foodList[count].querySelector("h4").textContent

    if(foodName.toUpperCase().indexOf(enteredValue)<0)
    {
      foodList[count].style.display = "none"
    }
    else
    {
      foodList[count].style.display = "flex"
    }
  }
})


// menu section

var burgerList = document.querySelector(".burger-menulist")
var menuList = document.querySelector(".menulist")
var pizzaList = document.querySelector(".pizza-menulist")
var chickenList = document.querySelector(".chicken-menulist")
var comboList = document.querySelector(".combo-menulist")
var drinkList = document.querySelector(".drink-menulist")

function showBurger(){
  burgerList.style.display = "block"
  menuList.style.display = "none"
  pizzaList.style.display = "none"
  chickenList.style.display ="none"
  comboList.style.display = "none"
  drinkList.style.display = "none"
}

function showMenu(){
  menuList.style.display = "block"
  burgerList.style.display = "none"
  pizzaList.style.display = "none"
  chickenList.style.display ="none"
  comboList.style.display = "none"
  drinkList.style.display = "none"
}

function showPizza(){
  pizzaList.style.display = "block"
  burgerList.style.display = "none"
  menuList.style.display = "none"
  chickenList.style.display ="none"
  comboList.style.display = "none"
  drinkList.style.display = "none"
}

function showChicken(){
  pizzaList.style.display = "none"
  burgerList.style.display = "none"
  menuList.style.display = "none"
  chickenList.style.display ="block"
  comboList.style.display = "none"
  drinkList.style.display = "none"
}

function showCombo(){
  pizzaList.style.display = "none"
  burgerList.style.display = "none"
  menuList.style.display = "none"
  chickenList.style.display ="none"
  comboList.style.display = "block"
  drinkList.style.display = "none"
}

function showDrink(){
  pizzaList.style.display = "none"
  burgerList.style.display = "none"
  menuList.style.display = "none"
  chickenList.style.display ="none"
  comboList.style.display = "none"
  drinkList.style.display = "block"
}

//add to cart add, remove and save the order function

let cart = [];
let total = 0;

// Function to add items to the cart
function addToCart(item, price) {
  cart.push({ item, price }); // Add item to the cart array
  total += price; // Update total price
  updateCart(); // Refresh cart display
}

// Function to remove items from the cart
function removeFromCart(index) {
  total -= cart[index].price; // Subtract the price of the item being removed
  cart.splice(index, 1); // Remove the item from the cart array
  updateCart(); // Refresh cart display
}

// Function to update cart display
function updateCart() {
  const cartItems = document.getElementById('cartbody');
  const cartTotal = document.getElementById('cart-total');
  const cartContainer = document.querySelector(".cart");

  // Clear the cart display
  cartItems.innerHTML = '';

  // Display each item in the cart
  cart.forEach((cartItem, index) => {
    const row = document.createElement('tr');
    row.className = 'cart-table';
    row.innerHTML = `
      <td>${cartItem.item}</td>
      <td>${cartItem.price}</td>
      <td><button onclick="removeFromCart(${index})" class="btn-remove">Remove</button></td>
    `;
    cartItems.appendChild(row);
  });

  // Show the cart container
  cartContainer.style.right = "0";

  // Update total price
  cartTotal.innerText = `Total: $${total}`;
}

// Event listener for placing the order
document.getElementById("place-order").addEventListener("click", function (event) {
  event.preventDefault();

  // Reset cart
  cart = [];
  total = 0;

  // Clear cart display and total
  document.getElementById('cartbody').innerHTML = '';
  document.getElementById('cart-total').innerText = 'Total: $0';

  // Show success alert
  alert("Your Order Placed Successfully.");
});

// Prevent default action on clicking the order button
document.getElementById("orderbutton").addEventListener("click", function (event) {
  event.preventDefault();
});


//book a table button on navigation bar

var bookTable = document.getElementById("book-table")

bookTable.addEventListener("click",function(){
  window.location.href = "book table.html"
})
