# SubscriptionOrderCannotBeDebitedException.php

**Path**: `src\Subscription\Exception\SubscriptionOrderCannotBeDebitedException.php`

## Summary
This exception class represents a business rule violation when a subscription order cannot be debited (i.e., payment cannot be processed or withdrawn from the customer's account). It extends Symfony's `UnprocessableEntityHttpException` to return a 422 HTTP status code, indicating that the server understands the request but cannot process the debit operation due to business logic constraints such as insufficient funds, invalid payment method, or subscription state issues.

## Classes
- `SubscriptionOrderCannotBeDebitedException`

