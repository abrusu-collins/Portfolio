var navbar = document.querySelector('.nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}


document.querySelector('.toggler').onclick = () => {
  document.querySelector('.nav').classList.toggle('open');
}



$('[title]').each( function() {
    var mytitle = $(this);
    mytitle.data('title',mytitle.attr('title')); // get title attribute value
mytitle.attr('name', mytitle.attr('title')); // add title attribute value to NAME attribute
    mytitle.removeAttr('title'); // remove the title attribute, removing browser tooltip
    
});






$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})




