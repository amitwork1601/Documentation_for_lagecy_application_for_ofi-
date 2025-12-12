# PickupPointCollectionDataProvider.php

**Path**: `src\Api\DataProvider\PickupPointCollectionDataProvider.php`

## Summary
This data provider fetches available pickup points for e-commerce orders by filtering shipping methods that support pickup point gateways. It integrates with Sylius shop functionality to retrieve eligible pickup locations based on the current cart, channel configuration, and shipping method eligibility rules, enabling customers to select alternative delivery points instead of home delivery.

## Classes
- `PickupPointCollectionDataProvider`

## Function Details

### `getCollection`

- **Parameters**: `string $resourceClass, ?string $operationName = null, array $context = []`

### `supports`

- **Parameters**: `string $resourceClass, ?string $operationName = null, array $context = []`

