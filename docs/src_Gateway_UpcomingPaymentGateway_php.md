# UpcomingPaymentGateway.php

**Path**: `src\Gateway\UpcomingPaymentGateway.php`

## Summary
This class implements a stub/placeholder payment gateway for handling "upcoming" or future payments in a payment processing system. It provides minimal implementations of gateway registry and payment instrument interfaces, essentially acting as a no-op gateway that accepts the "upcoming_payment" configuration but performs no actual payment processing operations. This likely serves as a special case gateway for deferred or scheduled payments that don't require immediate processing through a real payment provider.

## Classes
- `UpcomingPaymentGateway`

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `setGatewayConfig`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `formatDataDetailsForPaymentInstrument`

- **Parameters**: `array $data`

### `getPaymentPublicConfig`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`

