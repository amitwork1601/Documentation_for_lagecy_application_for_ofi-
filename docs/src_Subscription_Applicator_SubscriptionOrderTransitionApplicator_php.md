# SubscriptionOrderTransitionApplicator.php

**Path**: `src\Subscription\Applicator\SubscriptionOrderTransitionApplicator.php`

## Summary
This class manages state transitions for subscription orders in a subscription billing system. It provides methods to apply various state machine transitions (process, cancel, out-of-error) to subscription orders, with validation checks to ensure transitions are valid before execution. The class acts as a facade over the underlying state machine, encapsulating business logic such as preventing processing of orders when their parent subscription is stopped and supporting high-priority order processing.

## Classes
- `SubscriptionOrderTransitionApplicator`

## Function Details

### `apply`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, SubscriptionOrderTransitions $transition`

### `cancel`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `process`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, bool $highPriority = false`

### `outOfError`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `can`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, SubscriptionOrderTransitions $transition`

