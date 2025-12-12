# AnimalsExtension.php

**Path**: `src\Doctrine\Extension\AnimalsExtension.php`

## Summary
This Doctrine ORM extension filters Animal entity collections based on user permissions and deletion status. It ensures that shop users can only access animals associated with their customer account (enforcing data isolation), while admin users have broader access, and it automatically excludes soft-deleted animals (those with a deletedReason) from all queries. The extension integrates with API Platform's query system to apply these security and business logic constraints transparently across all Animal collection endpoints.

## Classes
- `AnimalsExtension`

## Function Details

### `__construct`

- **Parameters**: `private UserContextInterface $userContext`

