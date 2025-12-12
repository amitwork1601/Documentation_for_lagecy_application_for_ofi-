# PriceNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\ProductVariant\PriceNormalizer.php`

## Summary
The `PriceNormalizer` class is a Symfony serializer normalizer that enriches ProductVariant API responses with calculated pricing information (prices, original prices, and tax rates) based on the current channel context. It activates only for specific serialization groups (product views, cart, orders) and uses Sylius pricing calculators and tax resolvers to compute channel-specific prices before delegating to the next normalizer in the chain. This ensures product variant prices are properly calculated and formatted for different API contexts (shop/admin, products/carts/orders) without requiring manual price calculations in controllers.

## Classes
- `PriceNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, $format = null, array $context = []`

### `getPriceWithoutTax`

- **Parameters**: `ProductVariantInterface $variant, int $variantPrice`

### `supportsNormalization`

- **Parameters**: `$data, $format = null, $context = []`

