# AmountUntilFreeShippingNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\AmountUntilFreeShippingNormalizer.php`

## Summary
This normalizer calculates and adds the "amount until free shipping" field to Order API responses. It integrates with the Sylius e-commerce platform to determine how much more a customer needs to spend to qualify for free shipping, and only activates for specific serialization contexts (cart display, order views, subscriptions). The normalizer uses a decorator pattern to enhance the standard order serialization with this shipping threshold information.

## Classes
- `AmountUntilFreeShippingNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

