# SubscriptionItem.php

**Path**: `src\Entity\Subscription\SubscriptionItem.php`

## Summary
The `SubscriptionItem` entity represents individual line items within a subscription, linking a product variant to a subscription with a specified quantity. It's an auditable Doctrine entity that tracks which products (via ProductVariant) are included in recurring subscriptions, storing quantity information and maintaining timestamps for creation and updates. The class is exposed via GraphQL API (with query operations) and includes computed pricing properties (unit price, subtotal, total) for billing calculations.

## Classes
- `SubscriptionItem`

## Function Details

### `getId`


### `getQuantity`


### `setQuantity`

- **Parameters**: `int $quantity`

### `getSubscription`


### `setSubscription`

- **Parameters**: `?Subscription $subscription`

### `getProductVariant`


### `setProductVariant`

- **Parameters**: `ProductVariant $productVariant`

### `getProduct`


### `getOriginalUnitPrice`


### `getUnitPrice`


### `getSubtotal`


### `getTotal`


### `getVariant`

- **Description**: WebMethod */

