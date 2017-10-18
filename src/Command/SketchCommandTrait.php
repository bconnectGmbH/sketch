<?php

namespace Drupal\sketch\Command;

use Symfony\Component\Finder\Finder;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Drupal\Component\Serialization\Json;

trait SketchCommandTrait {

    public function getAllFiles($directory) {
        $finder = new Finder();
        return $finder->files()->in($directory);
    }

    public function copyDir($source, $target) {
        $directoryIterator = new \RecursiveDirectoryIterator($source);
        $iterator = new \RecursiveIteratorIterator($directoryIterator, \RecursiveIteratorIterator::SELF_FIRST);
        $fileSystem = new Filesystem();

        foreach ($iterator as $item) {
            if ($item->isDir()) {
                $fileSystem->mkdir($target . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
                continue;
            }
            $fileSystem->copy($item, $target . DIRECTORY_SEPARATOR . $iterator->getSubPathName(), TRUE);
        }
    }

    public function writePackageJson($file, $machine_name, $libs) {
        $contents = file_get_contents($file);
        $content = Json::decode($contents);
        $contents['name'] = $machine_name;
        foreach ($libs as $lib) {
            list($package, $version) = $lib;
            $content['dependencies'][$package] =  $version;
        }
        file_put_contents($file, json_encode($content, JSON_PRETTY_PRINT));
    }

    public function getAllSubThemes() {
        $themes = \Drupal::service('theme_handler')->listInfo();
        return array_filter($themes, function($v, $k) {
            return in_array('sketch', array_keys($v->base_themes));
        }, ARRAY_FILTER_USE_BOTH);
    }

    public function renameYmlFiles($directory) {
        $finder = new Finder();
        $finder->name('/\.yml\.txt/');
        foreach ($finder->files()->in($directory) as $file) {
          $fileName = $file->getPath() . '/' . str_replace('.txt', '', $file->getFileName());
          rename($file->getRealPath(), $fileName);
        }
    }

    public function renameStarterFiles($directory, $needle) {
        $finder = new Finder();
        $finder->name('/STARTER/');
        $fileSystem = new Filesystem();

        foreach ($finder->files()->in($directory) as $file) {
          $fileName = $file->getPath() . '/' . str_replace('STARTER', $needle, $file->getFileName());
          $fileSystem->rename($file->getRealPath(), $fileName);
        }
    }

    public function prepare($source, $target, $machine_name) {
        $this->copyDir($source, $target);
        $this->renameYmlFiles($target);
        $this->renameStarterFiles($target, $machine_name);
        $this->replace($target, $machine_name);
        $this->writePackageJson($target . '/package.json', $machine_name, [[
            'bootstrap',
            '^4.0'
        ]]);
    }

    protected function getTmpFolder() {
        return implode('/',[
          sys_get_temp_dir(),
          uniqid()
        ]);
      }

    public function replace($directory, $needle) {
        foreach ($this->getAllFiles($directory) as $file) {
            $content = file_get_contents($file->getRealPath());
            $content = preg_replace('(\[\[STARTER\]\])', $needle, $content);
            file_put_contents($file->getRealPath(), $content);
        }
    }
}