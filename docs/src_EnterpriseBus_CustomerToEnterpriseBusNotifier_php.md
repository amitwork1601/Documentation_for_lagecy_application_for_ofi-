# CustomerToEnterpriseBusNotifier.php

**Path**: `src\EnterpriseBus\CustomerToEnterpriseBusNotifier.php`

## Summary
This class is a specialized enterprise bus notifier for publishing customer-related events to an external enterprise service bus. It extends `AbstractEnterpriseNotifier` and configures the serialization to use the 'webmethod:customer:read' group, ensuring only appropriate customer data fields are included when notifying external enterprise systems about customer changes or events.

## Classes
- `CustomerToEnterpriseBusNotifier`

## Function Details

### `getSerializationGroups`


