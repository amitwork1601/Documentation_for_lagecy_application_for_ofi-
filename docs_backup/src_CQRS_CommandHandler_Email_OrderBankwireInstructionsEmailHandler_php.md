# OrderBankwireInstructionsEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\OrderBankwireInstructionsEmailHandler.php`

## Summary
This command handler processes and sends bank wire transfer instruction emails to customers who have completed orders using bank wire payment method. It retrieves order and payment method details, validates the data, formats the order total using the money formatter, and delegates to the transactional email service to send the payment instructions to the customer.

## Classes
- `OrderBankwireInstructionsEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderBankwireInstructionsEmailNotification $message`
- **Description**: @throws TransactionalEmailException
/

### `getHandledMessages`


