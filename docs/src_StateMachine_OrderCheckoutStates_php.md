# OrderCheckoutStates.php

**Path**: `src\StateMachine\OrderCheckoutStates.php`

## Summary
This interface extends Sylius's base order checkout states to add a custom `STATE_DRAFT` constant to the order checkout workflow. It allows the application to support draft orders that exist before the standard checkout process begins, extending the default Sylius e-commerce checkout state machine with an additional preliminary state.

