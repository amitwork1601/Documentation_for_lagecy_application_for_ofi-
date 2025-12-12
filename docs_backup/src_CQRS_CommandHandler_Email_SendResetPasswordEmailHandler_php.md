# SendResetPasswordEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SendResetPasswordEmailHandler.php`

## Summary
This command handler processes password reset email requests by retrieving a user and customer record by email address, then sending a transactional password reset email with the customer's personal information and reset token. It serves as part of the CQRS pattern implementation for handling the password recovery workflow in an e-commerce application built on Sylius framework.

## Classes
- `SendResetPasswordEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SendResetPasswordEmail $command`

