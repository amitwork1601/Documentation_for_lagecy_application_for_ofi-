# WebMethodAddressNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Address\WebMethodAddressNormalizer.php`

## Summary
The `WebMethodAddressNormalizer` class is a Symfony serializer normalizer that preprocesses address data for WebMethod API integrations by sanitizing special characters in address fields. It specifically normalizes typographic apostrophes to ASCII apostrophes and removes other special characters from fields like company name, street, city, and postcode before serialization, activated only when specific serialization groups ('webmethod:customer:read' or 'webmethod:order:read') are used. This ensures address data is properly formatted for external WebMethod system compatibility while preventing infinite recursion through context-aware normalization patterns.

## Classes
- `WebMethodAddressNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `specialCharNormalization`

- **Parameters**: `array $data`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

