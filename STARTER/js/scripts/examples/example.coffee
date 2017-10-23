$ = @jQuery

@Drupal.behaviors.myCode =
  attach: (context, settings) ->
    $(".button", context).click ->
      $(this).next("ul").toggle "show"