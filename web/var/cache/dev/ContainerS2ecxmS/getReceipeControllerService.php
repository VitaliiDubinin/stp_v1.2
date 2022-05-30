<?php

namespace ContainerS2ecxmS;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getReceipeControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\ReceipeController' shared autowired service.
     *
     * @return \App\Controller\ReceipeController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/ReceipeController.php';

        $container->services['App\\Controller\\ReceipeController'] = $instance = new \App\Controller\ReceipeController();

        $instance->setContainer(($container->privates['.service_locator.l1ae.Qz'] ?? $container->load('get_ServiceLocator_L1ae_QzService'))->withContext('App\\Controller\\ReceipeController', $container));

        return $instance;
    }
}
