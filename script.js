	var links = document.getElementById("links");

 	function showMenu(){
 		links.style.left = "0"
 	}
 	function hideMenu(){
 		links.style.left = "-250px"
 	}


 	const swiper = new Swiper('.slider-wrap',
  {
    loop: true,
    spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});