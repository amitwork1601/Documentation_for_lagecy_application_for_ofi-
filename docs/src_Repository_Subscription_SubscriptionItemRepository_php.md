# SubscriptionItemRepository.php

**Path**: `src\Repository\Subscription\SubscriptionItemRepository.php`

## Summary
This repository manages `SubscriptionItem` entities and provides functionality to bulk update product variants across active subscription items. The main `replaceVariant()` method allows replacing a source product variant with a target variant for all subscription items that belong to active, paused, or errored subscriptions, which is useful for product catalog management when variants are deprecated or need to be substituted in ongoing subscriptions.

## Classes
- `SubscriptionItemRepository`

## Function Details

### `replaceVariant`

- **Parameters**: `ProductVariant $sourceVariant, ProductVariant $targetVariant`

