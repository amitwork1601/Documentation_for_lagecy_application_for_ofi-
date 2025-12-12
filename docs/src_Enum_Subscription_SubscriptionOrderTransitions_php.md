# SubscriptionOrderTransitions.php

**Path**: `src\Enum\Subscription\SubscriptionOrderTransitions.php`

## Summary
This PHP enum defines state machine transitions for subscription order processing within a workflow graph named 'app_subscription_order'. It enumerates various transition states including normal and high-priority processing, success states (processed), error conditions (payment failures, unavailable products/pickup points, invalid shipments/promotions), error recovery, and cancellation, enabling structured order lifecycle management through a finite state machine pattern.

