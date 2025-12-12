# SubscriptionTransitionApplicator.php

**Path**: `src\Subscription\Applicator\SubscriptionTransitionApplicator.php`

## Summary
This class manages state transitions for subscription entities using a finite state machine pattern. It provides methods to apply valid transitions, check if transitions are allowed, and specifically handle subscription cancellation by attempting to apply a "STOP" transition. The class acts as a wrapper around Sylius' state machine abstraction to enforce subscription lifecycle rules and prevent invalid state changes.

## Classes
- `SubscriptionTransitionApplicator`

## Function Details

### `apply`

- **Parameters**: `Subscription $subscription, SubscriptionTransitions $transition`

### `cancel`

- **Parameters**: `Subscription $subscription`

### `can`

- **Parameters**: `Subscription $subscription, SubscriptionTransitions $transition`

