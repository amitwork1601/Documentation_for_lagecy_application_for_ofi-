# UpdateShippingSubscriptionOrder.php

**Path**: `src\Api\Command\SubscriptionOrder\UpdateShippingSubscriptionOrder.php`

## Summary
This class is a specialized command for updating shipping details on subscription-based orders in an e-commerce system. It extends the base `UpdateShipping` command and adds order token awareness through the `OrderTokenValueAware` attribute, enabling shipping address, billing address, shipping method, and pickup point updates specifically for subscription orders while maintaining the ability to spread changes across recurring subscription orders via the `spreadOnSubscriptionOrder` flag.

## Classes
- `UpdateShippingSubscriptionOrder`

