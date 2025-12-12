# SubscriptionToEnterpriseBusNotifier.php

**Path**: `src\EnterpriseBus\SubscriptionToEnterpriseBusNotifier.php`

## Summary
The `SubscriptionToEnterpriseBusNotifier` class is responsible for notifying an enterprise bus system about subscription-related events. It extends `AbstractEnterpriseNotifier` and configures serialization to use the 'webmethod:subscription:read' serialization group, ensuring that only subscription-specific data fields are included when sending subscription information to the enterprise bus.

## Classes
- `SubscriptionToEnterpriseBusNotifier`

## Function Details

### `getSerializationGroups`


