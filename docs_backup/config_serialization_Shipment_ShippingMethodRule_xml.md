# ShippingMethodRule.xml

**Path**: `config\serialization\Shipment\ShippingMethodRule.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `ShippingMethodRule` model in the Sylius e-commerce platform. It controls which attributes (id, type, configuration, shippingMethod) are exposed during different admin operations (index, show, create, update) on shipping method rules, enabling conditional field visibility based on the API context. This configuration supports the shipping rules engine that determines when specific shipping methods should be available based on configurable conditions like order total, weight, or destination.

