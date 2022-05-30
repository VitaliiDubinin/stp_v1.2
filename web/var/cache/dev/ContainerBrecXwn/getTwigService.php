<?php

namespace ContainerBrecXwn;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getTwigService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'twig' shared service.
     *
     * @return \Twig\Environment
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Cache/CacheInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Cache/FilesystemCache.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/ExtensionInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/AbstractExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/CoreExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/EscaperExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/OptimizerExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/StagingExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/ExtensionSet.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Template.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/TemplateWrapper.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Environment.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Loader/LoaderInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Loader/FilesystemLoader.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/ProfilerExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/ProfilerExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Profiler/Profile.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/TranslationExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/AssetExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/CodeExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/RoutingExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/YamlExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/StopwatchExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/HttpKernelExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/Extension/HttpFoundationExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/http-foundation/UrlHelper.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Twig/DoctrineExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/webpack-encore-bundle/src/Twig/EntryFilesTwigExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/webpack-encore-bundle/src/Twig/StimulusTwigExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/Extension/DebugExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bridge/AppVariable.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/RuntimeLoader/RuntimeLoaderInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/twig/src/RuntimeLoader/ContainerRuntimeLoader.php';
        include_once \dirname(__DIR__, 4).'/vendor/twig/extra-bundle/MissingExtensionSuggestor.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/twig-bundle/DependencyInjection/Configurator/EnvironmentConfigurator.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/http-kernel/Debug/FileLinkFormatter.php';

        $a = new \Twig\Loader\FilesystemLoader([], \dirname(__DIR__, 4));
        $a->addPath((\dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Resources/views'), 'Doctrine');
        $a->addPath((\dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Resources/views'), '!Doctrine');
        $a->addPath((\dirname(__DIR__, 4).'/vendor/doctrine/doctrine-migrations-bundle/Resources/views'), 'DoctrineMigrations');
        $a->addPath((\dirname(__DIR__, 4).'/vendor/doctrine/doctrine-migrations-bundle/Resources/views'), '!DoctrineMigrations');
        $a->addPath((\dirname(__DIR__, 4).'/templates'));

        $container->privates['twig'] = $instance = new \Twig\Environment($a, ['autoescape' => 'name', 'cache' => ($container->targetDir.''.'/twig'), 'charset' => 'UTF-8', 'debug' => true, 'strict_variables' => true]);

        $b = ($container->privates['debug.stopwatch'] ?? ($container->privates['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true)));
        $c = ($container->services['request_stack'] ?? ($container->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack()));
        $d = new \Symfony\Bridge\Twig\AppVariable();
        $d->setEnvironment('dev');
        $d->setDebug(true);
        if ($container->has('request_stack')) {
            $d->setRequestStack($c);
        }
        $e = new \Twig\Extra\TwigExtraBundle\MissingExtensionSuggestor();

        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\ProfilerExtension(new \Twig\Profiler\Profile(), $b));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\TranslationExtension(NULL));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\AssetExtension(($container->privates['assets.packages'] ?? $container->load('getAssets_PackagesService'))));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\CodeExtension(($container->privates['debug.file_link_formatter'] ?? ($container->privates['debug.file_link_formatter'] = new \Symfony\Component\HttpKernel\Debug\FileLinkFormatter(NULL))), \dirname(__DIR__, 4), 'UTF-8'));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\RoutingExtension(($container->services['router'] ?? $container->getRouterService())));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\YamlExtension());
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\StopwatchExtension($b, true));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\HttpKernelExtension());
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\HttpFoundationExtension(new \Symfony\Component\HttpFoundation\UrlHelper($c, ($container->privates['router.request_context'] ?? $container->getRouter_RequestContextService()))));
        $instance->addExtension(new \Doctrine\Bundle\DoctrineBundle\Twig\DoctrineExtension());
        $instance->addExtension(new \Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension(new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'webpack_encore.entrypoint_lookup_collection' => ['privates', 'webpack_encore.entrypoint_lookup_collection', 'getWebpackEncore_EntrypointLookupCollectionService', false],
            'webpack_encore.tag_renderer' => ['privates', 'webpack_encore.tag_renderer', 'getWebpackEncore_TagRendererService', true],
        ], [
            'webpack_encore.entrypoint_lookup_collection' => '?',
            'webpack_encore.tag_renderer' => '?',
        ])));
        $instance->addExtension(new \Symfony\WebpackEncoreBundle\Twig\StimulusTwigExtension());
        $instance->addExtension(new \Twig\Extension\DebugExtension());
        $instance->addGlobal('app', $d);
        $instance->addRuntimeLoader(new \Twig\RuntimeLoader\ContainerRuntimeLoader(new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'Symfony\\Bridge\\Twig\\Extension\\HttpKernelRuntime' => ['privates', 'twig.runtime.httpkernel', 'getTwig_Runtime_HttpkernelService', true],
        ], [
            'Symfony\\Bridge\\Twig\\Extension\\HttpKernelRuntime' => '?',
        ])));
        $instance->registerUndefinedFilterCallback([0 => $e, 1 => 'suggestFilter']);
        $instance->registerUndefinedFunctionCallback([0 => $e, 1 => 'suggestFunction']);
        $instance->registerUndefinedTokenParserCallback([0 => $e, 1 => 'suggestTag']);
        (new \Symfony\Bundle\TwigBundle\DependencyInjection\Configurator\EnvironmentConfigurator('F j, Y H:i', '%d days', NULL, 0, '.', ','))->configure($instance);

        return $instance;
    }
}
