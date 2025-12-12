# RequestResetPasswordTokenHandler.php

**Path**: `src\CQRS\CommandHandler\Email\RequestResetPasswordTokenHandler.php`

## Summary
This handler processes password reset token requests by generating a secure token for users who have requested to reset their password. When invoked, it looks up the user by email, generates and stores a password reset token with a timestamp, then dispatches a command to send the reset email to the user. The handler intentionally fails silently for non-existent users as a security measure to prevent email enumeration attacks.

## Classes
- `RequestResetPasswordTokenHandler`

## Function Details

### `__invoke`

- **Parameters**: `RequestResetPasswordToken $command`

