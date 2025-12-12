# SubscriptionTerminationEmailNotification.php

**Path**: `src\CQRS\Command\Email\SubscriptionTerminationEmailNotification.php`

## Summary
This is a CQRS command class that represents an intent to send an email notification about a subscription termination. It serves as a data transfer object (DTO) carrying the subscription ID that needs to be notified about its termination, which will be processed by a corresponding command handler to trigger the actual email sending logic.

## Classes
- `SubscriptionTerminationEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `public int $subscriptionId`

