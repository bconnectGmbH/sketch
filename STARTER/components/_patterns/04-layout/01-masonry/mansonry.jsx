// import ImagesLoaded from 'imagesloaded';
// import jQueryBridget from 'jquery-bridget';
// import Masonry from 'masonry-layout';
// import ScrollMagic from 'ScrollMagic';
// import 'debug.addIndicators';

// jQueryBridget('masonry', Masonry, $);
// jQueryBridget('imagesLoaded', ImagesLoaded, $);

// (($, { behaviors }) => {
//   behaviors.gridMansonry = {
//     attach(context) {
//       $(context).once('mansonry').each(() => {
//         if ($('.masonry-layout').length !== 0) {
//           const $grid = $('.masonry-grid');
//           const controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 100 } });

//           const scene = new ScrollMagic.Scene({ triggerElement: '.masonry-layout', duration: '200' });
//           scene.on('enter', () => {
//             $grid.imagesLoaded(() => {
//               $('.grid-item img').addClass('animated bounceIn');
//               $grid.masonry({
//                 itemSelector: '.grid-item',
//                 columnWidth: '.grid-item',
//                 percentPosition: true,
//               });
//             });
//           });
//           scene.reverse(false);
//           scene.addTo(controller);
//         }
//       });
//     },
//   };
// })(jQuery, Drupal);
