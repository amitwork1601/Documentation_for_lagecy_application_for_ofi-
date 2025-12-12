# UnselectShippingMethod.xml

**Path**: `config\serialization\Commands\Checkout\UnselectShippingMethod.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `UnselectShippingMethod` command in a checkout/cart context. It specifies that the `orderTokenValue` and `shipmentId` attributes should be included when serializing this command object for the `admin:cart:select_shipping_method` group, enabling administrators to remove a previously selected shipping method from a cart/order by identifying it via order token and shipment ID.

