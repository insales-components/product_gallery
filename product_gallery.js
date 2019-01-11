$(document).ready(function() {
  galleryInit('.gallery-wrapper');
});

function galleryInit(wrapper) {
  var galleryMainClass = '.js-product-gallery-main';
  var galleryThumbsClass = '.js-gallery-thumbs';

  $(wrapper).each(function(index, el) {
    // генерируем уникальный класс чтобы можно было создавать несколько галлерей на одной странице
    var uniqClass = 'gallery-uniq-' + new Date().getTime();
    $(el).find(galleryThumbsClass + ',' + galleryMainClass).addClass(uniqClass);
    var galleryThumbs = galleryThumbsClass + '.' + uniqClass;
    var galleryMain = galleryMainClass + '.' + uniqClass;

    var galleryThumbs = new Swiper(galleryThumbs, {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: false,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventClicks: false
    });
    var galleryTop = new Swiper(galleryMain, {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  });
}
