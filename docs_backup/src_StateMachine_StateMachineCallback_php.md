# StateMachineCallback.php

**Path**: `src\StateMachine\StateMachineCallback.php`

## Summary
This file defines a marker interface `StateMachineCallback` in the state machine module, used to identify or tag classes that implement callback functionality for state machine operations. The empty interface serves as a type constraint, allowing the state machine to accept any callback implementation while maintaining type safety. This pattern enables developers to create various callback handlers (e.g., for state transitions, validations, or side effects) that can be processed uniformly by the state machine system.

