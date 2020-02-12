$(document).ready(function() {
let sideBarOpen;
let sideNav = document.getElementById("mySidenav");
let mainArea = document.querySelector(".container");
let openbtn = document.querySelector(".openbtn");
let closebtn = document.querySelector(".closebtn");

function openNav() {
  sideBarOpen = true;
  sideNav.style.width = "250px";
}
  
function closeNav() {
  sideBarOpen = false;
  sideNav.style.width = "0";
}

openbtn.addEventListener("click", function(e){
  e.preventDefault();
  console.log("clicked")
  openNav();
});

closebtn.addEventListener('click', function(e){
  e.preventDefault();
  closeNav();
});

mainArea.addEventListener('click', function(e){
  e.preventDefault();
  if (sideBarOpen == true){
    closeNav();
  }
});

})
