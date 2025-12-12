# SubscriptionCreationEmailTransformer.php

**Path**: `src\DataTransformer\Messenger\SubscriptionCreationEmailTransformer.php`

## Summary
The `SubscriptionCreationEmailTransformer` class transforms subscription data into a structured array format suitable for sending subscription creation emails. It extracts customer, order, and product details from a Subscription entity, formatting monetary values and product information (including variant details, prices, and quantities) for use in email templates or messaging systems.

## Classes
- `SubscriptionCreationEmailTransformer`

## Function Details

### `transform`

- **Parameters**: `Subscription $subscription`

