# SubscriptionStopReason.php

**Path**: `src\Entity\Subscription\SubscriptionStopReason.php`

## Summary
This entity represents reasons why a subscription was stopped or cancelled, implementing a translatable resource pattern to support multiple languages. It serves as a reference data entity that can be queried via GraphQL API and uses Sylius resource components to manage translations through a separate `SubscriptionStopReasonTranslation` entity. The entity includes soft deletion capability and priority ordering for displaying cancellation reasons to users in the subscription management workflow.

## Classes
- `SubscriptionStopReason`

## Function Details

### `__construct`


### `getId`


### `createTranslation`


### `getName`


### `setName`

- **Parameters**: `?string $name`

### `isDeleted`


### `setDeleted`

- **Parameters**: `?bool $deleted`

### `getPriority`


### `setPriority`

- **Parameters**: `?int $priority`

