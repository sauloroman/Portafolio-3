// ###########################
// VISIBLE NAVIGATION
// ###########################

const header = document.querySelector('#header');
const buttonMobile = document.querySelector('.button-mobile-nav');

buttonMobile.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

// ###########################
// SMOOTH SCROLLING
// ###########################

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach( link => {
  link.addEventListener('click', e => {

    e.preventDefault();
    const href = link.getAttribute('href');
    console.log( href );

    // Up scroll
    if ( href === '#' ) window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Scroll entre secciones
    if ( href !== '#' && href.startsWith('#') ) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: 'smooth'});
    }

    // Cerrar navegación movil
    if ( link.classList.contains('main-menu__link')) {
      header.classList.toggle('nav-open');
    }

  });
});

// #######################################
// CAROUSEL
// #######################################

window.addEventListener('load', () => {

  const carouselList = document.querySelector('.carousel__list');

  new Glider( carouselList, {
    // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  rewind: true,
  dots: '.carousel__indicators',
  arrows: {
    prev: '.carousel__previous',
    next: '.carousel__next'
  },
  responsive: [
    {
      // screens greater than >= 560px
      breakpoint: 400,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicators',
        rewind: true,
        arrows: {
          prev: '.carousel__previous',
          next: '.carousel__next'
        },
      }
    },
    {
      // screens greater than >= 760px
      breakpoint: 760,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicators',
        rewind: true,
        arrows: {
          prev: '.carousel__previous',
          next: '.carousel__next'
        },
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        rewind: true,
        arrows: {
          prev: '.carousel__previous',
          next: '.carousel__next'
        },
      }
    }
  ]
  });

}); 

// #######################################
// Arreglando el gap en algunas versiones de Safari
// #######################################
function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// 