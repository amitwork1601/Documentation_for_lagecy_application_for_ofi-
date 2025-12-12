# TotalSubscriptionPriceNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\OrderItem\TotalSubscriptionPriceNormalizer.php`

## Summary
This normalizer calculates and adds subscription-specific pricing information to OrderItem serialization output. It computes the total subscription price for order items by using a product variant price calculator and channel context, specifically activating when certain serialization groups (cart, order views, admin/shop contexts) are present. The class extends Symfony's serialization system to inject subscription pricing data into API responses for order items across various e-commerce contexts (shopping cart, order management, customer account).

## Classes
- `TotalSubscriptionPriceNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

