# OrderPromotionNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\OrderPromotionNormalizer.php`

## Summary
This normalizer transforms Order entities to include detailed promotion information when serializing for API responses. It processes order-level and item-level adjustments (discounts, promotions, coupons) and enriches them with additional data like tax rates, promotion details, and translated labels, making promotion-related information more accessible to API consumers across various serialization contexts (admin, shop, webmethod).

## Classes
- `OrderPromotionNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @param Order $object

@return array|\ArrayObject|bool|float|int|string|void|null

@throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `getTalonOneCouponPromotion`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon, array $adjustments = []`

### `getTotalPromotion`

- **Parameters**: `OrderInterface $order, bool $taxExcluded = false`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

