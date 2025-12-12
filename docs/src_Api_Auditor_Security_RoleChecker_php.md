# RoleChecker.php

**Path**: `src\Api\Auditor\Security\RoleChecker.php`

## Summary
This class implements a role-based security checker for the Auditor system that controls access to audit functionality. It acts as an adapter between the DH\Auditor library and Symfony's security system, enforcing that only users with the `ROLE_ADMINISTRATION_ACCESS` role can access audit data, regardless of the specific entity or scope being audited.

## Classes
- `RoleChecker`

## Function Details

### `__invoke`

- **Parameters**: `string $entity, string $scope`

