# CartShippingMethod.xml

**Path**: `config\serialization\View\CartShippingMethod.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization rules for the `CartShippingMethod` API view class. It specifies that the `shippingMethod` and `price` attributes should be included when serializing cart shipping method data for both admin shipping method details (`sylius:admin:shipping_method:show`) and shop shipping method listings (`sylius:shop:shipping_method:index`), enabling controlled exposure of shipping method information across different API contexts in a Sylius e-commerce application.

