# SubscriptionShipmentInvalidEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Subscription\SubscriptionShipmentInvalidEmailHandler.php`

## Summary
This handler processes notifications for subscription shipments with invalid email addresses. It retrieves the associated subscription order, extracts customer information, and sends a transactional email notification (template: 'subscription_transport_error') to inform the customer about the transport/shipping error with their subscription.

## Classes
- `SubscriptionShipmentInvalidEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SubscriptionShipmentInvalidEmailNotification $message`

