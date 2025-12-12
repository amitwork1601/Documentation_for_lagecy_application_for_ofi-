# LogAvailableDto.php

**Path**: `src\Api\Dto\Auditor\LogAvailableDto.php`

## Summary
This Data Transfer Object (DTO) represents available audit log entities in the admin interface, exposing information about which entities can be audited in the system. It serves as an API resource (both REST and GraphQL) that provides a collection of entities with their namespace identifiers, class names, and whether auditing is enabled for each entity. The DTO is used by administrators to query and discover which entities in the application have audit logging capabilities available.

## Classes
- `LogAvailableDto`

