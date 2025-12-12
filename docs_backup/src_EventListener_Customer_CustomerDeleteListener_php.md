# CustomerDeleteListener.php

**Path**: `src\EventListener\Customer\CustomerDeleteListener.php`

## Summary
This event listener handles pre-deletion cleanup for Customer entities in an e-commerce system. When a customer is about to be removed from the database, it automatically deletes all shopping carts associated with that customer to maintain referential integrity and prevent orphaned cart records. This is a typical cascading deletion pattern used to ensure clean data removal when customers are deleted from the system.

## Classes
- `CustomerDeleteListener`

## Function Details

### `preRemove`

- **Parameters**: `Customer $customer`

