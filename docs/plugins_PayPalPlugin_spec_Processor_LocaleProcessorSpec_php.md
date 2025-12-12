# LocaleProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\LocaleProcessorSpec.php`

## Summary
This is a PHPSpec test specification for a `LocaleProcessor` class in the Sylius PayPal plugin that validates locale code processing functionality. The processor ensures locale codes are converted to their full regional format (e.g., 'et' → 'et_EE', 'en' → 'en_US') for PayPal API compatibility, while preserving already-valid locale strings with region, script, or variant identifiers. This is necessary because PayPal requires properly formatted locale codes for internationalization.

## Classes
- `LocaleProcessorSpec`

## Function Details

### `it_always_processes_locale_to_version_with_region`


### `it_returns_same_locale_if_it_is_valid`


### `it_returns_correct_locale_for_en_locale`


