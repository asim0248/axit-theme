function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  //Toggle Nav bar
  let navbar = document.querySelector('.main-menu');

  document.querySelector('.fa-bars').onclick = () =>{
      navbar.classList.toggle('mobile-active');
  }

   // slick

   var swiper = new Swiper(".testimonial-row", {
    slidesPerView: 3,
    spaceBetween: 30,
    grapCursor: true,
    loop: true,
   
    breakpoints: {
      1366: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      540: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  

    // Sticky nav bar

    window.addEventListener('scroll', function(){
      let navbar = document.getElementById("header-menu");

          if(window.pageYOffset >= 90){
              navbar.classList.add('sticky');
          }else{
              navbar.classList.remove('sticky');
          }
  });


 
