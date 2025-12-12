# OrderPaymentEmailNotification.php

**Path**: `src\CQRS\Command\Email\OrderPaymentEmailNotification.php`

## Summary
This is a CQRS command class that represents a request to send a payment-related email notification for an order in a Sylius e-commerce system. It holds the order's token value identifier and is decorated with `OrderTokenValueAware` attribute to enable automatic token value injection/validation, facilitating secure order identification when triggering payment confirmation or status emails.

## Classes
- `OrderPaymentEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `public ?string $orderTokenValue`

