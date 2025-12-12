# NormalizerContextAwareTrait.php

**Path**: `src\Api\Serializer\Normalizer\NormalizerContextAwareTrait.php`

## Summary
This trait provides utility methods for custom serialization normalizers to inspect the normalization context. It enables normalizers to check if specific serialization groups are active in the current context and to detect if the output format is GraphQL, allowing for context-aware and format-specific normalization behavior in API responses.

## Function Details

### `isInNormalizationGroups`

- **Parameters**: `$context, $groups`

### `isGraphQl`

- **Parameters**: `$format`

