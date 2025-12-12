# UniqueCustomerEmailForChannel.php

**Path**: `src\Validator\UniqueCustomerEmailForChannel.php`

## Summary
This is a Symfony validation constraint class that ensures customer email addresses are unique within a specific sales channel in a Sylius e-commerce application. It defines a class-level constraint (applied to entire objects rather than individual properties) that will trigger a validation error with the message key 'sylius.user.email.unique_for_channel' when a duplicate email is found within the same channel, allowing the same email to exist across different channels.

## Classes
- `UniqueCustomerEmailForChannel`

## Function Details

### `getTargets`


