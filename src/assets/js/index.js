
$(document).ready(function () {
  $("#phoneMaskHeader").inputmask({ "mask": "+7 (99) 99-99-99" });
});
$(document).ready(function () {
  $("#phoneMaskContent").inputmask({ "mask": "+7 (99) 99-99-99" });
});

$('.accordion').accordion({
	heightStyle: 'content',
	header: '> .accordion-item > .accordion-header',
  active: 0,
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



$('#content-services').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
    $('html, body').animate({
      scrollTop: $(".content-services").offset().top // класс объекта к которому приезжаем
      }, 1000); // Скорость прокрутки
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
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
