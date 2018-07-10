<?php

$filter = new Twig_SimpleFilter('md5', function ($string) {
  return md5($string);
});
