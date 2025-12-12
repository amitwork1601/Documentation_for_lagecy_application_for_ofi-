# PaypalGateway.php

**Path**: `src\Gateway\PaypalGateway.php`

## Summary
The `PaypalGateway` class implements a PayPal payment gateway integration for a Sylius-based e-commerce application. It serves as both a gateway registry entry (identifying and configuring PayPal gateways via the `sylius.pay_pal` factory) and a payment gateway interface for processing PayPal transactions, including order creation, authorization, and payment status management. The class acts as an adapter between the application's payment system and PayPal's API, handling the orchestration of payment operations through various Sylius PayPal plugin APIs.

## Classes
- `PaypalGateway`

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `setGatewayConfig`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `getPaymentPublicConfig`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`

### `getOrderApi`


### `formatPaymentDetails`

- **Parameters**: `array $rawDetails, string $referenceId`

### `getOrigin`


