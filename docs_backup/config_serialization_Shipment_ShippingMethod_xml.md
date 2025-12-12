# ShippingMethod.xml

**Path**: `config\serialization\Shipment\ShippingMethod.xml`

## Summary
This XML file configures serialization groups for the `ShippingMethod` entity in a Sylius-based e-commerce application. It defines which attributes (`id` and `translations`) should be included when serializing shipping method data for different contexts, such as admin panels (order management, subscription handling, shipping method CRUD), shop frontend (cart, checkout, pickup points), and external integrations (webmethod API). The serialization groups control data visibility and access across various parts of the application, ensuring that only relevant shipping method information is exposed in each specific use case.

