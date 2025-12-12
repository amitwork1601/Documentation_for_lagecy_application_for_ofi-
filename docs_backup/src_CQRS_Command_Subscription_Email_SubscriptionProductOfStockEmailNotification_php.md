# SubscriptionProductOfStockEmailNotification.php

**Path**: `src\CQRS\Command\Subscription\Email\SubscriptionProductOfStockEmailNotification.php`

## Summary
This class is a CQRS command object that represents a request to send an email notification when a subscribed product is out of stock. It acts as a data transfer object (DTO) carrying the subscription order ID to identify which subscription should receive the out-of-stock notification email.

## Classes
- `SubscriptionProductOfStockEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `public int $subscriptionOrderId`

