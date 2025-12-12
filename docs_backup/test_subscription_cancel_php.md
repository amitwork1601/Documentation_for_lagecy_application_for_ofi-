# test_subscription_cancel.php

**Path**: `test_subscription_cancel.php`

## Summary
This test file validates the `CancelSubscriptionHandler` command handler, which manages the cancellation of subscription entities in a subscription management system. The tests verify that active subscriptions can be properly canceled with a stop reason and timestamp, and that the handler correctly applies state transitions through the `SubscriptionTransitionApplicator`. The code ensures business rules are enforced when processing subscription cancellation commands, including handling edge cases like already-stopped subscriptions.

## Classes
- `CancelSubscriptionHandlerTest`

## Function Details

### `testCancelActiveSubscription`


### `testCancelAlreadyStoppedSubscription`


### `testSubscriptionNotFound`


