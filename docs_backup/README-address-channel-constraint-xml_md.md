# README-address-channel-constraint-xml.md

**Path**: `README-address-channel-constraint-xml.md`

## Summary
This documentation describes a refactoring migration that moves the `AddressChannelConstraint` validation from PHP annotations in the `AddressOrder` class to an XML validation configuration file. The purpose is to improve separation of concerns by externalizing validation rules for the shipping address field, which validates that addresses are compatible with the sales channel during the checkout process in what appears to be a Sylius e-commerce application. The constraint continues to apply to the `shippingAddress` property using the `sylius_cart_address_update` validation group, but is now defined in `config/validator/validation/AddressOrder.xml` instead of inline PHP attributes.

