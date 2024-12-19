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

// home go to menu button

var menuList = document.getElementById("menulist")

function menuPage(){
  window.location.href = "menu.html"
}

// book a table button

var formButton = document.getElementById("form-button")

formButton.addEventListener("click",function(){
  alert("Your Table Is Successfully Booked.")
})