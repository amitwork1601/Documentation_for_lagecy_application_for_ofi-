# CollectionProvider.php

**Path**: `src\Api\StateProvider\Common\Order\Shipment\ShippingMethod\CollectionProvider.php`

## Summary
This class is an API Platform state provider that retrieves available shipping methods for a specific shipment in an order/cart. It decorates Sylius's default shipping method collection provider to fetch supported shipping methods based on the order token, shipment ID, and channel context, filtering the results appropriately for shop API requests. The provider transforms the shipping method data into a format suitable for API responses by extracting the underlying ShippingMethod objects from CartShippingMethod view models.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

### `isShopApiSection`


