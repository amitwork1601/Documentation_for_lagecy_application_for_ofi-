# OldSubscriptionConverter.php

**Path**: `src\Subscription\Command\SubscriptionMigrator\Converter\OldSubscriptionConverter.php`

## Summary
This class is a data converter within a subscription migration system that transforms raw array data (likely from a legacy database or API) into structured `OldSubscriptionDto` objects. It handles the conversion of subscription-related fields including customer information, billing/shipping addresses, payment details, shipping schedules, and state management, while properly converting date strings into DateTime objects and handling nullable fields. The converter serves as a mapping layer to facilitate the migration of legacy subscription data into the new subscription system structure.

## Classes
- `OldSubscriptionConverter`

## Function Details

### `createOldSubscriptionDtoFromArray`

- **Parameters**: `array $data`
- **Description**: @throws \Exception
/

### `createOldSubscriptionItemDtoFromArray`

- **Parameters**: `array $data`

