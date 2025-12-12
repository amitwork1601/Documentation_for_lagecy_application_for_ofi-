# PriceChange.php

**Path**: `src\Entity\Product\PriceChange.php`

## Summary
The `PriceChange` entity manages scheduled price modifications for products in a Sylius e-commerce system. It stores configuration for price changes that can be applied to specific product variants, with support for channel-specific pricing, effective dates, and enable/disable functionality. The class provides methods to retrieve price change configurations indexed by logistic codes and filter changes applicable to specific product variants.

## Classes
- `PriceChange`

## Function Details

### `getId`


### `getLabel`


### `setLabel`

- **Parameters**: `?string $label`

### `getConfig`


### `setConfig`

- **Parameters**: `array $config`

### `getChangesIndexByLogisticCode`


### `getChangesApplicableToVariantIds`

- **Parameters**: `array $variants`

### `getEffectiveAt`


### `setEffectiveAt`

- **Parameters**: `\DateTime $effectiveAt`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `getChannel`


### `setChannel`

- **Parameters**: `?ChannelInterface $channel`

