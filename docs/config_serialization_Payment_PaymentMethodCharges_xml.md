# PaymentMethodCharges.xml

**Path**: `config\serialization\Payment\PaymentMethodCharges.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `PaymentMethodCharges` entity in a Sylius e-commerce application. It specifies which entity attributes (id, paymentMethod, rangeMin, rangeMax, configuration) should be included when serializing payment method charge data for different contexts, such as admin/shop interfaces and CRUD operations (index, show, create, update). The configuration enables fine-grained control over what payment charge range data is exposed in API responses or rendered views based on the user's role and the specific operation being performed.

