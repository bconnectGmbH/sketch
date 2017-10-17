<?php
/**
 * @file
 * Contains functions only needed for drush integration.
 */

use Symfony\Component\Finder\Finder;

/**
 * Implementation of hook_drush_command().
 */
function sketch_drush_command() {
  $items = array();

  $items['sketch-sub-theme'] = array(
    'description' => 'Create a sketch sub-theme',
    'aliases' => array('sst'),
    'arguments' => array(
      'name'         => 'Your sub-theme name.',
      'machine_name' => 'A machine-readable name for your theme, optional only  [a-z, 0-9] ',
    ),
    'options' => array(
      'description'  => 'Your sub-theme description.',
      'machine-name' => '[a-z, 0-9] A machine-readable name for your theme.'
    ),
    'examples' => array(
      'drush fst "custom theme name"' => 'Create a sub-theme with the default options.',
      'drush fst "foo bar" "foo_bar"  --description="My supersweet awesome theme"' => 'Create a sub-theme with additional options.',
    ),
  );

  return $items;
}

/**
 * Create a Zurb sketch sub-theme.
 */
function drush_sketch_sub_theme($name = NULL, $machine_name = NULL, $description = NULL) {
  if (empty($name)) {
    drush_set_error(dt("Please provide a name for the sub-theme.\nUSAGE:\tdrush fst [name] [machine_name !OPTIONAL] [description !OPTIONAL]\n"));
    return;
  }
  //Filter everything but letters, numbers, underscores, and hyphens
  $machine_name = !empty($machine_name) ? preg_replace('/[^a-z0-9_-]+/', '', strtolower($machine_name)) : preg_replace('/[^a-z0-9_-]+/', '', strtolower($name));
  // Eliminate hyphens
  $machine_name = str_replace('-', '_', $machine_name);

  $sketch_path = drush_locate_root() . '/' . drupal_get_path('theme', 'sketch');
  $subtheme_path = explode('/', $sketch_path);
  array_pop($subtheme_path);
  $subtheme_path = implode('/', $subtheme_path) . '/' . $machine_name;

  $realSubThemePath = $subtheme_path;
  $subtheme_path = sys_get_temp_dir() . '/' . time() . '-' . $machine_name;
  // Make a fresh copy of the subtheme.
  $s = drush_copy_dir("$sketch_path/STARTER/", $subtheme_path);
  if (empty($s)) {
    return;
  }

  $finder = new Finder();
  foreach ($finder->files()->in($subtheme_path) as $file) {
    $content = file_get_contents($file->getRealPath());
    $content = preg_replace('(\[\[STARTER\]\])', $machine_name, $content);
    file_put_contents($file->getRealPath(), $content);
  }

  $finder = new Finder();
  $finder->name('/^STARTER/');

  foreach ($finder->files()->in($subtheme_path) as $file) {
    $fileName = $file->getPath() . '/' . str_replace('STARTER', $machine_name, $file->getFileName());
    rename($file->getRealPath(), $fileName);
  }

  $finder = new Finder();
  $finder->name('/\.yml\.txt/');
  foreach ($finder->files()->in($subtheme_path) as $file) {
    $fileName = $file->getPath() . '/' . str_replace('.txt', '', $file->getFileName());
    drush_print($fileName);
    rename($file->getRealPath(), $fileName);
  }

  $s = drush_move_dir($subtheme_path, $realSubThemePath, true);
  $subtheme_path = $realSubThemePath;

  // Notify user of the newly created theme.
  drush_print(dt("\n!name sub-theme was created in !path. \n",
    array(
      '!name' => $name,
      '!path' => $subtheme_path,
    )
  ));
  // drush_pm_enable_validate($machine_name);
  // drush_pm_enable($machine_name);
}
