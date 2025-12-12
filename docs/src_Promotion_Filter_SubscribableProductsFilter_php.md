# SubscribableProductsFilter.php

**Path**: `src\Promotion\Filter\SubscribableProductsFilter.php`

## Summary
This class filters order items to identify subscribable products for promotional purposes. It implements Sylius's promotion filter interface and returns only order items that have a subscription interval set, based on the configuration specifying that subscribable products should be targeted. This enables promotions to be applied selectively to subscription-based products versus one-time purchases.

## Classes
- `SubscribableProductsFilter`

## Function Details

### `filter`

- **Parameters**: `array $items, array $configuration`
- **Description**: @param array|OrderItem[] $items

@return array|OrderItem[]
/

