# SubscriptionProductOfStockEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SubscriptionProductOfStockEmailHandler.php`

## Summary
This command handler processes out-of-stock email notifications for subscription orders. When invoked, it retrieves a subscription order, extracts customer information from the associated subscription, and sends a transactional email notification to the customer informing them that a product in their subscription order is out of stock.

## Classes
- `SubscriptionProductOfStockEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SubscriptionProductOfStockEmailNotification $message`

