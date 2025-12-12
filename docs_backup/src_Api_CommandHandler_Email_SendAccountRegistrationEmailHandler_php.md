# SendAccountRegistrationEmailHandler.php

**Path**: `src\Api\CommandHandler\Email\SendAccountRegistrationEmailHandler.php`

## Summary
This handler processes account registration email commands by retrieving the customer and channel information, then sending a transactional "account_creation" email to the newly registered user. It serves as a message handler in a CQRS architecture, coordinating between customer/channel repositories and the email service to deliver personalized registration confirmation emails with the customer's name and email details.

## Classes
- `SendAccountRegistrationEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SendAccountRegistrationEmail $command`

