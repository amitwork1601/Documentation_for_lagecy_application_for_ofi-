# PickupCart.xml

**Path**: `config\serialization\Commands\Cart\PickupCart.xml`

## Summary
This XML file configures Symfony serialization mapping for the `PickupCart` command class, defining which attributes should be included when serializing cart pickup operations. It specifies that `localeCode`, `channelCode`, and `customer` attributes should be serialized for both shop-facing and admin-facing order creation contexts, enabling proper data exposure control based on the serialization group being used.

