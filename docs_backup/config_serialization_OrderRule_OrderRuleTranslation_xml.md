# OrderRuleTranslation.xml

**Path**: `config\serialization\OrderRule\OrderRuleTranslation.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `OrderRuleTranslation` entity, which handles localized translations of order rule error messages. It specifies which entity attributes (`id`, `errorMessage`, `locale`) should be included when serializing the entity for different admin API operations (create, read, update), enabling controlled data exposure based on the operation context.

