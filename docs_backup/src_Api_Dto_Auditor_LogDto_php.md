# LogDto.php

**Path**: `src\Api\Dto\Auditor\LogDto.php`

## Summary
This DTO (Data Transfer Object) defines an API resource for audit log entries in an administrative context, providing both REST and GraphQL endpoints for retrieving audit log collections. It supports filtering audit logs by multiple criteria including entity name, record type, creation date, user, and object ID, with pagination support through a custom `CollectionProvider`. The class serves as a read-only interface for querying system audit trails to track changes and user actions across the application.

## Classes
- `LogDto`

