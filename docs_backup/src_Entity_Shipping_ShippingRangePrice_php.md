# ShippingRangePrice.php

**Path**: `src\Entity\Shipping\ShippingRangePrice.php`

## Summary
The `ShippingRangePrice` entity represents a pricing rule for shipping methods based on weight/quantity ranges and currencies. It defines the relationship between a shipping method and its price tiers, where each range (min to max) can have different prices per currency, enabling flexible shipping cost calculations based on order characteristics. This is part of a Sylius-based e-commerce system's shipping management, exposed via GraphQL API for querying shipping rate configurations.

## Classes
- `ShippingRangePrice`

## Function Details

### `__construct`


### `getId`


### `getShippingMethod`


### `setShippingMethod`

- **Parameters**: `?ShippingMethod $shippingMethod`

### `getCurrency`


### `setCurrency`

- **Parameters**: `?CurrencyInterface $currency`

### `getRangeMin`


### `setRangeMin`

- **Parameters**: `?string $rangeMin`

### `getRangeMax`


### `setRangeMax`

- **Parameters**: `?string $rangeMax`

### `addPrice`

- **Parameters**: `ShippingRangePriceItem $rangePriceItem`

### `removePrice`

- **Parameters**: `ShippingRangePriceItem $rangePriceItem`

### `hasPrice`

- **Parameters**: `ShippingRangePriceItem $rangePriceItem`

### `getPrices`


### `getValidFrom`


### `setValidFrom`

- **Parameters**: `?\DateTime $validFrom`

### `getValidUntil`


### `setValidUntil`

- **Parameters**: `?\DateTime $validUntil`

