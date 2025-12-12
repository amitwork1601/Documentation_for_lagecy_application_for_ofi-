# PayzenGatewayFactory.php

**Path**: `plugins\PayzenPlugin\src\PayzenGatewayFactory.php`

## Summary
This is a Payum gateway factory for integrating the Payzen payment service provider into a Sylius e-commerce application. It extends Payum's `GatewayFactory` to configure and instantiate payment gateway actions (capture, refund, status, notify, etc.) and API configuration options specific to Payzen, including site credentials, operational mode, and payment splitting parameters for installment payments.

## Classes
- `PayzenGatewayFactory`

## Function Details

### `build`

- **Parameters**: `array $defaultConfig, ?GatewayFactoryInterface $coreGatewayFactory = null`

### `populateConfig`

- **Parameters**: `ArrayObject $config`

