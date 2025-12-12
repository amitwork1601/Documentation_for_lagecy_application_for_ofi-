# AddressOrder.xml

**Path**: `config\validator\validation\Checkout\AddressOrder.xml`

## Summary
This XML file defines Symfony validation constraints for the `AddressOrder` command in the checkout process. It specifies that both `billingAddress` and `shippingAddress` properties must be valid, with the shipping address additionally requiring validation against a custom `AddressChannelConstraint` (applied during the cart address update phase). The configuration ensures that addresses submitted during checkout meet both standard validation requirements and business-specific channel compatibility rules.

