
document.addEventListener("DOMContentLoaded", function (event) {

  $(document).ready(function () {
    $("#phoneMaskHeader").inputmask({ "mask": "+7 (999) 999-99-99" });
  });
  $(document).ready(function () {
    $("#phoneMaskContent").inputmask({ "mask": "+7 (999) 999-99-99" });
  });
  $(document).ready(function () {
    $("#phoneMaskPopup").inputmask({ "mask": "+7 (999) 999-99-99" });
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
    });
    ths.find('.accordion-header').click(function () {
      $('html, body').animate({
        scrollTop: $(".content-services").offset().top
      }, 1000);
    });
  });

  $(document).ready(function () {
    $('.menu-burger-wrapper').click(function () {
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
      headerNav.classList.add("header--sticky");

    } else {
      headerNav.classList.remove("header--sticky");

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
  let elementsDescriptionSubtitle = document.querySelectorAll('.element-animation-description-subtitle');
  let elementsDescriptionList = document.querySelectorAll('.element-animation-description-list');


  function animationElement(elements) {
    for (let elm of elements) {
      observer.observe(elm);
    }
  }


  const mediaQueryMobile = window.matchMedia('(max-width: 500px)')
  if (!mediaQueryMobile.matches) {
    animationElement(elementsTitle)
    animationElement(elementsImg)
    animationElement(elementsDescriptionSubtitle)
    animationElement(elementsDescriptionList)
  }

  let promise = new Promise((resolve) => {
    setTimeout(() => {
      document.body.classList.add('loaded_hiding');
      resolve();
    }, 1800);

  });
  promise
    .then(
      result => {
        setTimeout(() => {
          document.body.classList.add('loaded');
        }, 500);
      }
    );


  let textElement = document.querySelector(".anim-appearance");
  let textToType = "Одинцово";


  function typeText(text, i) {
    if (i < text.length) {
      textElement.innerText += text.charAt(i);
      textElement.innerHTML += '<span class="cursor"></span>';
      setTimeout(function () {
        typeText(text, i + 1);
      }, 200);
    } else {
      setTimeout(() => {
        textElement.innerText = "";
      }, 1000);

    }
  }


  if (textElement) {
    typeText(textToType, 0);

    setInterval(() => {
      typeText(textToType, 0);
    }, 4000);

  }


});
let tab = document.querySelectorAll(".tab")
let contentServices = document.getElementById("content-services")

const mediaQuery = window.matchMedia('(max-width: 1024px)')
let showContent = document.getElementById('showContent');
let buttonOpen = document.querySelectorAll(".button-open");
let buttonOpenThanks = document.querySelectorAll(".button-open-thaks");
let buttonOpenReviews = document.querySelectorAll("#button-open-reviews");
let buttonOpenReviewsThanks = document.querySelector(".button-open-reviews-thaks");

let buttonClose = document.querySelector(".icon-close");
let buttonCloseThanks = document.querySelector(".icon-close-thanks");
let buttonCloseReviews = document.querySelector(".icon-close-reviews");
let buttonCloseReviewsThanks = document.querySelector(".icon-close-reviews-thanks");

let popupRequisition = document.querySelector(".popup-requisition-wrapper");
let popupThanks = document.querySelector(".popup-thanks-wrapper");
let popupReviews = document.querySelector(".popup-reviews-wrapper");
let popupReviewsThanks = document.querySelector(".popup-reviews-thanks-wrapper");

let forms = document.querySelectorAll(".form-call")
let reviewForm = document.querySelector(".popup-reviews__form")

let fileNameIcon = document.querySelector(".file-name__icon")
let fileNameWrapper = document.querySelector(".file-name__wrapper")
const file = document.querySelector('#file');


function activeTabs(tab, accordion) {
  accordion.addEventListener("click", (e) => {
    if (e.target.className === 'tab') {
      tab.forEach(elem => {
        elem.classList.remove('active')
      });
            e.target.classList.add('active')
    }
  })
}

if (tab && contentServices) {
  activeTabs(tab, contentServices)
}


function handleTabletChange(e) {
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

reviewForm.addEventListener('submit', function (event) {
  event.preventDefault();
});

buttonOpen.forEach(el => {
  el.addEventListener("click", () => open(popupRequisition));
});

buttonOpenReviewsThanks.addEventListener("click", () => open(popupReviewsThanks));


buttonOpenReviews.forEach(el => {
  el.addEventListener("click", () => open(popupReviews));
});
buttonOpenThanks.forEach(el => {
  el.addEventListener("click", openPopupThaks);
});

popupRequisition.addEventListener("click", () => close(event, popupRequisition));
popupThanks.addEventListener("click", () => close(event, popupThanks));
popupReviews.addEventListener("click", () => close(event, popupReviews));
popupReviewsThanks.addEventListener("click", () => close(event, popupReviewsThanks));
buttonClose.addEventListener("click", () => closeIcon(popupRequisition));
buttonCloseThanks.addEventListener("click", () => closeIcon(popupThanks));
buttonCloseReviews.addEventListener("click", () => closeIcon(popupReviews));
buttonCloseReviewsThanks.addEventListener("click", () => closeIcon(popupReviewsThanks));

function openPopupThaks() {
  popupRequisition.classList.remove("modal_active")
  popupThanks.classList.add("modal_active")
}

function open(popup) {
  popup.classList.add("modal_active")
}

function close(e, popup) {
  let target = e.target;

  if (popup === target) {
    popup.classList.remove("modal_active")
  }
}

function closeIcon(popup) {
  popup.classList.remove("modal_active")
}