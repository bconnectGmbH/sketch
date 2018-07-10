import TweenLite from 'TweenLite';
import TimelineLite from 'TimelineLite';
import EasePack from 'EasePack';

(($, { behaviors }) => {
  behaviors.svgMagic = {
    attach(context) {
      $(context).once('svgMagic').each(() => {
        if ($('#trigger').length !== 0) {
          // SELECTING...
          // T
          const t1 = document.getElementById('t1');
          const t2 = document.getElementById('t2');
          const t2d = [document.getElementById('t2d1'), document.getElementById('t2d2'), document.getElementById('t2d3')];
          const t1d = [document.getElementById('t1d1'), document.getElementById('t1d2')];

          // H
          const h1 = document.getElementById('h1');
          const h2 = document.getElementById('h2');
          const h2d = [document.getElementById('h2d1'), document.getElementById('h2d2'), document.getElementById('h2d3')];
          const h3 = document.getElementById('h3');

          // A
          const a1 = document.getElementById('a1');
          const a2 = document.getElementById('a2');
          const a2d = [document.getElementById('a2d1'), document.getElementById('a2d2'), document.getElementById('a2d3')];

          // N
          const n1 = document.getElementById('n1');
          const n1d = [document.getElementById('n1d1'), document.getElementById('n1d2'), document.getElementById('n1d3'),
            document.getElementById('n1d4'), document.getElementById('n1d5')];

          // K
          const k1 = document.getElementById('k1');
          const k1d1 = document.getElementById('k1d1');
          const k2 = document.getElementById('k2');

          // Y
          const y1 = document.getElementById('y1');
          const y1d = [document.getElementById('y1d1'), document.getElementById('y1d2')];
          const y2 = document.getElementById('y2');
          const y2d = [document.getElementById('y2d1'), document.getElementById('y2d2')];

          // O
          const o1 = document.getElementById('o1');
          const o1d = [document.getElementById('o1d1'), document.getElementById('o1d2'), document.getElementById('o1d3'), document.getElementById('o1d4')];

          // U
          const u1 = document.getElementById('u1');
          const u1d = [document.getElementById('u1d1'), document.getElementById('u1d2')];

          // E
          const e1 = document.getElementById('e1');
          const e2 = document.getElementById('e2');
          const e1d = [document.getElementById('e1d1'), document.getElementById('e1d2'), document.getElementById('e1d3')];

          // text
          const text = document.getElementById('text');
          const tspans = document.getElementsByTagName('tspan');
          // underline
          const underlines = [document.getElementById('underline1'), document.getElementById('underline2'), document.getElementById('underline3'), document.getElementById('underline4')];

          // MAIN TIMELINE
          const mainTimeline = new TimelineLite({ onComplete: showReplay });

          // T TIMELINE
          const tline = new TimelineLite();
          tline
            .to(t2.x2.baseVal, 0.4, { value: 200.6, ease: Back.easeInOut }, 0)
            .to(t2.y2.baseVal, 0.4, { value: 58.6, ease: Back.easeInOut }, 0)
            .to(t1.y2.baseVal, 0.5, { value: 156.4, ease: Back.easeInOut }, 0.1)
            .to(t2, 0.01, { opacity: 1 }, 0)
            .to(t1, 0.01, { opacity: 1 }, 0.3);
          addLineDecTween(tline, t2d[0], 0.2, 200, 51, 0.1);
          addLineDecTween(tline, t2d[1], 0.2, 170, 48, 0.2);
          addLineDecTween(tline, t2d[2], 0.2, 150, 44, 0.3);
          addLineDecTween(tline, t1d[0], 0.2, 160, 159, 0.2);
          addLineDecTween(tline, t1d[1], 0.2, 165, 130, 0.3);
          mainTimeline.add(tline, 0.5);

          // H TIMELINE
          const hline = new TimelineLite();
          hline
            .to(h1.y2.baseVal, 0.5, { value: 145.4, ease: Back.easeInOut }, 0)
            .to(h2.x2.baseVal, 0.4, { value: 217.1, ease: Back.easeInOut }, 0.2)
            .to(h2.y2.baseVal, 0.4, { value: 102.6, ease: Back.easeInOut }, 0.2)
            .to(h3.y2.baseVal, 0.5, { value: 130.4, ease: Back.easeInOut }, 0.3)
            .to(h1, 0.01, { opacity: 1 }, 0)
            .to(h2, 0.01, { opacity: 1 }, 0.2)
            .to(h3, 0.01, { opacity: 1 }, 0.3);
          addLineDecTween(hline, h2d[0], 0.3, 270, 93, 0.1);
          addLineDecTween(hline, h2d[1], 0.3, 256, 104, 0.2);
          addLineDecTween(hline, h2d[2], 0.3, 242, 114, 0.3);
          mainTimeline.add(hline, 0.9);

          // A TIMELINE
          const aline = new TimelineLite();
          if (a1.points[0]) {
            aline
              .to(a1.points[0], 0.2, { x: 305.6, y: 138.6, ease: Quad.easeIn }, 0)
              .to(a1.points[0], 0.5, { x: 282.6, ease: Back.easeOut }, 'a1')
              .to(a1.points[2], 0.2, { x: 305.6, y: 138.6, ease: Quad.easeIn }, 0)
              .to(a1.points[2], 0.5, { x: 330.6, ease: Back.easeOut }, 'a1');
          } else {
            const apoly = {
              x0: 305.6, y0: 51.6, x1: 305.6, y1: 51.6, x2: 305.6, y2: 51.6,
            };
            aline
              .to(apoly, 0.2, {
                x0: 305.6,
                y0: 138.6,
                x2: 305.6,
                y2: 138.6,
                ease: Quad.easeIn,
                onUpdate() {
                  updatePolyline(a1, apoly);
                },
              }, 0)
              .to(apoly, 0.5, {
                x0: 282.6,
                x2: 330.6,
                ease: Back.easeOut,
                onUpdate() {
                  updatePolyline(a1, apoly);
                },
              }, 'a1');
          }
          aline
            .to(a2.x1.baseVal, 0.4, { value: 319.6, ease: Back.easeInOut }, 0.2)
            .to(a1, 0.01, { opacity: 1 }, 0)
            .to(a2, 0.01, { opacity: 1 }, 0.2);
          addLineDecOutTween(aline, a2d[0], 0.2, 295, 120, 319, 120, 0.2);
          addLineDecOutTween(aline, a2d[1], 0.2, 293, 127, 321, 127, 0.3);
          addLineDecOutTween(aline, a2d[2], 0.2, 291, 134, 322, 134, 0.4);
          mainTimeline.add(aline, 1.2);

          // N TIMELINE
          const nline = new TimelineLite();

          if (n1.points[1]) {
            nline
              .to(n1.points[1], 0.2, { y: 51.6, ease: Quad.easeOut }, 0)
              .to(n1.points[3], 0.2, { y: 51.6, ease: Quad.easeOut }, 0)
              .to(n1.points[2], 0.2, { x: 391.6, y: 138.6 }, 'n1')
              .to(n1.points[3], 0.2, { x: 391.6, y: 62.4, ease: Quad.easeOut }, 0.4);
          } else {
            const npoly = {
              x0: 352, y0: 147, x1: 358, y1: 147, x2: 363, y2: 147, x3: 365, y3: 74,
            };
            nline
              .to(npoly, 0.2, {
                y1: 51.6,
                y3: 51.6,
                ease: Quad.easeOut,
                onUpdate() {
                  updatePolyline(n1, npoly);
                },
              }, 0)
              .to(npoly, 0.2, {
                x2: 391.6,
                x3: 391.6,
                y2: 138.6,
                y3: 62.4,
                ease: Quad.easeOut,
                onUpdate() {
                  updatePolyline(n1, npoly);
                },
              }, 0.2);
          }
          nline
            .to(n1, 0.01, { opacity: 1 }, 0);
          addLineDecTween(nline, n1d[0], 0.3, 352, 70, 0.1);
          addLineDecTween(nline, n1d[1], 0.3, 358, 102, 0.2);
          addLineDecTween(nline, n1d[2], 0.3, 363, 124, 0.3);
          addLineDecTween(nline, n1d[3], 0.3, 385, 80, 0.4);
          addLineDecTween(nline, n1d[4], 0.3, 385, 74, 0.5);
          mainTimeline.add(nline, 1.5);

          // K TIMELINE
          const kline = new TimelineLite();
          if (k2.points[0]) {
            kline
              .to(k2.points[0], 0.2, { x: 452.6, y: 51.6, ease: Back.easeOut }, 0.2)
              .to(k2.points[2], 0.2, { x: 452.6, y: 145.6, ease: Back.easeOut }, 0.3);
          } else {
            const kpoly = {
              x0: 414.1, y0: 97.6, x1: 414.1, y1: 97.6, x2: 414.1, y2: 97.6,
            };
            kline
              .to(kpoly, 0.2, {
                x0: 452.6,
                y0: 51.6,
                x2: 452.6,
                y2: 145.6,
                ease: Back.easeOut,
                onUpdate() {
                  updatePolyline(k2, kpoly);
                },
              }, 0.2);
          }

          kline
            .to(k1.y2.baseVal, 0.4, { value: 138.4, ease: Back.easeInOut }, 0)
            .to(k1, 0.01, { opacity: 1 }, 0)
            .to(k2, 0.01, { opacity: 1 }, 0.2);
          addLineDecTween(kline, k1d1, 0.3, 419, 139, 0.1);
          mainTimeline.add(kline, 1.7);

          // Y TIMELINE
          const yline = new TimelineLite();
          yline
            .to(y1.x2.baseVal, 0.3, { value: 493.6, ease: Back.easeOut }, 0)
            .to(y1.y2.baseVal, 0.3, { value: 112.6, ease: Back.easeOut }, 0)
            .to(y2.x2.baseVal, 0.4, { value: 472.6, ease: Back.easeOut }, 0.15)
            .to(y2.y2.baseVal, 0.4, { value: 168.6, ease: Back.easeOut }, 0.15)
            .to(y1, 0.01, { opacity: 1 }, 0)
            .to(y2, 0.01, { opacity: 1 }, 0.15);
          addLineDecTween(yline, y1d[0], 0.3, 470, 155, 0.3);
          addLineDecTween(yline, y1d[1], 0.3, 478, 120, 0.4);
          mainTimeline.add(yline, 2);

          // O TIMELINE
          const oline = new TimelineLite();
          o1.style.opacity = 1;
          oline
            .to(o1.rx.baseVal, 0.5, { value: 27, ease: Back.easeOut }, 0)
            .to(o1.ry.baseVal, 0.5, { value: 40.5, ease: Back.easeOut }, 0);
          mainTimeline.add(oline, 2.2);

          // U TIMELINE
          const uline = new TimelineLite();
          const length = u1.getTotalLength();
          u1.style.opacity = 1;
          u1.style.strokeDasharray = length;
          u1.style.strokeDashoffset = length;
          uline
            .to(u1, 0.5, { strokeDashoffset: 0, ease: Quad.easeInOut }, 0);
          addLineDecTween(uline, u1d[0], 0.3, 626, 60, 0.3);
          addLineDecTween(uline, u1d[1], 0.3, 620, 60, 0.4);
          mainTimeline.add(uline, 2.4);

          // ! TIMELINE
          const eline = new TimelineLite();
          e2.style.opacity = 1;
          eline
            .to(e2.rx.baseVal, 0.3, { value: 6, ease: Back.easeOut }, 0.3)
            .to(e2.ry.baseVal, 0.3, { value: 6, ease: Back.easeOut }, 0.3)
            .to(e1.x2.baseVal, 0.3, { value: 658.6, ease: Back.easeInOut }, 0)
            .to(e1.y2.baseVal, 0.3, { value: 130.6, ease: Back.easeInOut }, 0)
            .to(e1, 0.01, { opacity: 1 }, 0);
          addLineDecTween(eline, e1d[0], 0.3, 653, 118, 0.1);
          addLineDecTween(eline, e1d[1], 0.3, 650, 110, 0.2);
          addLineDecTween(eline, e1d[2], 0.3, 673, 86, 0.3);
          mainTimeline.add(eline, 2.6);

          mainTimeline.timescale = 0.6;
          mainTimeline.play();

          function showReplay() {
            TweenLite.to(play, 0.4, { opacity: 1 });
          }

          const play = document.getElementById('svgmagicplay');
          play.onclick = function () {
            mainTimeline.restart();
          };
        }

        function addLineDecTween(tl, line, duration, x, y, delay) {
          if(line) {
            tl.to(line.x2.baseVal, duration, { value: x, ease: Quart.easeInOut }, delay);
            tl.to(line.y2.baseVal, duration, { value: y, ease: Quart.easeInOut }, delay);
            tl.to(line.x1.baseVal, duration, { value: x, ease: Quart.easeInOut }, delay + duration);
            tl.to(line.y1.baseVal, duration, { value: y, ease: Quart.easeInOut }, delay + duration);
            tl.to(line, 0.01, { opacity: 1 }, delay);
            tl.to(line, 0.01, { opacity: 0 }, delay + (duration * 2));
          }
        }

        function addLineDecOutTween(tl, line, duration, x1, y1, x2, y2, delay) {
          if(line) {
            tl.to(line.x1.baseVal, duration, { value: x1, ease: Quart.easeInOut }, delay);
            tl.to(line.y1.baseVal, duration, { value: y1, ease: Quart.easeInOut }, delay);
            tl.to(line.x2.baseVal, duration, { value: x2, ease: Quart.easeInOut }, delay);
            tl.to(line.y2.baseVal, duration, { value: y2, ease: Quart.easeInOut }, delay);
            tl.to(line.x1.baseVal, duration, { value: x2, ease: Quart.easeInOut }, delay + duration);
            tl.to(line.y1.baseVal, duration, { value: y2, ease: Quart.easeInOut }, delay + duration);
            tl.to(line, 0.01, { opacity: 1 }, delay);
            tl.to(line, 0.01, { opacity: 0 }, delay + (duration * 2));
          }
        }

        function addUnderlineTween(tl, ul, duration, x2, y2, x1, y1, delay) {
          if(ul) {
            tl.to(ul.x2.baseVal, duration, { value: x2, ease: Quad.easeInOut }, delay);
            tl.to(ul.y2.baseVal, duration, { value: y2, ease: Quad.easeInOut }, delay);
            tl.to(ul.x1.baseVal, duration, { value: x1, ease: Quad.easeInOut }, delay + duration);
            tl.to(ul.y1.baseVal, duration, { value: y1, ease: Quad.easeInOut }, delay + duration);
          }
        }


        // for Safari
        function updatePolyline(line, points) {
          if (points.x3) {
            line.setAttribute('points', `${points.x0},${points.y0} ${points.x1},${points.y1} ${points.x2},${points.y2} ${points.x3},${points.y3}`);
          } else {
            line.setAttribute('points', `${points.x0},${points.y0} ${points.x1},${points.y1} ${points.x2},${points.y2}`);
          }
        }

        

        const svg = document.getElementById('svg');
        if (window.innerWidth < 600) {
          svg.style.width = `${window.innerWidth}px`;
        }
      });
    },
  };
})(jQuery, Drupal);

