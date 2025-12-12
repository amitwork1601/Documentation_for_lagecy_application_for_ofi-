# AddShipment.xml

**Path**: `config\serialization\Commands\Checkout\AddShipment.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AddShipment` command in the checkout/order management domain. It specifies that the `tokenValue` and `trackingCode` attributes should be included when serializing objects of this class under the `admin:order:add_shipment` group, enabling administrators to add shipment tracking information to orders through the API.

