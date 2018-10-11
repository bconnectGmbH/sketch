import 'slick-carousel';

(($, { behaviors }) => {
  behaviors.slickSlider = {
    attach(context) {
      $(context).once('slider').each(() => {

        if ($('[data-background]').length > 0) {
          $('[data-background]').each(function() {
            var $background, $backgroundmobile, $this;
            $this = $(this);
            $background = $(this).attr('data-background');
            $backgroundmobile = $(this).attr('data-background-mobile');
            if ($this.attr('data-background').substr(0, 1) === '#') {
              return $this.css('background-color', $background);
            } else if ($this.attr('data-background-mobile') && device.mobile()) {
              return $this.css('background-image', `url(${  $backgroundmobile  })`);
            } else {
              return $this.css('background-image', `url(${$background})`);
            }
          });
        }

        if($('.slider').length != 0) {
          $('.slider').on('init', (event, slick) => {
            $('.animated').addClass('activate fadeInUp');
          });
  
          $('.slider').slick({
            infinite: true,
            mobileFirst: true,
            adaptiveHeight: true,
            swipeToSlide: true
          });
  
          $('.slider').on('afterChange', (event, slick, currentSlide) => {
            $('.animated').removeClass('off');
            $('.animated').addClass('activate fadeInUp');
          });
  
          $('.slider').on('beforeChange', (event, slick, currentSlide) => {
            $('.animated').removeClass('activate fadeInUp');
            $('.animated').addClass('off');
          });
        }
        
        if($('.slider-img').length != 0) {
          $('.slider-img').slick({
            infinite: true,
            mobileFirst: true,
            adaptiveHeight: true,
            swipeToSlide: true,
            fade: true,
          });

          $('.slider-img img').addClass('animated');

          $('.slider-img').on('afterChange', (event, slick, currentSlide) => {
            $('.slider-img img').removeClass('zoomOut');
            $('.animated').addClass('off');
          });

          $('.slider-img').on('beforeChange', (event, slick, currentSlide) => {
            $('.animated').removeClass('off');
            $('.slider-img img').addClass('zoomOut');
          });
        }
      });
    },
  };
})(jQuery, Drupal);

