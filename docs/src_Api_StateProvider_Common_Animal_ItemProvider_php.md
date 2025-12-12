# ItemProvider.php

**Path**: `src\Api\StateProvider\Common\Animal\ItemProvider.php`

## Summary
This API Platform state provider handles authorization and retrieval of individual Animal entities based on user role and ownership. Shop users with ROLE_USER can only access their own non-deleted animals (filtered by customer relationship), while admin users with ROLE_API_ACCESS have unrestricted access to all animals by code.

## Classes
- `ItemProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

