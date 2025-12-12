# GatewayConfig.php

**Path**: `src\Entity\Payment\GatewayConfig.php`

## Summary
This entity class represents payment gateway configurations in a Sylius-based e-commerce application. It extends the base Sylius `GatewayConfig` model and exposes it as an API Platform GraphQL resource with query capabilities, allowing retrieval of payment gateway settings (like PayPal, Stripe configurations) with filtering and ordering support. The class stores gateway configuration data in the `sylius_gateway_config` database table but doesn't define any custom operations or properties beyond the inherited base functionality.

## Classes
- `GatewayConfig`

