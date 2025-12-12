# RemoveAddress.php

**Path**: `src\Validator\RemoveAddress.php`

## Summary
This is a Symfony validation constraint class that enforces business rules when removing/deleting a customer address. It defines two validation scenarios: preventing deletion of addresses that don't belong to a customer, and preventing deletion of addresses marked as default addresses. The constraint operates at the class level (CLASS_CONSTRAINT) to validate entire address objects during removal operations.

## Classes
- `RemoveAddress`

## Function Details

### `getTargets`


