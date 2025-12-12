# UpSellVariant.php

**Path**: `src\Entity\UpSelling\UpSellVariant.php`

## Summary
The `UpSellVariant` entity represents a specific product variant that can be offered as an upsell/cross-sell suggestion to customers, with configurable discount amounts (either fixed or percentage-based) and time-based availability windows. It links a `ProductVariant` to an `UpSell` campaign, storing pricing adjustments, display position, and validity dates to enable merchandising strategies that promote additional products during the shopping experience.

## Classes
- `UpSellVariant`

## Function Details

### `getId`


### `getStartDate`


### `setStartDate`

- **Parameters**: `?\DateTime $startDate`

### `getEndDate`


### `setEndDate`

- **Parameters**: `?\DateTime $endDate`

### `getAmount`


### `setAmount`

- **Parameters**: `?int $amount`

### `isPercent`


### `setPercent`

- **Parameters**: `bool $percent`

### `getVariant`


### `setVariant`

- **Parameters**: `?ProductVariant $variant`

### `getVariantName`


### `setVariantName`

- **Parameters**: `?string $variantName`

### `getVariantCode`


### `setVariantCode`

- **Parameters**: `?string $variantCode`

### `getVariantPrice`


### `setVariantPrice`

- **Parameters**: `?int $variantPrice`

### `getReductionType`


### `getVariantDiscountedPrice`


### `setVariantDiscountedPrice`

- **Parameters**: `?int $variantDiscountedPrice`

### `getProductName`


### `setProductName`

- **Parameters**: `?string $productName`

### `getUpSell`


### `setUpSell`

- **Parameters**: `?UpSell $upSell`

### `getPosition`


### `setPosition`

- **Parameters**: `?int $position`

### `isActive`


### `isValid`

- **Parameters**: `?ChannelInterface $channel = null`

