# CollectionProvider.php

**Path**: `src\Api\StateProvider\Admin\FrequencyDto\CollectionProvider.php`

## Summary
This API Platform state provider generates a collection of `FrequencyDto` objects for admin subscription frequency monitoring. It retrieves subscription frequency groups, calculates adjusted capacity thresholds by applying a configurable cushion percentage to the maximum monitoring capacity, and transforms each frequency group into DTOs with actual capacity values based on daily caps and the provided monitoring date/capacity parameters.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

