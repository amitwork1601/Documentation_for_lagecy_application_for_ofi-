# OrderCompleted.php

**Path**: `src\Api\Event\OrderCompleted.php`

## Summary
This is an event class representing the completion of an order in an e-commerce or order management system. It serves as a domain event that carries the order number as payload data, enabling event-driven architecture where other parts of the application can react to order completions (such as sending notifications, updating inventory, or triggering fulfillment processes). The class follows immutable event design patterns, storing only the essential identifier needed to reference the completed order.

## Classes
- `OrderCompleted`

## Function Details

### `__construct`

- **Parameters**: `string $orderNumber`

### `getOrderNumber`


