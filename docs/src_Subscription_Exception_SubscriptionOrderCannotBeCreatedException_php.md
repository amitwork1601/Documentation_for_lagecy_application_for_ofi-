# SubscriptionOrderCannotBeCreatedException.php

**Path**: `src\Subscription\Exception\SubscriptionOrderCannotBeCreatedException.php`

## Summary
This exception class represents a business logic error that occurs when a subscription order cannot be created in the e-commerce/subscription management system. It extends Symfony's `UnprocessableEntityHttpException` to automatically return a 422 HTTP status code when this specific subscription order creation failure occurs. This allows the application to explicitly handle and communicate subscription order creation failures as distinct from other types of errors.

## Classes
- `SubscriptionOrderCannotBeCreatedException`

