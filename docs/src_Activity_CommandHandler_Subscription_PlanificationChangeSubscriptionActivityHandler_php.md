# PlanificationChangeSubscriptionActivityHandler.php

**Path**: `src\Activity\CommandHandler\Subscription\PlanificationChangeSubscriptionActivityHandler.php`

## Summary
This handler processes subscription planification (scheduling) changes by logging activity when a subscription's interval or next shipping date is modified. It compares the old and new values for subscription interval and shipping date, and if changes are detected, creates an activity log entry with the relevant details for audit/tracking purposes. The handler is part of a command-based architecture using Symfony Messenger to track subscription modification events.

## Classes
- `PlanificationChangeSubscriptionActivityHandler`

## Function Details

### `__invoke`

- **Parameters**: `PlanificationChangeSubscriptionActivity $command`

