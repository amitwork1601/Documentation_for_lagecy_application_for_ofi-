# PromotionToEnterpriseBusNotifier.php

**Path**: `src\EnterpriseBus\PromotionToEnterpriseBusNotifier.php`

## Summary
This class serves as a specialized notifier for sending promotion-related data to an enterprise service bus. It extends `AbstractEnterpriseNotifier` and configures serialization to only include fields marked with the 'webmethod:promotion:read' group, ensuring that only appropriate promotion data is exposed when publishing messages to the enterprise bus integration layer.

## Classes
- `PromotionToEnterpriseBusNotifier`

## Function Details

### `getSerializationGroups`


