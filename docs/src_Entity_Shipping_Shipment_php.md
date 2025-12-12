# Shipment.php

**Path**: `src\Entity\Shipping\Shipment.php`

## Summary
The `Shipment` entity extends Sylius's base shipment model to add custom shipping functionality for an e-commerce platform. It introduces two additional properties: `availableInShipup` (for integration with the Shipup tracking service) and `freeShippingThreshold` (for managing free shipping rules). The class provides methods to generate tracking URLs by combining the shipping method's URL template with the tracking ID, and implements cloning functionality to properly duplicate shipment adjustments while maintaining entity relationships.

## Classes
- `Shipment`

## Function Details

### `getTrackingUrl`


### `isAvailableInShipup`


### `getAvailableInShipup`


### `setAvailableInShipup`

- **Parameters**: `?bool $availableInShipup`

### `getFreeShippingThreshold`


### `setFreeShippingThreshold`

- **Parameters**: `?int $freeShippingThreshold`

### `__clone`


