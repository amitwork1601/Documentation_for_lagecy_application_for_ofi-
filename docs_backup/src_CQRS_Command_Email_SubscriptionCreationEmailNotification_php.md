# SubscriptionCreationEmailNotification.php

**Path**: `src\CQRS\Command\Email\SubscriptionCreationEmailNotification.php`

## Summary
This is a CQRS command class that represents an intent to send an email notification when a new subscription is created. It serves as a simple data transfer object (DTO) that carries the subscription ID to the email notification handler, which will use this information to trigger the actual email sending process for notifying users about their newly created subscription.

## Classes
- `SubscriptionCreationEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `public int $subscriptionId`

