# SubscriptionOrderCannotBeUpdatedException.php

**Path**: `src\Subscription\Exception\SubscriptionOrderCannotBeUpdatedException.php`

## Summary
This exception class represents a business rule violation when attempting to update a subscription order that is in a state that prevents modification. It extends Symfony's `UnprocessableEntityHttpException` (HTTP 422 status code) to signal that the client's request to update a subscription order is semantically invalid due to business constraints, such as the order being already processed, cancelled, or in a non-editable state.

## Classes
- `SubscriptionOrderCannotBeUpdatedException`

