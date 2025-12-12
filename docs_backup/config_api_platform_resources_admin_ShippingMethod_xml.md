# ShippingMethod.xml

**Path**: `config\api_platform\resources\admin\ShippingMethod.xml`

## Summary
This API Platform configuration file defines an admin endpoint for retrieving available shipping methods for a specific shipment within an order. The resource is accessible via the URI pattern `/admin/orders/{tokenValue}/shipments/{shipmentId}/methods` and provides a GET collection operation that returns shipping method data serialized with the `sylius:admin:shipping_method:index` group, allowing administrators to view which shipping methods can be applied to a particular shipment.

