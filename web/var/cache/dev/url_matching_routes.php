<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/recipes/all' => [[['_route' => 'api_mainget_all_recipes', '_controller' => 'App\\Controller\\ReceipeController::getAllRecipe'], null, ['GET' => 0], null, false, false, null]],
        '/api/recipes/add' => [[['_route' => 'api_mainadd_new_recipe', '_controller' => 'App\\Controller\\ReceipeController::addRecipe'], null, ['POST' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api/recipes/(?'
                    .'|find/([^/]++)(*:71)'
                    .'|edit/([^/]++)(*:91)'
                    .'|remove/([^/]++)(*:113)'
                .')'
                .'|/((?!api).+)?(*:135)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        71 => [[['_route' => 'api_mainfind_a_recipe', '_controller' => 'App\\Controller\\ReceipeController::findRecipe'], ['id'], ['GET' => 0], null, false, true, null]],
        91 => [[['_route' => 'api_mainedit_a_recipe', '_controller' => 'App\\Controller\\ReceipeController::editRecipe'], ['id'], ['PUT' => 0, 'PATCH' => 1], null, false, true, null]],
        113 => [[['_route' => 'api_mainremove_a_recipe', '_controller' => 'App\\Controller\\ReceipeController::removeRecipe'], ['id'], ['DELETE' => 0], null, false, true, null]],
        135 => [
            [['_route' => 'app_home', 'reactRouting' => null, '_controller' => 'App\\Controller\\SpaController::index'], ['reactRouting'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
