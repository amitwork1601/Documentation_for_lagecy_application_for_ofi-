# SupportedShippingMethodProvider.php

**Path**: `src\Shipping\Provider\SupportedShippingMethodProvider.php`

## Summary
This class provides supported shipping methods for orders and subscriptions in an e-commerce system. It retrieves available shipping methods based on shipment details, calculates their costs using registered calculators, and transforms them into `CartShippingMethod` view objects for API consumption. The provider handles both regular orders (via token and shipment ID) and subscription-based orders, with optional filtering for exposed methods.

## Classes
- `SupportedShippingMethodProvider`

## Function Details

### `getFilteredSupportedShippingMethods`

- **Parameters**: `ShipmentInterface $shipment, bool $restrictExposed = false`

