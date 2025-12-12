# ShippingMethodRepository.php

**Path**: `src\Repository\ShippingMethodRepository.php`

## Summary
This repository extends Sylius's core ShippingMethodRepository to provide specialized queries for retrieving shipping methods based on payment gateway configurations. It adds functionality to find enabled shipping methods filtered by gateway factory name and to locate pickup point shipping methods with optional channel and exposure filtering, automatically joining gateway configuration data in all queries for performance optimization.

## Classes
- `ShippingMethodRepository`

## Function Details

### `findEnabledByGatewayFactory`

- **Parameters**: `string $factory`

### `findPickupPointMethodEnabled`

- **Parameters**: `array $pickupGateways, bool $exposedOnly = false, ?ChannelInterface $channel = null`

### `createQueryBuilder`

- **Parameters**: `$alias, $indexBy = null`

