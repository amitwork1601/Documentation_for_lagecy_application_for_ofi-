# PaymentPublicConfiguration.xml

**Path**: `config\serialization\View\PaymentPublicConfiguration.xml`

## Summary
This Symfony serializer configuration file defines how the `PaymentPublicConfig` view class should be serialized when exposing payment method data during the cart checkout process. It specifies that both the `payment` and `config` attributes should be included in serialization for two context groups: `admin:cart:select_payment_method` and `shop:cart:select_payment_method`, allowing payment configuration to be exposed differently for admin and shop frontend interfaces during payment method selection.

