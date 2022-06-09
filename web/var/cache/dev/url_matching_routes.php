<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/products/all' => [[['_route' => 'api_mainget_all_products', '_controller' => 'App\\Controller\\ProductController::getAllProducts'], null, ['GET' => 0], null, false, false, null]],
        '/loginv' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
        '/logoutv' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api/products/find/([^/]++)(*:69)'
                .'|/((?!api).+)?(*:89)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        69 => [[['_route' => 'api_mainfind_a_product', '_controller' => 'App\\Controller\\ProductController::findProduct'], ['id'], ['GET' => 0], null, false, true, null]],
        89 => [
            [['_route' => 'app_home', 'reactRouting' => null, '_controller' => 'App\\Controller\\SpaController::index'], ['reactRouting'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
