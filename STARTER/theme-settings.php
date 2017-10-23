<?php

function [[STARTER]]_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  $form['framework_base'] = array(
    '#type'          => 'select',
    '#title'         => t('Default framework support'),
    '#default_value' => theme_get_setting('framework_base'),
    '#description'   => t("Set a default framework support."),
    '#options' => [
      'custom' => t('Custom.'),
      'bootstrap' => t('Bootstrap.'),
      'foundation' => t('Foundation.'),
    ]
  );
}
