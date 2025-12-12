# UpdateDraftOrderStateCommandHandler.php

**Path**: `src\CQRS\CommandHandler\Order\UpdateDraftOrderStateCommandHandler.php`

## Summary
This command handler manages the state transitions of draft subscription orders in an e-commerce system. It validates that a draft order has all required elements (pickup point, shipping method, available items, valid payment) before transitioning it from draft state to processing state using a state machine pattern. The handler performs comprehensive checks including subscription validity, shipping method availability at the pickup point, item availability, and payment status before allowing the order to proceed.

## Classes
- `UpdateDraftOrderStateCommandHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateDraftOrderStateCommand $command`

