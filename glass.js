//Selecting buttons
var homebtn = document.querySelector(".homebtn");
var skillsbtn = document.querySelector(".skillsbtn");
var projectsbtn = document.querySelector(".projectsbtn");
var contactsbtn = document.querySelector(".contactsbtn");
//Selectiong contents
var home = document.querySelector(".home");
var skills = document.querySelector(".skills");
var projects = document.querySelector(".projects");
var contacts = document.querySelector(".contacts");
var content = document.querySelector(".content");







//Selecting the display none class
var dn = document.querySelector(".dn");

//Adding the display none class to all elements i dont want to put in the content for now
skills.classList.add("dn");
projects.classList.add("dn");
contacts.classList.add("dn");

//Selecting Background change on click class

var bcc = document.querySelector(".bcc");

//Event Listeners

window.addEventListener("DOMContentLoaded", (event) => {
  homebtn.classList.add("bcc");
});

homebtn.addEventListener("click", function (e) {
  e.preventDefault();

  home.classList.remove("dn");
  skills.classList.add("dn");
  projects.classList.add("dn");
  contacts.classList.add("dn");

  homebtn.classList.add("bcc");
  skillsbtn.classList.remove("bcc");
  projectsbtn.classList.remove("bcc");
  contactsbtn.classList.remove("bcc");
});

skillsbtn.addEventListener("click", function (e) {
  e.preventDefault();

  home.classList.add("dn");
  skills.classList.remove("dn");
  projects.classList.add("dn");
  contacts.classList.add("dn");

  homebtn.classList.remove("bcc");
  skillsbtn.classList.add("bcc");
  projectsbtn.classList.remove("bcc");
  contactsbtn.classList.remove("bcc");
});

projectsbtn.addEventListener("click", function (e) {
  e.preventDefault();

  home.classList.add("dn");
  skills.classList.add("dn");
  projects.classList.remove("dn");
  contacts.classList.add("dn");

  homebtn.classList.remove("bcc");
  skillsbtn.classList.remove("bcc");
  projectsbtn.classList.add("bcc");
  contactsbtn.classList.remove("bcc");
});

contactsbtn.addEventListener("click", function (e) {
  e.preventDefault();

  home.classList.add("dn");
  skills.classList.add("dn");
  projects.classList.add("dn");
  contacts.classList.remove("dn");

  homebtn.classList.remove("bcc");
  skillsbtn.classList.remove("bcc");
  projectsbtn.classList.remove("bcc");
  contactsbtn.classList.add("bcc");
});


//Navbar
var navbar = document.querySelector('.nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 600 ) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

document.querySelector('.toggler').onclick = () => {
  document.querySelector('.nav').classList.toggle('open');
}

/*Dark Mode*/
let darkbutton=document.getElementById("darkbtn");
darkbutton.addEventListener("click",(event)=>{
event.preventDefault();
document.body.style.backgroundColor="#000";
})