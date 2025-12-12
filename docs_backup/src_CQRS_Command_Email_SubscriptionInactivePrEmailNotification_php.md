# SubscriptionInactivePrEmailNotification.php

**Path**: `src\CQRS\Command\Email\SubscriptionInactivePrEmailNotification.php`

## Summary
This class represents a command object for triggering an email notification when a subscription becomes inactive. It encapsulates the subscription order ID as the minimal data required to identify which subscription needs the inactive notification email sent, following the CQRS (Command Query Responsibility Segregation) pattern for handling this specific business event.

## Classes
- `SubscriptionInactivePrEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `public int $subscriptionOrderId`

