# ShippingService.php

**Path**: `src\Service\ShippingService.php`

## Summary
The `ShippingService` class manages shipping cost calculation and method selection for e-commerce orders. It determines applicable shipping methods based on shipping zones, delivery addresses, order dates, and validates shipping costs against configurable price range rules (with time-based validity periods). The service enriches shipment data and applies business logic to match orders with appropriate shipping options and their corresponding pricing structures.

## Classes
- `ShippingService`

## Function Details

### `getApplicableRules`

- **Parameters**: `array $rangePrices, \DateTimeInterface $orderDate = new \DateTimeImmutable(`

### `getAmountFreeShipping`

- **Parameters**: `Order $order`

### `getAmountUntilFreeShipping`

- **Parameters**: `Order $order`

### `checkIfIsAvailableInShipmentEnricher`

- **Parameters**: `Shipment $shipment`

### `getShipmentTrackingUrl`

- **Parameters**: `Shipment $shipment`

### `getAmountAndShippingZone`

- **Parameters**: `Order $order`

