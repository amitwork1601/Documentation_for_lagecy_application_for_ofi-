# GatewayConfigFixture.php

**Path**: `src\Fixture\GatewayConfigFixture.php`

## Summary
This fixture class is responsible for loading and configuring payment gateway configurations in a Sylius-based e-commerce application. It sets up multiple payment and shipping gateways including Payzen (Société Générale payment processor), Checkout.com, and Mondial Relay logistics services by retrieving existing gateway entities and populating them with API credentials, endpoints, and configuration parameters for both test and production environments.

## Classes
- `GatewayConfigFixture`

## Function Details

### `__construct`

- **Parameters**: `private readonly EntityManagerInterface $entityManager`

### `load`

- **Parameters**: `array $options`

### `addConfigPayzen`


### `addConfigCheckoutCom`


### `addConfigMondialRelay`


### `addConfigGlsByMondialRelay`


### `getName`


