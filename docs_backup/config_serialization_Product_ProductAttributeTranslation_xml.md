# ProductAttributeTranslation.xml

**Path**: `config\serialization\Product\ProductAttributeTranslation.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `ProductAttributeTranslation` entity in the Sylius e-commerce platform. It specifies which fields (`id`, `locale`, `name`) should be included in serialized output for different serialization groups (admin product attribute display and product association operations), while excluding the `translatable` field. This configuration enables proper API responses and data transformation when handling multilingual product attribute data in admin contexts.

