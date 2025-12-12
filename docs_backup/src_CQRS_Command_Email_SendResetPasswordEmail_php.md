# SendResetPasswordEmail.php

**Path**: `src\CQRS\Command\Email\SendResetPasswordEmail.php`

## Summary
This is a CQRS command class that encapsulates the data required to send a password reset email to a user. It carries the recipient's email address, channel and locale context for multi-tenant/internationalized environments, and the reset password token that will be included in the email, serving as a data transfer object between the command dispatcher and its handler.

## Classes
- `SendResetPasswordEmail`

## Function Details

### `channelCode`


### `localeCode`


### `resetPasswordToken`


