# SubscriptionLockFactory.php

**Path**: `src\Subscription\Lock\SubscriptionLockFactory.php`

## Summary
The `SubscriptionLockFactory` class creates distributed locks for Subscription entities to prevent concurrent modifications or race conditions during subscription operations. It wraps Symfony's LockFactory to generate locks with a standardized naming convention using the subscription's code, and optionally auto-acquires the lock upon creation to ensure exclusive access to subscription resources.

## Classes
- `SubscriptionLockFactory`

## Function Details

### `create`

- **Parameters**: `Subscription $subscription, bool $autoAcquire = true`

