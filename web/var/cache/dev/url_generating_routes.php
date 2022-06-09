<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    'app_dbapi_get_db' => [['id'], ['_controller' => 'App\\Controller\\DbApi_Controller::get_db'], ['id' => '\\d+'], [['variable', '', '\\d+', 'id', true], ['text', '/api']], [], [], []],
    'api_main2get_all_products' => [[], ['_controller' => 'App\\Controller\\Product2Controller::getAllProducts'], [], [['text', '/api2/products2/all2']], [], [], []],
    'api_mainget_all_products' => [[], ['_controller' => 'App\\Controller\\ProductController::getAllProducts'], [], [['text', '/api/products/all']], [], [], []],
    'api_mainfind_a_product' => [['id'], ['_controller' => 'App\\Controller\\ProductController::findProduct'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/products/find']], [], [], []],
    'api_mainget_all_recipes' => [[], ['_controller' => 'App\\Controller\\ReceipeController::getAllRecipe'], [], [['text', '/api/recipes/all']], [], [], []],
    'api_mainadd_new_recipe' => [[], ['_controller' => 'App\\Controller\\ReceipeController::addRecipe'], [], [['text', '/api/recipes/add']], [], [], []],
    'api_mainfind_a_recipe' => [['id'], ['_controller' => 'App\\Controller\\ReceipeController::findRecipe'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/recipes/find']], [], [], []],
    'api_mainedit_a_recipe' => [['id'], ['_controller' => 'App\\Controller\\ReceipeController::editRecipe'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/recipes/edit']], [], [], []],
    'api_mainremove_a_recipe' => [['id'], ['_controller' => 'App\\Controller\\ReceipeController::removeRecipe'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/recipes/remove']], [], [], []],
    'app_login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/loginv']], [], [], []],
    'app_logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logoutv']], [], [], []],
    'app_home' => [['reactRouting'], ['reactRouting' => null, '_controller' => 'App\\Controller\\SpaController::index'], ['reactRouting' => '(?!api).+'], [['variable', '/', '(?!api).+', 'reactRouting', true]], [], [], []],
];
