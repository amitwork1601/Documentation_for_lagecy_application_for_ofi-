# Order.xml

**Path**: `config\serialization\Order\Order.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the Order entity in what appears to be a Sylius e-commerce application. It specifies which Order attributes (id, isRecurringOrder, number, orderDate) should be exposed in different API contexts, such as admin subscription management, shop cart/checkout views, and webmethod integrations. The configuration enables fine-grained control over which order data is serialized for different user roles and API endpoints, with particular emphasis on supporting both regular and recurring/subscription orders.

