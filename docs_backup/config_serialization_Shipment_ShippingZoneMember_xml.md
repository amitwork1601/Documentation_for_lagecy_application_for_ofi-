# ShippingZoneMember.xml

**Path**: `config\serialization\Shipment\ShippingZoneMember.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization rules for the `ShippingZoneMember` entity. It specifies that the `postcodeMin` and `postcodeMax` attributes should be included when serializing/deserializing shipping zone member data for admin write operations, enabling postcode-based shipping zone definitions (e.g., defining which postal code ranges belong to a particular shipping zone).

