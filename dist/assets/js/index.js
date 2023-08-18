
$(document).ready(function () {
  $("#phone").inputmask({ "mask": "+7 (99) 99-99-99" });
});


$(document).ready(function () {
  $('#accordion > ul > li > a').click(function () {
    var checkElement = $(this).next();

    $('#accordion li').removeClass('active');
    $(this).closest('li>ul').css({
      display: 'flex'
    });
    if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }

    if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#accordion ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;
    }
  });

});


$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      1180:{
        items:3
      }
    }
  });
  $(".next_button").click(function(){
    owl.trigger("next.owl.carousel");
  });
   
  $(".prev_button").click(function(){
    owl.trigger("prev.owl.carousel");
  });
});


















































// const dbPrice = [
//   {
//     title: "Замена дисплея (оригинал)",
//     description: "Дисплей разбился, нет изображения, не работает сенсорное стекло",
//     oldPrice: 2600,
//     newPrice: 2600,
//   },
//   {
//     title: "Замена дисплея (оригинал)",
//     description: "Дисплей разбился, нет изображения, не работает сенсорное стекло",
//     oldPrice: 2600,
//     newPrice: 2600,
//   },
//   {
//     title: "Замена дисплея (оригинал)",
//     description: "Дисплей разбился, нет изображения, не работает сенсорное стекло",
//     oldPrice: 2600,
//     newPrice: 2600,
//   },
//   {
//     title: "Замена дисплея (оригинал)",
//     description: "Дисплей разбился, нет изображения, не работает сенсорное стекло",
//     oldPrice: 2600,
//     newPrice: 2600,
//   },
//   {
//     title: "Замена дисплея (оригинал)",
//     description: "Дисплей разбился, нет изображения, не работает сенсорное стекло",
//     oldPrice: 2600,
//     newPrice: 2600,
//   },
//   {
//     title: "Замена дисплея (оригинал)",
//     description: "Дисплей разбился, нет изображения, не работает сенсорное стекло",
//     oldPrice: 2600,
//     newPrice: 2600,
//   },

// ]

// function showPrices(db) {
//   let priceList = document.getElementById('priceList');
//   for (let i = 0; i <= db.length; i++) {
//     let li = document.createElement("li");
//     li.classList.add("content-services__list")
//     li.innerHTML = `
//     <div>
//     <p class="content-services__title" >${db[i].title}</p>
//       <p class="content-services__description" >${db[i].description}</p>
//     </div>
//     <div>
//       <p class="content-services__old-price">${db[i].oldPrice} p</p>
//       <p class="content-services__new-price">${db[i].newPrice} p</p>
//     </div>
// `
//     priceList.append(li)
//   }
// }