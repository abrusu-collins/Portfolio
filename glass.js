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
var section = document.querySelector(".section");
var dashboard = document.querySelector(".dashboard");
var description = document.querySelector(".description");
var skillsul = document.querySelector(".skills ul");
var projectfront=document.querySelectorAll(".flip-card-front p");
var contactsh2 = document.querySelectorAll(".contacts h2");





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
let darkbuttoncl=document.querySelector(".darkbtn");
let darkbuttonid=document.getElementById("darkbtn");
let lightbuttoncl=document.querySelector(".lightbtn");

darkbuttoncl.addEventListener("click",(e)=>{
e.preventDefault();

if(e.target.classList.contains("darkbtn") && e.target.classList.contains("lightbtn")){
document.body.classList.add("bodydark");
section.classList.add("black");
dashboard.classList.add("black");
dashboard.classList.add("dashboardright");
description.classList.add("whitecolor");
skillsul.classList.add("whitecolor");
skillsul.classList.add("whitecolor");
Array.from(projectfront).forEach((p)=>{
  p.classList.add("whitecolor");
});
Array.from(contactsh2).forEach((h2)=>{
  h2.classList.add("whitecolor");

});
darkbuttonid.classList.remove("darkbtn");
darkbuttonid.textContent='Light Mode';
darkbuttonid.style.backgroundColor='#fff';
darkbuttonid.style.color='#000';

}

else{

  document.body.classList.remove("bodydark");
section.classList.remove("black");
dashboard.classList.remove("black");
dashboard.classList.remove("dashboardright");
description.classList.remove("whitecolor");
skillsul.classList.remove("whitecolor");
skillsul.classList.remove("whitecolor");
Array.from(projectfront).forEach((p)=>{
  p.classList.remove("whitecolor");
});
Array.from(contactsh2).forEach((h2)=>{
  h2.classList.remove("whitecolor");

})
darkbuttonid.classList.add("darkbtn");
darkbuttonid.textContent='Dark Mode';
darkbuttonid.style.backgroundColor='#000';
darkbuttonid.style.color='#fff';

}
}

);



// lightbuttoncl.addEventListener("click",(event)=>{

//   event.preventDefault();



//   document.body.classList.remove("bodydark");
// section.classList.remove("black");
// dashboard.classList.remove("black");
// dashboard.classList.remove("dashboardright");
// description.classList.remove("whitecolor");
// skillsul.classList.remove("whitecolor");
// skillsul.classList.remove("whitecolor");
// Array.from(projectfront).forEach((p)=>{
//   p.classList.remove("whitecolor");
// });
// Array.from(contactsh2).forEach((h2)=>{
//   h2.classList.remove("whitecolor");

// // })
// darkbuttonid.classList.add("darkbtn");
// darkbuttonid.classList.remove("lightbtn");
// darkbuttonid.textContent='Dark Mode';
// });