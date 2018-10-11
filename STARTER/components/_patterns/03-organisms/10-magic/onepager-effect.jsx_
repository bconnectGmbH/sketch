// import ScrollMagic from 'ScrollMagic';
// import TweenMax from 'TweenMax';
// import TimelineMax from 'TimelineMax';
// import 'animation.gsap';
// import 'debug.addIndicators';

// (($, { behaviors }) => {
//   behaviors.onePageDemo = {
//     attach(context) {
//       $(context).once('parallax-wrapper').each(() => {
//         let timer;
//         let controller = new ScrollMagic.Controller({
//           globalSceneOptions: {
//             triggerHook: '0.75',
//           },
//         });

//         function setDuration(item) {
//           let itemheight = 0;

//           if ($(item).is(':last-child')) {
//             itemheight = $(item).height() / 2;
//           } else {
//             itemheight = $(item).height();
//           }

//           return itemheight;
//         }

//         function addScenes() {
//           $('section.colored').each(function coloredAnimation(index, item) {
//             const itemheight = setDuration(item);
//             const colorChange = TweenMax.to('.colored', 3, {
//               backgroundImage: 'linear-gradient(#F7DC9A, #27B0AC)', repeat: -1, yoyo: true, repeatDelay: 6,
//             });

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(colorChange)
//               .addIndicators({ name: 'colorChange' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.rotate').each(function rotateAnimation(index, item) {
//             const element = $(item).find('div');
//             const itemheight = setDuration(item);
//             const rotate = TweenMax.to(element, 2, { rotation: 360, ease: Linear.easeNone });

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(rotate)
//               .addIndicators({ name: 'rotate' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.fade').each(function fadeAnimation(index, item) {
//             const element = $(item).find('div');
//             const itemheight = setDuration(item);
//             const fade = TweenMax.from(element, 2, { opacity: 0, ease: Power1.easeInOut });

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(fade)
//               .addIndicators({ name: 'fade' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.scale').each(function scaleAnimation(index, item) {
//             const element = $(item).find('div');
//             const itemheight = setDuration(item);
//             const scale = TweenMax.fromTo(element, 0.25, { scale: 0, ease: Quad.easeInOut }, { scale: 2.5, ease: Quad.easeInOut });

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(scale)
//               .addIndicators({ name: 'scale' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.fly').each(function flyAnimation(index, item) {
//             const element = $(item).find('div');
//             const itemheight = setDuration(item);
//             const fly = TweenMax.from(element, 1, { css: { right: '100%' }, ease: Back.easeInOut });

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(fly)
//               .addIndicators({ name: 'fly' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.grid').each(function gridAnimation(index, item) {
//             const itemheight = setDuration(item);
//             const elements = $(item).find('.item');

//             const grid = new TimelineLite();

//             grid.staggerFrom(elements, 1, { y: '+=25', autoAlpha: 0, ease: Power3.easeOut }, 1);

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .triggerHook(0.75)
//               .setTween(grid)
//               .addIndicators({ name: 'grid' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.spin').each(function spinAnimation(index, item) {
//             const element = $(item).find('div');
//             const itemheight = setDuration(item);
//             const spin = TweenMax.from(element, 0.25, { css: { opacity: 0, rotation: 720 }, ease: Quad.easeInOut });

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(spin)
//               .addIndicators({ name: 'spin' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.fling').each(function flingAnimation(index, item) {
//             const element = $(item).find('div');
//             const itemheight = setDuration(item);

//             const fling = TweenMax.fromTo(element, 2, { css: { right: '100%', top: '100%', rotation: -360 }, immediateRender: true }, { css: { right: 0, top: '45%', rotation: 360 } });

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(fling)
//               .addIndicators({ name: 'fling' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.laola').each(function laolaAnimation(index, item) {
//             const itemheight = setDuration(item);
//             const laola = new TimelineLite()
//               .add(TweenMax.staggerTo('section.laola span', 0.5, {
//                 top: -150, x: -75, scale: 2, color: '#FA3450',
//               }, 0.2))
//               .add(TweenMax.staggerTo('section.laola span', 0.5, {
//                 top: 0, x: 0, scale: 1, color: '#FECE48',
//               }, 0.2), 0.5);

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(laola)
//               .addIndicators({ name: 'laola' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });

//           $('section.parallax').each(function parallaxAnimation(index, item) {
//             const itemheight = setDuration(item);
//             const parallax = new TimelineLite()
//               .add(TweenMax.fromTo($('.element.left'), 1, { css: { top: itemheight }, immediateRender: true }, { css: { top: '-5%' } }))
//               .add(TweenMax.fromTo($('.element.right'), 1, { css: { top: itemheight }, immediateRender: true }, { css: { top: '5%' } }));

//             new ScrollMagic.Scene({ triggerElement: this, duration: itemheight })
//               .setTween(parallax)
//               .addIndicators({ name: 'parallax' }) // add indicators (requires plugin)
//               .addTo(controller);
//           });
//         }

//         function resetScenes() {
//           controller.destroy();
//           controller = new ScrollMagic.Controller({
//             globalSceneOptions: {
//               triggerHook: '0.75',
//             },
//           });
//           addScenes();
//         }

//         $(window).on('resize', () => {
//           window.clearTimeout(timer);
//           timer = window.setTimeout(() => {
//             resetScenes();
//           }, 100);
//         });

//         addScenes();
//       });
//     },
//   };
// })(jQuery, Drupal);
