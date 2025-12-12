# ChooseShippingMethod.xml

**Path**: `config\serialization\Commands\Checkout\ChooseShippingMethod.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `ChooseShippingMethod` command in a checkout process. It specifies that both the `shippingMethod` and `pickupPoint` attributes should be serialized/deserialized when handling shipping method selection requests from either the shop or admin contexts. This configuration enables API endpoints to properly handle the data transfer when customers or administrators select a shipping method and optional pickup point during cart checkout.

