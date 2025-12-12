# CustomEffectManager.php

**Path**: `src\TalonOne\Domain\Manager\CustomEffectManager.php`

## Summary
The `CustomEffectManager` class manages and filters custom effects from the TalonOne promotion engine, specifically handling notification translations for coupon-related effects. It provides functionality to extract custom effects by identifier, retrieve effect payloads, and process notification translations with support for both error and success scenarios based on condition indices and coupon triggers.

## Classes
- `CustomEffectManager`

## Function Details

### `__construct`


### `getCustomEffect`

- **Parameters**: `string $effectIdentifier, array $effects`
- **Description**: Undocumented function.

@param string $effectIdentifier
@param array  $effects

@return CustomEffect[]
/

### `getCustomEffectPayload`

- **Parameters**: `CustomEffect $effect`

### `getNotificationTranslations`

- **Parameters**: `array $effects, bool $errors = false`

### `getNotificationTranslationsByLocale`

- **Parameters**: `array $effects, string $locale, bool $errors = false`

### `getAnalytics`

- **Parameters**: `array $effects`

