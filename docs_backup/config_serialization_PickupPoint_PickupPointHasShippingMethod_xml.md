# PickupPointHasShippingMethod.xml

**Path**: `config\serialization\PickupPoint\PickupPointHasShippingMethod.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `PickupPointHasShippingMethod` entity, which represents the relationship between pickup points and shipping methods. It specifies which attributes (`id`, `shippingMethod`, `externalReference`) should be included when serializing this entity for different contexts, such as admin subscription management, order management, and shop-facing pickup point searches. The configuration enables fine-grained control over what data is exposed in different API endpoints and views across both admin and customer-facing interfaces.

