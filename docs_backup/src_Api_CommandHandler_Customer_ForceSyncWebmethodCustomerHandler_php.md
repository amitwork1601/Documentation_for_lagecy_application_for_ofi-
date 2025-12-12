# ForceSyncWebmethodCustomerHandler.php

**Path**: `src\Api\CommandHandler\Customer\ForceSyncWebmethodCustomerHandler.php`

## Summary
This command handler forces a synchronization of customer data to an external enterprise bus system, likely WebMethod or a similar integration platform. When invoked, it retrieves a customer by ID from the repository, validates its existence, and triggers a notification to the enterprise bus with the customer's data, enabling manual or on-demand synchronization of customer information across systems.

## Classes
- `ForceSyncWebmethodCustomerHandler`

## Function Details

### `__invoke`

- **Parameters**: `ForceSyncWebmethodCustomer $message`

