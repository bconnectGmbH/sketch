import ScrollMagic from 'ScrollMagic';
import TweenLite from 'TweenLite';
import TimelineLite from 'TimelineLite';
import EasePack from 'EasePack';

(($, { behaviors }) => {
  behaviors.bcMagic = {
    attach(context) {
      $(context).once('bcMagic').each(() => {
        if ($('.bconnect-trigger').length !== 0) {
          function pathPrepare($el) {
            const lineLength = $el[0].getTotalLength();
            $el.css('stroke-dasharray', lineLength);
            $el.css('stroke-dashoffset', lineLength);
          }

          const $b1 = $('#bcb1');
          const $b2 = $('#bcb2');
          const $minus = $('#bcminus');
          const $c1 = $('#bcc1');
          const $o1 = $('#bco1');
          const $n1 = $('#bcn1');
          const $n2 = $('#bcn2');
          const $n1d = $('#bcn1d');
          const $n2d = $('#bcn2d');
          const $e1 = $('#bce1');
          const $c2 = $('#bcc2');
          const $t1 = $('#bct1');
          const $t2 = $('#bct2');
          const $text = $('#bctext');
          const $underline1 = $('#bcunderline1');
          const $underline2 = $('#bcunderline2');
          const $underline3 = $('#bcunderline3');

          // prepare SVG
          pathPrepare($b1);
          pathPrepare($b2);
          pathPrepare($minus);
          pathPrepare($c1);
          pathPrepare($o1);
          pathPrepare($n1);
          pathPrepare($n2);
          pathPrepare($n1d);
          pathPrepare($n2d);
          pathPrepare($e1);
          pathPrepare($c2);
          pathPrepare($t1);
          pathPrepare($t2);
          pathPrepare($underline1);
          pathPrepare($underline2);
          pathPrepare($underline3);

          // init controller
          const controller = new ScrollMagic.Controller();

          // build tween
          const tween = new TimelineMax()
            .add(TweenMax.to($b1, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($b2, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($minus, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($c1, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($o1, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($n2, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($n1, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($n1d, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($n2d, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($e1, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($c2, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($t1, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($t2, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($text, 0.5, { opacity: 1, ease: Linear.easeNone }))
            .add(TweenMax.to($underline1, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($underline2, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))
            .add(TweenMax.to($underline3, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }));

          // build scene
          const scene = new ScrollMagic.Scene({ triggerElement: '.bconnect-trigger', duration: 200, tweenChanges: true })
            .setTween(tween)
            .addTo(controller);
        }
      });
    },
  };
})(jQuery, Drupal);

