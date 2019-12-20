let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }


/******************WEB FONT************** */
WebFont.load({
  google: {
      families: [
          'Ultra',
          'Work Sans'
      ]
  }
});

WebFontConfig = {
  events: false
};
/******************SLIDER*************************** */
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
/*********************MENU Flotador********************************* */
var prevScrollpos = window.pageYOffset;
console.log('1.' + prevScrollpos);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log('2.' + currentScrollPos);
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    // document.getElementById("navbar").style.position= 'relative';
  } else {
    document.getElementById("navbar").style.top = "-100px";
    // document.getElementById("navbar").style.position= 'relative';
  }
  prevScrollpos = currentScrollPos;
}
/****************************************************** */

