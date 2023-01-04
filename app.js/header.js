window.addEventListener('scroll', () => {
    if (window.scrollY > 399) {
      document.querySelector('.header-bottom').classList.add('header-sticky');
      document.querySelector('.side-nav').classList.add('scroll-sidenav');
      document.querySelector('.to-top').classList.add('show');

      // add padding top to show content behind navbar
    //   navbar_height = document.querySelector('.navbar').offsetHeight;
    //   document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.querySelector('.header-bottom').classList.remove('header-sticky');
      document.querySelector('.side-nav').classList.remove('scroll-sidenav');
      document.querySelector('.to-top').classList.remove('show');

       // remove padding top from body
    //   document.body.style.paddingTop = '0';
    } 
});

var dropdown = document.querySelector(".dropdown-btn");
var i;

  dropdown.addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });


var sideNav = document.querySelector('.side-nav')
var closeBtn = document.querySelector('.close-btn')
var openBtn = document.querySelector('.menu-btn')

openBtn.addEventListener('click', () => {
  document.querySelector('.side-nav').style.width = "35%";
})

closeBtn.addEventListener('click', () => {
  document.querySelector('.side-nav').style.width = "0";
})



