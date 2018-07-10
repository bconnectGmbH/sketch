import 'hypher-for-jquery';
import 'hyphen_lang_de';

(($, { behaviors }) => {
  behaviors.hyphenopoly = {
    attach(context) {
      $(context).once('hyphenopoly').each(() => {
        $('.hyphen').hyphenate({
          lang: 'de',
          hypenChar: false,
          autoload: false,
          exceptions: 'b-connect',
        });
      });
    },
  };
})(jQuery, Drupal);