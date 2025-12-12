# ProductVariantRepository.php

**Path**: `src\Repository\ProductVariantRepository.php`

## Summary
The `ProductVariantRepository` extends Sylius's base product variant repository to provide custom search functionality for product variants within specific sales channels. It implements two methods: one for searching variants by a text phrase (returning concatenated product information including logistic codes, product names, and variant codes), and another for finding variants by specific codes, both filtered by channel code and locale for multi-channel, multi-language e-commerce support.

## Classes
- `ProductVariantRepository`

## Function Details

### `findByPhraseAndChannelCode`

- **Parameters**: `string $phrase, string $channelCode, string $locale`

### `findByCodeAndChannelCode`

- **Parameters**: `array $codes, string $channelCode, string $locale`

### `findAllIndexByCode`


### `findAllIndexById`


### `findAllSubscribableIds`


### `findAllByChannelPricingCode`

- **Parameters**: `Channel $channel`

### `findAllByChannelFromUpdate`

- **Parameters**: `Channel $channel, ?\DateTime $from = null`

