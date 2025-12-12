# EmailAuditGenericFilter.php

**Path**: `src\Api\Filters\EmailAuditGenericFilter.php`

## Summary
This is a custom API Platform filter for the EmailAudit entity that implements a generic search functionality across email audit records. It filters EmailAudit entries by performing a case-insensitive partial match (LIKE query) on the `customerEmail` field when the `genericFilter` query parameter is provided, enabling users to search for email audits by customer email addresses.

## Classes
- `EmailAuditGenericFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`

