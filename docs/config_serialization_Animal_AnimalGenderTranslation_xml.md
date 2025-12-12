# AnimalGenderTranslation.xml

**Path**: `config\serialization\Animal\AnimalGenderTranslation.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalGenderTranslation` entity, which handles translations of animal gender names across different locales. It specifies which attributes (`id`, `name`, `locale`) are exposed during read, create, and update operations in the admin interface, enabling API responses to be filtered based on the operation context (e.g., the `id` field is only included in read operations, while `name` and `locale` are available for create and update as well).

