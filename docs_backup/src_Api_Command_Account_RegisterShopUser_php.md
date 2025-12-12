# RegisterShopUser.php

**Path**: `src\Api\Command\Account\RegisterShopUser.php`

## Summary
This is a Data Transfer Object (DTO) command class for registering new shop users in a Sylius e-commerce system. It encapsulates all necessary user registration data including credentials, personal information (name, birthday, gender), contact details, newsletter preferences, and channel/locale context, and is used in conjunction with validation (specifically UniqueCustomerEmailForChannelValidator) to ensure unique email addresses per sales channel during the registration process.

## Classes
- `RegisterShopUser`

## Function Details

### `getEmail`

- **Description**: use in UniqueCustomerEmailForChannelValidator */

### `getChannelCode`


