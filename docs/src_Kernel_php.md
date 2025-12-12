# Kernel.php

**Path**: `src\Kernel.php`

## Summary
The `Kernel` class serves as the main application kernel for a Sylius e-commerce application, extending Symfony's base kernel to bootstrap and configure the application. It registers multiple custom dependency injection compiler passes specific to Sylius functionality (cart rules, payment gateways, shipping methods, promotion actions/rules) and configures Doctrine ORM with a custom SQL walker for ordering by identifiers. The class also handles standard Symfony kernel responsibilities like bundle registration, cache/log directory configuration, and service/route loading based on the application environment.

## Classes
- `Kernel`

## Function Details

### `boot`


### `getCacheDir`


### `getLogDir`


### `registerBundles`


### `configureContainer`

- **Parameters**: `ContainerBuilder $container, LoaderInterface $loader`

### `getContainerBaseClass`


### `isTestEnvironment`


### `build`

- **Parameters**: `ContainerBuilder $container`

### `setDefaultOutputWalker`

- **Parameters**: `string $outputWalkerClass`

