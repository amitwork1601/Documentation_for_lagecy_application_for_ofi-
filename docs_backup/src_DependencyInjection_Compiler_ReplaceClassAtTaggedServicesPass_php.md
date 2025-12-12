# ReplaceClassAtTaggedServicesPass.php

**Path**: `src\DependencyInjection\Compiler\ReplaceClassAtTaggedServicesPass.php`

## Summary
This is a Symfony compiler pass that replaces the implementation classes of specific Sylius e-commerce framework services with custom application versions. It systematically overrides core Sylius services related to promotions, order processing, payment/shipment handling, and password reset functionality, allowing the application to extend or customize default Sylius behavior while maintaining the same service identifiers and dependency injection structure.

## Classes
- `ReplaceClassAtTaggedServicesPass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`

