# SubscriptionShipmentInvalidEmailNotification.php

**Path**: `src\CQRS\Command\Subscription\SubscriptionShipmentInvalidEmailNotification.php`

## Summary
This is a CQRS command class that triggers a notification when a subscription shipment has an invalid email address. It serves as a data transfer object (DTO) carrying the subscription order ID to initiate the process of notifying relevant parties about the email validation issue in the subscription shipment workflow.

## Classes
- `SubscriptionShipmentInvalidEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `public int $subscriptionOrderId`

