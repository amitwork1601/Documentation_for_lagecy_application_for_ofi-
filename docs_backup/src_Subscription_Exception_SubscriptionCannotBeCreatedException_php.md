# SubscriptionCannotBeCreatedException.php

**Path**: `src\Subscription\Exception\SubscriptionCannotBeCreatedException.php`

## Summary
This exception class represents a business logic error that occurs when a subscription cannot be created in the system. It extends Symfony's `UnprocessableEntityHttpException`, indicating it will return a 422 HTTP status code when thrown, signaling to API clients that the subscription creation request was semantically invalid or couldn't be processed due to business rule violations.

## Classes
- `SubscriptionCannotBeCreatedException`

