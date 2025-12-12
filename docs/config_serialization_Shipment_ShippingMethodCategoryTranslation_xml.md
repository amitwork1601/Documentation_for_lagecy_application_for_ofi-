# ShippingMethodCategoryTranslation.xml

**Path**: `config\serialization\Shipment\ShippingMethodCategoryTranslation.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `ShippingMethodCategoryTranslation` entity, which handles localized names for shipping method categories. It specifies which attributes (`locale` and `name`) should be included when serializing this entity across various contexts, including admin operations (subscriptions, orders, shipping management) and shop-facing features (cart, checkout, pickup points). The configuration enables controlled exposure of translation data to different parts of the application based on security and functional requirements.

