# CancelTalonOneSession.php

**Path**: `src\TalonOne\StateMachine\Order\CancelTalonOneSession.php`

## Summary
This state machine callback handles the cancellation of a TalonOne promotional/loyalty session when an order is cancelled or voided. It executes the session cancellation through TalonOne's integration (if the feature flag is enabled), and then dispatches a command to update the customer's business reporting data to reflect the order state change.

## Classes
- `CancelTalonOneSession`

## Function Details

### `apply`

- **Parameters**: `Order $order`

