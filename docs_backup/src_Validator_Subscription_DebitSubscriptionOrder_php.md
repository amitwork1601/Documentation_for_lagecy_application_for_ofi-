# DebitSubscriptionOrder.php

**Path**: `src\Validator\Subscription\DebitSubscriptionOrder.php`

## Summary
This is a Symfony validation constraint class for validating debit subscription orders in an e-commerce or subscription management system. It defines two validation error messages: one for missing shipment information and another for when a subscription order cannot be found. The constraint operates at the class level (CLASS_CONSTRAINT), meaning it validates entire objects rather than individual properties, likely ensuring that subscription orders have both valid order records and associated shipment data before processing debits.

## Classes
- `DebitSubscriptionOrder`

## Function Details

### `getTargets`


