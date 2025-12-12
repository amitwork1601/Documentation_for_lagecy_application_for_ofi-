# PaymentTransitionApplicator.php

**Path**: `src\Applicator\PaymentTransitionApplicator.php`

## Summary
The `PaymentTransitionApplicator` class is a specialized wrapper around Sylius's state machine that manages payment state transitions in an e-commerce context. It provides a simplified interface to apply payment lifecycle transitions (such as complete, refund, cancel) by delegating to the underlying state machine while ensuring transitions are valid before execution. This applicator acts as a domain-specific facade that encapsulates the payment workflow graph logic defined by Sylius's `PaymentTransitions` constants.

## Classes
- `PaymentTransitionApplicator`

## Function Details

### `__construct`

- **Parameters**: `private StateMachineInterface $stateMachine`

### `apply`

- **Parameters**: `PaymentInterface $payment, string $transition`

### `can`

- **Parameters**: `PaymentInterface $payment, string $transition`

