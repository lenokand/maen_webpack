// import Swiper from 'swiper';

let burgerBtn = document.getElementById('burger-btn')
let  body = document.body
// let header = document.getElementById('header')
let closeMenu = document.getElementById('close-menu')
let menu = document.getElementById('hiden_menu')
let menuItem = document.querySelectorAll('.menu-block_item ')


burgerBtn.addEventListener('click' , function(){
    body.classList.add('show')
    menu.classList.add('show')
    // header.style.position = 'static'
})


menuItem.forEach((item) => {

    item.addEventListener('click', function(){
        body.classList.remove('show')
        menu.classList.remove('show') 
        // header.style.position = 'fixed'
    })
})

closeMenu.addEventListener('click', function() {
  
    body.classList.remove('show')
    menu.classList.remove('show')
    // header.style.position = 'fixed'
})


const swiperCust = new Swiper('.slider-customers_photo', {
    
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    slidesPerView: 6,
    spaceBetween: 30,
  
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        
        320: {
          slidesPerView: 2,
         
        },
       
        768: {
          slidesPerView: 2,
       
        }
      }
    
  });


  var swiper = new Swiper('.slider-review', {
    // Optional parameters
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    
   
  });


  
  var swiper3 = new Swiper('.swiper-goods', {
    // Optional parameters
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    // loop: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    
    // // freeMode: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<img class="' + className + '" src="./public/products/catalog_item'+(index + 1)+'.png" >';
    //     },
    //   },
    // thumbs: {
    //     swiper: swiper4,
    //   },
    //   spaceBetween: 10,

    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperGod,
    },
    
   
  });
  
  var swiperGod = new Swiper('.goods-pagination', {
   
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // navigation: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // freeMode: true,
    // watchSlidesProgress: true,
    spaceBetween: 5,
    // slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slideToClickedSlide: true,
    // slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
   
  });


swiperGod.controller.control = swiper3
// swiperGod.controller.by = slide
// swiper3.controller.by = slide
swiper3.controller.control = swiperGod


//   ?????????????????? ???????????????? ??????????

let counter = document.getElementById('counter')
let increase  = document.getElementById('increase')
let decrease  = document.getElementById('decrease')

if(increase){
    increase.addEventListener('click', function() {
        counter.value++
    
    })
    decrease.addEventListener('click', function() {
        if( counter.value > 1){
            counter.value--
        }
    })
}



// ???????????? ????????????

     //Get the button
    //  let mybutton = document.getElementById("btn-back-to-top");

    //  // When the user scrolls down 20px from the top of the document, show the button
    //  window.onscroll = function () {
    //    scrollFunction();
    //  };
     
    //  function scrollFunction() {
    //    if (
    //      document.body.scrollTop > 20 ||
    //      document.documentElement.scrollTop > 20
    //    ) {
    //      mybutton.style.display = "flex";
    //    } else {
    //      mybutton.style.display = "none";
    //    }
    //  }
    //  // When the user clicks on the button, scroll to the top of the document
    //  mybutton.addEventListener("click", backToTop);
     
    //  function backToTop() {
    //    document.body.scrollTop = 0;
    //    document.documentElement.scrollTop = 0;
    //  }


    function fontSize() {
      if($(window).width() < 768){
  
          $('html').css({fontSize: 16+'px'});
      }
  
      if($(window).width() > 768){
          var width = 1920; // ????????????, ???? ?????????????? ???????? ????????????
          var fontSize = 16; // ?????????????????????? ???????????? ????????????
          var bodyWidth = $('html').width();
          var multiplier = bodyWidth / width;
          if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
          if ($('html').width() < width) fontSize = Math.floor(fontSize * multiplier);
          $('html').css({fontSize: fontSize+'px'});
      }
  }
  
  $(function() { fontSize(); });
  $(window).resize(function() { fontSize(); });



//   ??????????????????
// ?????????? ???????????????????????? ???????????????????????? ????????????????, ?????????????????? myFunction
// window.onscroll = function() {myFunction()};

// // ???????????????? ??????????????????
// var header = document.getElementById("menu");

// // ???????????????? ???????????????? ?????????????? ?????????????????????????? ????????????
// var sticky = header.offsetTop;

// // ???????????????? ?????????? "sticky" ?? ??????????????????, ?????????? ???? ???????????????????? ?????? ?????????????? ??????????????????.
// // ?????????????? "sticky" ?????? ???????????? ???? ?????????????????? ??????????????????
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }