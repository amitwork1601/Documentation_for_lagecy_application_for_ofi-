# AnimalConditionTranslation.xml

**Path**: `config\serialization\Animal\AnimalConditionTranslation.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalConditionTranslation` entity, which handles translations of animal condition labels in different locales. It specifies which fields (`id`, `name`, `locale`) should be included when serializing this entity for admin operations, with `id` being read-only while `name` and `locale` are accessible for read, create, and update operations.

