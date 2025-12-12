# NonSubscribableProductsFilter.php

**Path**: `src\Promotion\Filter\NonSubscribableProductsFilter.php`

## Summary
This filter class implements Sylius promotion filtering logic to identify and return only non-subscribable order items from a collection. It checks configuration settings and filters out items that have a subscription interval set, allowing promotions to be applied exclusively to one-time purchase products rather than subscription-based items.

## Classes
- `NonSubscribableProductsFilter`

## Function Details

### `filter`

- **Parameters**: `array $items, array $configuration`
- **Description**: @param array|OrderItem[] $items

@return array|OrderItem[]
/

