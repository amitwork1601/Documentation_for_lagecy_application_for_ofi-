# PaymentStates.php

**Path**: `src\StateMachine\PaymentStates.php`

## Summary
This interface extends Sylius's PaymentInterface to define an additional custom payment state constant for the application's payment state machine. It adds the `STATE_UPCOMING_PAYMENT` state to complement Sylius's standard payment states (like 'new', 'completed', 'failed'), enabling the application to track payments that are scheduled but not yet due for processing.

