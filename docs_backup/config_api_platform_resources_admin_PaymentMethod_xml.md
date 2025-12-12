# PaymentMethod.xml

**Path**: `config\api_platform\resources\admin\PaymentMethod.xml`

## Summary
This API Platform resource configuration defines an admin endpoint for retrieving available payment methods for a specific payment within an order. The endpoint uses a nested URI structure (`/admin/orders/{tokenValue}/payments/{paymentId}/methods`) with two URI variables to traverse from order to payment to payment methods, and exposes a single GET collection operation that returns payment method data serialized with the `sylius:admin:payment_method:index` normalization group.

