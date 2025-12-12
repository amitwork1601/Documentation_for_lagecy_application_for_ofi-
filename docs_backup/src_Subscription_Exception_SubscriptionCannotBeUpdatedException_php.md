# SubscriptionCannotBeUpdatedException.php

**Path**: `src\Subscription\Exception\SubscriptionCannotBeUpdatedException.php`

## Summary
This is a custom exception class for the subscription domain that signals when a subscription update operation cannot be completed. It extends Symfony's `UnprocessableEntityHttpException`, which automatically returns a 422 HTTP status code when thrown, indicating that the request was well-formed but semantically invalid due to business rules preventing the subscription modification.

## Classes
- `SubscriptionCannotBeUpdatedException`

