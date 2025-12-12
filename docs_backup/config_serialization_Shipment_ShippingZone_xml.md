# ShippingZone.xml

**Path**: `config\serialization\Shipment\ShippingZone.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `ShippingZone` entity in a shipping management system. It specifies that four attributes (code, name, zone, and members) should be included when serializing shipping zone data for admin write operations, controlling which fields are exposed through the API in the `admin:shipping_zone:write` serialization group.

