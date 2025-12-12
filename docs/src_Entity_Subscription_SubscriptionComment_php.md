# SubscriptionComment.php

**Path**: `src\Entity\Subscription\SubscriptionComment.php`

## Summary
The `SubscriptionComment` entity represents administrative comments or notes attached to subscription records in the system. It provides a timestamped commenting system where admin users can add text messages to subscriptions, supporting GraphQL queries with filtering by subscription ID and ordering by creation/update dates. This entity serves as an audit trail and internal communication tool for tracking subscription-related administrative activities.

## Classes
- `SubscriptionComment`

## Function Details

### `getId`


### `getMessage`


### `setMessage`

- **Parameters**: `?string $message`

### `getSubscription`


### `setSubscription`

- **Parameters**: `Subscription $subscription`

### `getAuthor`


### `setAuthor`

- **Parameters**: `?AdminUser $author`

### `__toString`


