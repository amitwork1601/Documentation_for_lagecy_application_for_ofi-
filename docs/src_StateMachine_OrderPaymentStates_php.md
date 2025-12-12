# OrderPaymentStates.php

**Path**: `src\StateMachine\OrderPaymentStates.php`

## Summary
This interface extends Sylius's base order payment states to add two custom payment states for an e-commerce order workflow: `awaiting_delivery` and `upcoming_payment`. It allows the application to track additional payment-related states beyond Sylius's standard payment lifecycle, likely to support business logic where payment timing is tied to delivery status or scheduled for a future date.

