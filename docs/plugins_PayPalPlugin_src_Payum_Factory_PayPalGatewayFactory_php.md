# PayPalGatewayFactory.php

**Path**: `plugins\PayPalPlugin\src\Payum\Factory\PayPalGatewayFactory.php`

## Summary
This class is a Payum gateway factory for PayPal payment integration within the Sylius e-commerce framework. It extends the core Payum `GatewayFactory` and configures default settings for the PayPal payment gateway, including the factory name/title and registering a `StatusAction` to handle payment status operations. The factory serves as the entry point for creating PayPal payment gateway instances with standardized configuration.

## Classes
- `PayPalGatewayFactory`

## Function Details

### `populateConfig`

- **Parameters**: `ArrayObject $config`

