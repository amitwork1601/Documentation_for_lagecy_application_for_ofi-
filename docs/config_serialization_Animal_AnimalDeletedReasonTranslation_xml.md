# AnimalDeletedReasonTranslation.xml

**Path**: `config\serialization\Animal\AnimalDeletedReasonTranslation.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `AnimalDeletedReasonTranslation` entity, which stores localized translations of reasons why animals were deleted from the system. It controls which fields (`id`, `name`, `locale`) are exposed during API operations, with separate permission groups for admin operations (read/create/update) and shop-facing read operations, enabling proper access control and data exposure for multilingual animal deletion reason management.

