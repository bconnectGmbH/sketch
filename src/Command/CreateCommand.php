<?php

namespace Drupal\sketch\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Drupal\Console\Core\Command\Command;
use Drupal\Console\Core\Style\DrupalStyle;
use Drupal\Console\Annotations\DrupalCommand;
use Drupal\Core\Extension\ThemeHandler;
use Drupal\Core\File\FileSystemInterface;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Console\Question\Question;

/**
 * Class CreateCommand.
 *
 * @DrupalCommand (
 *     extension="sketch",
 *     extensionType="theme"
 * )
 */
class CreateCommand extends Command {

  use SketchCommandTrait;

  const MACHINE_NAME = '/^(?!(%s)$)(?=[A-Za-z0-9_]+$).*$/';

  /**
   * Drupal\Core\Extension\ThemeHandler definition.
   *
   * @var \Drupal\Core\Extension\ThemeHandler
   */
  protected $themeHandler;

  /**
   * Drupal\Core\File\FileSystemInterface definition.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

  private $machine_name = FALSE;
  private $tmpFolder = FALSE;

  /**
   * Constructs a new CreateCommand object.
   */
  public function __construct(ThemeHandler $theme_handler, FileSystemInterface $file_system) {
    $this->themeHandler = $theme_handler;
    $this->fileSystem = $file_system;
    parent::__construct();
  }

  /**
   * {@inheritdoc}
   */
  protected function configure() {
    $this
      ->setName('sketch:create')
      ->setDescription($this->trans('commands.sketch.create.description'));
  }

  public function getBasePath() {
    return DRUPAL_ROOT . '/' . $this->themeHandler->getTheme('sketch')->getPath();
  }

  public function getStarterPath() {
    return $this->getBasePath() . '/STARTER';
  }

  /**
   * {@inheritdoc}
   */
  protected function execute(InputInterface $input, OutputInterface $output) {
    $io = new DrupalStyle($input, $output);
    $this->tmpFolder = $this->getTmpFolder();
    $helper = $this->getHelper('question');
    $question = new Question('<info>' . $this->trans('commands.sketch.create.messages.question_name') . '</>', 'sub_sketch');
    $name = $helper->ask($input, $output, $question);

    $tmp_machine_name = 'sub_sketch';

    $question = new Question('<info>' . $this->trans('commands.sketch.create.messages.question_machine_name', ['machine_name' => $tmp_machine_name]) . '</>', $tmp_machine_name);
    while (!$this->machine_name) {
      $machine_name = $helper->ask($input, $output, $question);
      if (preg_match(self::MACHINE_NAME, $machine_name)) {
        $this->machine_name = $machine_name;
        continue;
      }
      $io->error('<error>' . $this->trans('commands.sketch.create.messages.machine_name_error') . '</error>');
    }

    $source = $this->getStarterPath();
    $this->prepare($source, $this->tmpFolder, $this->machine_name);
    $this->copyDir($this->tmpFolder, DRUPAL_ROOT . '/themes/custom/' . $machine_name);
    $io->info($this->trans('commands.sketch.create.messages.success'));
  }

 /**
  * {@inheritdoc}
  */
 protected function interact(InputInterface $input, OutputInterface $output) {
   $io = new DrupalStyle($input, $output);

 }

}
