# AnimalDeletedReasonTranslation.php

**Path**: `src\Entity\Animal\AnimalDeletedReasonTranslation.php`

## Summary
This entity class provides translation support for animal deletion reasons in a multi-language application. It stores localized names for different reasons why animals are removed from the system, using Sylius' translation framework to map translated content to parent `AnimalDeletedReason` entities via translatable_id and locale. The class exposes GraphQL query operations through API Platform while disabling REST operations, allowing applications to retrieve deletion reason labels in the user's preferred language.

## Classes
- `AnimalDeletedReasonTranslation`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `?string $name`

