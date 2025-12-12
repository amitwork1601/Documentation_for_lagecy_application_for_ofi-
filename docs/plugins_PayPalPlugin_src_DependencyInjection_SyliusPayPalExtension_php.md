# SyliusPayPalExtension.php

**Path**: `plugins\PayPalPlugin\src\DependencyInjection\SyliusPayPalExtension.php`

## Summary
This is a Symfony Dependency Injection extension class for the Sylius PayPal Plugin that configures PayPal integration services. It loads service definitions from XML, sets up environment-specific parameters (sandbox vs. production) for PayPal API endpoints, facilitator URLs, and SFTP hosts, and configures webhook and logging settings. The class acts as the entry point for registering and configuring all PayPal-related services within the Sylius e-commerce framework's dependency injection container.

## Classes
- `SyliusPayPalExtension`

## Function Details

### `load`

- **Parameters**: `array $config, ContainerBuilder $container`

### `getConfiguration`

- **Parameters**: `array $config, ContainerBuilder $container`

### `prepend`

- **Parameters**: `ContainerBuilder $container`

