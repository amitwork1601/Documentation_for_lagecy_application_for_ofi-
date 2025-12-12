# Order.xml

**Path**: `config\serialization\Order.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `Order` entity, controlling which attributes are exposed in different API contexts. It specifies visibility rules for order attributes (id, isRecurringOrder, number, orderDate) across various access levels including admin operations (subscriptions, orders, carts), shop/customer-facing views, and webmethod integrations. The configuration enables fine-grained control over data exposure based on user roles and API endpoints for order management in what appears to be an e-commerce system with subscription functionality.

