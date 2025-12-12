# CollectionProvider.php

**Path**: `src\Api\StateProvider\Admin\Auditor\LogAvailableDto\CollectionProvider.php`

## Summary
This API Platform state provider retrieves and paginates a collection of auditable entities configured in the DH Auditor system. It transforms the auditor configuration into `LogAvailableDto` objects that expose which entities have audit logging enabled, providing admin users visibility into what database entities are being tracked for changes. The provider extracts entity class names and namespaces from the auditor configuration and returns them as a paginated collection for API consumption.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

### `getLogsAvailable`


