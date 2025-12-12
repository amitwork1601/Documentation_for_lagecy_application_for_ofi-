# OrderItem.php

**Path**: `src\Entity\Order\OrderItem.php`

## Summary
The `OrderItem` entity extends Sylius e-commerce framework's base order item to add subscription-based commerce functionality. It tracks subscription intervals, distinguishes between new subscriptions and upsells, maintains tax-exclusive pricing calculations, and stores source item references for order item lineage. This entity is exposed via GraphQL API and integrates with the platform's promotion/adjustment system to support recurring subscription orders alongside standard one-time purchases.

## Classes
- `OrderItem`

## Function Details

### `__construct`


### `getSubscriptionInterval`


### `setSubscriptionInterval`

- **Parameters**: `?int $subscriptionInterval`

### `getIsNewSubscription`


### `setQuantity`

- **Parameters**: `int $quantity`

### `getVariantCode`


### `getItemSubscribable`


### `getCodeLogistic`


### `getOriginalPrice`


### `getProductId`


### `isUpSell`


### `setUpSell`

- **Parameters**: `bool $upSell`

### `getSourceItemList`


### `setSourceItemList`

- **Parameters**: `?array $sourceItemList`

### `getTotalWithoutDiscount`

- **Description**: @return mixed
/

### `isEmpty`


### `getTotalWithoutTax`


### `setTotalWithoutTax`

- **Parameters**: `int $totalWithoutTax`

### `getTotalWithoutDiscountWithoutTax`


### `setTotalWithoutDiscountWithoutTax`

- **Parameters**: `int $totalWithoutDiscountWithoutTax`

### `getTaxTotalWithoutDiscount`


### `getDiscountedUnitPrice`


### `getAdjustments`

- **Parameters**: `mixed $type = null`

### `getAdjustmentsRecursively`

- **Parameters**: `mixed $type = null`

