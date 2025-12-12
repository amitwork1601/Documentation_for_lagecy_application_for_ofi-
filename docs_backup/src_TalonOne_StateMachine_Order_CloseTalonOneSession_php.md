# CloseTalonOneSession.php

**Path**: `src\TalonOne\StateMachine\Order\CloseTalonOneSession.php`

## Summary
This class implements a state machine callback that closes a Talon One promotional/loyalty session when an order reaches a specific state. It conditionally closes the customer session with Talon One (if the feature flag is enabled), handles any errors gracefully through logging, and then triggers an update to the customer's business report via the command bus to reflect the completed order activity.

## Classes
- `CloseTalonOneSession`

## Function Details

### `apply`

- **Parameters**: `Order $order`

