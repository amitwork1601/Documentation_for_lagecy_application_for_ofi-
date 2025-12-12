# LocaleProcessor.php

**Path**: `plugins\PayPalPlugin\src\Processor\LocaleProcessor.php`

## Summary
The `LocaleProcessor` class normalizes locale codes to ensure they are in the proper format required by PayPal (e.g., `en_US` format with language and region). It validates if a locale already contains an underscore, handles the special case of converting `en` to `en_US`, and attempts to find a matching region-specific locale variant from available system locales when given only a language code.

## Classes
- `LocaleProcessor`

## Function Details

### `process`

- **Parameters**: `string $locale`

### `isValidLocale`

- **Parameters**: `string $locale`

