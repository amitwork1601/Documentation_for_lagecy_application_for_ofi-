# SubscriptionProductUnavailableEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SubscriptionProductUnavailableEmailHandler.php`

## Summary
This handler processes email notifications for subscription orders that contain unavailable products. It retrieves a subscription order by ID, validates the associated subscription and customer exist, then prepares product details (including variant info, prices, and quantities) for sending a transactional email to notify customers about products that cannot be fulfilled in their subscription order.

## Classes
- `SubscriptionProductUnavailableEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SubscriptionInactivePrEmailNotification $message`

