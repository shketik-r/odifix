
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
  collapsible: true,
});

$('.menu').accordion({
  heightStyle: 'content',
  header: '> .accordion-item-menu > .accordion-header-menu',
  active: false,
  collapsible: true,
});


$(function () {
  let owl = $(".owl-carousel");
  owl.owlCarousel({

    items: 3,
    // margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1024: {
        items: 3
      },

    }
  });
  $(".next_button").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prev_button").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

$('#content-services').each(function () {
  let ths = $(this);
  ths.find('.tab').click(function () {
    $('html, body').animate({
      scrollTop: $(".content-services").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
  });
  ths.find('.accordion-header').click(function () {
    $('html, body').animate({
      scrollTop: $(".content-services").offset().top
    }, 1000);
  });
});



let showContent = document.getElementById('showContent');
let tab = document.querySelectorAll(".tab")
const mediaQuery = window.matchMedia('(max-width: 1024px)')




function handleTabletChange(e) {
  console.log(e);
  if (e.matches) {
    tab.forEach(el => {
      el.classList.remove('active')
      el.addEventListener("click", () => {
        let content = el.querySelector('.hidden').innerHTML;
        el.closest('.wrapper-tabs').querySelector('.content-services__price-mobile').innerHTML = content;
      })
    })
  } else {
    tab.forEach(el => {
      el.closest('.wrapper-tabs').querySelector('.content-services__price-mobile').innerHTML = "";
      if (el.classList.contains('active')) {
        let content = el.querySelector('.hidden').innerHTML;
        showContent.innerHTML = content;
      }
      el.addEventListener("click", () => {
        el.closest('.wrapper-tabs').querySelector('.content-services__price-mobile').innerHTML = "";
        let content = el.querySelector('.hidden').innerHTML;
        showContent.innerHTML = content;
      })
    })
  }




}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)



let buttonOpen = document.querySelectorAll(".button-open");
let buttonOpenThanks = document.querySelectorAll(".button-open-thaks");
let buttonOpenReviews = document.querySelectorAll("#button-open-reviews");

let buttonClose = document.querySelector(".icon-close");
let buttonCloseThanks = document.querySelector(".icon-close-thanks");
let buttonCloseReviews = document.querySelector(".icon-close-reviews");

let popupRequisition = document.querySelector(".popup-requisition-wrapper");
let popupThanks = document.querySelector(".popup-thanks-wrapper");
let popupReviews = document.querySelector(".popup-reviews-wrapper");

let forms = document.querySelectorAll(".form-call")
let reviewForm = document.querySelector(".popup-reviews__form")

let fileNameIcon = document.querySelector(".file-name__icon")
let fileNameWrapper = document.querySelector(".file-name__wrapper")
const file = document.querySelector('#file');


file.addEventListener('change', (e) => {
  const [file] = e.target.files;
  const { name: fileName } = file;
  fileNameWrapper.classList.add("file-name__wrapper-show")
  document.querySelector('.file-name').textContent = fileName;

});

fileNameIcon.addEventListener("click", () => {
  fileNameWrapper.classList.remove("file-name__wrapper-show")
  file.value = '';
})

forms.forEach(el => {

  el.addEventListener('submit', function (event) {
    event.preventDefault();

  });
});


buttonOpen.forEach(el => {
  el.addEventListener("click", () => open(popupRequisition));
});
buttonOpenReviews.forEach(el => {
  el.addEventListener("click", () => open(popupReviews));
});
buttonOpenThanks.forEach(el => {
  el.addEventListener("click", openPopupThaks);;
});

popupRequisition.addEventListener("click", () => close(event, popupRequisition));
popupThanks.addEventListener("click", () => close(event, popupThanks));
popupReviews.addEventListener("click", () => close(event, popupReviews));
buttonClose.addEventListener("click", () => closeIcon(popupRequisition));
buttonCloseThanks.addEventListener("click", () => closeIcon(popupThanks));
buttonCloseReviews.addEventListener("click", () => closeIcon(popupReviews));

function openPopupThaks() {
  popupRequisition.classList.remove("modal_active")
  popupThanks.classList.add("modal_active")
}

function open(popup) {
  popup.classList.add("modal_active")
}

function close(event, popup) {
  let target = event.target;
  if (popup === target) {
    popup.classList.remove("modal_active")
  }
}

function closeIcon(popup) {
  popup.classList.remove("modal_active")
}



$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });
});


window.onscroll = function () { myFunction() };
let header = document.querySelector(".header");
let headerNav = document.querySelector(".header-nav");

let sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("header--sticky");
    headerNav.classList.add("header--padding");
  } else {
    header.classList.remove("header--sticky");
    headerNav.classList.remove("header--padding");
  }
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elementsTitle = document.querySelectorAll('.element-animation-title');
let elementsImg = document.querySelectorAll('.element-animation-img');


for (let elm of elementsTitle) {
  observer.observe(elm);
}

for (let elm of elementsImg) {
  observer.observe(elm);
}





























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