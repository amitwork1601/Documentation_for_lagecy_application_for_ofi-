# UpdateInstrumentHandler.php

**Path**: `src\Api\CommandHandler\PaymentInstrument\UpdateInstrumentHandler.php`

## Summary
This command handler processes updates to payment instruments (payment methods like credit cards) in a subscription/payment system. It retrieves a draft payment instrument, verifies it through the appropriate payment gateway, and handles either successful verification (by updating associated subscriptions and transitioning orders to a "cart" state) or verification failures (by logging errors and managing redirect scenarios). The handler integrates with payment gateways, manages subscription payment method changes, and coordinates state transitions for subscription orders.

## Classes
- `UpdateInstrumentHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateInstrument $updateInstrument`

