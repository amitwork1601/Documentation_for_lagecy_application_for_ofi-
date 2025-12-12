# OrderCheckoutTransitionApplicator.php

**Path**: `src\Applicator\OrderCheckoutTransitionApplicator.php`

## Summary
This class serves as a wrapper around Sylius's state machine to manage order checkout workflow transitions. It provides a safe way to apply state transitions to orders by first checking if the transition is valid before executing it, specifically working with the `OrderCheckoutTransitions::GRAPH` state machine graph. The applicator acts as a domain-specific facade that simplifies order checkout state management by encapsulating validation and transition logic in a single, reusable component.

## Classes
- `OrderCheckoutTransitionApplicator`

## Function Details

### `__construct`

- **Parameters**: `private StateMachineInterface $stateMachine`

### `apply`

- **Parameters**: `OrderInterface $order, string $transition`

### `can`

- **Parameters**: `OrderInterface $order, string $transition`

