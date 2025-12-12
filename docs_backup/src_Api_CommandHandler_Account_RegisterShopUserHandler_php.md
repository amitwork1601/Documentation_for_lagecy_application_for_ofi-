# RegisterShopUserHandler.php

**Path**: `src\Api\CommandHandler\Account\RegisterShopUserHandler.php`

## Summary
This command handler processes shop user registration requests in a Sylius-based e-commerce application. It creates new shop user accounts by instantiating ShopUser entities, resolving customer information, associating them with channels and locale settings, persisting the data via Doctrine EntityManager, and dispatching a follow-up email registration command. The handler serves as the business logic layer for customer account creation in the shop frontend, coordinating between user factories, customer resolution, and the messaging system to complete the registration workflow.

## Classes
- `RegisterShopUserHandler`

## Function Details

### `__invoke`

- **Parameters**: `RegisterShopUser $registerShopUser`

### `setCustomerGender`

- **Parameters**: `CustomerInterface $customer, RegisterShopUser $command`

