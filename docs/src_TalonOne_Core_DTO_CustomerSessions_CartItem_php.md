# CartItem.php

**Path**: `src\TalonOne\Core\DTO\CustomerSessions\CartItem.php`

## Summary
The `CartItem` class is a Data Transfer Object (DTO) that represents a shopping cart line item for integration with the TalonOne promotion management API. It maps order item data from the application's domain model (including product variants, quantities, and pricing) into a format suitable for TalonOne's customer session API, enabling promotional rule evaluation and discount calculations.

## Classes
- `CartItem`

## Function Details

### `create`

- **Parameters**: `OrderItem $orderItem, int $catalogId`

