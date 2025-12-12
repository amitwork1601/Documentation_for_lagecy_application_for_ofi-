# NotifyValidOrderToMiddlewareService.php

**Path**: `src\Service\NotifyValidOrderToMiddlewareService.php`

## Summary
This service publishes valid order notifications to a middleware system via Google Cloud Pub/Sub by sending the order's token value as a message. It includes business logic to filter orders based on their checkout completion date, only notifying orders that are less than 15 days old (unless forced), ensuring timely order processing and preventing stale orders from being sent to downstream systems.

## Classes
- `NotifyValidOrderToMiddlewareService`

## Function Details

### `notify`

- **Parameters**: `Order $order, bool $force = false`

### `shouldNotifyOrder`

- **Parameters**: `Order $order`

