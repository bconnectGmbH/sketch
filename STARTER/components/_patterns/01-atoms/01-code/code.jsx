import hljs from '../../../../node_modules/highlight.js';

(($, { behaviors }) => {
  behaviors.highlightJs = {
    attach(context) {
      $(context).once('hljs').each(() => {
        hljs.initHighlightingOnLoad();
      });
    },
  };
})(jQuery, Drupal);

