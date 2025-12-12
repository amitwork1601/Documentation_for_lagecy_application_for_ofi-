# AddressCannotBeRemoved.php

**Path**: `src\Exception\AddressCannotBeRemoved.php`

## Summary
This exception class represents a business rule violation when attempting to delete a default address from the system. It extends Symfony's `UnprocessableEntityHttpException` (422 status code) to provide a specific error response indicating that default addresses cannot be removed. This enforces data integrity by preventing users from deleting addresses that are designated as defaults, likely requiring them to reassign the default status before deletion.

## Classes
- `AddressCannotBeRemoved`

## Function Details

### `__construct`


