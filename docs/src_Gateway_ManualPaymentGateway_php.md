# ManualPaymentGateway.php

**Path**: `src\Gateway\ManualPaymentGateway.php`

## Summary
This class implements a pass-through gateway for manual payment processing in a Sylius-based e-commerce system. It provides stub implementations of payment gateway interfaces (GatewayRegistryInterface and InstrumentGatewayInterface) that effectively perform no operations, allowing manual/offline payments to be handled without actual payment processor integration. The gateway supports the 'manual_payment' factory type and simply returns payment instruments and data unchanged, which is appropriate for payment methods like cash, check, or bank transfer that are processed outside the system.

## Classes
- `ManualPaymentGateway`

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `setGatewayConfig`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `formatDataDetailsForPaymentInstrument`

- **Parameters**: `array $data`

### `getPaymentPublicConfig`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`

