# CollectionProvider.php

**Path**: `src\Api\StateProvider\Common\Subscription\ShippingMethod\CollectionProvider.php`

## Summary
This API state provider retrieves available shipping methods for subscription orders based on a subscription code and shipping address. It validates that an address ID is provided in the request filters, fetches supported shipping methods through the `SupportedShippingMethodProvider`, and transforms the `CartShippingMethod` objects into their underlying shipping method representations for the API response.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

### `isShopApiSection`


### `getSupportedMethods`

- **Parameters**: `string $code, ?int $addressId`

