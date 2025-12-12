# ChannelPricingNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\ChannelPricingNormalizer.php`

## Summary
The `ChannelPricingNormalizer` class is a Symfony serializer normalizer that enriches ChannelPricing entities during API serialization by calculating and adding tax-related information and channel-specific prices. It intercepts the normalization process for ChannelPricing objects (which represent product variant prices per sales channel), computes additional pricing data including tax rates and calculated prices using injected calculator services, and appends this information to the serialized output for specific serialization groups like product variant display in the admin panel.

## Classes
- `ChannelPricingNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, $format = null, $context = []`

### `getPriceWithoutTax`

- **Parameters**: `ProductVariantInterface $variant, int $variantPrice, Channel $channel`

