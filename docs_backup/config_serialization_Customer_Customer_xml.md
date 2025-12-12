# Customer.xml

**Path**: `config\serialization\Customer\Customer.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the Customer entity, controlling which attributes (id, channel, channelCode) are exposed in different contexts. It manages data visibility across various API endpoints and user interfaces, separating concerns between admin operations (order management, customer administration, promotions), shop operations (customer self-service, cart, orders), and web method integrations (API access for orders, customers, subscriptions).

