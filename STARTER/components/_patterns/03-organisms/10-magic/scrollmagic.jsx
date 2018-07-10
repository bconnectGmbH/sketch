import ScrollMagic from 'ScrollMagic';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import EasePack from 'EasePack';
import 'animation.gsap';
import 'debug.addIndicators';

const newLocal = 'onUpdate';
(($, { behaviors }) => {
  behaviors.scrollMagic = {
    attach(context) {
      $(context).once('scrollMagic').each(() => {
        if ($('.scroll-container').length !== 0) {
          $(() => { // wait for document ready
            // init
            const controller = new ScrollMagic.Controller();
            const canvas = document.querySelector('#canvas');
            const ctx = canvas.getContext('2d');
            const scale = { value: 25 };

            ctx.imageSmoothingEnabled = false;

            const cw = canvas.width;
            const ch = canvas.height;

            const img = new Image();
            img.src = '../../../../images/b-connect/Development_Slide_Image.png';

            // define movement of panels
            const wipeAnimation = new TimelineMax()
              .fromTo('section.panel:nth-child(2)', 1, { x: '-100%' }, { x: '0%', ease: Linear.easeNone })
              .call(init)
              .fromTo('section.panel:nth-child(3)', 1, { x: '100%' }, { x: '0%', ease: Linear.easeNone }) // in from right
              .fromTo('section.panel:nth-child(4)', 1, { y: '-100%' }, { y: '0%', ease: Linear.easeNone }) // in from top
              .fromTo('section.panel:nth-child(5)', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone }); // in from bottom

            // create scene to pin and link animation
            new ScrollMagic.Scene({
              triggerElement: '#pinContainer',
              triggerHook: 'onLeave',
              duration: '300%',
            })
              .setPin('#pinContainer')
              .setTween(wipeAnimation)
              .addTo(controller);


            function init() {
              TweenLite.to(scale, 2, {
                value: 1,
                ease: Linear.easeNone,
                onUpdate: update,
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
              });

              update();
            }

            function update() {
              const sw = (cw / scale.value) >> 0;
              const sh = (ch / scale.value) >> 0;
              ctx.drawImage(img, 0, 0, sw, sh);
              ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, cw, ch);
            }
          });
        }
      });
    },
  };
})(jQuery, Drupal);
