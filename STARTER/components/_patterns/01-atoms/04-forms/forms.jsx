(($, { behaviors }) => {
  behaviors.placeholderAnimation = {
    attach(context) {
      $(context).once('placeholder').each(() => {
        const $inputItem = $('.form-item .label');
        if ($inputItem.length !== 0) {
          $inputItem.each(function () {
            const $this = $(this);
            const $input = $this.find('.form-element');
            const placeholderTxt = $input.attr('placeholder');
            const autofocus = $input.attr('autofocus');

            $input.after(`<span class="placeholder">${placeholderTxt}</span>`);
            $input.attr('placeholder', '');

            if (typeof autofocus !== typeof undefined && autofocus !== false) {
              $this.addClass('active');
            }

            $input.on('focusout', () => {
              $input.val().length ? $this.addClass('active') : $this.removeClass('active');
            }).on('focus', () => {
              $this.addClass('active');
            });
          });
        }
      });
    },
  };
})(jQuery, Drupal);
