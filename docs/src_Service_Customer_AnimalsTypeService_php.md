# AnimalsTypeService.php

**Path**: `src\Service\Customer\AnimalsTypeService.php`

## Summary
This service analyzes a customer's animals to determine which types of pets they own. It iterates through a customer's animals collection, checking for dogs (type ID 1) and cats (type ID 2), then returns an array indicating whether the customer has dogs, cats, or both, likely used for business logic such as targeted product recommendations or pet-specific content filtering.

## Classes
- `AnimalsTypeService`

## Function Details

### `getCustomerAnimalsTypes`

- **Parameters**: `CustomerInterface $customer`

