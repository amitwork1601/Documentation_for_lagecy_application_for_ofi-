# SubscriptionOrderState.php

**Path**: `src\Enum\Subscription\SubscriptionOrderState.php`

## Summary
This PHP enum defines the various states of a subscription order throughout its lifecycle, from initial draft through completion or cancellation. It tracks both normal progression states (draft, processing, processed, cancelled) and various error conditions (payment failures, unavailable products/pickup points, invalid shipments/promotions). The enum provides helper methods to categorize states as active vs. inactive, identify error conditions, and determine if an order can be processed, enabling state-based business logic for subscription order management.

## Function Details

### `isActive`


### `isOnError`


### `hasBeenProcessed`


### `isNotAvailableForProcessing`


