# SubscriberUpdater.php

**Path**: `src\TalonOne\Updater\SubscriberUpdater.php`

## Summary
This class updates a customer's business report to track their subscriber status and subscription history. It determines if a customer is currently an active subscriber (has non-stopped subscriptions) and records when they first became a subscriber by finding their earliest active subscription's creation date. The updater is part of a tagging system for customer business report updates, specifically handling subscription-related metrics.

## Classes
- `SubscriberUpdater`

## Function Details

### `update`

- **Parameters**: `CustomerBusinessReport $customerBusinessReport`
- **Description**: @throws \Exception
/

### `getSortedSubscriptions`

- **Parameters**: `Customer $customer`
- **Description**: Sort Collection by subscription creation date.
/

