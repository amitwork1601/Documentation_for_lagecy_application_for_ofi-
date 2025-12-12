# ForceSyncWebmethodCustomer.php

**Path**: `src\Api\Command\Customer\ForceSyncWebmethodCustomer.php`

## Summary
This is a command class that triggers a forced synchronization of customer data with a Webmethod system. It serves as a data transfer object (DTO) in a CQRS pattern, carrying only the customer ID and marked with the `CustomerIdAware` attribute to enable customer-specific operations or validation in the API layer.

## Classes
- `ForceSyncWebmethodCustomer`

## Function Details

### `__construct`

- **Parameters**: `public string $customerId`

