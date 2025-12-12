# ValidRolesValidator.php

**Path**: `src\Validator\ValidRolesValidator.php`

## Summary
This validator ensures that user roles follow a specific naming convention by validating that each role string matches the pattern `ROLE_ADMIN_[A-Z_]+`. It's a custom Symfony constraint validator that enforces administrative role naming standards, rejecting any roles that don't start with "ROLE_ADMIN_" followed by uppercase letters and underscores, which helps maintain consistent role-based access control (RBAC) patterns in the application.

## Classes
- `ValidRolesValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

