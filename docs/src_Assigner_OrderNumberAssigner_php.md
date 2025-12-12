# OrderNumberAssigner.php

**Path**: `src\Assigner\OrderNumberAssigner.php`

## Summary
This class implements Sylius's order number assignment functionality by generating and assigning unique order numbers with a configurable prefix. It checks if an order already has a number assigned, and if not, it generates a new one by combining the configured prefix with a generated number from the injected number generator. This ensures orders have consistent, prefixed identification numbers (e.g., "ORD-00001") for tracking and reference purposes in the e-commerce system.

## Classes
- `OrderNumberAssigner`

## Function Details

### `assignNumber`

- **Parameters**: `OrderInterface $order`

