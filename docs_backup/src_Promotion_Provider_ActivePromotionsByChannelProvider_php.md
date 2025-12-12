# ActivePromotionsByChannelProvider.php

**Path**: `src\Promotion\Provider\ActivePromotionsByChannelProvider.php`

## Summary
This class provides active promotions that are applicable to a specific sales channel in a Sylius e-commerce system. It implements the `PreQualifiedPromotionsProviderInterface` to retrieve promotions that are currently active for a given order by querying the promotion repository filtered by the order's channel context. The class ensures type safety by validating that the promotion subject is an `OrderInterface` before fetching relevant promotions.

## Classes
- `ActivePromotionsByChannelProvider`

## Function Details

### `__construct`

- **Parameters**: `PromotionRepositoryInterface $promotionRepository`

### `getPromotions`

- **Parameters**: `PromotionSubjectInterface $subject`

