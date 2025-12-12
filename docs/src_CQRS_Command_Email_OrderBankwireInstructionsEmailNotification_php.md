# OrderBankwireInstructionsEmailNotification.php

**Path**: `src\CQRS\Command\Email\OrderBankwireInstructionsEmailNotification.php`

## Summary
This class represents a CQRS command for sending bank wire payment instruction emails to customers after they place an order. It extends an abstract order number class and defines a specific payment method constant ('Virement-bancaire', French for 'bank transfer'), indicating this notification is specifically triggered when customers choose bank wire as their payment method during checkout.

## Classes
- `OrderBankwireInstructionsEmailNotification`

