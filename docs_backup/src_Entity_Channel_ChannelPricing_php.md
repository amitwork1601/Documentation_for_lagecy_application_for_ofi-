# ChannelPricing.php

**Path**: `src\Entity\Channel\ChannelPricing.php`

## Summary
The `ChannelPricing` class extends Sylius's base channel pricing model to manage product variant pricing specific to different sales channels. It provides a custom constructor that allows initialization with a product variant and channel code, and ensures the `appliedPromotions` collection is properly initialized when accessed, preventing null reference errors when tracking which promotions have been applied to a particular channel's pricing.

## Classes
- `ChannelPricing`

## Function Details

### `__construct`

- **Parameters**: `?ProductVariant $productVariant = null, ?string $channelCode = null`

### `getAppliedPromotions`


