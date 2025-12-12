# ChangePaymentSubscriptionActivityHandler.php

**Path**: `src\Activity\CommandHandler\Subscription\ChangePaymentSubscriptionActivityHandler.php`

## Summary
This handler processes commands to log subscription payment method changes as activity records. When a subscription's payment instrument is changed, it captures the old and new payment method codes and details, then creates and registers an activity log entry of type `SUBSCRIPTION_CHANGE_PAYMENT` for audit trail purposes.

## Classes
- `ChangePaymentSubscriptionActivityHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChangePaymentSubscriptionActivity $command`

