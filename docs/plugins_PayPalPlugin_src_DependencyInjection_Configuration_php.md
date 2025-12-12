# Configuration.php

**Path**: `plugins\PayPalPlugin\src\DependencyInjection\Configuration.php`

## Summary
This class defines the configuration schema for the Sylius PayPal Plugin using Symfony's dependency injection component. It specifies three main configuration options: a `sandbox` mode flag (defaulting to true for testing), a `logging` section with an `increased` verbosity option, and a `webhooks` array for registering PayPal webhook routes and their associated event types that the application should handle.

## Classes
- `Configuration`

## Function Details

### `getConfigTreeBuilder`


