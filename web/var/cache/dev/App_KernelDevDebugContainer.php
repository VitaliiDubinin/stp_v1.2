<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerOYr0Wxp\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerOYr0Wxp/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerOYr0Wxp.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerOYr0Wxp\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerOYr0Wxp\App_KernelDevDebugContainer([
    'container.build_hash' => 'OYr0Wxp',
    'container.build_id' => '5598aa5c',
    'container.build_time' => 1653911112,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerOYr0Wxp');
