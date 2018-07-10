(($, { behaviors }) => {
  behaviors.fileUpload = {
    attach(context) {
      $(context).once('file-listener-fileselect').find(':file').on('fileselect', function (event, numFiles, label) {
        const input = $(this).parents('.form-item').find(':text');
        const log = numFiles > 1 ? `${numFiles} files selected` : label;

        if (input.length) {
          input.val(log);
        } else if (log) console.log(log);
      });
      $(context).once('file-listener').on('change', ':file', function () {
        const input = $(this);
        const numFiles = input.get(0).files ? input.get(0).files.length : 1;
        const label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
      });

    }
  };
})(jQuery, Drupal);
