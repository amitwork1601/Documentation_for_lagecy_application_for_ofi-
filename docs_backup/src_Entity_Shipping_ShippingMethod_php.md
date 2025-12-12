# ShippingMethod.php

**Path**: `src\Entity\Shipping\ShippingMethod.php`

## Summary
This entity class extends Sylius's base ShippingMethod to represent shipping methods in an e-commerce system with additional features for price range calculations and pickup point integrations. It adds custom functionality including range-based pricing (via ShippingRangePrice relationships), URL tracking, visibility controls (exposed flag), and integration with gateway configurations and pickup points. The class is exposed as a GraphQL API resource with filtering capabilities for zone, gateway, category, and other shipping method properties.

## Classes
- `ShippingMethod`

## Function Details

### `__construct`


### `addRangePrice`

- **Parameters**: `ShippingRangePrice $rangePrice`

### `removerangePrice`

- **Parameters**: `ShippingRangePrice $rangePrice`

### `hasRangePrice`

- **Parameters**: `ShippingRangePrice $rangePrice`

### `getRangePrices`

- **Parameters**: `?\DateTime $applicationDate = null`

### `createTranslation`


### `isMondialRelay`


### `isColissimoPickup`


### `getUrl`


### `setUrl`

- **Parameters**: `?string $url`

### `isExposed`


### `setExposed`

- **Parameters**: `bool $exposed`

### `getTitle`


### `setTitle`

- **Parameters**: `?string $title`

### `getCutoff`


### `setCutoff`

- **Parameters**: `?\DateTime $cutoff`

### `getShippingMethodCategory`


### `setShippingMethodCategory`

- **Parameters**: `?ShippingMethodCategory $shippingMethodCategory`

### `getGatewayConfig`


### `setGatewayConfig`

- **Parameters**: `?GatewayConfig $gatewayConfig`

### `getPickupPointShippingMethods`


### `isPickupPointShipment`


### `getIconUrl`


### `setIconUrl`

- **Parameters**: `?string $iconUrl`

### `getPinpointUrl`


### `setPinpointUrl`

- **Parameters**: `?string $pinpointUrl`

### `__toString`


