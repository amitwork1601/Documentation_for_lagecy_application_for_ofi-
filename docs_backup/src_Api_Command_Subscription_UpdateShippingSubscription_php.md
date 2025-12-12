# UpdateShippingSubscription.php

**Path**: `src\Api\Command\Subscription\UpdateShippingSubscription.php`

## Summary
This class represents a command for updating shipping-related information specifically for a subscription in an e-commerce system. It extends the base `UpdateShipping` command and adds subscription-specific context by requiring a `subscriptionCode` parameter, allowing the system to identify and modify shipping details (billing/shipping addresses, shipping method, pickup point) for a particular subscription rather than a one-time order.

## Classes
- `UpdateShippingSubscription`

